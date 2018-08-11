import * as React from "react";

class HomePage extends React.Component {
  render() {
    console.log("process.env.HOST", process.env);
    return (
      <div>
        <h1>ようこそ！</h1>
        <p>
          現在の環境は
          {process.env.HOST}
          です！
        </p>
        <h2>TODOリスト</h2>
        <ul>
          <li>
            <s>typeScrptの導入</s>
          </li>
          <li>tslintの導入</li>
          <li>cssの導入</li>
          <li>stylelintの導入</li>
          <li>nowの導入</li>
          <li>circleCIの導入</li>
          <li>
            <s>react-router導入</s>
          </li>
          <li>
            <s>コンポーネントの構成</s>
          </li>
          <li>
            <s>styled-componentsの導入</s>
          </li>
          <li>story-bookの導入</li>
          <li>pwa化</li>
          <li>画像の導入</li>
          <li>
            <s>gh-pagesの導入</s>
          </li>
          <li>reduxの導入</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
