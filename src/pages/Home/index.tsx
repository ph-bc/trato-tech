// Importação de bibliotecas externas
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Importação de componentes internos
import Header from "../../components/Header";
// Importação de estilos
import styles from "./Home.module.scss";
// Importação de imagens
import imagem from "@assets/inicial.png";
import { RootState } from "../../store/types";

export default function Home() {
  const navigate = useNavigate();
  const categorias = useSelector((state: RootState) => state.categorias);
  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={imagem}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
