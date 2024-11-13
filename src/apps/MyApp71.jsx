import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <div>홈페이지</div> },
  {
    path: "/path1",
    element: (
      <div>
        1번 경로
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "", // index: true 로 써도 됨
        element: <div>1번 경로/서브 홈페이지</div>,
      },
      {
        path: "sub1",
        element: <div>1번 경로/서브1</div>,
      },
      {
        path: "sub2",
        element: <div>1번 경로/서브2</div>,
      },
    ],
  },
  {
    path: "/path2",
    element: <div>2번 경로</div>,
  },
  {
    path: "/path3",
    element: (
      <div>
        3번 경로
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <div>3번 경로/서브 홈페이지</div>,
      },
      {
        path: "sub1",
        element: <div>3번 경로/서브 1</div>,
      },
      {
        path: "sub2",
        element: <div>3번 경로/서브 2</div>,
      },
    ],
  },
  {
    path: "/path4",
    element: <div>4번 경로</div>,
  },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
