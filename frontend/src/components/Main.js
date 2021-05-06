import React, { useEffect } from "react";
import "../App.css";
import { API_URL } from "../apiConstants";
import Day from "./Day";

const Main = () => {
  const [days, setDays] = React.useState([]);

  useEffect(() => {
    fetch(API_URL + "/days")
      .then((r) => r.json())
      .then((days) => setDays(days));
  }, []);

  return (
    <main>
      {days.map((d) => (
        <Day key={d.id} day={d} />
      ))}
    </main>
  );
};

export default Main;
