import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import Image from "next/image";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const isEventCreator = event.organizer._id.toString() === userId;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg md:min-h-[480px]">
      <Link
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        href={`/events/${event._id}`}
      ></Link>
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <Link
        href={`/events/${event._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14  rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event.isFree ? "Free" : "$ " + event.price}
            </span>
            <p className="p-semibold-14 rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category.name}
            </p>
          </div>
        )}
        <p className="p-medium-16 p-medium-18">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1">
          {event.title}
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link
              className="flex gap-2"
              href={`/orders?eventId=${event._id}`}
            >
              <p className="p-semibold-14 text-primary-500">Order Details</p>
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
