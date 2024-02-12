import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Test, TestA, TestB } from "./test";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}>
          <Route path="testA" element={<TestA />} />
          <Route path="testB" element={<TestB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
