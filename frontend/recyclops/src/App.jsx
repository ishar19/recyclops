import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const dummyData = {
    isLoggedIn: true,
    user: "Diksha",
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
    ],
    articleTitles: ["For you", "Plastic waste", "Sustainable lifestyle"],
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
    ],
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={dummyData.isLoggedIn}
              user={dummyData.user}
              isRecentScan={dummyData.isRecentScan}
              recentScan={dummyData.recentScan}
              articleTitles={dummyData.articleTitles}
              articles={dummyData.articles}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
