'use client';

import dynamic from 'next/dynamic';

const ElmaHendra = dynamic(
  () => import('@/legacy/elma_hendra/components/ElmaHendra'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <ElmaHendra />;
}
