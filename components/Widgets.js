import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
import React from "react";

const contacts = [
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola II",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola III",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola IV",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola V",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola VI",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5 pt-2">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl dark:text-[#B0B3B8]">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact, index) => (
        <Contact key={index} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
