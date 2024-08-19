// Importação de bibliotecas externas
import { createSlice } from "@reduxjs/toolkit";

// Definindo o estado inicial como um array de itens do carrinho
const estadoInicial = "";

const buscaSlice = createSlice({
  name: "busca",
  initialState: estadoInicial,
  reducers: {
    mudarBusca: (state, { payload }) => payload,
    resetarBusca: () => estadoInicial,
  },
});

export const { mudarBusca, resetarBusca } = buscaSlice.actions;
export default buscaSlice.reducer;
