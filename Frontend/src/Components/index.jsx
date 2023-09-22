import { Route, Routes, Navigate } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Dashboard from "./admin/index.admin";
import Login from "./login/index.login";
import NotFound from "./admin/pages/notFount";

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
          <Route path="/admin/*" element={<Navigate to="/" />} />
        )}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContainerMain>
  );
}

export default IndexRoutes;
