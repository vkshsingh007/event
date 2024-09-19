import H1 from "@/components/h1";
import Image from "next/image";
import React from "react";
type EventPageProps = {
  params: {
    slug: string;
  };
};
const EventPage = async ({ params }: EventPageProps) => {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl"
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw,1280px"
          priority
        />
        <div className="z-1 flex gap-x-6 lg:gap-x-16 relative">
          <Image
            src={event.imageUrl}
            alt="event.name"
            width={300}
            height={201}
          />

          <div>
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            <H1>{event.name}</H1>
            <p className="italic">
              Organized by <span>{event.organizerName}</span>
            </p>
            <button>Get Tickets</button>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
};

export default EventPage;
