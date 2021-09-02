import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
const TodoList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="todo-list__fallback">Boodschappenlijst is leeg.</h2>;
  }

  const items = props.items.map((item, index) => (
    <TodoItem
      onDeleteItem={props.onDeleteItem}
      onGreyItem={props.onDoneHandler}
      onUndoGrey={props.onUndoGrey}
      onUpdate={props.onUpdate}
      key={item.id}
      name={item.name}
      grey={item.grey}
      amount={item.amount}
      id={item.id}
      number={index + 1}
      date={item.date}></TodoItem>
  ));

  return <div>{items}</div>;
};

export default TodoList;
