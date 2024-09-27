import { cn } from "@/lib/utils";
import React from "react";
type SkeletopnProps = {
  className?: string;
};
const Skeleton = ({ className }: SkeletopnProps) => {
  return <div className={cn("h-4 w-[550] rounded-md bg-white/5", className)} />;
};

export default Skeleton;
