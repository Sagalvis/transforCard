import { Route, Routes } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";

const IndexRoutes = () => {
  return ( 
    <ContainerMain>
      <Routes>
        <Route path="*" element={<Dashboard/>}/>
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;