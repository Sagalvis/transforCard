import { Route, Routes } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";
import Login from "./login/index.login";
import NotFount from "./admin/pages/notFount";

const IndexRoutes = () => {
  return ( 
    <ContainerMain>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/*" element={<Dashboard/>}/>
        <Route path="*" element={<NotFount/>}/>
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;