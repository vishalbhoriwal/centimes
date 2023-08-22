import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './form';
import '@testing-library/jest-dom'

describe('Form', () => {
  it('renders form fields and buttons', () => {
    const initialValues = {
      from: '',
      to: '',
      value: 0,
    };
    const onSubmit = jest.fn();
    const onCancel = jest.fn();

    const { getByLabelText, getByText } = render(
      <Form
        initialState={initialValues}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );

    const fromField = getByLabelText('From');
    const toField = getByLabelText('To');
    const valueField = getByLabelText('Value');
    const submitButton = getByText('Submit');
    const cancelButton = getByText('Cancel');

    expect(fromField).toBeInTheDocument();
    expect(toField).toBeInTheDocument();
    expect(valueField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('calls onCancel when Cancel button is clicked', () => {
    const initialValues = {
      from: '',
      to: '',
      value: 0,
    };
    const onSubmit = jest.fn();
    const onCancel = jest.fn();

    const { getByText } = render(
      <Form
        initialState={initialValues}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
