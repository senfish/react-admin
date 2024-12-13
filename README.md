## 踩坑之路

### Suspense

使用 lazy 懒加载路由的时候，需要搭配 Suspense 组件一起使用，但是 Suspense 必须是 Routes 组件的父级，不能是祖先级；

good：

```js
<Layout>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/home" element={<HomeLazy />} />
      <Route path="/user/">
        <Route path="/user/info" element={<InfoLazy />} />
        <Route path="/user/hobby" element={<HobbyLazy />} />
      </Route>
      <Route path="/undo" element={<ConfigLazy />} />
    </Routes>
  </Suspense>
</Layout>
```

bad:

```js
<Suspense fallback={<div>Loading...</div>}>
  <Layout>
    <Routes>
      <Route path="/home" element={<HomeLazy />} />
      <Route path="/user/">
        <Route path="/user/info" element={<InfoLazy />} />
        <Route path="/user/hobby" element={<HobbyLazy />} />
      </Route>
      <Route path="/undo" element={<ConfigLazy />} />
    </Routes>
  </Layout>
</Suspense>
```

出现的问题: 当路由切换的时候，会出现页面闪烁的情况。

### 为什么要额外配置一个 react-layout 的 basename

因为部署到 github pages 上面会默认部署到 https://[用户名].github.io/[项目名]，为了不影响页面原来的跳转逻辑，所以需要手动配置一下静态资源地址。
