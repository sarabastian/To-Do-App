import React, { useEffect } from "react";
import "../App.css";
import { API_URL } from "../apiConstants";
import Task from "./Task";
const Main = () => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    fetch(API_URL + "/tasks")
      .then((r) => r.json())
      .then((tasks) => setTasks(tasks));
  }, []);
  console.log(tasks);
  return (
    <>
      <main>
        {tasks.map((t) => (
          <Task key={t.id} task={t} />
        ))}
      </main>
    </>
  );
};

export default Main;
