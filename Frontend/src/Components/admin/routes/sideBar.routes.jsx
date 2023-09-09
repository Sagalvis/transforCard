import {Route, Routes} from "react-router-dom"
import Home from "../pages/home";
import Client from "../pages/client";
import Vehicle from "../pages/vehicle"
import ServiceOder from "../pages/serviceOrder"
import Invocice from "../pages/invoice"
import Inventory from "../pages/inventory"
import Staff from "../pages/staff";
const SidebarRoutes = () => {
  return (  
    <>
    <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/vehicle" element={<Vehicle/>}/>
      <Route path="/serviceorder" element={<ServiceOder/>}/>
      <Route path="/invoice" element={<Invocice/>}/>
      <Route path="/employees" element={<Staff/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
    </Routes>
    </>
  );
}

export default SidebarRoutes;