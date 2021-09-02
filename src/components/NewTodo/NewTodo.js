import React, { useState } from "react";
import "./NewTodo.css";
import TodoForm from "./TodoForm";
const NewTodo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onFormDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
      id: Math.random().toString(),
    };
    props.onEnteredFormData(formData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-todo">
      {!isEditing && (
        <button onClick={startEditingHandler}>Voeg Nieuw Product Toe</button>
      )}
      {isEditing && (
        <TodoForm
          onCancel={stopEditingHandler}
          onFormData={onFormDataHandler}></TodoForm>
      )}
    </div>
  );
};

export default NewTodo;
