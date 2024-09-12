import React from "react";
type H1Props = {
  children: React.ReactNode;
};
const H1 = ({ children }: H1Props) => {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tighter">
      {children}
    </h1>
  );
};

export default H1;
