import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

interface FeedProps {
  posts: any[];
}

function Feed({ posts }: FeedProps) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 px-4 xl:px-8 overflow-y-auto scrollbar-hide max-w-[642px]">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
