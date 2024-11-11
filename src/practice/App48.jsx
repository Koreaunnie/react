import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyForm() {
  return (
    <Box>
      <Field label={"이름"}>
        <Input />
      </Field>
      <Field label={"주소"}>
        <Input />
      </Field>
    </Box>
  );
}

function MyBox() {
  return (
    <Box>
      <p>이름 : </p>
      <p>주소 : </p>
    </Box>
  );
}

function App48(props) {
  return (
    <div>
      <MyForm />
      <MyBox />
    </div>
  );
}

export default App48;
