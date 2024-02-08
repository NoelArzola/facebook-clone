import React, { useState } from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

interface PostProps {
  name: string;
  message: string;
  timestamp: any; // @TODO fix this any
  image: string;
  postImage: string;
}
function Post({ name, message, timestamp, image, postImage }: PostProps) {
  const [liked, setLiked] = useState(false);

  const handleLikes = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white dark:bg-[#242526] mt-5 rounded-t-2xl shadow-sm">
        <div>
          <img
            src={image || "../public/img/fallback-profile.jpeg"}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="font-medium dark:text-[#E4E6EB]">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">
                Loading<span className="animate-bounce">.</span>
                <span className="animate-bounce">.</span>
                <span className="animate-bounce">.</span>
              </p>
            )}
          </div>
        </div>
        <p className="pt-4 dark:text-[#E4E6EB]">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white dark:bg-[#242526]">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white dark:bg-[#242526] shadow-md text-gray-400 border-t dark:border-[rgba(255,255,255,.1)]">
        <div
          className={`inputIcon rounded-bl-2xl ${liked && "text-blue-500"}`}
          onClick={() => handleLikes()}
        >
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none ">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
