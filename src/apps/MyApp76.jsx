import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  console.log(params.toString());

  return (
    <Box>
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.set("keyword", keyword);
          setParams(p);
        }}
      >
        검색
      </Button>
      <hr />
      <Button
        onClick={() => {
          // const p = new URLSearchParams();
          // p.append("page", 1);
          // params.append("page", 1);
          // setParams(params);

          const nextParam = new URLSearchParams(params);
          nextParam.set("page", 1);
          setParams(nextParam);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 2);
          setParams(p);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 3);
          setParams(p);
        }}
      >
        3
      </Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);

function MyApp76(props) {
  return <RouterProvider router={router} />;
}

export default MyApp76;
