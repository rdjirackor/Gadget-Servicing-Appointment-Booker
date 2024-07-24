import * as React from 'react';
import { useState } from 'react';
import BasicTextFields from './BasicTextFields';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReturn = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className='congratulations' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Congratulations!</h1>
        <p>   Your message has been sent successfully.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleReturn}>
            Return
          </Button>
        </div>
      </div>
    );
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mainform'>
        <div className='form'>
          <BasicTextFields label={"Name"} />
          <BasicTextFields label={"Company"} />
          <BasicTextFields label={"Email"} />
          <BasicTextFields label={"Phone number"} />
        </div>
        <div className='Message'>
          <TextField multiline rows={4} label="Message" fullWidth />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </div>
    </form>
  );
}
