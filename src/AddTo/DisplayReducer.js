const initialState = [
  {
    id: 1,
    name: "redux",
    programming: "javascript",
  },
  {
    id: 2,
    name: "redux",
    programming: "javascript",
  },
];

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY":
      return state;
    default:
      return state;
  }
};

export default createReducer;
