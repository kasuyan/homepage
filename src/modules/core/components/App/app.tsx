import * as React from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "../../../home/components/homepage/index";
import AboutPage from "../../../about/components/aboutpage/index";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">TOP</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/dialy">Dialy</a>
              </li>
              <li>
                <a href="/contents">Contents</a>
              </li>
              <li>
                <a href="/bbs">BBS</a>
              </li>
              <li>
                <a href="/link">Link</a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
