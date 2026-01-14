import { Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoForm from "./pages/TodoForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/todos/:id" element={<TodoForm />} />
      <Route path="/todos/create" element={<TodoForm />} />
    </Routes>
  );
};

export default App;
