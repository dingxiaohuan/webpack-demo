import React, { lazy, Suspense } from "react";
const RemoteNewsList = lazy(() => import("remote/NewList"));
export default (props) => {
  return (
    <div>
      <h1>远程的NewsList</h1>
      <Suspense fallback="loading RemoteNewsList">
        <RemoteNewsList />
      </Suspense>
    </div>
  );
};
