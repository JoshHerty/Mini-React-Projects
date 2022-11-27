import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Circles from "./Projects/circles/components/Circles";
import Home from "./Projects/Home";
import LoginForm from "./Projects/Login-challenge/components/LoginForm";
import CreateStoryRoute from "./Projects/mad-libs/components/CreateStoryRoute";
import HomeRoute from "./Projects/mad-libs/components/HomeRoute";
import ListStoriesRoute from "./Projects/mad-libs/components/ListStoriesRoute";
import ViewStoryRoute from "./Projects/mad-libs/components/ViewStoryRoute";
import IteratorTest from "./Projects/random-user/IteratorTest";
import Typing from "./Projects/typing/components/Typing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <>
            <Route path="/home" element={<Home />} />
          </>
          <>
            <Route path="/login-form" element={<LoginForm />} />
          </>
          <>
            <Route path="/typing" element={<Typing />} />
          </>
          <>
            <Route path="/circles" element={<Circles />} />
          </>
          <>
            <Route path="/iterator-test" element={<IteratorTest />} />
          </>
          <>
            <Route path="/mad-lib" element={<HomeRoute />} />
            <Route path="/mad-lib/stories" element={<ListStoriesRoute />} />
            <Route path="/mad-lib/stories/:id" element={<ViewStoryRoute />} />
            <Route
              path="/mad-lib/create-story"
              element={<CreateStoryRoute />}
            />
            <Route path="/mad-lib/*" element={<Navigate to="/mad-lib" />} />
          </>
          {/* wildcard */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
