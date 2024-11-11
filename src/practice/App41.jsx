import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });

  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={(e) => setBook({ ...book, title: e.target.value })} />
      </Field>
      <Field label={"본문"}>
        <Textarea
          onKeyUp={(e) => setBook({ ...book, content: e.target.value })}
        />
      </Field>
      <hr />
      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>
      <Field label={"본문"} readOnly>
        <Textarea value={book.content} />
      </Field>
    </div>
  );
}

export default App41;
