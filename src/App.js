import ToDos from "./components/ToDos";
function App() {
  const toDoItems = [
    { id: 1, name: "Melk", amount: 2, date: new Date(2021, 2, 28) },
    { id: 2, name: "Apples", amount: 8, date: new Date(2021, 2, 28) },
    { id: 3, name: "Brood", amount: 2, date: new Date(2021, 2, 28) },
    { id: 4, name: "Jam", amount: 1, date: new Date(2021, 2, 28) },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>BoodschAPP</p>
        <ToDos items={toDoItems}></ToDos>
      </header>
    </div>
  );
}

export default App;
