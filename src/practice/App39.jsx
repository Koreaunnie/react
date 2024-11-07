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

  return (
    <div>
      <Button onClick={handleClick}>{number}</Button>
      <Box display={number == 1 ? "block" : "none"} h={20} bg={"blue.300"}>
        1
      </Box>
      <Box display={number == 2 ? "block" : "none"} h={20} bg={"red.300"}>
        2
      </Box>
      <Box display={number == 3 ? "block" : "none"} h={20} bg={"yellow.300"}>
        3
      </Box>
    </div>
  );
}

export default App39;
