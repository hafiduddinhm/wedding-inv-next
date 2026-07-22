'use client';

import dynamic from 'next/dynamic';

const BambangEndah = dynamic(
  () => import('@/legacy/bambang_endah_2/components/BambangEndah'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <BambangEndah />;
}
