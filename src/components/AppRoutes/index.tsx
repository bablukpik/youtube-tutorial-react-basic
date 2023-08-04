import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropsStateExample2 from "../pages/PropsStateExample2";
import PropsStateExample3 from "../pages/PropsStateExample3";

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props-state-example2" element={<PropsStateExample2 />} />
        <Route path="/props-state-example3" element={<PropsStateExample3 />} />
      </Routes>
    </>
  );
}
