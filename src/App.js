import { useState } from "react";
import ToDos from "./components/ToDos";
import NewTodo from "./components/NewTodo/NewTodo";
function App() {
  const dummyItems = [
    {
      id: 1,
      name: "Melk",
      amount: 2,
      date: new Date(2021, 2, 28),
      grey: false,
    },
    {
      id: 2,
      name: "Appels",
      amount: 8,
      date: new Date(2021, 2, 28),
      grey: false,
    },
    {
      id: 3,
      name: "Brood",
      amount: 2,
      date: new Date(2021, 2, 28),
      grey: false,
    },
    { id: 4, name: "Jam", amount: 1, date: new Date(2021, 2, 28), grey: false },
  ];

  // const [greyItems, setGreyItems] = useState(greys);
  const [toDoItems, setToDoItems] = useState(dummyItems);
  const addTodoHandler = (formData) => {
    setToDoItems((prevItems) => {
      return [formData, ...prevItems];
    });
  };
  const deleteTodoItemHandler = (id) => {
    setToDoItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);

      return updatedItems;
    });
  };
  const onDoneHandler = (id) => {
    setToDoItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      const updatedItem = prevItems.filter((item) => item.id === id);
      updatedItem[0].grey = true;

      const updatedGreys = [...updatedItems, ...updatedItem];

      return updatedGreys;
    });
  };
  const onDoneHandlerRemedy = (id) => {
    setToDoItems((prevItems) => {
      const updatedItem = prevItems.filter((item) => item.id === id);
      const updatedItems = prevItems.filter((item) => item.id !== id);
      updatedItem[0].grey = false;

      return [...updatedItem, ...updatedItems];
    });
  };
  const onUpdateHandler = (id) => {
    setToDoItems((prevItems) => {
      const updatedItem = prevItems.filter((item) => item.id === id);
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return [...updatedItem, ...updatedItems];
    });
  };

  return (
    <div className="App">
      <NewTodo onEnteredFormData={addTodoHandler}></NewTodo>
      <ToDos
        onDeleteItem={deleteTodoItemHandler}
        onGrey={onDoneHandler}
        onUndoGrey={onDoneHandlerRemedy}
        onUpdate={onUpdateHandler}
        items={toDoItems}></ToDos>
    </div>
  );
}

export default App;
