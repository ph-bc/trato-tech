// Importação de estilos
import styles from "./PaginaPadrao.module.scss";
// Importação de componentes
import Navbar from "../Navbar";
import Footer from "../Footer";
// Importação de rotas
import { Outlet } from "react-router-dom";


export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
