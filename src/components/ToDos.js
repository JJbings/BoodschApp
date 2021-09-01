import React from "react";
import TodoItem from "./TodoItem";
import "./ToDo.css";
import Card from "./Card";

const ToDos = (props) => {
  return (
    <Card className="toDo">
      <TodoItem
        name={props.items[0].name}
        amount={props.items[0].amount}
        date={props.items[0].date}></TodoItem>
      <TodoItem
        name={props.items[1].name}
        amount={props.items[1].amount}
        date={props.items[1].date}></TodoItem>
      <TodoItem
        name={props.items[2].name}
        amount={props.items[2].amount}
        date={props.items[2].date}></TodoItem>
    </Card>
  );
};

export default ToDos;
