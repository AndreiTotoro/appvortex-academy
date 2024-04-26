import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const eventDetails = await getEventById(id);

  console.log(eventDetails);

  return <div>EventDetails</div>;
};

export default EventDetails;
