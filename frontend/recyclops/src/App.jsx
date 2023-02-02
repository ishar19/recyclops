import React from "react";
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
  };
  return (
    <div>
      <Home
        isLoggedIn={dummyData.isLoggedIn}
        user={dummyData.user}
        isRecentScan={dummyData.isRecentScan}
        recentScan={dummyData.recentScan}
      />
    </div>
  );
}

export default App;
