import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Header from "./Header";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const { stories } = useContext(StoriesContext);
  const id: string | undefined = useParams().id;

  return (
    <div className="ViewStoryRoute">
      {stories[+id! - 1] ? (
        <div>
          <Header />
          <h1>{`Mad Lib by: ${stories[+id! - 1].author}`}</h1>
          <p>{`On my way to ${stories[+id! - 1].word1}, I met ${
            stories[+id! - 1].word2
          }.`}</p>
          <p>{`They were in quite a hurry because they were meeting ${
            stories[+id! - 1].word3
          }, the ${stories[+id! - 1].word4}, in ${
            stories[+id! - 1].word5
          } minutes!`}</p>
          <p>{`So we said, "${stories[+id! - 1].word6}." and parted ways.`}</p>
          {stories[+id! - 2] ? (
            <Link to={`/mad-lib/stories/${+id! - 1}`}>Previous Story</Link>
          ) : (
            <Link to={`/mad-lib/stories/${stories[stories.length - 1].id}`}>
              Previous Story
            </Link>
          )}
          {stories[+id!] ? (
            <Link to={`/mad-lib/stories/${+id! + 1}`}>Next Story</Link>
          ) : (
            <Link to={`/mad-lib/stories/${stories[0].id}`}>Next Story</Link>
          )}
        </div>
      ) : (
        <Navigate to="/mad-lib/stories" />
      )}
    </div>
  );
};

export default ViewStoryRoute;
