(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{651:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var a,_chart=__webpack_require__(0),_Sankey=(a=__webpack_require__(987))&&a.__esModule?a:{default:a};var _default=(0,_chart.reactify)(_Sankey.default);exports.default=_default},655:function(module,exports,__webpack_require__){"use strict";var _core=__webpack_require__(25);function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}exports.__esModule=!0,exports.default=exports.PREVIEW_VALUE=void 0;exports.PREVIEW_VALUE=12345.432;var NumberFormatter=function(a){function b(b){var c;_defineProperty(_assertThisInitialized(_assertThisInitialized(c=a.call(this,function(a){return c.format(a)})||this)),"id",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"label",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"description",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"formatFunc",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"isInvalid",void 0);var d=b.id,e=void 0===d?(0,_core.isRequired)("config.id"):d,f=b.label,g=b.description,h=void 0===g?"":g,i=b.formatFunc,j=void 0===i?(0,_core.isRequired)("config.formatFunc"):i,k=b.isInvalid;return c.id=e,c.label=f||e,c.description=h,c.formatFunc=j,c.isInvalid=void 0!==k&&k,c}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.format=function(a){var b=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.isNaN;return null==a||d(a)?""+a:a===c?"∞":a===b?"-∞":this.formatFunc(a)},c.preview=function(a){return void 0===a&&(a=12345.432),a+" => "+this.format(a)},b}(_core.ExtensibleFunction);exports.default=NumberFormatter},657:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _default={DOLLAR:"$,.2f",DOLLAR_CHANGE:"+$,.2f",DOLLAR_ROUND:"$,d",DOLLAR_ROUND_CHANGE:"+$,d",FLOAT:",.2f",FLOAT_1_POINT:",.1f",FLOAT_2_POINT:",.2f",FLOAT_3_POINT:",.3f",FLOAT_CHANGE:"+,.2f",FLOAT_CHANGE_1_POINT:"+,.1f",FLOAT_CHANGE_2_POINT:"+,.2f",FLOAT_CHANGE_3_POINT:"+,.3f",INTEGER:",d",INTEGER_CHANGE:"+,d",PERCENT:",.2%",PERCENT_1_POINT:",.1%",PERCENT_2_POINT:",.2%",PERCENT_3_POINT:",.3%",PERCENT_CHANGE:"+,.2%",PERCENT_CHANGE_1_POINT:"+,.1%",PERCENT_CHANGE_2_POINT:"+,.2%",PERCENT_CHANGE_3_POINT:"+,.3%",SI:".3s",SI_1_DIGIT:".1s",SI_2_DIGIT:".2s",SI_3_DIGIT:".3s"};exports.default=_default},658:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b,c=a.description,d=a.formatString,e=void 0===d?(0,_core.isRequired)("config.formatString"):d,f=a.label,g=!1;try{b=(0,_d3Format.format)(e)}catch(a){b=function(a){return a+" (Invalid format: "+e+")"},g=!0}return new _NumberFormatter.default({description:c,formatFunc:b,id:e,isInvalid:g,label:f})};var a,_d3Format=__webpack_require__(239),_core=__webpack_require__(25),_NumberFormatter=(a=__webpack_require__(655))&&a.__esModule?a:{default:a}},659:function(module,exports,__webpack_require__){"use strict";var _NumberFormats=_interopRequireDefault(__webpack_require__(657)),_NumberFormatter=_interopRequireWildcard(__webpack_require__(655)),_NumberFormatterRegistrySingleton=_interopRequireWildcard(__webpack_require__(663)),_createD3NumberFormatter=_interopRequireDefault(__webpack_require__(658)),_createSiAtMostNDigitFormatter=_interopRequireDefault(__webpack_require__(665));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.__esModule=!0,exports.getNumberFormatter=exports.formatNumber=exports.PREVIEW_VALUE=exports.createSiAtMostNDigitFormatter=exports.createD3NumberFormatter=exports.getNumberFormatterRegistry=exports.NumberFormatter=exports.NumberFormats=void 0,exports.NumberFormats=_NumberFormats.default,exports.NumberFormatter=_NumberFormatter.default,exports.PREVIEW_VALUE=_NumberFormatter.PREVIEW_VALUE,exports.getNumberFormatterRegistry=_NumberFormatterRegistrySingleton.default,exports.formatNumber=_NumberFormatterRegistrySingleton.formatNumber,exports.getNumberFormatter=_NumberFormatterRegistrySingleton.getNumberFormatter,exports.createD3NumberFormatter=_createD3NumberFormatter.default,exports.createSiAtMostNDigitFormatter=_createSiAtMostNDigitFormatter.default},663:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.getNumberFormatter=function(a){return getInstance().get(a)},exports.formatNumber=function(a,b){return getInstance().format(a,b)},exports.default=void 0;var a,_core=__webpack_require__(25),_NumberFormatterRegistry=(a=__webpack_require__(664))&&a.__esModule?a:{default:a};var getInstance=(0,_core.makeSingleton)(_NumberFormatterRegistry.default),_default=getInstance;exports.default=_default},664:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _core=__webpack_require__(25),_createD3NumberFormatter=_interopRequireDefault(__webpack_require__(658)),_NumberFormats=_interopRequireDefault(__webpack_require__(657));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var NumberFormatterRegistry=function(a){function b(){return a.call(this,{initialDefaultKey:_NumberFormats.default.SI,name:"NumberFormatter"})||this}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.get=function(b){var c=(""+(b||this.defaultKey)).trim();if(this.has(c))return a.prototype.get.call(this,c);var d=(0,_createD3NumberFormatter.default)({formatString:c});return this.registerValue(c,d),d},c.format=function(a,b){return this.get(a)(b)},b}(_core.RegistryWithDefaultKey);exports.default=NumberFormatterRegistry},665:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){void 0===a&&(a={});var b=a,c=b.description,d=b.n,e=void 0===d?3:d,f=b.id,g=b.label,h=(0,_d3Format.format)("."+e+"s");return new _NumberFormatter.default({description:c,formatFunc:function(a){var b=h(a);return"A">b.slice(-1)?parseFloat(b).toString():b},id:f||"si_at_most_"+e+"_digit",label:g||"SI with at most "+e+" significant digits"})};var a,_d3Format=__webpack_require__(239),_NumberFormatter=(a=__webpack_require__(655))&&a.__esModule?a:{default:a}},987:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _d=_interopRequireDefault(__webpack_require__(661)),_propTypes=_interopRequireDefault(__webpack_require__(87)),_d3Sankey=__webpack_require__(988),_color=__webpack_require__(88),_numberFormat=__webpack_require__(659);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}__webpack_require__(989);var propTypes={data:_propTypes.default.arrayOf(_propTypes.default.shape({source:_propTypes.default.string,target:_propTypes.default.string,value:_propTypes.default.number})),width:_propTypes.default.number,height:_propTypes.default.number,colorScheme:_propTypes.default.string},formatNumber=(0,_numberFormat.getNumberFormatter)(_numberFormat.NumberFormats.FLOAT);function Sankey(a,b){var f=Math.max;function d(a){p.html(function(){return function(a){var c,b=Number.isFinite;if(a.sourceLinks)c=a.name+" Value: <span class='emph'>"+formatNumber(a.value)+"</span>";else{var d=formatNumber(a.value),e=_d.default.round(a.value/a.source.value*100,1),f=_d.default.round(a.value/a.target.value*100,1);c=["<div class=''>Path Value: <span class='emph'>",d,"</span></div>","<div class='percents'>","<span class='emph'>",b(e)?e:"100","%</span> of ",a.source.name,"<br/>","<span class='emph'>"+(b(f)?f:"--")+"%</span> of ",a.target.name,"target","</div>"].join("")}return c}(a)}).transition().duration(200).style("left",_d.default.event.offsetX+10+"px").style("top",_d.default.event.offsetY+10+"px").style("opacity",.95)}function e(){p.transition().duration(100).style("opacity",0)}var g=b.data,h=b.width,i=b.height,j=b.colorScheme,k=_d.default.select(a);k.classed("superset-legacy-chart-sankey",!0);var l_top=5,l_right=5,l_bottom=5,l_left=5,m=h-l_left-l_right,n=i-l_top-l_bottom;k.selectAll("*").remove();var o=k.append("svg").attr("width",m+l_left+l_right).attr("height",n+l_top+l_bottom).append("g").attr("transform","translate("+l_left+","+l_top+")"),p=k.append("div").attr("class","sankey-tooltip").style("opacity",0),q=_color.CategoricalColorNamespace.getScale(j),r=(0,_d3Sankey.sankey)().nodeWidth(15).nodePadding(10).size([m,n]),s=r.link(),t={},u=g.map(function(a){var b=Object.assign({},a);return b.source=t[b.source]||(t[b.source]={name:b.source}),b.target=t[b.target]||(t[b.target]={name:b.target}),b.value=+b.value,b});t=_d.default.values(t),r.nodes(t).links(u).layout(32);var v=o.append("g").selectAll(".link").data(u).enter().append("path").attr("class","link").attr("d",s).style("stroke-width",function(a){return f(1,a.dy)}).sort(function(c,a){return a.dy-c.dy}).on("mouseover",d).on("mouseout",e),w=o.append("g").selectAll(".node").data(t).enter().append("g").attr("class","node").attr("transform",function(a){return"translate("+a.x+","+a.y+")"}).call(_d.default.behavior.drag().origin(function(a){return a}).on("dragstart",function(){this.parentNode.appendChild(this)}).on("drag",function(a){_d.default.select(this).attr("transform","translate("+a.x+","+(a.y=f(0,Math.min(i-a.dy,_d.default.event.y)))+")"),r.relayout(),v.attr("d",s)}));w.append("rect").attr("height",function(a){return a.dy>5?a.dy:5}).attr("width",r.nodeWidth()).style("fill",function(a){var b=a.name||"N/A";return a.color=q(b.replace(/ .*/,"")),a.color}).style("stroke",function(a){return _d.default.rgb(a.color).darker(2)}).on("mouseover",d).on("mouseout",e),w.append("text").attr("x",-6).attr("y",function(a){return a.dy/2}).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(function(a){return a.name}).filter(function(a){return a.x<m/2}).attr("x",6+r.nodeWidth()).attr("text-anchor","start")}Sankey.displayName="Sankey",Sankey.propTypes=propTypes;var _default=Sankey;exports.default=_default},988:function(module,exports,__webpack_require__){!function(exports,d3Array,d3Collection,d3Interpolate){"use strict";exports.sankey=function(){var sankey={},nodeWidth=24,nodePadding=8,size=[1,1],nodes=[],links=[];function computeNodeBreadths(){for(var nextNodes,kx,remainingNodes=nodes,x=0;remainingNodes.length;)nextNodes=[],remainingNodes.forEach(function(node){node.x=x,node.dx=nodeWidth,node.sourceLinks.forEach(function(link){nextNodes.indexOf(link.target)<0&&nextNodes.push(link.target)})}),remainingNodes=nextNodes,++x;(function(x){nodes.forEach(function(node){node.sourceLinks.length||(node.x=x-1)})})(x),kx=(size[0]-nodeWidth)/(x-1),nodes.forEach(function(node){node.x*=kx})}function computeLinkDepths(){function ascendingSourceDepth(a,b){return a.source.y-b.source.y}function ascendingTargetDepth(a,b){return a.target.y-b.target.y}nodes.forEach(function(node){node.sourceLinks.sort(ascendingTargetDepth),node.targetLinks.sort(ascendingSourceDepth)}),nodes.forEach(function(node){var sy=0,ty=0;node.sourceLinks.forEach(function(link){link.sy=sy,sy+=link.dy}),node.targetLinks.forEach(function(link){link.ty=ty,ty+=link.dy})})}function center(node){return node.y+node.dy/2}function value(link){return link.value}return sankey.nodeWidth=function(_){return arguments.length?(nodeWidth=+_,sankey):nodeWidth},sankey.nodePadding=function(_){return arguments.length?(nodePadding=+_,sankey):nodePadding},sankey.nodes=function(_){return arguments.length?(nodes=_,sankey):nodes},sankey.links=function(_){return arguments.length?(links=_,sankey):links},sankey.size=function(_){return arguments.length?(size=_,sankey):size},sankey.layout=function(iterations){return nodes.forEach(function(node){node.sourceLinks=[],node.targetLinks=[]}),links.forEach(function(link){var source=link.source,target=link.target;"number"==typeof source&&(source=link.source=nodes[link.source]),"number"==typeof target&&(target=link.target=nodes[link.target]),source.sourceLinks.push(link),target.targetLinks.push(link)}),nodes.forEach(function(node){node.value=Math.max(d3Array.sum(node.sourceLinks,value),d3Array.sum(node.targetLinks,value))}),computeNodeBreadths(),function(iterations){var ky,nodesByBreadth=d3Collection.nest().key(function(d){return d.x}).sortKeys(d3Array.ascending).entries(nodes).map(function(d){return d.values});ky=d3Array.min(nodesByBreadth,function(nodes){return(size[1]-(nodes.length-1)*nodePadding)/d3Array.sum(nodes,value)}),nodesByBreadth.forEach(function(nodes){nodes.forEach(function(node,i){node.y=i,node.dy=node.value*ky})}),links.forEach(function(link){link.dy=link.value*ky}),resolveCollisions();for(var alpha=1;iterations>0;--iterations)relaxRightToLeft(alpha*=.99),resolveCollisions(),relaxLeftToRight(alpha),resolveCollisions();function relaxLeftToRight(alpha){function weightedSource(link){return center(link.source)*link.value}nodesByBreadth.forEach(function(nodes){nodes.forEach(function(node){if(node.targetLinks.length){var y=d3Array.sum(node.targetLinks,weightedSource)/d3Array.sum(node.targetLinks,value);node.y+=(y-center(node))*alpha}})})}function relaxRightToLeft(alpha){function weightedTarget(link){return center(link.target)*link.value}nodesByBreadth.slice().reverse().forEach(function(nodes){nodes.forEach(function(node){if(node.sourceLinks.length){var y=d3Array.sum(node.sourceLinks,weightedTarget)/d3Array.sum(node.sourceLinks,value);node.y+=(y-center(node))*alpha}})})}function resolveCollisions(){nodesByBreadth.forEach(function(nodes){var node,dy,i,y0=0,n=nodes.length;for(nodes.sort(ascendingDepth),i=0;i<n;++i)node=nodes[i],(dy=y0-node.y)>0&&(node.y+=dy),y0=node.y+node.dy+nodePadding;if((dy=y0-nodePadding-size[1])>0)for(y0=node.y-=dy,i=n-2;i>=0;--i)node=nodes[i],(dy=node.y+node.dy+nodePadding-y0)>0&&(node.y-=dy),y0=node.y})}function ascendingDepth(a,b){return a.y-b.y}}(iterations),computeLinkDepths(),sankey},sankey.relayout=function(){return computeLinkDepths(),sankey},sankey.link=function(){var curvature=.5;function link(d){var x0=d.source.x+d.source.dx,x1=d.target.x,xi=d3Interpolate.interpolateNumber(x0,x1),x2=xi(curvature),x3=xi(1-curvature),y0=d.source.y+d.sy+d.dy/2,y1=d.target.y+d.ty+d.dy/2;return"M"+x0+","+y0+"C"+x2+","+y0+" "+x3+","+y1+" "+x1+","+y1}return link.curvature=function(_){return arguments.length?(curvature=+_,link):curvature},link},sankey},Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__(241),__webpack_require__(242),__webpack_require__(243))},989:function(module,exports,__webpack_require__){var content=__webpack_require__(990);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(131)(content,options);content.locals&&(module.exports=content.locals)},990:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(130)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-sankey .node rect {\n  cursor: move;\n  fill-opacity: .9;\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-sankey .node text {\n  pointer-events: none;\n  text-shadow: 0 1px 0 #fff;\n}\n\n.superset-legacy-chart-sankey .link {\n  fill: none;\n  stroke: #000;\n  stroke-opacity: .2;\n}\n\n.superset-legacy-chart-sankey .link:hover {\n  stroke-opacity: .5;\n}\n\n.superset-legacy-chart-sankey-tooltip {\n  position: absolute;\n  width: auto;\n  background: #ddd;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 200;\n  color: #333;\n  border: 1px solid #fff;\n  text-align: center;\n  pointer-events: none;\n}\n',""])}}]);
//# sourceMappingURL=9.d950b67daa6032d6430a.bundle.js.map