import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import { EventoEvent } from "@/lib/types";
type EventListProps = {
  city: string;
};
const EventList = async ({ city }: EventListProps) => {
  const events = await getEvents(city);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventList;
