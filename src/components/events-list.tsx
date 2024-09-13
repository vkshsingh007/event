import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";
type EventListProps = {
  events: EventoEvent[];
};
const EventList = ({ events }: EventListProps) => {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventList;
