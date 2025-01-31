import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  // SearchBarInput에 포커스할 시, searchIcon을 true로 바꿈
  const [searchLogo, setSearchLogo] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>

          <HeaderLogo>
            <img src="/icons/sidebarIcon.svg" alt="Sidebar Logo" style={({width:"24px"})}/>
            <img src="/icons/youtubeLogo.svg" alt="YouTube Logo" style={({width:"101px",height:"20"})}/>
          </HeaderLogo>

          <SearchBarLayout>
            <SearchBar>
              <SearchBarLeft searchLogo={searchLogo}>
                {searchLogo && (
                  <img src="/icons/searchIcon.svg" alt="Search Icon" style={({width:"18px", height:"18px"})}/>
                )}
                <SearchBarInput
                  placeholder="검색"
                  onFocus={() => setSearchLogo(true)}
                  onBlur={() => setSearchLogo(false)}
                />
              </SearchBarLeft>
              <SearchBarRight>
                <img src="/icons/searchIcon.svg" alt="Search Icon" style={({width:"18px", height:"18px"})}/>
              </SearchBarRight>
            </SearchBar>
          </SearchBarLayout>

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
  /* background-color: blue; */
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 56px; */
  align-items: center;
  flex-direction: row;
`;

const HeaderLogo = styled.div`
 display: flex;
`;

const SearchBarLayout = styled.div`
  flex: 0 1 732px;
  flex-direction: row;
  align-items: center;
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  height: 40px;
  /* align-items: center; */
`;


const SearchBarLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid #c6c6c6;
  margin-left: 32px;
  border-radius: 40px 0 0 40px;
`;

const SearchBarInput = styled.input`
  position: relative;
  width: 100%;
  border: none;

  ::placeholder {
    font-size: 1.6rem;
    color: #c6c6c6;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBarRight = styled.div`
  border: 1px solid #c6c6c6;
  border-radius: 0 40px 40px 0;
  display: flex;
  align-items: center;
`;