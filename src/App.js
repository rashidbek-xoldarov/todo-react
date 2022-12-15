import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Form from "./components/Form/Form";
import TodoList from "./components/Todo/TodoList";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [showList, setShowList] = useState([]);
  const [showTodo, setShowTodo] = useState(true);

  const addTodo = (todo) => {
    setTodo((prev) => {
      return [...prev, todo];
    });
    toast.success("Submitted");
  };

  const deleteTodoHandler = (id) => {
    const filteredArr = todo.filter((item) => item.id !== id);
    setTodo(filteredArr);
    toast.error("Deleted");
  };

  const editTodoHandler = (id) => {
    const newTodo = [...todo];
    const item = newTodo.find((item) => item.id === id);
    const text = prompt("Enter text", item.title);
    item.title = text;
    setTodo(newTodo);
    toast.warning("Edited");
  };

  const checkTodoHandler = (id) => {
    const checkedTodo = [...todo];
    const item = checkedTodo.find((item) => item.id === id);
    item.isCompleted = !item.isCompleted;
    setTodo(checkedTodo);
  };

  const getIsCompleted = (data) => {
    setShowTodo(false);
    setShowList(data);
  };

  const getAllTodo = () => {
    setShowTodo(true);
    setShowList([]);
  };

  return (
    <div className="app">
      <Form onGetTodo={addTodo} />
      <Buttons
        data={todo}
        isCompletedTodo={getIsCompleted}
        allTodo={getAllTodo}
      />
      {showTodo ? (
        <TodoList
          data={todo}
          onDeleteTodo={deleteTodoHandler}
          onEditTodo={editTodoHandler}
          onCheckTodo={checkTodoHandler}
        />
      ) : (
        ""
      )}
      {showList.length ? (
        <ol>
          {showList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        ""
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
