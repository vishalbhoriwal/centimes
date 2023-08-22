import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  DialogTitle,
  Dialog,
} from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function DialogTitleMui(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

DialogTitleMui.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({
  open,
  handleClose,
  title,
  children,
  isButton,
}) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="chart-popup"
        open={open}
        sx={{ minWidth: '400px' }}
      >
        <DialogTitleMui
          id="chart-popup"
          style={{ minWidth: '400px' }}
          onClose={handleClose}
        >
          {title}
        </DialogTitleMui>
        <DialogContent>{children}</DialogContent>
        {isButton && (
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Save
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        )}
      </BootstrapDialog>
    </div>
  );
}
