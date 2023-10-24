import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarinhoState = {
  itens: Produto[]
}

const initialState: CarinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoAtual = action.payload

      if (state.itens.find((item) => item.id === produtoAtual.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtoAtual)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
