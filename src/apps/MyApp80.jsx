import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

function MyApp80(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub1").then((res) => {
            const token = res.data;
            localStorage.setItem("token", token);
          });
        }}
      >
        jwt 얻기 (로그인)
      </Button>

      <Button
        onClick={() => {
          axios.get("api/main9/sub2");
        }}
      >
        누구나 접근
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub3", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        로그인 유저만 접근
      </Button>

      <Button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        로그아웃
      </Button>
    </div>
  );
}

export default MyApp80;
