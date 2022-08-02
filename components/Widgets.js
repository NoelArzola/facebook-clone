import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
import React from "react";

const contacts = [
  {
    src: "asia-profile.jpg",
    name: "Asia Jennings",
  },
  {
    src: "michelle-profile.jpg",
    name: "Michelle Arzola",
  },
  {
    src: "katie-profile.jpg",
    name: "Katie Little",
  },
  {
    src: "hector-profile.jpg",
    name: "Hector Pagan",
  },
  {
    src: "tucker-profile.jpg",
    name: "Adam Tucker",
  },
  {
    src: "szuba-profile.jpg",
    name: "Ed Szuba",
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
