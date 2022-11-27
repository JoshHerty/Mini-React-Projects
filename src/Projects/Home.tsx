import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <nav>
        <Link to="/typing">
          <button>Typing Test</button>
        </Link>
        <Link to="/circles">
          <button>Draw Circles</button>
        </Link>
        <Link to="/login-form">
          <button>Dummy Login Page</button>
        </Link>
        <Link to="/mad-lib/home">
          <button>MAD LIBS</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
