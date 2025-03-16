"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(_,t){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist'),s=/[\uDC00-\uDFFF]/,v=/[\uD800-\uDBFF]/;function f(e){var r,i;if(!n(e))throw new TypeError(o('null3B',e));for(r=0,i=0;i<e.length;i++)if(v.test(e[i])){if(i===e.length-1){r+=1;break}s.test(e[i+1])&&(i+=1,r+=1)}else r+=1;return r}t.exports=f
});var F=u();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
