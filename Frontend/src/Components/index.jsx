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
        <Route path="/">
          <Route path={LOGIN} element={<Login />} />
          <Route path={NOTFOUND} element={<NotFount />} />
        </Route>
        <Route path={PRIVATE}>
          <Route path={PRIVATE} element={<Dashboard />} />

        </Route>
      </Routes>
    </ContainerMain>
  );
};

export default IndexRoutes;
