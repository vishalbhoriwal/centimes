import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import SankeyChart from './chart';

describe('SankeyChart', () => {
  it('renders chart with provided data', () => {
    const mockData = [
      ['From', 'To', 'Value'],
      ['Incomes', 'Salary', 5000],
      ['Salary', 'Bills', 3000],
      ['Bills', 'Electric Bill', 1000],
      ['Bills', 'Mobile Bill', 2000],
    ];

    const { getByTestId } = render(<SankeyChart data={mockData} />);
    const chartElement = getByTestId('mock-chart');

    expect(chartElement).toBeInTheDocument();
  });
});
