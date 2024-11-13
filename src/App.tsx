import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const HomeLazy = lazy(() => import("./pages/home"));
const ConfigLazy = lazy(() => import("./pages/person/config"));
const InfoLazy = lazy(() => import("./pages/person/user/info"));
const HobbyLazy = lazy(() => import("./pages/person/user/hobby"));
const ChineseLazy = lazy(() => import("./pages/class/chinese"));
const EnglishLazy = lazy(() => import("./pages/class/english"));
const MathLazy = lazy(() => import("./pages/class/math"));
const LoginLazy = lazy(() => import("./pages/login"));

const hasAuth = true;
const App = () => {
  return (
    <BrowserRouter basename="react-layout">
      {hasAuth ? (
        <Layout>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin />
              </div>
            }
          >
            <Routes>
              <Route path="/home" element={<HomeLazy />} />
              <Route path="/person/*">
                <Route path="home" element={<HomeLazy />} />
                <Route path="user/*">
                  <Route path="info/*" element={<InfoLazy />} />
                  <Route path="hobby" element={<HobbyLazy />} />
                </Route>
                <Route path="config" element={<ConfigLazy />} />
              </Route>
              <Route path="class/*">
                <Route path="chinese" element={<ChineseLazy />} />
                <Route path="english" element={<EnglishLazy />} />
                <Route path="math" element={<MathLazy />} />
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin />
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<LoginLazy />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
};

export default App;
