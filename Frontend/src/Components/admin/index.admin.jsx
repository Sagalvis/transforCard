import Layout from "./layout/layout";
import SidebarRoutes from "./routes/sideBar.routes";
import { ContainDashboard } from "./styled.admin";

const Dashboard = () => {
  return ( 
    <ContainDashboard>
      <Layout>
        <SidebarRoutes/>
      </Layout>
    </ContainDashboard>
  );
}

export default Dashboard;