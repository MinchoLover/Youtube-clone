import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=KR&maxResults=100&key=${API_KEY}`;

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(API_URL);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <HomePageContainer>
      <VideoGrid>
        {videos.map(video => (
          <VideoCard key={video.id}>
            <ThumbnailWrapper
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {hoveredVideo === video.id ? (
                <PreviewVideo
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}`}
                  allow="autoplay"
                />
              ) : (
                <Thumbnail src={video.snippet.thumbnails.high.url} alt="Thumbnail" />
              )}
            </ThumbnailWrapper>
            <VideoInfo>
              <Avatar src={video.snippet.channelThumbnail || 'default_avatar_url'} alt="Avatar" />
              <VideoDetails>
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <ChannelName>{video.snippet.channelTitle}</ChannelName>
                <ViewsAndTime>
                  조회수 {formatViews(video.statistics.viewCount)} • {timeAgo(video.snippet.publishedAt)}
                </ViewsAndTime>
              </VideoDetails>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideoGrid>
    </HomePageContainer>
  );
};

export default HomePage;

// 조회수 포맷 함수
const formatViews = (count) => {
  return count >= 10000 ? `${(count / 10000).toFixed(1)}만회` : `${count}회`;
};

// 시간 포맷 함수
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = { 년: 31536000, 개월: 2592000, 일: 86400, 시간: 3600, 분: 60 };
  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) return `${count}${unit} 전`;
  }
  return '방금 전';
};

// 스타일
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

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
`;

const PreviewVideo = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
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
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChannelName = styled.div`
  font-size: 14px;
  color: #606060;
`;

const ViewsAndTime = styled.div`
  font-size: 14px;
  color: #606060;
`;