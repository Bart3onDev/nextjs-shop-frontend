'use client';

import { Button, Stack, TextField, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import createUser from './create-user';
import { useActionState } from 'react';
import { FormResponse } from '@/app/common/interfaces/form-response.interface';
import { redirect } from 'next/navigation';

export default function Signup() {
  const [error, submitAction] = useActionState(
    async (previousState: FormResponse | null, formData: FormData) => {
      const error: FormResponse = await createUser(previousState, formData);
      if (error) {
        return error;
      }
      redirect('/');
    },
    null
  );

  return (
    <form action={submitAction} className='w-full max-w-xs'>
      <Stack spacing={2}>
        <Typography variant='h2'>SIGN IN</Typography>

        <TextField
          name='email'
          label='Email'
          variant='outlined'
          type='email'
          helperText={error?.error}
          error={!!error?.error}
        />
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          type='password'
          helperText={error?.error}
          error={!!error?.error}
        />
        <Button type='submit' variant='contained'>
          Sign up
        </Button>
        <Link component={NextLink} href='/auth/login' className='self-center'>
          Login
        </Link>
      </Stack>
    </form>
  );
}
