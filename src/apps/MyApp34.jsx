import React from "react";
import { toaster } from "../components/ui/toaster.jsx";
import { Button } from "../components/ui/button.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onClick={() => {
          toaster.create({
            description: "안내 메세지",
            type: "success",
            duration: "10000",
          });
        }}
      >
        success
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내 메세지", type: "error" });
        }}
      >
        error
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내 메세지", type: "info" });
        }}
      >
        info
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내 메세지", type: "warning" });
        }}
      >
        warning
      </Button>

      <Button
        onClick={() => {
          toaster.create({
            description: "안내 메세지",
          });
        }}
      >
        토스트 버튼
      </Button>
    </div>
  );
}

export default MyApp34;
