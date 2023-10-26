import { useEffect, useRef, useState } from "react";
import { fetchData } from "../assets/func.js";
import DataOutput from "./DataOutput";

const Data = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("hamburg");

  const api_key = "720e73f618d846a3934b1ea09ecb5cf4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=de&units=metric`;

  const dataFetch = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    fetchData(url).then((data) => {
      setData(data);
    });
  }, [city]);

  //   console.log(isMounted.current);

  //   console.log(data);

  return (
    <div className="dataWrapper">
      <button value={"hamburg"} onClick={dataFetch}>
        Hamburg
      </button>
      <button value={"berlin"} onClick={dataFetch}>
        Berlin
      </button>
      <button value={"köln"} onClick={dataFetch}>
        Köln
      </button>
      <button value={"australien"} onClick={dataFetch}>
        Australien
      </button>
      <DataOutput daten={data} />
    </div>
  );
};

export default Data;
