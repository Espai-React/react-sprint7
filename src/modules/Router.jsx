import { Routes, Route } from "react-router-dom";
import Benvinguda from "../pages/Benvinguda/Benvinguda";
import Inici from "../pages/Inici/Inici";
import Error from "../pages/Error/Error";

const Router = () => (
  <Routes>
    <Route path="/" element={<Benvinguda />} />
    <Route path="/inici" element={<Inici />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default Router;
