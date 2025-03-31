'use client';

import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

import { signIn } from 'next-auth/react';

export const Social = () => {

  const handleSignIn = (provider: string) => {
    signIn(provider, {
      callbackUrl: '/settings',
    });
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={'lg'}
        className='w-full'
        variant={'outline'}
        onClick={() => handleSignIn('google')}
      >
        <FaGoogle className='h-5 w-5' />
      </Button>
      <Button
        size={'lg'}
        className='w-full'
        variant={'outline'}
        onClick={() => handleSignIn('github')}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}