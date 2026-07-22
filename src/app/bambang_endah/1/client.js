'use client';

import dynamic from 'next/dynamic';

const BambangEndah = dynamic(
  () => import('@/legacy/bambang_endah_1/components/BambangEndah'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <BambangEndah />;
}
