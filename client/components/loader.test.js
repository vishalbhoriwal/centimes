import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Loader from './loader';

describe('Loader', () => {
  it('renders loading state correctly', () => {
    const { getByTestId } = render(<Loader loading={true} />);
    const loaderComponent = getByTestId('loader');
    expect(loaderComponent).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    const { getByText } = render(<Loader loading={false} error={true} />);
    const errorText = getByText('Something went wrong....');
    expect(errorText).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Loader loading={false} error={false}>
        <div>Children Content</div>
      </Loader>
    );
    const childrenContent = getByText('Children Content');
    expect(childrenContent).toBeInTheDocument();
  });
});
