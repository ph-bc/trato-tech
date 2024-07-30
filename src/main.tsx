// Importação de bibliotecas externas
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Importação de componentes internos
import App from "./App.tsx";
// Importação de outros módulos internos
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
