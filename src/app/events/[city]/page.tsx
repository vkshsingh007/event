import EventList from "@/components/events-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";
type Props = {
  params: {
    city: string;
  };
};
type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Event in ${capitalize(city)}`,
  };
}
const PageNumberSchema = z.coerce.number().int().positive().optional();
const EventPage = async ({ params, searchParams }: EventsPageProps) => {
  const city = params.city;
  const parsedPage = PageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error(`Invalid page number`);
  }

  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <div className="mb-28">
        <H1>
          {city === "all" && "All Events"}
          {city !== "all" && `Event in ${capitalize(city)}`}
        </H1>
      </div>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventPage;
