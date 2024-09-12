import H1 from "@/components/h1";
import React from "react";

const EventPage = ({ params }) => {
  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1>Event in {params.city}</H1>
    </main>
  );
};

export default EventPage;
