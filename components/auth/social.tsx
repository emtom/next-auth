'use client';

import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Button } from '@/components/ui/button';


export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={'lg'}
        className='w-full'
        variant={'outline'}
        onClick={() => {}}
      >
        <FaGoogle className='h-5 w-5' />
      </Button>
      <Button
        size={'lg'}
        className='w-full'
        variant={'outline'}
        onClick={() => {}}
      >
        <FaFacebook className='h-5 w-5' />
      </Button>
    </div>
  )
}