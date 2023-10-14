import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage.tsx";
import CreateTodoPage from "./pages/CreateTodoPage.tsx";
import EditPage from "./pages/EditPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoListPage />,
      },
      {
        path: "/todos",
        element: <TodoListPage />,
      },
      {
        path: "/new",
        element: <CreateTodoPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
