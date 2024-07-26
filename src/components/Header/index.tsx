// Importação de estilos
import styles from "./Header.module.scss";

interface HeaderProps {
  titulo: string;
  descricao: string;
  imagem: string;
  className: string;
}

export default function Header({
  titulo,
  descricao,
  imagem,
  className = "",
}: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles["header-texto"]}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
}
