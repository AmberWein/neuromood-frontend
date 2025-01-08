// This component provides navigation between the Dashboard and History pages using React Router.

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Button color="inherit" sx={{ marginRight: 2 }}>Dashboard</Button>
        <Button color="inherit">History</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;