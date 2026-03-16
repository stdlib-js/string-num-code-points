// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";var e=/[\uDC00-\uDFFF]/,s=/[\uD800-\uDBFF]/;function i(i){var n,o;if(!t(i))throw new TypeError(r("null3B",i));for(n=0,o=0;o<i.length;o++)if(s.test(i[o])){if(o===i.length-1){n+=1;break}e.test(i[o+1])&&(o+=1,n+=1)}else n+=1;return n}export{i as default};
//# sourceMappingURL=index.mjs.map
