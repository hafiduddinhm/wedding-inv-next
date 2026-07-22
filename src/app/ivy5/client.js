'use client';

import dynamic from 'next/dynamic';

const Ivy5 = dynamic(() => import('@/legacy/ivy5/components/ivy5'), {
  ssr: false,
});

export default function ClientPage() {
  return <Ivy5 />;
}
