import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import UserList from "./UserList/UserList";
import UserDetail from "./UserDetail/UserDetail";
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/user-list",
    element: <UserList />,
  },
  {
    path: "/user-detail",
    element: <UserDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
