import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy='beforeInteractive'>
          {`
          if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            //check if there is any key for theme in local storage and if the system color theme is dark
            
            document.documentElement.classList.add('dark'); // add dark to the <html></html> itself as <html className='dark'></html>
        } else {
            document.documentElement.classList.remove('dark'); // remove dark from the html document if any
            
        }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
