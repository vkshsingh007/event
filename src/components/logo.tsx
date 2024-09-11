import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"https://bytegrad.com/course-assets/react-nextjs/evento.png"}
      alt="logo"
      width={53}
      height={12}
    />
  );
};

export default Logo;
