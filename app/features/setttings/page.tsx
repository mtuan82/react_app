'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));


export default function Settings() {
    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid xs={5}>
                    <Item sx={{textAlign: 'center'}}>
                        <div style={{ display: 'inline-block', marginTop: 30 }}>
                            <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg" />
                        </div>
                        <Typography sx={{ paddingTop: 2 }}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
                        <Typography sx={{ paddingBottom: 5 }}> max size of 3 Mb</Typography>
                        <Button sx={{ marginBottom: 5 }} variant="outlined" color="error">Delete User</Button>
                    </Item>
                </Grid>
                <Grid xs={11} sx={{textAlign: 'left'}}>
                    <Item>info</Item>
                </Grid>
            </Grid>
        </Box>
    )
}