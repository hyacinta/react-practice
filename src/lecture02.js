import React from "react";
import ReactDOM from "react-dom";

// 데이터 바인딩이란? 따라하기 Data === State

// const state = {
//   appClassName: "app",
//   appTitleClassName: "app-title",
//   appHeadlineContents: ["React", "웹 앱"],
// };

// const app = (
//   <div className={state.appClassName}>
//     <h1 className={state.appTitleClassName}>
//       <span lang="en">{state.appHeadlineContents[0]}</span>
//       {state.appHeadlineContents[1]}
//     </h1>
//   </div>
// );

// 콘텐츠 바인딩과 JavaScript 표현식 따라하기
// const bindingContents = {
//   number: 909,
//   string: "콘텐츠 바인딩",
//   howCanIuseJSexpressionInsideJSX() {
//     return "Javascript 식(Expression)은 항상 값을 반환하므로 {}안에 바인딩이 가능합니다.";
//   },
// };

// const app = (
//   <div className="app">
//     {bindingContents.howCanIuseJSexpressionInsideJSX().replace(/\s/g, "- ")}
//   </div>
// );

// 속성 컴파일(속성 바인딩) 따라하기
// const state = {
//   appClass: "app",
// };

// const liStyle = {
//   color: "#ea2266",
//   fontWeight: 100,
// };

// let borderColor = "green";

// const app = (
//   <div className={state.appClass}>
//     <h1 className="a11y-hidden">속성 컴파일</h1>
//     <ul>
//       <li style={{ color: "#ea6666", fontWeight: 900 }}>
//         스타일 속성 (인라인)
//       </li>
//       <li style={liStyle}>스타일 속성 (객체)</li>
//       <li className="bordered rounded">클래스 속성</li>
//       <li className={`bordered rounded bordered-${borderColor}`}>
//         클래스 속성 (동적 처리)
//       </li>
//     </ul>
//   </div>
// );

// 조건문을 사용한 조건부 렌더링 따라하기

// 조건부 처리할 함수
// if 문
// function conditionalRendering(usingList = false) {
//   if (usingList) {
//     return (
//       <ul>
//         <li>조건 문 활용</li>
//         <li>조건 식 (3항식, 논리곱/합 연산자</li>
//       </ul>
//     );
//   } else {
//     return <p>"조건 문 활용" 또는 "조건 식(3항식, 논리곱/합 연산자)활용"</p>;
//   }
// }

// function randomBoolean() {
//   return Math.random() < 0.5 ? true : false;
// }
// const app = (
//   <div className="app">
//     <h1>조건부 렌더링</h1>
//     {conditionalRendering(randomBoolean())}
//   </div>
// );

// switch 문
function conditionalRendering(count = 0) {
  switch (count) {
    case 1:
      return (
        <ul>
          <li>조건 문 활용</li>
          <li>조건 식 (3항식, 논리곱/합 연산자</li>
        </ul>
      );
    case 2:
      return (
        <p>"조건 문 활용" 또는 "조건 식 (3항식, 논리곱/합 연산자) 활용"</p>
      );
    default:
      return (
        <p>
          React의 <abbr title="Javascript Syntax eXtension">JSX</abbr>는
          Javascript 객체(React 요소)를 반환합니다.
        </p>
      );
  }
}

function randomCount(number) {
  return number % 3;
}

const app = (
  <div className="app">
    <h1>조건부 렌더링</h1>
    {conditionalRendering(randomCount(Math.floor(100 * Math.random())))}
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
