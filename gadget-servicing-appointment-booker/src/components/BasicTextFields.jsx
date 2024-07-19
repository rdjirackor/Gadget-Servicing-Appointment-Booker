import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({label}) {
  return (
  
      <TextField  multiline label={label} variant="outlined" />
    
  );
}
