export const gameReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SALDO":
      return { ...state, saldo: [...state.cart, { ...action.payload }] };
    default:
      return state;
  }
};
