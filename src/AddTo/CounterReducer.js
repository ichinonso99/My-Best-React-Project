const initialState = {
  count: 0,
}

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return{
        ...state,
        count: [...state, action.payload]
      }
    default:
      return state;
  }
};

export default CounterReducer;
