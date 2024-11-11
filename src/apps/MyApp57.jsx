import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp57(props) {
  return (
    <div>
      {/* javascript 사용 */}
      <Button onlClick={() => {}}>get 요청</Button>
      <Button onlClick={() => {}}>post 요청</Button>

      <hr />

      {/* html 요소 이용 (a, form) */}
      {/* get */}
      <a href="/hi">say hi</a>

      <hr />

      <form action="/hello" method="get">
        <button>전송</button>
      </form>

      <hr />

      {/* post */}
      <form action="/greeting" method="post">
        <button>전송</button>
      </form>
    </div>
  );
}

export default MyApp57;
