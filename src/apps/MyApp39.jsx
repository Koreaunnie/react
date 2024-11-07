import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp39(props) {
  const [text, setText] = useState("숨기기");
  const [show, setShow] = useState(true);

  function handleClick() {
    if (text == "숨기기") {
      setText("보이기");
    } else {
      setText("숨기기");
    }

    setShow(!show);
  }

  return (
    <div>
      <Button onClick={handleClick}>{text}</Button>
      <Box display={show ? "block" : "none"} bg={"blue.200"}>
        박스
      </Box>
    </div>
  );
}

export default MyApp39;
