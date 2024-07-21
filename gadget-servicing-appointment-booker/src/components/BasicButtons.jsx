import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({label}) {
  return (
      <Button variant="outlined">{label}</Button>
  );
}
