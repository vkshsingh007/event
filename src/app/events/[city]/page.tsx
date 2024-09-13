import EventList from "@/components/events-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import React from "react";
type EventPageProps = {
  params: {
    city: string;
  };
};
const EventPage = async ({ params }: EventPageProps) => {
  const city = params.city;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + city
  );
  const events: EventoEvent[] = await response.json();
  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Event in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventList events={events} />
    </main>
  );
};

export default EventPage;
