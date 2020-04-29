import React from "react";

import { productData } from "../Data/data";

const InitialSate = {
  data: productData,
  keyWord: "",
  listCard: [],
};
function reducer(state = InitialSate, action) {
  switch (action.type) {
    case "SEARCH_PRODUCT_BY_NAME":
      return {
        ...state,
        keyWord: action.payload,
      };
    case "ADD_TO_CARD":
      return {
        ...state,
        listCard: [
          ...state.listCard,
          {
            title: action.payload.title,
            imgSource: action.payload.imgSource,
            price: action.payload.price,
          },
        ],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        listCard: state.listCard.filter(
          (element) => element.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
export default reducer;
