import * as React from 'react';
import BasicTextFields from './BasicTextFields';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
  return (
   
      <div className='mainform'>
       <div className='form'>
       <BasicTextFields  label={"Name"}/>
        <BasicTextFields  label={"Company"}/>
        <BasicTextFields  label={"Email"}/>
        <BasicTextFields  label={"Phone number"}/>
       </div>
       <div className='Message'>
       <TextField multiline rows={4} label="Message" fullWidth/>
       </div>
        
      </div>
      
       
       
       
       
     
      
      
     
    
  );
}
