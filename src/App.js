import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/HashTube' exact element={<Feed />} />
        <Route path='/HashTube/video/:id' element={<VideoDetail />} />
        <Route path='/HashTube/channel/:id' element={<ChannelDetail />} />
        <Route path='/HashTube/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
