# 2021.02.01 lecture01

## JSX vs react.createElement()

- React Element가 늘어나면 늘어날수록 JSX 문법을 사용하는 것이 훨씬 간단함.
- JSX 문법을 사용한 React Element를 바벨 컴파일러가 결국 react.createElement 문법으로 변화시켜 준다.

```

// jsx 문법
const container = (
	<div className="container">
      <div className="row">
        <div className="col col-6">컬럼 6</div>
        <div className="col col-6">컬럼 6</div>
      </div>
  	</div>
)

// babel 변환
"use strict";

const container = /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement("div", {
  className: "col col-6"
}, "\uCEEC\uB7FC 6"), /*#__PURE__*/React.createElement("div", {
  className: "col col-6"
}, "\uCEEC\uB7FC 6")));
```

react.createElement()는 JSX와 비교했을 때
상속관계를 확인하기도 어렵고, 코드 자체도 많이 작성해야 한다..

## VirtualDom

ReactDOM 모듈은 React 요소로 구성된 가상 DOM을 실제 DOM에 장착(mount)시켜서 렌더링하는 역할을 수행

### 왜? 가상DOM을 사용하는가?

UI는 수시로 변경이 되어야 하고, 이 렌더링 과정은 UI속도를 느리게 하는데, UI의 갯수가 많아지면 많아질수록 더 많이 느려진다.

가상 DOM은 실제 DOM과 가상 DOM을 비교하여 실제로 변경이 된 부분만 업데이트 하기 때문에 UI속도를 향상시킬 수 있다.

### 가상DOM의 구성

- h.js (hyperscript js)
  가상 DOM 요소를 만드는 역할
  react.createElement() 가 했던 일 중 하나

- createElement.js
  DOM요소에 붙여줄 때 필요한 실제 DOM 요소를 만들어주는 역할

- diif.js
  이전과 이후의 상태를 비교

- patch.js
  diff.js에서 상태의 변화가 있으면 patch를 함
