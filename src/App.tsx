import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
const HomeLazy = lazy(() => import("./pages/home"));
// person
const UndoLazy = lazy(() => import("./pages/person/undo"));
const InfoLazy = lazy(() => import("./pages/person/user/info"));
const HobbyLazy = lazy(() => import("./pages/person/user/article"));
const MembersLazy = lazy(() => import("./pages/person/user/members"));
// project
const SolutionLazy = lazy(() => import("./pages/project/solution"));
const BackEndLazy = lazy(() => import("./pages/project/backEnd"));
const FrontEndLazy = lazy(() => import("./pages/project/frontEnd"));
// login
const LoginLazy = lazy(() => import("./pages/login"));
// UI components
const ButtonLazy = lazy(() => import("./pages/ui/button"));
const TableFilterLazy = lazy(() => import("./pages/ui/tableFilter"));
const EllipsisLazy = lazy(() => import("./pages/ui/ellipsis"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginLazy />} />
          <Route path="/home" element={<HomeLazy />} />

          <Route path="/person/*">
            <Route path="home" element={<HomeLazy />} />
            <Route path="user/*">
              <Route path="info/*" element={<InfoLazy />} />
              <Route path="article" element={<HobbyLazy />} />
              <Route path="members" element={<MembersLazy />} />
            </Route>
            <Route path="undo" element={<UndoLazy />} />
          </Route>

          <Route path="project/*">
            <Route path="back-end" element={<BackEndLazy />} />
            <Route path="solution" element={<SolutionLazy />} />
            <Route path="front-end" element={<FrontEndLazy />} />
          </Route>

          <Route path="components/*">
            <Route path="button" element={<ButtonLazy />} />
            <Route path="table-filter" element={<TableFilterLazy />} />
            <Route path="ellipsis" element={<EllipsisLazy />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
