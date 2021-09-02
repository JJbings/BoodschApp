import React from "react";
import "./TodoItem.css";
import ToDoItemDate from "./ToDoItemDate";
import Card from "./Card";
const TodoItem = (props) => {
  const onDeleteItemHandler = () => {
    props.onDeleteItem(props.id);
  };

  const onDoneHandler = () => {
    if (!props.grey) {
      props.onGreyItem(props.id);
    }
    if (props.grey) {
      props.onUndoGrey(props.id);
    }
  };
  const onUpdateHandler = () => {
    props.onUpdate(props.id);
  };
  return (
    <li>
      <Card className={!props.grey ? "toDo-item" : "toDo-item grey"}>
        <button className="btn" onClick={onUpdateHandler}>
          ⬆︎
        </button>
        <div
          className={
            !props.grey ? "toDo-item-number" : "toDo-item-number grey"
          }>
          {" "}
          {props.number}{" "}
        </div>
        <ToDoItemDate grey={props.grey} date={props.date}></ToDoItemDate>
        <h2
          className={
            !props.grey
              ? "toDo-item__description"
              : "toDo-item__description grey"
          }>
          {props.name}
        </h2>
        <div
          className={
            !props.grey ? "toDo-item__amount" : "toDo-item__amount grey"
          }>
          {" "}
          {props.amount}
        </div>
        <button className="btn" onClick={onDeleteItemHandler}>
          X{" "}
        </button>
        <button className="btn" onClick={onDoneHandler}>
          ✓
        </button>
      </Card>
    </li>
  );
};

export default TodoItem;
