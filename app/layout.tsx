import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuLink from '@mui/material/Link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ThemeRegistry from './theme/themeRegistry';

const DRAWER_WIDTH = 10;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" component='div' sx={{ flexGrow: 1 }} color="text.primary">
                Demo Next.js Router
              </Typography>
              <MenuLink sx={{ mr: 1}} underline='none' href="/auth/signup">Register</MenuLink>
              <MenuLink sx={{ mr: 2}} underline='none' href="/auth/login">Login</MenuLink>
            </Toolbar>
          </AppBar>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '5px'],
              p: 1,
            }}>
              {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
