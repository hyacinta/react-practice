import React from "react";
import ReactDOM from "react-dom";

// React Element <- react.createElement() or JSX 비교

// JSX 문법 사용 (훨씬 단순하고 간단함)
// const app = (
//   <div className="app">
//     <h1 className="app-title"><span lang="en">React</span> 앱</h1>
//   </div>
// );

// ReactDOM.render(app, document.getElementById("root"));

// react.createElement() 사용 (내용이 많아지면 많아질수록 훨씬 더 복잡함.)
// const appHeading = React.createElement(
//   "h1",
//   null,
//   React.createElement("span", { lang: "en" }, "React"),
//   "앱"
// );
// const appElement = React.createElement("div", { class: "app" }, appHeading);

// ReactDOM.render(appElement, document.getElementById("root"));

// react.createElement() 변수에 할당해서 사용하는 방법

const h = React.createElement;

const appElement = h(
  "div",
  { className: "app" },
  h("h1", { className: "app-title" }, h("span", { lang: "en" }, "React"), "앱")
);

ReactDOM.render(appElement, document.getElementById("root"));
