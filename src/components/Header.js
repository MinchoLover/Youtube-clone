import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>사이드바 로고 + 유튜브 로고</h1>
          <h1>서치바 + 음성 로고</h1>
          <h1>만들기 + 알림 + 유저 프로필</h1>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: blue;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

