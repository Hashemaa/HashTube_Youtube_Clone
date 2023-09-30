import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';
import { demoChannelTitle, demoChannelId } from '../utils/constants';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (selectedCategory === demoChannelTitle) {
      fetchFromAPI(
        `search?channelId=${demoChannelId}&part=snippet&order=date`
      ).then((data) => setVideos(data?.items));
    } else {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
        setVideos(data.items)
      );
    }
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '89vh' },
          borderRight: '1px solid gray',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023{' '}
          <a href='https://hashweb.ca' target='_blank' rel='noreferrer'>
            Hashweb
          </a>
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', heigh: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#F27EAC' }}>Videos</span>
        </Typography>

        <Videos videos={videos} includeChannel={true} />
      </Box>
    </Stack>
  );
};

export default Feed;
