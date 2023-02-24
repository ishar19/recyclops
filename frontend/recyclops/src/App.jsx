import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Scanner from "./pages/Scanner";
import { UserContext } from "./Context/UserProvider";
import Game from "./pages/Game";
import GameLeaderboard from "./pages/GameLeaderboard";
function App() {
  const user = useContext(UserContext);
  const dummyData = {
    articleTitles: [
      "For you",
      "Plastic waste",
      "Sustainable lifestyle",
      "Hazard",
      "Innovations",
      "Organic Waste",
    ],
    articles: [
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
      {
        title: "Text that makes up the heading of the article",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        link: "#",
      },
    ],
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articleTitles={dummyData.articleTitles}
              articles={dummyData.articles}
            />
          }
        />
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
    </>
  );
}

export default App;
