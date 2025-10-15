import { Routes, Route } from "react-router-dom";
import PAGES_ROUTES from "./router/routers";
import VistaInicio from "./page/inicio/inicio";
import VistaPami from "./page/sedePami/Pami";
import VistaCaobos2 from "./page/sedeCaobos/Caobos2";
// import Error404 from "./pages/Errors/Error404";

function App() {
  return (
    <Routes>
      <Route path={PAGES_ROUTES.INICIO} element={<VistaInicio />} />
      <Route path={PAGES_ROUTES.PAMI} element={<VistaPami />} />
      <Route path={PAGES_ROUTES.CAOBOS2} element={<VistaCaobos2 />} />


    
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}

export default App;
