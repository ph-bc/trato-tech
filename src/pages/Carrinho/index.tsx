import Header from "../../components/Header";
import styles from "./Carrinho.module.scss";
import { useSelector } from "react-redux";
import Item from "../../components/Item";
import { ItemProps, RootState } from "../../store/types";

export default function Carrinho() {
  const carrinho = useSelector((state: RootState): ItemProps[] => {
    const carrinhoReduce = state.carrinho.reduce<ItemProps[]>(
      (itens, itemNoCarrinho) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        if (item) {
          itens.push({
            ...item,
            quantidade: itemNoCarrinho.quantidade,
          });
        }
        return itens;
      },
      []
    );
    return carrinhoReduce;
  });

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
        imagem=""
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item}  carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {(0.0).toFixed(2)} </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
