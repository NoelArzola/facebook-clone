import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Noel Arzola",
    src: "https://noelarzola.com/img/hello.webp",
    profile: "https://noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola Jr",
    src: "https://noelarzola.com/img/hello.webp",
    profile: "https://noelarzola.com/img/hello.webp",
  },
  {
    name: "Junior",
    src: "https://noelarzola.com/img/hello.webp",
    profile: "https://noelarzola.com/img/hello.webp",
  },
  {
    name: "JR",
    src: "https://noelarzola.com/img/hello.webp",
    profile: "https://noelarzola.com/img/hello.webp",
  },
  {
    name: "Noel Arzola II",
    src: "https://noelarzola.com/img/hello.webp",
    profile: "https://noelarzola.com/img/hello.webp",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
