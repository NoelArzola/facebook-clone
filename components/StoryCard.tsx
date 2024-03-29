import React from "react";
import Image from "next/image";
import ImgLoader from "../utils/ImgLoader";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <img
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-3 border-4 border-blue-500"
        src={profile}
        width={40}
        height={40}
        alt={`Profile of ${name}`}
      />
      <Image
        loader={ImgLoader}
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
        alt={`Profile of ${name}`}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 font-bold text-white text-sm truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
