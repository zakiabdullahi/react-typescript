import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string | null>();
  const [content, setContent] = useState<string | null>();
  const id = "id" + Math.random().toString(16).slice(2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title);
    console.log(content);

    let todos = JSON.parse(localStorage.getItem("todos") || "[]");

    const todo = { id, title, content };

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    setTitle("");
    setContent("");

    navigate("/todos");
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-[500px]" action="">
        <div className="flex flex-col  space-y-2 ">
          <label>title</label>
          <input
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
