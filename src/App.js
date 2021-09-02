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
      console.log(updatedItem);
      const updatedGreys = [...updatedItems, ...updatedItem];
      console.log(updatedGreys);
      return updatedGreys;
    });
  };

  return (
    <div className="App">
      <NewTodo onEnteredFormData={addTodoHandler}></NewTodo>
      <ToDos
        onDeleteItem={deleteTodoItemHandler}
        onGrey={onDoneHandler}
        items={toDoItems}></ToDos>
    </div>
  );
}

export default App;
