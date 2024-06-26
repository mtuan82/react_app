'use client';
import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import Article from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';;
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '../theme/themeRegistry';
import { logout } from "../api/services/authservice";
import StoreProvider from '../redux/storeProvider';
import { AccountBox } from '@mui/icons-material';
import { getCurrentUser,getClaimUser } from "../api/services/authservice";
import { useEffect, useState } from 'react';

const DRAWER_WIDTH = 200;

const LINKS = [
  { text: 'Home', href: '/features/dashboard', icon: HomeIcon },
  { text: 'Table', href: '/features/table', icon: Article }

];

const PLACEHOLDER_LINKS = [
  { text: 'Account', href: '/features/account', icon: AccountBox },
  { text: 'Settings', href: '/features/setttings', icon: SettingsIcon }
];

export default function ComLayout({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(getCurrentUser());
  }, []);

  return (
    <section>
      <ThemeRegistry>
        <AppBar position="fixed" sx={{ zIndex: 2000 }}>
          <Toolbar sx={{ backgroundColor: '#f50057' }}>
            <DashboardIcon sx={{ color: 'white', mr: 2, transform: 'translateY(-2px)' }} />
            <Typography variant="h6" color="white" sx={{ flexGrow: 1 }}>
              Demo Next.js Router
            </Typography>
            <Typography>
              { username }
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              top: ['48px', '56px', '64px'],
              height: 'auto',
              bottom: 0,
            },
          }}
          variant="permanent"
          anchor="left">
          <Divider />
          <List>
            {LINKS.map(({ text, href, icon: Icon }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton component={Link} href={href}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mt: 'auto' }} />
          <List>
            {
              PLACEHOLDER_LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton LinkComponent={Link} href={href} >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))
            }
            <ListItem key='Logout' disablePadding>
              <ListItemButton LinkComponent={Link} href='/' onClick={() => {
                logout();
              }} >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            ml: `${DRAWER_WIDTH}px`,
            paddingTop: 0,
            marginTop: 0
          }}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Box>
      </ThemeRegistry>
    </section>
  );
}
