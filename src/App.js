import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AuthPage from "./pages/AuthPage";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";
import useLocalStorage from "./hooks/useLocalStorage";
import { getUser } from "./utilities/users-service";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  // const [count, setCount] = useState(0);

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', [])
  const [editedTask, setEditedTask] = useState([null]);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  // CREATE 
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  // DELETE 
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };
  // UPDATE 
  const UpdateTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
// EDIT 
  const editTask = (task) => {
    setTasks((prevState =>
      prevState.map(t => (t.id === task.id ? { ...t, name: task.name } : t))
    ));
    closeEditMode()
  };

  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement);
  };
  return (
    <main className="container">
      <header>
        <h1>FOCUS</h1>
      </header>

      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/todos/new"
              element={<CustomForm addTask={addTask} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}

      {isEditing && (
        <EditForm editedTask={editedTask} editTask={editTask} />
      )}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          UpdateTask={UpdateTask}
          enterEditMode={enterEditMode}
          closeEditMode={closeEditMode}
        />
      )}
    </main>
  );
}

export default App;
