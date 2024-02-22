import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InfoCard({ heading, text }: { heading: string; text: string }) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={1000} component="div">
                    {heading}
                </Typography>
                <Typography variant="h3" color="text.secondary" align='right'>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}