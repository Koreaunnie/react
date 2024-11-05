function MyComp() {
  return <h1>첫 번째 컴포넌트</h1>;
}

function App2() {
  return (
    <div>
      <MyComp />
      <MyComp />
    </div>
  );
}

export default App2;
