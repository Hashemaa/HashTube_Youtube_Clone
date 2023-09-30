import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, includeChannel, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='flex-start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && includeChannel && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
