import React from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress } from '@mui/material';

const Loader = ({ loading, error, children }) => {
  if (loading) {
    return <CircularProgress data-testid="loader"  />;
  }
  if (error) {
    return <Box>Something went wrong....</Box>;
  }
  return children;
};

Loader.defaultProps = {
  error: false
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  children: PropTypes.any,
};

export default Loader;
