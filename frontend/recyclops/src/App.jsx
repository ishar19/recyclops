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
          element={gameData() ? <Game /> : <Navigate replace to={"/game"} />}
        />
        <Route path="/game/leaderboard" element={<GameLeaderboard />} />
        <Route
          path="/profile/scanhistory"
          element={user ? <ScanHistory /> : <Navigate replace to={"/signin"} />}
        />
        <Route
          path="/profile/savedscans"
          element={user ? <SavedScans /> : <Navigate replace to={"/signin"} />}
        />
        <Route
          path="/profile/readinghistory"
          element={
            user ? <ReadingHistory /> : <Navigate replace to={"/signin"} />
          }
        />
        <Route
          path="/profile/bookmarks"
          element={user ? <Bookmarks /> : <Navigate replace to={"/signin"} />}
        />
        <Route
          path="/profile/aboutus"
          element={user ? <AboutUs /> : <Navigate replace to={"/signin"} />}
        />
        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate replace to={"/profile"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
