import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      {
        index: true,
        element: <div>HOME</div>,
      },
      {
        path: "add",
        element: <div>add</div>,
      },
      {
        path: "view",
        element: <div>view</div>,
      },
    ],
  },
]);

function WholePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex gap={5}>
        <Box>
          <Button onClick={() => navigate("/")}>HOME</Button>
        </Box>

        <Box>
          <Button onClick={() => navigate("add")}>ADD</Button>
        </Box>

        <Box>
          <Button onClick={() => navigate("view")}>VIEW</Button>
        </Box>
      </Flex>

      <Outlet />
    </Box>
  );
}

function App73(props) {
  return <RouterProvider router={router} />;
}

export default App73;
