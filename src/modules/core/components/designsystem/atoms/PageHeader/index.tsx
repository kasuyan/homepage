import * as React from "react";
import { render } from "../../../../../../../node_modules/@types/react-dom";

interface Props {
  children?: JSX.Element | string;
}

class PageTitle extends React.Component<Props> {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

export default PageTitle;
