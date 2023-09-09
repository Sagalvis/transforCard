import {Route, Routes} from "react-router-dom"
import Home from "../pages/home";
import Client from "../pages/client";
const SidebarRoutes = () => {
  return (  
    <>
    <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/client" element={<Client/>}/>
    </Routes>
    </>
  );
}

export default SidebarRoutes;