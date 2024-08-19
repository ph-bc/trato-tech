// Importação de bibliotecas externas
import { createSlice } from "@reduxjs/toolkit";
import { CarrinhoProps } from "../types";

// Definindo o estado inicial como um array de itens do carrinho
const estadoInicial: CarrinhoProps[] = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload);
      if (!temItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      return state.filter((item) => item.id !== payload);
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id) {
          itemNoCarrinho.quantidade += payload.quantidade;
          return itemNoCarrinho;
        }
        return itemNoCarrinho;
      });
    },
    resetarCarrinho: () => estadoInicial,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
