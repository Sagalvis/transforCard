import { Route, Routes } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";
import Login from "./login/index.login";

const IndexRoutes = () => {
  return ( 
    <ContainerMain>
      <Routes>
        <Route path="*" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;