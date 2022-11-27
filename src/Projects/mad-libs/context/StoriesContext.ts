import { createContext } from "react";
import Story from "../models/Story";

interface StoryContextModel {
  stories: Story[];
  addStory: (story: Story) => void;
}

const defaultValues: StoryContextModel = {
  stories: [],
  addStory: () => {},
};

const StoriesContext = createContext(defaultValues);

export default StoriesContext;
