/* eslint-disable react/prop-types */
import Sidebar from "../sidebar/index.sidebar";
import { ContainLayout, ContainPages } from "./styledLayout";

const Layout = ({children}) => {
  return (
    <ContainLayout>
      <Sidebar/>
      <ContainPages>{children}</ContainPages>
    </ContainLayout>
  )
};

export default Layout;
