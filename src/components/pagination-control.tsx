import Link from "next/link";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyles =
  "flex items-center gap-x-2-0 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";
const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <section className="w-full flex justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          Next <ArrowRightIcon />
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default PaginationControls;
