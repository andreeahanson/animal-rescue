export const donationsReducer = (state=[], action) => {
  switch(action.type){
    case "LOAD_DONATIONS":
      return action.donations;
    default:
      return state;
  }
}