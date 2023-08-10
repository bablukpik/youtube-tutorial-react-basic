import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropsStateExample2 from "../pages/PropsStateExample2";
import PropsStateExample3 from "../pages/PropsStateExample3";
import PropsStateExample from "../pages/PropsStateExample";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props-state-example" element={<PropsStateExample />} />
        <Route path="/props-state-example2" element={<PropsStateExample2 />} />
        <Route path="/props-state-example3" element={<PropsStateExample3 />} />
      </Routes>
    </>
  );
}
