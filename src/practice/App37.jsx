import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [string, setString] = useState("");
  const [text, setText] = useState("");

  function handleKeyUp(e) {
    setString(e.target.value);
  }

  return (
    <div>
      <Input onKeyUp={handleKeyUp} />
      <p>{string}</p>

      <Input onKeyUp={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

export default App37;
