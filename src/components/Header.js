import styled from "styled-components";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Header = () => {
  // SearchBarInput에 포커스할 시, searchIcon을 true로 바꿈
  const [searchLogo, setSearchLogo] = useState(false);
  // 음석인식 훅
  const { transcript, listening } = useSpeechRecognition();

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ 
        continuous: true,
        interimResults: true,
        language: 'ko-KR'
      });
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>

          {/* 사이드바 + 유튜브 로고 */}
          <HeaderLogo>
            <img src="/icons/sidebarIcon.svg" alt="Sidebar Logo" style={({width:"24px"})}/>
            <img src="/icons/youtubeLogo.svg" alt="YouTube Logo" style={({width:"101px",height:"20"})}/>
          </HeaderLogo>

          <SearchBarLayout>
            {/* 검색바 */}
            <SearchBar>
              {/* 여기서 돋보기 아이콘이 true가 되면 SearchBar의 왼쪽의 width가 늘어나야함 */}
              <SearchBarLeft>
                {searchLogo && (
                    <img src="/icons/searchIcon.svg" alt="Search Icon" style={({width:"18px", height:"18px"})}/>
                  )}
                  <SearchBarInput
                    placeholder="검색"
                    onFocus={() => setSearchLogo(true)}
                    onBlur={() => setSearchLogo(false)}
                    value={transcript}
                  />
                </SearchBarLeft>
              <SearchBarRight>
                <img src="/icons/searchIcon.svg" alt="Search Icon" style={({width:"18px", height:"18px"})}/>
              </SearchBarRight>
            <SpeechButton onClick={toggleListening}>
              {listening ? "음성인식중지" : "음성인식시작"}
            </SpeechButton>
            </SearchBar>
          </SearchBarLayout>

          <RightSection>
            <Make>+ 만들기</Make>
            <Notification>알림</Notification>
            <Profile>프로필</Profile>
          </RightSection>
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
  /* background-color: black; */
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
  padding-left: 10px;
`;

const SearchBarInput = styled.input`
  position: relative;
  width: 100%;
  border: none;
  height: 20px;
  
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBarRight = styled.div`
  width: 60px;
  border: 1px solid #c6c6c6;
  border-radius: 0 40px 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpeechButton = styled.button`
  border-radius: 40px;
  border: none;
`;
const RightSection = styled.div`
  display: flex;
  height: 40px;
`;

const Make = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border: 1px solid #c6c6c6;
  border-radius: 40px;
`;

const Notification = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border: 1px solid #c6c6c6;
  border-radius: 40px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c6c6c6;
  border-radius: 40px;
`;