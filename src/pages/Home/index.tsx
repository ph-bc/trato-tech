// Importação de bibliotecas externas
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Importação de componentes internos
import Header from "../../components/Header";
// Importação de estilos
import styles from "./Home.module.scss";
// Importação de imagens
import imagem from "@assets/inicial.png";

interface CategoriaProps {
  id: number;
  nome: string;
  thumbnail: string;
}

interface RootState {
  categorias: CategoriaProps[];
}

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
        <h1>Categorias</h1>
      </div>
      <div className={styles["categorias-container"]}>
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            onClick={() => navigate(`/categoria/${categoria.id}`)}
          >
            <img src={categoria.thumbnail} alt={categoria.nome} />
            <h1>{categoria.nome}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
