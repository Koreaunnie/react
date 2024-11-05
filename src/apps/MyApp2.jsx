// react component
function MyComponent() {
  // root 태그는 하나만 존재
  // 여러 줄로 작성 시 () 꼭 사용
  return (
    <div>
      <p>안녕</p>
      <p>리액트</p>
    </div>
  );
}

function MyApp2() {
  // react component

  // 만든 component
  // : 함수로 만들어짐
  //   component 명은 대문자로 시작
  // built-in component
  // : 이미 존재하는 html 요소들
  //   소문자

  // component 사용 시 종료 태그 꼭 작성
  // (empty tag는 시작 태그에 / 꼭 작성)
  return (
    <div>
      hello
      <br />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent></MyComponent>
    </div>
  );
}

export default MyApp2;
