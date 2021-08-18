import cr from "../public/cr.jpg";
import crp from "../public/cr7.jpg";
import StoryCard from "./StoryCard";
import messi from "../public/messi.jpg";
import messip from "../public/messic.jpeg";
const stories = [
  {
    name: "Cristiano Ronaldo",
    src: cr,
    profile: crp,
  },
  {
    name: "Lionel Messi",
    src: messip,
    profile: messi,
  },
];
function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src + story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
