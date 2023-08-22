import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  from: Yup.string().required('From is required'),
  to: Yup.string().required('To is required'),
  value: Yup.number()
    .required('Value is required')
    .min(0, 'Value must be greater than or equal to 0'),
});

const Form = ({ initialState, onSubmit, onCancel }) => {
  const formik = useFormik({
    initialValues: { ...initialState },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          label="From"
          name="from"
          error={formik.touched.from && Boolean(formik.errors.from)}
          helperText={formik.touched.from && formik.errors.from}
          style={{ marginBottom: 10 }}
          {...formik.getFieldProps('from')}
        />
        <TextField
          label="To"
          name="to"
          error={formik.touched.to && Boolean(formik.errors.to)}
          helperText={formik.touched.to && formik.errors.to}
          style={{ marginBottom: 10 }}
          {...formik.getFieldProps('to')}
        />
        <TextField
          label="Value"
          name="value"
          type="number"
          error={formik.touched.value && Boolean(formik.errors.value)}
          helperText={formik.touched.value && formik.errors.value}
          style={{ marginBottom: 10 }}
          {...formik.getFieldProps('value')}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={onCancel} variant="outlined" color="primary">
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
