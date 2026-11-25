import Head from 'next/head';
import { useRouter } from 'next/router';

export const Header = ({ seo }) => {
  const { basePath } = useRouter();

  return (
  <Head>
    <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
    <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={seo.image} />
    <meta property="og:type" content="website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  );
};
