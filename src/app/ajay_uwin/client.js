'use client';

import dynamic from 'next/dynamic';

const AjayUwin = dynamic(
  () => import('@/legacy/ajay_uwin/components/AjayUwin'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <AjayUwin />;
}
