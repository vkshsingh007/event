import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type EventCardProps = {
  event: EventoEvent;
};
const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      className="flex-1 basis-80 max-w-[500px] h-[380px]"
      href={`/event/${event.slug}`}
    >
      <section className="w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-fit"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex justify-center items-center flex-col left-[12px] top-[12px] w-[45px] h-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -md-[5px]">
            {/* {new Date(event.date).getDate()} */}
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
