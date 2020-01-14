import { GET_ALL_HOTELS, GET_HOTEL } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    case GET_HOTEL:
      return {
        ...state,
        hotel: action.payload
      };

    default:
      return state;
  }
};
