(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1041:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),a=e.n(r),o=e(1),i=e.n(o);function s(){return(s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){class e extends i.a.Component{constructor(t){super(t),l(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==n?void 0:n.componentWillUnmount)&&n.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:n}=this.props;return i.a.createElement("div",{ref:this.setContainerRef,id:t,className:n})}}l(e,"propTypes",{id:a.a.string,className:a.a.string});const r=e;return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes=s({},r.propTypes,{},t.propTypes)),t.defaultProps&&(r.defaultProps=t.defaultProps),e}},1064:function(t,n,e){"use strict";var r={value:function(){}};function a(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function i(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function s(t,n){for(var e,r=0,a=t.length;r<a;++r)if((e=t[r]).name===n)return e.value}function l(t,n,e){for(var a=0,o=t.length;a<o;++a)if(t[a].name===n){t[a]=r,t=t.slice(0,a).concat(t.slice(a+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=a.prototype={constructor:o,on:function(t,n){var e,r=this._,a=i(t+"",r),o=-1,u=a.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=a[o]).type)r[e]=l(r[e],t.name,n);else if(null==n)for(e in r)r[e]=l(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=a[o]).type)&&(e=s(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,a=new Array(e),o=0;o<e;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,a)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],a=0,o=r.length;a<o;++a)r[a].value.apply(n,e)}},n.a=a},1089:function(t,n,e){"use strict";e.r(n);var r=e(1064);e.d(n,"dispatch",(function(){return r.a}))},1136:function(t,n,e){var r=e(1089).dispatch,a=Math.PI/180;function o(t){return t.text}function i(){return"serif"}function s(){return"normal"}function l(t){return Math.sqrt(t.value)}function u(){return 30*(~~(6*Math.random())-3)}function c(){return 1}function f(t,n,e,r){if(!n.sprite){var o=t.context,i=t.ratio;o.clearRect(0,0,2048/i,2048/i);var s=0,l=0,u=0,c=e.length;for(--r;++r<c;){n=e[r],o.save(),o.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var f=o.measureText(n.text+"m").width*i,h=n.size<<1;if(n.rotate){var p=Math.sin(n.rotate*a),y=Math.cos(n.rotate*a),d=f*y,x=f*p,v=h*y,g=h*p;f=Math.max(Math.abs(d+g),Math.abs(d-g))+31>>5<<5,h=~~Math.max(Math.abs(x+v),Math.abs(x-v))}else f=f+31>>5<<5;if(h>u&&(u=h),s+f>=2048&&(s=0,l+=u,u=0),l+h>=2048)break;o.translate((s+(f>>1))/i,(l+(h>>1))/i),n.rotate&&o.rotate(n.rotate*a),o.fillText(n.text,0,0),n.padding&&(o.lineWidth=2*n.padding,o.strokeText(n.text,0,0)),o.restore(),n.width=f,n.height=h,n.xoff=s,n.yoff=l,n.x1=f>>1,n.y1=h>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,s+=f}for(var m=o.getImageData(0,0,2048/i,2048/i).data,w=[];--r>=0;)if((n=e[r]).hasText){for(var b=(f=n.width)>>5,M=(h=n.y1-n.y0,0);M<h*b;M++)w[M]=0;if(null==(s=n.xoff))return;l=n.yoff;for(var z=0,k=-1,T=0;T<h;T++){for(M=0;M<f;M++){var O=b*T+(M>>5),C=m[2048*(l+T)+(s+M)<<2]?1<<31-M%32:0;w[O]|=C,z|=C}z?k=T:(n.y0++,h--,T--,l++)}n.y1=n.y0+k,n.sprite=w.slice(0,(n.y1-n.y0)*b)}}}function h(t,n,e){e>>=5;for(var r,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),s=127&i,l=32-s,u=t.y1-t.y0,c=(t.y+t.y0)*e+(i>>5),f=0;f<u;f++){r=0;for(var h=0;h<=o;h++)if((r<<l|(h<o?(r=a[f*o+h])>>>s:0))&n[c+h])return!0;c+=e}return!1}function p(t,n){var e=t[0],r=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>r.x&&(r.x=n.x+n.x1),n.y+n.y1>r.y&&(r.y=n.y+n.y1)}function y(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function d(){return document.createElement("canvas")}function x(t){return"function"==typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],n=o,e=i,a=l,g=s,m=s,w=u,b=c,M=y,z=[],k=1/0,T=r("word","end"),O=null,C=Math.random,P={},N=d;function S(n,e,r){t[0],t[1];for(var a,o,i,s,l,u=e.x,c=e.y,f=Math.sqrt(t[0]*t[0]+t[1]*t[1]),p=M(t),y=C()<.5?1:-1,d=-y;(a=p(d+=y))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=f));)if(e.x=u+o,e.y=c+i,!(e.x+e.x0<0||e.y+e.y0<0||e.x+e.x1>t[0]||e.y+e.y1>t[1]||r&&h(e,n,t[0])||r&&(l=r,!((s=e).x+s.x1>l[0].x&&s.x+s.x0<l[1].x&&s.y+s.y1>l[0].y&&s.y+s.y0<l[1].y)))){for(var x,v=e.sprite,g=e.width>>5,m=t[0]>>5,w=e.x-(g<<4),b=127&w,z=32-b,k=e.y1-e.y0,T=(e.y+e.y0)*m+(w>>5),O=0;O<k;O++){x=0;for(var P=0;P<=g;P++)n[T+P]|=x<<z|(P<g?(x=v[O*g+P])>>>b:0);T+=m}return delete e.sprite,!0}return!1}return P.canvas=function(t){return arguments.length?(N=x(t),P):N},P.start=function(){var r=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/n,t.height=2048/n;var e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}(N()),o=function(t){var n=[],e=-1;for(;++e<t;)n[e]=0;return n}((t[0]>>5)*t[1]),i=null,s=z.length,l=-1,u=[],c=z.map((function(t,r){return t.text=n.call(this,t,r),t.font=e.call(this,t,r),t.style=g.call(this,t,r),t.weight=m.call(this,t,r),t.rotate=w.call(this,t,r),t.size=~~a.call(this,t,r),t.padding=b.call(this,t,r),t})).sort((function(t,n){return n.size-t.size}));return O&&clearInterval(O),O=setInterval(h,0),h(),P;function h(){for(var n=Date.now();Date.now()-n<k&&++l<s&&O;){var e=c[l];e.x=t[0]*(C()+.5)>>1,e.y=t[1]*(C()+.5)>>1,f(r,e,c,l),e.hasText&&S(o,e,i)&&(u.push(e),T.call("word",P,e),i?p(i,e):i=[{x:e.x+e.x0,y:e.y+e.y0},{x:e.x+e.x1,y:e.y+e.y1}],e.x-=t[0]>>1,e.y-=t[1]>>1)}l>=s&&(P.stop(),T.call("end",P,u,i))}},P.stop=function(){return O&&(clearInterval(O),O=null),P},P.timeInterval=function(t){return arguments.length?(k=null==t?1/0:t,P):k},P.words=function(t){return arguments.length?(z=t,P):z},P.size=function(n){return arguments.length?(t=[+n[0],+n[1]],P):t},P.font=function(t){return arguments.length?(e=x(t),P):e},P.fontStyle=function(t){return arguments.length?(g=x(t),P):g},P.fontWeight=function(t){return arguments.length?(m=x(t),P):m},P.rotate=function(t){return arguments.length?(w=x(t),P):w},P.text=function(t){return arguments.length?(n=x(t),P):n},P.spiral=function(t){return arguments.length?(M=v[t]||t,P):M},P.fontSize=function(t){return arguments.length?(a=x(t),P):a},P.padding=function(t){return arguments.length?(b=x(t),P):b},P.random=function(t){return arguments.length?(C=t,P):C},P.on=function(){var t=T.on.apply(T,arguments);return t===T?P:t},P};var v={archimedean:y,rectangular:function(t){var n=4*t[0]/t[1],e=0,r=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:e+=n;break;case 1:r+=4;break;case 2:e-=n;break;default:r-=4}return[e,r]}}}},2218:function(t,n,e){"use strict";e.r(n);var r=e(1041),a=e(80),o=e.n(a),i=e(0),s=e.n(i),l=e(1136),u=e.n(l),c=e(97);const f={square:()=>90*Math.floor(2*Math.random()),flat:()=>0,random:()=>30*Math.floor(6*Math.random()-3)},h={data:s.a.arrayOf(s.a.shape({size:s.a.number,text:s.a.string})),width:s.a.number,height:s.a.number,rotation:s.a.string,sizeRange:s.a.arrayOf(s.a.number),colorScheme:s.a.string};function p(t,n){const{data:e,width:r,height:a,rotation:i,sizeRange:s,colorScheme:l}=n,h=o.a.select(t);h.classed("superset-legacy-chart-word-cloud",!0);const p=[r,a],y=f[i]||f.flat,d=o.a.scale.linear().range(s).domain(o.a.extent(e,t=>t.size)),x=u()().size(p).words(e).padding(5).rotate(y).font("Helvetica").fontWeight("bold").fontSize(t=>d(t.size)),v=c.CategoricalColorNamespace.getScale(l);x.on("end",(function(t){h.selectAll("*").remove();const[n,e]=x.size();h.append("svg").attr("width",n).attr("height",e).append("g").attr("transform","translate("+n/2+","+e/2+")").selectAll("text").data(t).enter().append("text").style("font-size",t=>t.size+"px").style("font-weight","bold").style("font-family","Helvetica").style("fill",t=>v(t.text)).attr("text-anchor","middle").attr("transform",t=>"translate("+t.x+", "+t.y+") rotate("+t.rotate+")").text(t=>t.text)})).start()}p.displayName="WordCloud",p.propTypes=h;var y=p;n.default=Object(r.a)(y)}}]);