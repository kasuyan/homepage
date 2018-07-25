import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ようこそ！</h1>
        <p>{`現在の環境は${process.env.HOST}です`}</p>

        <h2>TODOリスト</h2>
        <ul>
          <li>typeScrptの導入</li>
          <li>eslintの導入</li>
          <li>cssの導入</li>
          <li>stylelintの導入</li>
          <li>ページ遷移</li>
          <li>コンポーネントの構成</li>
          <li>styled-componentsの導入</li>
          <li>pwa化</li>
          <li>画像の導入</li>
          <li>gh-pagesの導入</li>
          <li>reduxの導入</li>
        </ul>
      </div>
    );
  }
}
