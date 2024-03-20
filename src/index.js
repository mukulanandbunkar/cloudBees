import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {  RouterProvider, createHashRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import UserList from "./UserList/UserList";
import UserDetail from "./UserDetail/UserDetail";
const router = createHashRouter([
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
