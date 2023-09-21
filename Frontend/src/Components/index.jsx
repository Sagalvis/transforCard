import { Route, Routes } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";
import Login from "./login/index.login";
import NotFount from "./admin/pages/notFount";
import { LOGIN, NOTFOUND, PRIVATE } from "../config/routes/patch.routes";

const IndexRoutes = () => {
  return ( 
    <ContainerMain>
      <Routes>
        <Route path={LOGIN} element={<Login/>}/>
        <Route path={PRIVATE} element={<Dashboard/>}/>
        <Route path={NOTFOUND} element={<NotFount/>}/>
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;