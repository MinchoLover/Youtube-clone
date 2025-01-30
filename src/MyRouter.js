import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shorts from "./pages/Shorts";
import Layout from "./components/Layout";

const MyRouter = () => {
  return(
    <Routes>
      {/* 헤더 사이드바 중첩 라우팅 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/shorts" element={<Shorts /> }/>
      </Route>
    </Routes>
  );

}

export default MyRouter;