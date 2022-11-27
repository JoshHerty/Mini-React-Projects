import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Header from "./Header";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  return (
    <div className="Stories">
      <Header />
      <h1>Pick a story</h1>
      <ul>
        {stories.map((story) => (
          <Link to={`/mad-lib/stories/${story.id}`} key={story.id}>
            <li>Mad Lib by: {story.author}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
