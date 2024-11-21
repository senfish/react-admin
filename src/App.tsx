import { lazy, Suspense, useEffect } from "react";
import { Spin } from "antd";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const HomeLazy = lazy(() => import("./pages/home"));
const ConfigLazy = lazy(() => import("./pages/person/config"));
const InfoLazy = lazy(() => import("./pages/person/user/info"));
const HobbyLazy = lazy(() => import("./pages/person/user/article"));
const MembersLazy = lazy(() => import("./pages/person/user/members"));
const ChineseLazy = lazy(() => import("./pages/class/chinese"));
const EnglishLazy = lazy(() => import("./pages/class/english"));
const MathLazy = lazy(() => import("./pages/class/math"));
const LoginLazy = lazy(() => import("./pages/login"));

const App = () => {
  return (
    <BrowserRouter basename="react-layout">
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
            <Route path="config" element={<ConfigLazy />} />
          </Route>
          <Route path="class/*">
            <Route path="chinese" element={<ChineseLazy />} />
            <Route path="english" element={<EnglishLazy />} />
            <Route path="math" element={<MathLazy />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
