'use client';

import dynamic from 'next/dynamic';

const IrfanYayuk = dynamic(
  () => import('@/legacy/irfan_yayuk/components/IrfanYayuk'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <IrfanYayuk />;
}
