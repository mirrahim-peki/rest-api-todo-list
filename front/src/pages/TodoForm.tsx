// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const TodoForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [value, setValue] = useState("");

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="border p-4 w-80">
//         <h1 className="text-center mb-4">
//           {id == null ? "Create" : "Edit"} Todo {id}
//         </h1>

//         <input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           className="border w-full mb-3 px-2 py-1"
//         />

//         <button
//           className="border w-full py-1"
//           onClick={() => navigate("/todos")}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TodoForm;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axois";
import type { Todo } from "../types";

const TodoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState<Todo>({} as Todo);

  // 🔹 If EDIT: load existing todo
  useEffect(() => {
    if (!id) return;

    api
      .get(`/todos/${id}`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // 🔹 SAVE (create or update)
  const saveTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (id) {
        // EDIT
        await api.put(`/todos/${id}`, value);
      } else {
        // CREATE
        await api.post("/todos", value);
      }

      navigate("/todos");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-4 w-80">
        <h1 className="text-center mb-4">{id ? "Edit" : "Create"} Todo</h1>
        <form onSubmit={saveTodo}>
          <input
            value={value?.title}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, title: e.target.value }))
            }
            className="border w-full mb-3 px-2 py-1"
            placeholder="Todo title"
          />

          <input
            value={value?.image}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, image: e.target.value }))
            }
            className="border w-full mb-3 px-2 py-1"
            placeholder="image"
          />

          <button className="border w-full py-1" type="submit">
            {id == null ? "Create" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
