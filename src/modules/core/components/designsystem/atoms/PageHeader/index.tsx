import * as React from "react";
import { render } from "../../../../../../../node_modules/@types/react-dom";
import styled from "styled-components";

interface Props {
  children?: JSX.Element | string;
}

class PageTitle extends React.Component<Props> {
  render() {
    return <Title>{this.props.children}</Title>;
  }
}

const Title = styled.h1`
  text-align: center;
  color: #3498db;
`;

export default PageTitle;
