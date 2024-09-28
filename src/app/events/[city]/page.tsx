import EventList from "@/components/events-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props):Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Event in ${capitalize(city)}`,
  };
}
const EventPage = async ({ params }: Props) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <div className="mb-28">
        <H1>
          {city === "all" && "All Events"}
          {city !== "all" && `Event in ${capitalize(city)}`}
        </H1>
      </div>
      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
};

export default EventPage;
