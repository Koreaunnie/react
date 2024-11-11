import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import axios from "axios";

function App60(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState(1000);
  const handleClick = (e) => {
    axios.post("/api/main1/sub4", { 제목: title, 내용: text, 가격: price });
  };

  return (
    <div>
      <Field label={"제목"}>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      </Field>
      <Field label={"내용"}>
        <Textarea onChange={(e) => setText(e.target.value)} value={text} />
      </Field>
      <Field label={"가격"}>
        <NumberInputRoot value={price} onValueChange={(e) => setPrice(e.value)}>
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleClick}>전송</Button>
    </div>
  );
}

export default App60;
