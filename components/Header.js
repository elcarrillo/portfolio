import Head from 'next/head';

export const Header = ({ seo }) => (
  <Head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={seo.image} />
    <meta property="og:type" content="website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
