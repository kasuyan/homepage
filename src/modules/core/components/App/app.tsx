import * as React from "react";
import { Switch } from "react-router";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";
import { onGlobalNavClick } from "../../../../actions/globalnav";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalState } from "../../../../reducer";
import GlobalNav from "../../../core/components/designsystem/atoms/GlobalNav";
import HomePage from "../../../home/components/homepage";
import AboutPage from "../../../about/components/aboutpage";
import GalleryPage from "../../../gallery/components/gallerypage";
import ReduxTestPage from "../../../gallery/components/Reduxpage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <GlobalNav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route path="/gallery/redux-test" component={ReduxTestPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return { state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ onGlobalNavClick }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
