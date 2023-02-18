import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProvider from "./Context/UserProvider";
import SignIn from "./pages/SignIn";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  const dummyData = {
    isRecentScan: true,
    recentScan: [
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
      },
      {
        title: "Trash Category",
        date: "1/2/23",
        img: "https://cdn.crispedge.com/43464b.png",
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
    <UserProvider>
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
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile profileData={dummyData.profileData} />
              ) : (
                <Navigate replace to={"/signin"} />
              )
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
