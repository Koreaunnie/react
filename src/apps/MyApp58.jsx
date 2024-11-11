import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  // URLSearchParams -> Button3, Button4
  const p = new URLSearchParams();
  p.append("name", "hankang"); // name=hankang
  p.append("age", 55); // name=hankang&age=55
  p.append("city", "서울"); // name=hankang&age=55&city=서울
  p.append("city", "부산"); // name=hankang&age=55&city=서울&city=부산
  p.set("city", "제주"); // name=hankang&age=55&city=제주

  // URLSearchParams -> Button5
  const p2 = new URLSearchParams();
  p2.append("email", "gmail"); // email=gmail
  p2.append("title", "소년이온다"); // email=gmail&title=소년이온다
  p2.append("author", "한강"); // email=gmail&title=소년이온다&author=한강

  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/hi", {
            params: {
              name: "son",
              age: 5,
            },
          });
        }}
      >
        btn1
      </Button>

      {/* /hello 로  address는 "신촌", city 는 "서울" get 요청 전송*/}
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: {
              address: "seoul",
              city: "신촌",
            },
          });
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() => {
          axios.get("/hello", {
            params: p,
          });
        }}
      >
        btn3
      </Button>

      <Button
        onClick={() => {
          axios.get(`/hello?${p.toString()}`);
        }}
      >
        btn4
      </Button>

      <Button
        onClick={() => {
          axios.get(`/hi?${p2}`);
        }}
      >
        btn5
      </Button>
    </div>
  );
}

export default MyApp58;
