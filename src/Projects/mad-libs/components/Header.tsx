import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        <Link to="/mad-lib"> GC Mad Libs</Link>
        <ul>
          <Link to="/mad-lib/stories">
            <li>See Saved Stories</li>
          </Link>
          <Link to="/mad-lib/create-story">
            <li>Create a New Story</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
