export interface SampleJson {
  type: "GET_JSON";
  results: number;
}

export const onGetJson = () => {
  console.log("onGetJson!");
  fetch("../json/sample.json").then(res => {
    console.log(res);
  });
};
