import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  const user = useContext(UserContext);

  const dummyData = {
    isRecentScan: true,
    recentScan: [
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Organic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Hazard",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Paper",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Cardboard",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Organic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Glass",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Metal",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Plastic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Organic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Organic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Metal",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Organic",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Cardboard",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
        category: "Hazard",
      },
    ],
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
    profileData: {
      name: "Name",
      phone: "9999988888",
      email: "abcd123@gmail.com",
      img: "https://cdn.crispedge.com/43464b.png",
    },
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isRecentScan={dummyData.isRecentScan}
              recentScan={dummyData.recentScan}
              articleTitles={dummyData.articleTitles}
              articles={dummyData.articles}
            />
          }
        />
        <Route path="/scanner" element={<Scanner />} />
        <Route
          path="/profile"
          element={
            user ? (
              <Profile profileData={dummyData.profileData} />
            ) : (
              <Navigate replace to={"/signin"} />
            )
          }
        />
        <Route path="/game" element={<GameHome />} />
        <Route path="/game/play" element={<Game />} />
        <Route path="/game/leaderboard" element={<GameLeaderboard />} />
        <Route path="/profile/scanhistory" element={<ScanHistory />} />
        <Route path="/profile/savedscans" element={<SavedScans />} />
        <Route path="/profile/readinghistory" element={<ReadingHistory />} />
        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate replace to={"/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
