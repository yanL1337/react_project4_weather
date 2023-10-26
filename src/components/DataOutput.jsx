import { useEffect, useState } from "react";
import { fetchData } from "../assets/func.js";

const DataOutput = (props) => {
  const urlIcon = `https://openweathermap.org/img/wn/${props?.daten?.weather[0]?.icon}@2x.png`;

  return (
    <div className="output">
      <h1>{props?.daten?.name}</h1>
      <h2>{props?.daten?.weather[0]?.description}</h2>
      <img src={urlIcon} alt="" />
      <p>Aktuell: {Math.round(props.daten?.main.temp)}°C</p>
      <p>Windgeschwindigkeit: {Math.round(props.daten?.wind.speed)} m/h</p>
    </div>
  );
};

export default DataOutput;
