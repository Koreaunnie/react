import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function App39(props) {
  const [number, setNumber] = useState("1");

  function handleClick() {
    if (number == 1) {
      setNumber(2);
    } else if (number == 2) {
      setNumber(3);
    } else {
      setNumber(1);
    }
  }

  // css display 만 none이라 화면에는 안보이지만 html 구조상 존재
  return (
    <div>
      <Button onClick={handleClick}>{number}</Button>
      <Box display={number === 1 ? "block" : "none"} h={20} bg={"blue.300"}>
        1
      </Box>
      <Box display={number === 2 ? "block" : "none"} h={20} bg={"red.300"}>
        2
      </Box>
      <Box display={number === 3 ? "block" : "none"} h={20} bg={"yellow.300"}>
        3
      </Box>
    </div>
  );

  // html 구조상 box가 1개만 보이게
  // return (
  //   <div>
  //     <Button onClick={handleButtonClick}>{number}</Button>
  //     {number === 1 && (
  //       <Box h={20} bg={"blue.300"}>
  //         1
  //       </Box>
  //     )}
  //     {number === 2 && (
  //       <Box h={20} bg={"red.300"}>
  //         2
  //       </Box>
  //     )}
  //     {number === 3 && (
  //       <Box h={20} bg={"yellow.300"}>
  //         3
  //       </Box>
  //     )}
  //   </div>
  // );
}

export default App39;
