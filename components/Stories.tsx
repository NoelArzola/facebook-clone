import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Chelsea Craven",
    src: "chelsea-story.jpg",
    profile: "../img/chelsea-profile.jpg",
  },
  {
    name: "Michelle Arzola",
    src: "michelle-story.jpg",
    profile: "../img/michelle-profile.jpg",
  },
  {
    name: "Katie Little",
    src: "katie-story.jpg",
    profile: "../img/katie-profile.jpg",
  },
  {
    name: "Asia Jennings",
    src: "asia-story.jpg",
    profile: "../img/asia-profile.jpg",
  },
  {
    name: "Adam Tucker",
    src: "tucker-story.jpg",
    profile: "../img/tucker-profile.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
