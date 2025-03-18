/* eslint-disable react-refresh/only-export-components */

import { lazy } from "react";
import Layout from "@/layout";
import Login from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

const HomeLazy = lazy(() => import("@/pages/home"));

// person
const UndoLazy = lazy(() => import("@/pages/person/undo"));
const InfoLazy = lazy(() => import("@/pages/person/user/info"));
const HobbyLazy = lazy(() => import("@/pages/person/user/article"));
const MembersLazy = lazy(() => import("@/pages/person/user/members"));

// project
const SolutionLazy = lazy(() => import("@/pages/project/solution"));
const BackEndLazy = lazy(() => import("@/pages/project/backEnd"));
const FrontEndLazy = lazy(() => import("@/pages/project/frontEnd"));

// UI components
const ButtonLazy = lazy(() => import("@/pages/biz/button"));
const TableFilterLazy = lazy(() => import("@/pages/biz/tableFilter"));
const EllipsisLazy = lazy(() => import("@/pages/biz/ellipsis"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomeLazy />,
      },
      {
        path: "/person",
        children: [
          {
            path: "undo",
            element: <UndoLazy />,
          },
          {
            path: "user",
            children: [
              {
                path: "info/*",
                element: <InfoLazy />,
              },
              {
                path: "article",
                element: <HobbyLazy />,
              },
              {
                path: "members",
                element: <MembersLazy />,
              },
            ],
          },
        ],
      },
      {
        path: "/project",
        children: [
          {
            path: "solution",
            element: <SolutionLazy />,
          },
          {
            path: "back-end",
            element: <BackEndLazy />,
          },
          {
            path: "front-end",
            element: <FrontEndLazy />,
          },
        ],
      },
      {
        path: "/biz",
        children: [
          {
            path: "button",
            element: <ButtonLazy />,
          },
          {
            path: "table-filter",
            element: <TableFilterLazy />,
          },
          {
            path: "ellipsis",
            element: <EllipsisLazy />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
