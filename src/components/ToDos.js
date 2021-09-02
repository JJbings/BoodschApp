import React from "react";

import "./ToDo.css";
import Card from "./Card";
import TodoList from "./TodoList";
const ToDos = (props) => {
  return (
    <Card className="toDo">
      <div className="header">
        <div className="des-a">Volgorde</div>
        <div className="des-b">Datum</div>
        <div className="des-c">Naam</div>
        <div className="des-d">Hoeveelheid</div>
      </div>
      <TodoList
        onDeleteItem={props.onDeleteItem}
        onDoneHandler={props.onGrey}
        onUndoGrey={props.onUndoGrey}
        onUpdate={props.onUpdate}
        items={props.items}
        greys={props.greys}></TodoList>
    </Card>
  );
};

export default ToDos;
