import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return(
    <>
      <Header />
      <Sidebar />
      <Content>
        <ContentScroll>
          <Outlet />
        </ContentScroll>
      </Content>
    </>
  );
}

export default Layout;

const Content = styled.div`
  position: relative;
  overflow-y: auto;
  height: 100vh;
`;

const ContentScroll = styled.div`
  margin-left: 200px;
  margin-top: 100px;
`;