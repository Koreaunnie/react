import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

      <hr />

      <Button
        onClick={() => {
          axios.get("/api/main9/sub4").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        admin
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub5").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        manager
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub6").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        admin & manager
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub7", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        admin only
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub8", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        manager only
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main9/sub9", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        admin or manager only
      </Button>

      <hr />

      <Button
        onclick={() => {
          axios.get("/api/main9/sub10", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        사용자 정보
      </Button>

      <Button
        onClick={() => {
          const token = localStorage.getItem("token");
          const decoded = jwtDecode(token);
          console.log(decoded);
          console.log("id", decoded.sub);
          console.log("권한", decoded.scope);
          console.log("유효기간", Date(decoded.exp));
          console.log("발행시간", Date(decoded.iat));
        }}
      >
        jwt 디코딩 해서 보기
      </Button>
    </div>
  );
}

export default MyApp80;
