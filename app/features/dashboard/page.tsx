"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import InfoCard from '../shared/InfoCard';
import { BarChart } from '@mui/x-charts/BarChart';
import { Block } from '@mui/icons-material';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'block' }} >
      <div>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid xs={4}>
            <InfoCard
              heading="Orders"
              text="1200"
            />
          </Grid>
          <Grid xs={4}>
            <InfoCard
              heading="Inventory"
              text="5000"
            />
          </Grid>
          <Grid xs={4}>
            <InfoCard
              heading="Return"
              text="2500"
            />
          </Grid>
          <Grid xs={12}>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['2021', '2022', '2023'] }]}
              series={[{ data: [4200, 6000, 6500] }, { data: [14000, 17000, 19300] }, { data: [1000, 1000, 1600] }]}
              width={1000}
              height={450}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}
