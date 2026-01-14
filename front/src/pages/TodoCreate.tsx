import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const navigate = useNavigate();

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border p-4">
        <h1 className="text-xl text-center mb-4">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border px-2 py-1 flex-1"
          />
          <button onClick={addTodo} className="border px-3">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((item, index) => (
            <li key={index} className="border p-2 flex justify-between">
              <span>{item}</span>
              <div className="flex gap-2">
                <button
                  className="border px-2"
                  onClick={() => navigate(`/todos/edit/${index}`)}
                >
                  Edit
                </button>
                <button
                  className="border px-2"
                  // onClick={() => navigate(`//delete/${index}`)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
