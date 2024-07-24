// Imports de bibliotecas externas
import classNames from "classnames";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";

// Imports de arquivos locais
import logo from "@assets/logo.svg";
import styles from "./Navbar.module.scss";

const iconeProps = {
  color: "white",
  size: 24,
};

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === "/",
            })}
          >
            Página Inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}></div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
