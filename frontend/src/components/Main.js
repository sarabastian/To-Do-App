import React, { useEffect } from "react";
import "../App.css";
import Day from "./Day";
import { useSelector, useDispatch } from "react-redux";
import getDays from "../redux/actions/getDays";

const Main = () => {
  const days = useSelector((state) => {
    return state.daysReducer.days;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDays());
  }, [dispatch]);

  return (
    <main>
      {days.map((d) => (
        <Day key={d.id} day={d} />
      ))}
    </main>
  );
};

export default Main;
