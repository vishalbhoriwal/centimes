import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Modal from './modal';

describe('Modal', () => {
  it('renders the modal correctly when open', () => {
    const handleClose = jest.fn();
    const { getByText, getByRole } = render(
      <Modal open={true} handleClose={handleClose} title="Test Modal">
        Modal Content
      </Modal>
    );

    const modalTitle = getByText('Test Modal');
    const modalContent = getByText('Modal Content');
    const closeButton = getByRole('button', { name: 'close' });

    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('calls handleClose when close button is clicked', () => {
    const handleClose = jest.fn();
    const { getByRole } = render(
      <Modal open={true} handleClose={handleClose} title="Test Modal">
        Modal Content
      </Modal>
    );

    const closeButton = getByRole('button', { name: 'close' });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  it('renders the buttons when isButton is true', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal
        open={true}
        handleClose={handleClose}
        title="Test Modal"
        isButton={true}
      >
        Modal Content
      </Modal>
    );

    const saveButton = getByText('Save');
    const cancelButton = getByText('Cancel');

    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('calls handleClose when Save button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal
        open={true}
        handleClose={handleClose}
        title="Test Modal"
        isButton={true}
      >
        Modal Content
      </Modal>
    );

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    expect(handleClose).toHaveBeenCalled();
  });

  it('calls handleClose when Cancel button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal
        open={true}
        handleClose={handleClose}
        title="Test Modal"
        isButton={true}
      >
        Modal Content
      </Modal>
    );

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalled();
  });
});
