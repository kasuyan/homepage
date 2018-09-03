import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  GlobalNavAction,
  onGlobalNavClick
} from "../../../../../../actions/globalnav";
import { GlobalState } from "../../../../../../reducer";

interface Props {
  onGlobalNavClick: (target: string) => GlobalNavAction;
}

class GlobalNav extends React.Component<Props> {
  onClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log("onClick");
    this.props.onGlobalNavClick(e.currentTarget.dataset.target);
  };

  render() {
    return (
      <Nav>
        <List>
          <ListItem>
            <ListItemLink to="./" data-target="/" onClick={this.onClick}>
              TOP
            </ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink
              to="./about"
              data-target="/about"
              onClick={this.onClick}
            >
              About
            </ListItemLink>
          </ListItem>
          <ListItem>
            <a href="/dialy" data-target="/dialy" onClick={this.onClick}>
              Dialy
            </a>
          </ListItem>
          <ListItem>
            <ListItemLink
              to="/gallery"
              data-target="/gallery"
              onClick={this.onClick}
            >
              Gallery
            </ListItemLink>
          </ListItem>
          <ListItem>
            <a href="/bbs" data-target="/bbs" onClick={this.onClick}>
              BBS
            </a>
          </ListItem>
          <ListItem>
            <a href="/link" data-target="/link" onClick={this.onClick}>
              Link
            </a>
          </ListItem>
        </List>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  text-align: center;
  color: #3498db;
`;

const List = styled.ul`
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0;
  list-style-type: circle;
  padding: 0;
  display: inline-block;
  padding-left: 12px;
`;

const ListItemLink = styled(Link)`
  color: #ff0;
  &:hover {
    color: #f0f;
  }
`;

const mapStateToProps = (state: GlobalState) => {
  return { state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ onGlobalNavClick }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalNav);
