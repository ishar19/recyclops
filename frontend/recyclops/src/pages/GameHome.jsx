import React, { useContext, useState } from "react";
import Navbar from "../components/global/Navbar";
import topImage from "../Assets/Game Background.png";
import HomeLeaderboard from "../components/Game/HomeLeaderboard";
import HomePlay from "../components/Game/HomePlay";
import SEO from "../components/global/SEO";
import { UserContext } from "../Context/UserProvider";
import BackButton from "../components/global/BackButton";
import Reset from "../components/Scanner/Reset";
const GameHome = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  return loading ? (
    <Reset />
  ) : (
    <>
      <div className="flex min-h-screen  flex-col items-center bg-greenPrimary">
        <SEO
          title="RecyclOps | Game"
          description="AI powered tool for waste management"
          authors="Ishar Jain Prabkirat Singh Bhavya Giri Diksha Raj"
          name="RecyclOps"
          keywords="Trash Disposal AI React Sustainable Development Game"
        />
        <BackButton />
        <img src={topImage} alt="Game" className="max-h-[30vh]" />
        <div className="flex flex-col items-center gap-3">
          <HomeLeaderboard />
          <HomePlay user={user} setLoading={setLoading} />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default GameHome;
