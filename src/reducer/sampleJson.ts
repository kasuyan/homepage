import { SampleJson } from "../actions/getjson";

export interface JsonState {
  results: number;
}

const initJson: JsonState = {
  results: 0
};

const jsonState = (state = initJson, action: SampleJson) => {
  switch (action.type) {
    case "GET_JSON": {
      console.log("GET_JSON");
      return {
        results: action.results
      };
    }
    default:
      return state;
  }
};

export default jsonState;
