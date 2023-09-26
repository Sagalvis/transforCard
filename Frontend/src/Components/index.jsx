import { Route, Routes, Navigate } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";
import Login from "./login/index.login";
import Forbidden from "./admin/pages/Forbidden";

const IndexRoutes = () => {
  const user = localStorage.getItem("user");

  const isUserLoggedIn = !!user;

  return ( 
    <ContainerMain>
      <Routes>
        <Route path="/" element={<Login />} />
        {isUserLoggedIn ? (
          <Route path="/admin/*" element={<Dashboard />} />
        ) : (
          <Route path="/admin/*" element={<Navigate to="/forbidden" />} />
        )}
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<Forbidden />} />
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;