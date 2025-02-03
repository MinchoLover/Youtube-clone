import styled from 'styled-components';
import { FaHome, FaYoutube, FaMusic, FaSave, FaUser, FaVideo } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarContainer>
          {/* 메인 사이드 네비게이터 */}
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

          <Divider/>
            {/* 내 페이지 */}
            <span>내 페이지 {'>'}</span>
          <SidebarItem>
            <FaHome />
            <span>시청 기록</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>재생목록</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>내 동영상</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>내 영화</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>나중에 볼 동영상</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>좋아요 표시한 동영상</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>오프라인 저장 동영상</span>
          </SidebarItem>
          <SidebarItem>
            <FaHome />
            <span>내 클립</span>
          </SidebarItem>

          <Divider/>

          <div>오프라인 저장</div>
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
  bottom: 0;
  overflow-y: auto;
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

const Divider = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
`;