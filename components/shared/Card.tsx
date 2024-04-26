import { IEvent } from "@/lib/database/models/event.model";
import Link from "next/link";
import React from "react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg md:min-h-[480px]">
      <Link
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        href={`/events/${event._id}`}
      ></Link>
    </div>
  );
};

export default Card;
