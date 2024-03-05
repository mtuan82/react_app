'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));


export default function Account() {
    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid xs={5}>
                    <Item sx={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', marginTop: 30 }}>
                            <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg" />
                        </div>
                        <Typography sx={{ paddingTop: 2 }}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
                        <Typography sx={{ paddingBottom: 5 }}> max size of 3 Mb</Typography>
                        <Button sx={{ marginBottom: 5 }} variant="outlined" color="error">Delete User</Button>
                    </Item>
                </Grid>
                <Grid xs={11} columns={2}>
                    <Item>
                        <Typography sx={{ marginLeft: 2, paddingTop: 2, paddingBottom: 3, fontSize: 24 }}> Profile</Typography>
                        <Divider></Divider>
                        <TextField sx={{ margin: 2, width: 400 }} required id="FName" label="First Name" type="text" variant="outlined" />
                        <TextField sx={{ margin: 2, width: 400 }} required id="LName" label="Last Name" type="text" variant="outlined" />
                        <TextField sx={{ margin: 2, width: 400 }} required id="Email" label="Email" type="text" variant="outlined" />
                        <TextField sx={{ margin: 2, width: 400 }} required id="Phone" label="Phone" type="text" variant="outlined" />
                        <TextField sx={{ margin: 2, width: 400 }} required id="Country" label="Country" type="text" variant="outlined" />
                        <FormControl sx={{ margin: 2, width: 400 }}>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select required id="State" label="State" variant="outlined">
                                <MenuItem value={1}>Texas</MenuItem>
                                <MenuItem value={2}>Florida</MenuItem>
                                <MenuItem value={3}>California</MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{textAlign:'right',marginRight:30}}>
                            <Button sx={{ marginBottom: 3 }} variant="contained" color="primary">Save</Button>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}