// Importação de estilos
import styles from "./Footer.module.scss";
// Importação de ícones
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconeProps = {
  color: "white",
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>TratoTech - Todos os direitos reservados</span>
    </footer>
  );
}
