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
    </Card>
  );
};

export default ToDos;
