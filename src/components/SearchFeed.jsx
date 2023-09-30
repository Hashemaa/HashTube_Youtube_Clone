import { useState, useEffect } from 'react';
// import { Box, Stack, Typography } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
// import { Sidebar, Videos } from './';
import { Videos } from './';

const SearchFeed = () => {
  // const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
    //   setVideos(data.items)
    // );
  }, [searchTerm]);
  // }, [searchTerm, selectedCategory]);

  return (
    // <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
    //   <Box
    //     sx={{
    //       height: { sx: 'auto', md: '92vh' },
    //       borderRight: '1px solid #3d3d3d',
    //       px: { sx: 0, md: 2 },
    //     }}
    //   >
    //     <Sidebar
    //       selectedCategory={selectedCategory}
    //       setSelectedCategory={setSelectedCategory}
    //     />
    //     <Typography
    //       className='copyright'
    //       variant='body2'
    //       sx={{ mt: 1.5, color: '#fff' }}
    //     >
    //       Copyright 2023 Hashweb
    //     </Typography>
    //   </Box>

    <Box p={2} sx={{ overflowY: 'auto', heigh: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#F27EAC' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} includeChannel={true} />
    </Box>
    // </Stack>
  );
};

export default SearchFeed;
