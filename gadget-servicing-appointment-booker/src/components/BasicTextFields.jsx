import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({label}) {
  return (
  
      <TextField id="outlined-basic" label={label} variant="outlined" />
    
  );
}
