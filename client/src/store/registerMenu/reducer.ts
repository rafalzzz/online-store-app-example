import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleRegisterMenu } from "./actions";

export type RegisterMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const registerMenu = (
  state = initialState,
  action: Action
): RegisterMenuState => {
  switch (action.type) {
    case getType(toggleRegisterMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
