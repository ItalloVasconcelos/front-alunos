const initialState = {
  botaoClicado: false,
};
// Adicione um tipo para a ação
// eslint-disable-next-line default-param-last
export default function botaoClicadoReducer(state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
}
