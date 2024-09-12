"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/events/${search}`);
  };
  return (
    <form onSubmit={handelSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events in any city"
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
