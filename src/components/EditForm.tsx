import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Todo {
  id: string;
  title: string;
  content: string;
}

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log("params", params);
  console.log("start");
  let todos = JSON.parse(localStorage.getItem("todos") || "[]");

  let todo = todos.find((t: Todo) => t.id === id);
  console.log("todo", todo);

  const [title, setTitle] = useState<string | null>(todo ? todo.title : "");
  const [content, setContent] = useState<string | "">(
    todo ? todo.content : null
  );
  //   const id = "id" + Math.random().toString(16).slice(2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title);
    console.log(content);
    const todo = { id, title, content };

    let todos = JSON.parse(localStorage.getItem("todos") || "[]");

    const updatedTodos = todos.map((t: Todo) => (t.id === id ? todo : t));

    console.log(updatedTodos);

    // todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // setTitle("");
    // setContent("");
    navigate("/todos");
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-[500px]" action="">
        <div className="flex flex-col  space-y-2 ">
          <label>title</label>
          <input
            value={title!}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="border border-gray-500   rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col  space-y-2 ">
          <label>Content</label>
          <input
            value={content!}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setContent(e.target.value)
            }
            className="border border-gray-500   rounded-md"
            type="text"
          />
        </div>

        <button
          className="bg-indigo-500 py-2 px-2 mt-2 rounded-md  text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
