import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";

const contacts = [
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola",
  },
  {
    src: "https://noelarzola.com/img/hello.webp",
    name: "Noel Arzola",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5 pt-2">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.name} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
