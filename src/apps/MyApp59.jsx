import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp59(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/hi", "somedata");
        }}
      >
        somedata
      </Button>

      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("name", "한강");
          p.append("address", "광주");

          axios.post("/hi", p);
        }}
      >
        URLSearchParams
      </Button>

      <Button
        onClick={() => {
          const d = new FormData();
          d.append("name", "김연아");
          d.append("address", "서울");

          axios.post("/hi", d);
        }}
      >
        formData
      </Button>

      <Button
        onclick={() => {
          axios.post("/hi", {
            name: "홍길동",
            cit: "부산",
          });
        }}
      >
        plain object
      </Button>
    </div>
  );
}

export default MyApp59;
