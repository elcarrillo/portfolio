import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/custom.global.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Validate Google Analytics environment variable in development mode only
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      console.warn('Google Analytics tracking ID is missing.');
    }
  }, []);

  useEffect(() => {
    // Load Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Google Analytics route change tracking
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Load the Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
