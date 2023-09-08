const initialData = {
  products: [],
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload]
        // products: ++state.count,
      };
    case "MINUS":
      return {
        ...state,
        products: [...state.products, action.payload]
        // products: ++state.count,
      };
    case "DELETE":
      return {
        ...state,
        products: state.products.filter((delProduct) => delProduct !== action.payload)
      };
    default: {
      return state;
    }
  }
}
export default cartReducer;