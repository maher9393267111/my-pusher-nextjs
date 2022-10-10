/* eslint-disable @next/next/no-sync-scripts */
// pages/_document.js
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
      
    <link rel="stylesheet" href="/assets/css/vendor/font-awesome.min.css"/>
    <link rel="stylesheet" href="/assets/css/vendor/plaza-icon.css"/>
    <link rel="stylesheet" href="/assets/css/vendor/jquery-ui.min.css"/>

    <link rel="stylesheet" href="/assets/css/plugins/slick.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/animate.min.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/aos.min.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/nice-select.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/venobox.min.css"/>

    <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>

  
    
   
   
    <Script src={"/assets/js/vendor/jquery-ui.min.js"}/>

  
    <Script src={"/assets/js/plugins/slick.min.js"}/>
    <Script src={"/assets/js/plugins/material-scrolltop.js"}/>
    <Script src={"/assets/js/plugins/jquery.nice-select.min.js"}/>
    <Script src={"/assets/js/plugins/jquery.zoom.min.js"}/>
    <Script src={"/assets/js/plugins/venobox.min.js"}/>
    <Script src={"/assets/js/plugins/aos.min.js"}/>
    <Script src={"/assets/js/plugins/ajax-mail.js"}/>


    <Script src={'/assets/js/vendor/modernizr-3.11.2.min.js'}/>
    <Script src={"/assets/js/vendor/jquery-3.6.0.min.js"}/>
    <Script src={"/assets/js/vendor/jquery-migrate-3.3.2.min.js"}/>
    <Script src={"/assets/js/vendor/bootstrap.bundle.min.js"}/>
   



      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}