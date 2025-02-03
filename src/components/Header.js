import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { useVideo } from "./VideoContext";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const API_KEY = process.env.REACT_APP_API_KEY;
const SEARCH_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&regionCode=KR&key=${API_KEY}`;

const Header = ({setVideos}) => {
  // const { setVideos } = useVideo();
  const [searchLogo, setSearchLogo] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const { transcript, listening } = useSpeechRecognition();

  // 음성 인식 토글
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true, interimResults: true, language: "ko-KR" });
    }
  };

  // 검색 요청 함수
  const handleSearch = async (event) => {
    event.preventDefault(); 
    console.log("검색 버튼 클릭됨");
    if (!searchTerm.trim()) return; 
  
    try {
      const response = await axios.get(`${SEARCH_API_URL}&q=${encodeURIComponent(searchTerm)}`);
      console.log("API 응답:", response.data);
      setVideos(response.data.items.map(item => ({
        id: item.id.videoId,
        snippet: item.snippet
      })));
    } catch (error) {
      console.error("검색 요청 실패:", error);
    }
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* 사이드바 + 유튜브 로고 */}
        <HeaderLogo>
          <img src="/icons/sidebarIcon.svg" alt="Sidebar Logo" style={{ width: "24px" }} />
          <img src="/icons/youtubeLogo.svg" alt="YouTube Logo" style={{ width: "101px", height: "20px" }} />
        </HeaderLogo>

        {/* 검색바 */}
        <SearchBarLayout as="form" onSubmit={handleSearch}>
          <SearchBar>
            <SearchBarLeft>
              {searchLogo && <img src="/icons/searchIcon.svg" alt="Search Icon" style={{ width: "18px", height: "18px" }} />}
              <SearchBarInput
                placeholder="검색"
                onFocus={() => setSearchLogo(true)}
                onBlur={() => setSearchLogo(false)}
                value={transcript || searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBarLeft>
            <SearchBarRight type="submit">
              <img src="/icons/searchIcon.svg" alt="Search Icon" style={{ width: "18px", height: "18px" }} />
            </SearchBarRight>
            <SpeechButton onClick={toggleListening}>
              {listening ? "음성인식중지" : "음성인식시작"}
            </SpeechButton>
          </SearchBar>
        </SearchBarLayout>

        {/* 우측 메뉴 */}
        <RightSection>
          <Make>+ 만들기</Make>
          <Notification>알림</Notification>
          <Profile>프로필</Profile>
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

// 스타일 코드 (기존 코드 유지)
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const HeaderLogo = styled.div`
 display: flex;
`;

const SearchBarLayout = styled.form`
  flex: 0 1 732px;
  flex-direction: row;
  align-items: center;
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  height: 40px;
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

const SearchBarRight = styled.button`
  width: 60px;
  border: 1px solid #c6c6c6;
  border-radius: 0 40px 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
`;

const SpeechButton = styled.button`
  border-radius: 40px;
  border: none;
  cursor: pointer;
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