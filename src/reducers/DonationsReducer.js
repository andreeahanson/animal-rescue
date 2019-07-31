export const donationsReducer = (state=[], action) => {
  switch(action.type){
    case "LOAD_DONATIONS":
      return action.donations;
    case "ADD_DONATION":
      return [...state, action.newDonation]
    default:
      return state;
  }
}