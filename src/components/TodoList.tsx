import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Todo {
  id: string;
  title: string;
  content: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(data);
  }, []);

  console.log("todos", todos);

  const handleDelete = (todo: Todo) => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    const updatedTodos = todos.filter((t: Todo) => t.title !== todo.title);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  return (
    <div className=" mt-20 flex flex-col justify-center items-center space-y-2 w-full">
      <h1>TodoList</h1>

      <div className="p-4">
        {todos.map((todo) => (
          <div className="border border-gray-500 w-[500px] flex justify-between p-4">
            <div className="flex space-x-5">
              <h1 className="text-2xl  "> {todo.title}</h1>
              <p>{todo.content}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDelete(todo)}
                className="bg-red-500 py-2 px-2 mt-2 rounded-md  text-white"
              >
                Delete
              </button>
              <Link
                to={`/edit/${todo.id}`}
                // onClick={() => handleDelete(todo)}
                className="bg-green-500 py-2 px-2 mt-2 rounded-md  text-white"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
