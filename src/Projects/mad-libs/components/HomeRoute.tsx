import Header from "./Header";
import "./HomeRoute.css";

const HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <Header />
      <p>
        Mad Libs is a phrasal template word game which consists of one player
        prompting others for a list of words to substitute for blanks in a story
        before reading aloud.
      </p>
    </div>
  );
};

export default HomeRoute;
