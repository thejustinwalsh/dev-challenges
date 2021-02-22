/** @jsxImportSource @welldone-software/why-did-you-render */
import React from 'react';
import whyDidYouRender from "@welldone-software/why-did-you-render";

whyDidYouRender(React, {
  logOnDifferentValues: true,
  trackHooks: true,
  titleColor: "green",
  diffNameColor: "aqua",
  trackAllPureComponents: true
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}