import React from "react";
import Image from "next/image";
import ImgLoader from "../utils/ImgLoader";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 hover:dark:bg-[#3A3B3C] cursor-pointer p-2 rounded-xl">
      <Image
        loader={ImgLoader}
        className="rounded-full"
        src={src}
        objectFit="cover"
        width={50}
        height={50}
        layout="fixed"
      />
      <p className="dark:text-[#E4E6EB]">{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
