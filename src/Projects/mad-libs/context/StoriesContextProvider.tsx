import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [id, setId] = useState(1);

  const addStory = (story: Story): void => {
    story.id = id;
    setStories((prev) => [...prev, story]);
    setId(id + 1);
    // console.log(stories);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
