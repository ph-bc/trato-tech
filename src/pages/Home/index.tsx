// Importação de estilos
import styles from "./Home.module.scss";
// Importação de componentes
import Header from "../../components/Header";
// Importação de imagens
import imagem from "@assets/inicial.png";


export default function Home() {
  return (
    <Header
      titulo="Classificados Tech"
      descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
      imagem={imagem}
      className={styles.header}
    />
  );
}
