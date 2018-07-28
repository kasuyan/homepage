import * as React from "react";
import HomePage from "../../../home/components/homepage/index";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#">リンク</a>
            </li>
            <li>
              <a>リンク</a>
            </li>
            <li>
              <a>リンク</a>
            </li>
            <li>
              <a>リンク</a>
            </li>
            <li>
              <a>リンク</a>
            </li>
          </ul>
        </nav>
        <HomePage />
      </div>
    );
  }
}
