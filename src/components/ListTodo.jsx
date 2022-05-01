import { React, useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id != id));

      console.log(deleteTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      setTodos(data);
      //console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex justify-center justify-items-center text-center px-10">
      <table className="bg-slate-300 mt-4 w-full rounded">
        <thead>
          <tr className="text-xl">
            <th>Todo ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="bg-slate-100">
          {todos.map((todo) => (
            <tr className="hover:bg-slate-200" key={todo.todo_id}>
              <td>{todo.todo_id}</td>
              {show? <td>{todo.description}</td>:show}
              <td></td>
              <td className="flex justify-end">
                {
                  <div className="p-4 space-x-2">
                    
                    <button
                      className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      Delete
                    </button>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
