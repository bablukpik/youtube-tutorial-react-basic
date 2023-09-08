import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropsStateExample2 from "../pages/PropsStateExample2";
import PropsStateExample3 from "../pages/PropsStateExample3";
import PropsStateExample from "../pages/PropsStateExample";
import UseEffect from "../pages/hooks/UseEffect";
import UseContextProvider from "../pages/hooks/UseContext";
import UseReducer from "../pages/hooks/UseReducer";
import UseTransition from "../pages/hooks/UseTransition";
import CustomHook from "../pages/hooks/CustomHook";
import RenderProps from "../pages/RenderProps";
import HigherOrderComponent from "../pages/HigherOrderComponent";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props-state-example" element={<PropsStateExample />} />
        <Route path="/props-state-example2" element={<PropsStateExample2 />} />
        <Route path="/props-state-example3" element={<PropsStateExample3 />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-context" element={<UseContextProvider />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-transition" element={<UseTransition />} />
        <Route path="/custom-hook" element={<CustomHook />} />
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/higher-order-component" element={<HigherOrderComponent />} />
      </Routes>
    </>
  );
}
