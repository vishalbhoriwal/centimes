import React from 'react';
import { Chart } from 'react-google-charts';
import { CircularProgress } from '@mui/material';

const SankeyChart = ({ data }) => {
  return (
    <div data-testid="mock-chart" className="sankey-chart">
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="Sankey"
        loader={<CircularProgress />}
        data={data}
        options={{
          sankey: {
            node: {
              colors: ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3'],
            },
            link: {
              colorMode: 'gradient',
              colors: ['#1976d2'],
            },
          },
        }}
      />
    </div>
  );
};

export default SankeyChart;
