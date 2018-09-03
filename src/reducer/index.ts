import { GlobalNavAction, onGlobalNavClick } from "../actions/globalnav";

export interface GlobalState {
  target: string;
}
const initState: GlobalState = {
  target: "/"
};

const globalNavState = (state = initState, action: GlobalNavAction) => {
  switch (action.type) {
    case "SET_GLOBAL_NAV": {
      console.log("SET_GLOBAL_NAV!!!");
      return {
        target: action.target
      };
    }
    default:
      return state;
  }
};

export default globalNavState;
