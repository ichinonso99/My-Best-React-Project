const initialState = {
    task: [],
  }
  
  function taskReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TASK":
        return{
          ...state,
          task: [...state, action.payload]
        }
      default:
        return state;
    }
  };

export default taskReducer