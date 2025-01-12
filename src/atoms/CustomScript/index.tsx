"use client";
import React, { useState } from "react";
import Script from "next/script";

type IScriptLoad = {
  jquery: boolean;
  modernizr: boolean;
  slicknav: boolean;
  slick: boolean;
  wow: boolean;
  scrollUp: boolean;
  sticky: boolean;
  bootstrap: boolean;
};

type ITypeScriptLoad =
  | "jquery"
  | "modernizr"
  | "bootstrap"
  | "slicknav"
  | "slick"
  | "wow"
  | "scrollUp"
  | "sticky";

const CustomScript = () => {
  const [scriptLoad, setScriptLoad] = useState<IScriptLoad>({
    jquery: false,
    modernizr: false,
    slicknav: false,
    slick: false,
    wow: false,
    scrollUp: false,
    sticky: false,
    bootstrap: false,
  });

  const updateScriptLoad = (type: ITypeScriptLoad) => {
    setScriptLoad({ ...scriptLoad, [type]: true });
  };

  return (
    <>
      <Script
        src="/js/vendor/jquery-3.5.1.min.js"
        onLoad={() => updateScriptLoad("jquery")}
      />
      {scriptLoad.jquery && (
        <Script
          src="/js/vendor/modernizr-3.5.0.min.js"
          onLoad={() => updateScriptLoad("modernizr")}
        ></Script>
      )}

      {scriptLoad.modernizr && (
        <Script
          src="/js/vendor/bootstrap.min.js"
          onLoad={() => updateScriptLoad("bootstrap")}
        ></Script>
      )}

      {scriptLoad.bootstrap && (
        <Script
          src="/js/vendor/jquery.slicknav.js"
          onLoad={() => updateScriptLoad("slicknav")}
        ></Script>
      )}
      {scriptLoad.slicknav && (
        <Script
          src="/js/vendor/slick.min.js"
          onLoad={() => updateScriptLoad("slick")}
        ></Script>
      )}
      {scriptLoad.slick && (
        <Script
          src="/js/vendor/wow.min.js"
          onLoad={() => updateScriptLoad("wow")}
        ></Script>
      )}
      {scriptLoad.wow && (
        <Script
          src="/js/vendor/jquery.scrollUp.min.js"
          onLoad={() => updateScriptLoad("scrollUp")}
        ></Script>
      )}
      {scriptLoad.scrollUp && (
        <Script
          src="/js/vendor/jquery.theia.sticky.js"
          onLoad={() => updateScriptLoad("sticky")}
        ></Script>
      )}
      {scriptLoad.sticky && <Script src="/js/main.js"></Script>}
    </>
  );
};

export default CustomScript;
