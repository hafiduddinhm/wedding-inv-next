'use client';

import dynamic from 'next/dynamic';

const PutriIpan = dynamic(
  () => import('@/legacy/putri_ipan/components/PutriIpan'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <PutriIpan />;
}
