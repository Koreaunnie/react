import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => axios.post("/api/main2/sub1", { name: "kim", age: 99 })}
      >
        btn
      </Button>
    </div>
  );
}

export default MyApp62;
