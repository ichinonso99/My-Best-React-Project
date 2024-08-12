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
        products: state.products.filter((delProduct) => delProduct.id !== action.payload.id),
      };
      case "UPDATE_CART":
        return{
          ...state,
          products: state.products.map((cartItem)=>
          cartItem.id === action.payload.id
          ? { ...cartItem, quantity: action.payload.quantity}
          : cartItem
          ),
        }; 
    default: {
      return state;
    }
  }
}
export default cartReducer;