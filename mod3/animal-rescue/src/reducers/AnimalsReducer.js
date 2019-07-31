export const animalsReducer = (state=[], action) => {
  switch(action.type){
    case "LOAD_ANIMALS":
      return action.animals;
    default:
      return state
  }
}

export const loadingReducer = (state=false, action) => {
  switch(action.type){
    case "IS_LOADING":
      return action.isLoading;
    default:
      return state
  }
}

export const hasErroredReducer = (state='', action) => {
  switch(action.type){
    case "HAS_ERRORED":
      return action.error;
    default:
      return state
  }
}
