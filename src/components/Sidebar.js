import styled from 'styled-components';

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarContainer>
          <h1>홈</h1>
          <h1>쇼츠</h1>
          <h1>구독</h1>
          <h1>유튜브 뮤직</h1>
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
  top: 100px;
`;
const SidebarContainer = styled.div`
  
  background-color: #f8f9fa;
`;