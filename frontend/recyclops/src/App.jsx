import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Scanner from "./pages/Scanner";
import { UserContext } from "./Context/UserProvider";
import Game from "./pages/Game";
import GameLeaderboard from "./pages/GameLeaderboard";
import ScanHistory from "./pages/ScanHistory";
import SavedScans from "./pages/SavedScans";
import ReadingHistory from "./pages/ReadingHistory";
import GameHome from "./pages/GameHome";
import { Toaster } from "react-hot-toast";
import Bookmarks from "./pages/Bookmarks";
import AboutUs from "./pages/AboutUs";
import Intro from "./pages/Intro";
function App() {
  const user = useContext(UserContext);
  const gameData = () =>
    !(window.localStorage.getItem("gameData") == undefined);
  return (
    <ErrorBoundary>
      {user === undefined ? (
        <p>Loading...</p>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate replace to={"/signin"} />}
            />
            <Route path="/game" element={<GameHome />} />
            <Route
              path="/game/play"
              element={
                gameData() ? <Game /> : <Navigate replace to={"/game"} />
              }
            />
            <Route path="/game/leaderboard" element={<GameLeaderboard />} />
            <Route
              path="/profile/scanhistory"
              element={
                user ? <ScanHistory /> : <Navigate replace to={"/signin"} />
              }
            />
            <Route
              path="/profile/savedscans"
              element={
                user ? <SavedScans /> : <Navigate replace to={"/signin"} />
              }
            />
            <Route
              path="/profile/readinghistory"
              element={
                user ? <ReadingHistory /> : <Navigate replace to={"/signin"} />
              }
            />
            <Route
              path="/profile/bookmarks"
              element={
                user ? <Bookmarks /> : <Navigate replace to={"/signin"} />
              }
            />
            <Route
              path="/profile/aboutus"
              element={user ? <AboutUs /> : <Navigate replace to={"/signin"} />}
            />
            <Route
              path="/signin"
              element={
                !user ? <SignIn /> : <Navigate replace to={"/profile"} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

const NotFound = () => {
  return <h1>404 not found</h1>;
};
