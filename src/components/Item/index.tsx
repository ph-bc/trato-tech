import styles from "./Item.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { mudarFavorito } from "../../store/reducers/itens";
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho } from "../../store/reducers/carrinho";
import { CarrinhoProps, ItemProps, RootState } from "../../store/types";
import classNames from "classnames";

const iconeProps = {
  color: "#041833",
  size: 24,
};

export default function Item({
  id,
  titulo,
  foto,
  preco,
  descricao,
  favorito,
  carrinho,
}: ItemProps) {
  const dispatch = useDispatch();

  const estaNoCarrinho = useSelector((state: RootState) =>
    state.carrinho.some(
      (itemNoCarrinho: CarrinhoProps) => itemNoCarrinho.id === id
    )
  );

  const resolverFavorito = () => {
    dispatch(mudarFavorito(id));
  };

  const resolverCarrinho = () => {
    dispatch(mudarCarrinho(id));
  };

  return (
    <div
      className={classNames(styles.item, { [styles.itemNoCarrinho]: carrinho })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="ff0000"
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            )}
            <FaCartPlus
              {...iconeProps}
              color={estaNoCarrinho ? "#1875E8" : iconeProps.color}
              className={styles["item-acao"]}
              onClick={resolverCarrinho}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
