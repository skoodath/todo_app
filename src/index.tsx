import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { TodoContextProvider } from "./components/context/TodoContext";
import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
