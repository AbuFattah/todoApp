// import { useState } from "react";
// import logo from "./logo.svg";

import AddTasks from "./components/AddTasks/AddTasks";
import Navbar from "./components/Navbar/Navbar";
import TodoItem from "./components/Todos/TodoItem";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-10">
        <AddTasks />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
