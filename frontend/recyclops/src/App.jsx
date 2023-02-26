import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Scanner from "./pages/Scanner";
import { UserContext } from "./Context/UserProvider";
import Game from "./pages/Game";
import GameLeaderboard from "./pages/GameLeaderboard";
import { Toaster } from "react-hot-toast";

function App() {
  const user = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to={"/signin"} />}
        />
        <Route path="/game" element={<Game />} />
        <Route path="/game/leaderboard" element={<GameLeaderboard />} />

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
