import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
const Location = () => {
  const [latitute, setLatitute] = useState("");
  const [longitute, setLongitude] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const apiKey = "56a8db2bda7b0241d8aa3c8ceae96e46";
  const apiEnpoint = "https://api.openweathermap.org/data/2.5/weather?";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitute(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    axios
      .get(`${apiEnpoint}lat=${latitute}&lon=${longitute}&appid=${apiKey}`)
      .then((res) => {
        setCurrentLocation(res.data.name);
      });
  }, [latitute, longitute]);

  return (
    <div className="flex items-center gap-2">
      <p className="text-xl underline underline-offset-4">{currentLocation}</p>
      <MdLocationPin size="32px" color="#34A853" />
    </div>
  );
};

export default Location;
