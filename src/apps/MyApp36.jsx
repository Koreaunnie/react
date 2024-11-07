import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp36(props) {
  // 상태(state)가 변경되면 컴포넌트를 다시 화면에 그림 (re render)

  // useState : 초기 상태를 결정하고
  //            상태를 저장한 변수와, 상태를 변경하는 함수를 리턴
  // const a = useState();
  // a[0]; // 상태를 저장한 변수
  // a[1]; // 상태를 변경하는 함수

  // const [n1, n2] = a;
  let [message, setMessage] = useState("처음 상태");

  let text = "hello";

  function f1() {
    text = "안녕";
  }

  function f2() {
    message = "두 번째 상태"; // 상태를 직접 변경하면 안됨
  }

  function f3() {
    // set ... 메소드로 상태를 변경해야함
    setMessage("set 함수를 이용한 상태 변경");
  }

  return (
    <div>
      <Button onClick={f1}>클릭</Button>
      <Button onClick={f2}>클릭</Button>
      <Button onClick={f3}>클릭</Button>
      <Box w={20} h={20} bg={"blue"} color={"white"}>
        {text}
      </Box>
      <Box w={20} h={20} bg={"red"} color={"white"}>
        {message}
      </Box>
    </div>
  );
}

export default MyApp36;
