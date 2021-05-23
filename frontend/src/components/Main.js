import React, { useEffect } from "react";
import "../App.css";
import Day from "./Day";
import { useSelector, useDispatch } from "react-redux";
import getDays from "../redux/actions/getDays";
import "../Main.css";
import addDay from "../redux/actions/addDay";
import Nav from "./Nav";

const Main = () => {
  const days = useSelector((state) => {
    return state.daysReducer.days;
  });
  const [date, setNewDay] = React.useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
  }, [dispatch]);

  const newDay = (e) => {
    setNewDay(e.target.value);
  };

  const newD = () => {
    dispatch(addDay(date));
  };

  return (
    <main className="Main">
      <form onSubmit={newD}>
        <label for="description"></label>
        <input onChange={newDay} type="date" id="start" defaultValue=""></input>
        <input type="submit" value="Submit" />
      </form>
      {days.map((d) => (
        <Day key={d.id} day={d} />
      ))}
    </main>
  );
};

export default Main;
