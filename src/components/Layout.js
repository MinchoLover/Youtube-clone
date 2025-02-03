import { Outlet } from "react-router-dom";
// import { VideoProvider } from "./VideoContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Container>
        <Content>
          <ContentScroll>
            <Outlet />
          </ContentScroll>
        </Content>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  overflow-y: auto;
  height: 100vh;
`;

const ContentScroll = styled.div`
  width: calc(100vw - 200px);
  height: 100vh;
  margin-left: 200px;
  margin-top: 100px;
`;