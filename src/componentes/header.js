import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css'; // Asegúrate de migrar y ajustar los estilos relevantes

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#f85a4f' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
          Menu de Tablas - Jocelyn Michelle Morales Montiel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;