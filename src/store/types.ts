export interface CategoriaProps {
  id: string;
  nome: string;
  descricao: string;
  header: string;
  thumbnail: string;
}

export interface ItemProps {
  titulo: string;
  descricao: string;
  foto: string;
  favorito: boolean;
  preco: number;
  quantidade: number;
  id: string;
  categoria: string;
  carrinho: boolean;
}

export interface CarrinhoProps {
  id: string;
  quantidade: number;
}

export interface RootState {
  categorias: CategoriaProps[];
  itens: ItemProps[];
  carrinho: CarrinhoProps[];
}
