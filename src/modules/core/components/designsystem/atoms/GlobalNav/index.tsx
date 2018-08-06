import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

class GlobalNav extends React.Component {
  render() {
    return (
      <Nav>
        <List>
          <ListItem>
            <ListItemLink to="./">TOP</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="./about">About</ListItemLink>
          </ListItem>
          <ListItem>
            <a href="/dialy">Dialy</a>
          </ListItem>
          <ListItem>
            <a href="/contents">Contents</a>
          </ListItem>
          <ListItem>
            <a href="/bbs">BBS</a>
          </ListItem>
          <ListItem>
            <a href="/link">Link</a>
          </ListItem>
        </List>
      </Nav>
    );
  }
}

export default GlobalNav;
