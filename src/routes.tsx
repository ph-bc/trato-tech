// Importação de bibliotecas
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importação de componentes
import PaginaPadrao from "./components/PaginaPadrao";
// Importação de páginas
import Home from "./pages/Home";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="*" element={<div>Não tem nd aqui</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
