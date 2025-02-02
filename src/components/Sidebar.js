import styled from 'styled-components';
import { FaHome, FaYoutube, FaMusic, FaSave, FaUser, FaVideo } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarContainer>
          <SidebarItem>
            <FaHome />
            <span>홈</span>
          </SidebarItem>
          <SidebarItem>
            <FaVideo />
            <span>Shorts</span>
          </SidebarItem>
          <SidebarItem>
            <FaYoutube />
            <span>구독</span>
          </SidebarItem>
          <SidebarItem>
            <FaMusic />
            <span>Youtube Music</span>
          </SidebarItem>
         
          <h1>내 페이지</h1>
          <h1>오프라인 저장</h1>
        </SidebarContainer>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;

const SidebarWrapper = styled.aside`
  position: fixed;
  width: 200px;
  top: 50px;
`;

const SidebarContainer = styled.div`
  
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  span {
    margin-left: 20px;
    font-size: 14px;
  }
`;