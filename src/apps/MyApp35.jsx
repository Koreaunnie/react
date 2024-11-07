import React from "react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "@chakra-ui/react";

function MyApp35(props) {
  function f1(e) {
    console.log("버튼 클릭됨");
    console.log(e.target);
  }

  function f2(e) {
    console.log("키업 이벤트");
    console.log(e.target.value);
  }

  return (
    <div>
      <Input onKeyUp={(e) => console.log(e.target.value)} />
      <hr />
      <Input onKeyUp={f2} />
      <Input onKeyUp={f2} />
      <Input onKeyUp={f2} />
      <hr />
      <Button onClick={f1}>버튼1</Button>
      <Button onClick={f1}>버튼2</Button>
      <Button onClick={f1}>버튼3</Button>
    </div>
  );
}

export default MyApp35;
