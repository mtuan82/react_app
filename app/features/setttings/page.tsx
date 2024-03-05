'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));


export default function Settings() {
    return (
        <Box sx={{ display: 'block' }}>
            <Grid>
                <Item sx={{ paddingLeft: 3, textAlign: 'left' }}>
                    <Typography sx={{ marginLeft: 2, paddingTop: 3, paddingBottom: 4, fontSize: 24 }}> Notifications</Typography>
                    <Divider></Divider>
                    <div style={{display:'flex'}}>
                        <div>
                            <Typography sx={{ marginLeft: 2, paddingTop: 3, paddingBottom: 4, fontSize: 24 }}> Notification</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                                <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                                <FormControlLabel control={<Checkbox />} label="Text Messages" />
                                <FormControlLabel control={<Checkbox />} label="Phone calls" />
                            </FormGroup>
                        </div>
                        <div style={{paddingLeft:200}}>
                            <Typography sx={{ marginLeft: 2, paddingTop: 3, paddingBottom: 4, fontSize: 24 }}> Message</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                                <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                                <FormControlLabel control={<Checkbox />} label="Text Messages" />
                            </FormGroup>
                        </div>
                    </div>
                    <div style={{textAlign:'right',padding:5}}><Button variant="contained" color="primary">Save</Button></div>
                </Item>
            </Grid>
        </Box>
    )
}