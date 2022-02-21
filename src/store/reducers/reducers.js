const INITIAL_VALUE = {
  favorites: [],
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADDTO_FAVORITE":
      return {
        ...state,
        favorites: action.payload,
      };
      break;

    default:
      return state;
  }
};
