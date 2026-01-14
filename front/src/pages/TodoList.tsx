import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axois";
import type { Todo } from "../types";

const TodoOverview = () => {
  const navigate = useNavigate();

  // TEMP data (replace later with real state / API)

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = async (id: number) => {
    const res = await api.delete(`/todos/${id}`);
    if (res.status === 200) {
      const resTodos = await api.get(`/todos`);
      setTodos(resTodos.data);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get<Todo[]>("/todos");
      setTodos(res.data);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen p-6">
      {/* TOP BAR */}
      <div className="flex items-start">
        {/* LEFT: LIST */}
        <div className="w-1/2">
          <h1 className="text-2xl mb-4">Todos</h1>

          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li key={index}>
                <div className="flex gap-2">
                  <div>{todo.title}</div>

                  <div>{todo.image}</div>
                  <button onClick={() => navigate(`/todos/${todo.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: CREATE BUTTON */}
        <div className="w-1/2 flex justify-end">
          <button
            onClick={() => navigate("/todos/create")}
            className="px-6 py-3 text-lg border"
          >
            Create New Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoOverview;
