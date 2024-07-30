import { useSelector } from "react-redux";
import Header from "../../components/Header";
import styles from "./Categoria.module.scss";
import { useParams } from "react-router-dom";

interface CategoriaProps {
  id: number;
  nome: string;
  descricao: string;
  header: string;
}

interface RootState {
  categorias: CategoriaProps[];
}

export default function Categoria() {
  const { nomeCategoria } = useParams<{ nomeCategoria: string }>();
  const categoria = useSelector((state: RootState) =>
    state.categorias.find((c) => c.id === Number(nomeCategoria))
  );

  if (!categoria) {
    return <div>Categoria não encontrada</div>; // Mensagem de erro ou página de erro
  }

  return (
    <div className={styles.categoria}>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  );
}
