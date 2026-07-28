import {notFound} from 'next/navigation';
import {registry} from '@/couples/registry';
import ClientPage from './client';

export function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({
    slug: slug.split('/'),
  }));
}

export function generateMetadata({params}) {
  const key = params.slug.join('/');
  const data = registry[key];
  if (!data) return {};

  const url = `https://menghitunghari2.vercel.app/${key}`;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url,
      ...(data.ogImage ? {images: [data.ogImage]} : {}),
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function Page({params}) {
  const key = params.slug.join('/');
  const data = registry[key];
  if (!data) notFound();
  return <ClientPage data={data} />;
}
