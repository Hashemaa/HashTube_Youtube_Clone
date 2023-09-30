import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';

import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      pt: '30px',
      pb: '30px',
      justifyContent: 'space-between',
      zIndex: 10,
    }}
  >
    <Link
      to='/HashTube'
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
