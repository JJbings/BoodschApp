import React from "react";
import "./ToDoItemDate.css";
import Card from "./Card";
const ToDoItemDate = (props) => {
  const month = props.date.toLocaleString("nl-NL", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className={!props.grey ? "toDo-date" : "toDo-date grey"}>
      <div className="toDo-date__day">{day}</div>
      <div className="toDo-date__month">{month}</div>
      <div className="toDo-date__year">{year}</div>
    </Card>
  );
};

export default ToDoItemDate;
