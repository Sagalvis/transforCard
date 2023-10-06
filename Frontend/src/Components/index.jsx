import { Route, Routes, Navigate } from "react-router-dom";
import { ContainerMain } from "./styles/styledIndex";
import Login from "./login/index.login";
import NotFound from "./notFound/NotFound";
import { lazy, Suspense } from "react";
import CheckClient from "./customer/checkVehicle/checkClient";

// Carga el componente de Dashboard de manera dinámica (asíncrona)
const Dashboard = lazy(() => import("./admin/index.admin"));

const IndexRoutes = () => {
  const user = localStorage.getItem("user");
  const isUserLoggedIn = !!user;

  return (
    <ContainerMain>
      <Routes>
        <Route path="/" element={<Login />} />
        {isUserLoggedIn ? (

          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
        ) : (
          <Route path="/admin/*" element={<Navigate to="/not-found" />} />
        )}

        {/* Just routes for customers  */}
        <Route path="/check" element={<CheckClient />} />
        {/* ---------------->>> */}

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContainerMain>
  );
};

export default IndexRoutes;
