import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

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
  return (
    <Box>
      <Flex gap={5}>
        <Box>
          <Link to="/">HOME</Link>
        </Box>

        <Box>
          <Link to="add">ADD</Link>
        </Box>

        <Box>
          <Link to="view">VIEW</Link>
        </Box>
      </Flex>

      <Outlet />
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
