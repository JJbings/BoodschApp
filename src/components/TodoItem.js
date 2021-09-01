import React from "react";
import "./TodoItem.css";
import ToDoItemDate from "./ToDoItemDate";
import Card from "./Card";
const TodoItem = (props) => {
  const clickHandler = () => {};
  return (
    <Card className="toDo-item">
      <div className="toDo-item-number"> 1. </div>
      <ToDoItemDate date={props.date}></ToDoItemDate>

      <h2 className="toDo-item__description">{props.name}</h2>
      <div className="toDo-item__amount"> {props.amount}</div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
};

export default TodoItem;
