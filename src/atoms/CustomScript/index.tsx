import React from "react";
import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script src='/js/vendor/modernizr-3.5.0.min.js'></Script>
      <Script src='/js/vendor/bootstrap.min.js'></Script>
      <Script src='/js/vendor/jquery.slicknav.js'></Script>
      <Script src='/js/vendor/slick.min.js'></Script>
      <Script src='/js/vendor/wow.min.js'></Script>
      <Script src='/js/vendor/jquery.scrollUp.min.js'></Script>
      <Script src='/js/vendor/jquery.theia.sticky.js'></Script>
      <Script src='/js/main.js'></Script>
    </>
  );
};

export default CustomScript;
