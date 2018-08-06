import * as React from "react";
import { Switch } from "react-router";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GlobalNav from "../../../core/components/designsystem/atoms/GlobalNav/index";
import HomePage from "../../../home/components/homepage/index";
import AboutPage from "../../../about/components/aboutpage/index";
import GalleryPage from "../../../gallery/components/gallerypage/index";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <GlobalNav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/gallery" component={GalleryPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
