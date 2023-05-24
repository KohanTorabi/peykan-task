import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { strings } from '@/resources/strings';
import { validateForm } from './utils';
import { SignUpFormData, SignUpProps, rawSignUpFormData } from './types';

export default function SignUp({ onSignUpFinish }: SignUpProps) {
  const [errors, setErrors] = useState<SignUpFormData>(rawSignUpFormData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const validationErrors = validateForm(Object.fromEntries(data));

    if (
      !(
        validationErrors.email &&
        validationErrors.password &&
        validationErrors.username
      )
    ) {
      onSignUpFinish(Object.fromEntries(data));
    } else {
      setErrors({ ...validationErrors });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;

    // Clear the error for the corresponding field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {strings['sign_up_button']}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              required
              fullWidth
              id="username"
              label={strings['username_label']}
              autoFocus
              error={!!errors.username}
              helperText={errors.username}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label={strings['email_address']}
              name="email"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label={strings['password_label']}
              type="password"
              id="password"
              autoComplete="new-password"
              error={!!errors.password}
              helperText={errors.password}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          {strings['sign_up_button']}
        </Button>
      </Box>
    </Box>
  );
}
