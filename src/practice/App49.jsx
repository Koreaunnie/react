import React, { createContext, useContext, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

// step1 : context 만들기
const CountContext = createContext(0);

function App49(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count {count}</Button>
      <CountContext.Provider value={count}>
        <Child1 count={count} />
      </CountContext.Provider>
    </div>
  );
}
function Child1() {
  return <Child2 />;
}
function Child2() {
  // step2 : context 사용하기
  const count = useContext(CountContext);
  return <Box>{count}</Box>;
}

export default App49;
