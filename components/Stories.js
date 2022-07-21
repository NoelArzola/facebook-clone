import React from "react";
import StoryCard from "./StoryCard";
import InputBox from "./InputBox";

const stories = [
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola",
    src: "https://www.noelarzola.com/img/hello.webp",
    profile: "https://www.noelarzola.com/img/hello.webp",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
