import axios from "axios";
export const shortener = (title) => {
  const splittedTitle = title.split(" ");
  const shortened = splittedTitle[0] + " " + splittedTitle[1];
  return shortened;
};
export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};
export const counter = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity
  }
};
