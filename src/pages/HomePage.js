import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomePageContainer>
      <VideoGrid>
        {Array.from({ length: 20 }).map((_, index) => (
          <VideoCard key={index}>
            <Thumbnail />
            <VideoInfo>
              <Avatar />
              <VideoDetails>
                <VideoTitle>비디오 제목 {index + 1}</VideoTitle>
                <ChannelName>채널 이름</ChannelName>
                <ViewsAndTime>조회수 1.2만회 • 1일 전</ViewsAndTime>
              </VideoDetails>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideoGrid>
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  padding: 20px;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
  background-color: #ccc;
  border-radius: 10px;

  :hover {
    background-color: black;
    border-radius: none;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ChannelName = styled.div`
  font-size: 14px;
  color: #606060;
`;

const ViewsAndTime = styled.div`
  font-size: 14px;
  color: #606060;
`;