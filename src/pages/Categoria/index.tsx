import { useSelector } from "react-redux";
import Header from "../../components/Header";
import styles from "./Categoria.module.scss";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import { RootState } from "../../store/types";

export default function Categoria() {
  const { nomeCategoria } = useParams<{ nomeCategoria: string }>();
  const { categoria, itens } = useSelector((state: RootState) => ({
    categoria: state.categorias.find(
      (categoria) => categoria.id === nomeCategoria
    ),
    itens: state.itens.filter((item) => item.categoria === nomeCategoria),
  }));

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
      <div className={styles.itens}>
        {itens?.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
