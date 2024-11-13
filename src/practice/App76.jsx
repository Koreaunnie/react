import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";

function MyHome() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

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

      <Button
        onClick={() => {
          const nextParam = new URLSearchParams(params);
          nextParam.set("page", 1);
          setParams(nextParam);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const nextParam = new URLSearchParams(params);
          nextParam.set("page", 2);
          setParams(nextParam);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const nextParam = new URLSearchParams(params);
          nextParam.set("page", 3);
          setParams(nextParam);
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

function App76(props) {
  return <RouterProvider router={router} />;
}

export default App76;
