import React, { useState } from "react";
import "./Todoform.css";
const TodoForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      name: enteredName,
      amount: enteredAmount,
      date: new Date(enteredDate),
      grey: false,
    };

    props.onFormData(todoData);
    setEnteredDate("");
    setEnteredName("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Naam</label>
          <input
            value={enteredName}
            type="text"
            onChange={nameChangeHandler}></input>
        </div>
        <div className="new-todo__control">
          <label>Hoeveelheid</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}></input>
        </div>
        <div className="new-todo__control">
          <label>Datum</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-todo__actions">
        <button type="submit"> Voeg product toe</button>
        <button type="button" onClick={props.onCancel}>
          Stop
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
