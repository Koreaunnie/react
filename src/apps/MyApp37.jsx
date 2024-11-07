import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp37(props) {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }

  function handleClick2() {
    setNumber(number - 1);
  }

  return (
    <div>
      <Button onClick={handleClick}>값 증가</Button>
      <Button onClick={handleClick2}>값 감소</Button>
      <Box>number : {number}</Box>
    </div>
  );
}

export default MyApp37;
