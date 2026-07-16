"use strict";var a=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=a(function(_,t){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist'),s=/[\uDC00-\uDFFF]/,v=/[\uD800-\uDBFF]/;function f(i){var r,e;if(!n(i))throw new TypeError(o('2DX3B',i));for(r=0,e=0;e<i.length;e++)if(v.test(i[e])){if(e===i.length-1){r+=1;break}s.test(i[e+1])&&(e+=1,r+=1)}else r+=1;return r}t.exports=f
});var F=u();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
