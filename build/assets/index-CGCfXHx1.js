import{a1 as M,r as z}from"./index-C-yvlQ-I.js";var D={},j=function(){return j=Object.assign||function(r){for(var t,n=1,i=arguments.length;n<i;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r},j.apply(this,arguments)},G=function(){function r(t,n,i){var e=this;this.endVal=n,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){e.startTime||(e.startTime=a);var o=a-e.startTime;e.remaining=e.duration-o,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(o,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(o,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(o/e.duration);var s=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=s?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),o<e.duration?e.rAF=requestAnimationFrame(e.count):e.finalEndVal!==null?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(a){var o,s,u,l,f=a<0?"-":"";o=Math.abs(a).toFixed(e.options.decimalPlaces);var h=(o+="").split(".");if(s=h[0],u=h.length>1?e.options.decimal+h[1]:"",e.options.useGrouping){l="";for(var g=3,b=0,p=0,m=s.length;p<m;++p)e.options.useIndianSeparators&&p===4&&(g=2,b=1),p!==0&&b%g==0&&(l=e.options.separator+l),b++,l=s[m-p-1]+l;s=l}return e.options.numerals&&e.options.numerals.length&&(s=s.replace(/[0-9]/g,function(d){return e.options.numerals[+d]}),u=u.replace(/[0-9]/g,function(d){return e.options.numerals[+d]})),f+e.options.prefix+s+u+e.options.suffix},this.easeOutExpo=function(a,o,s,u){return s*(1-Math.pow(2,-10*a/u))*1024/1023+o},this.options=j(j({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),e=i.top+window.pageYOffset,a=i.top+i.height+window.pageYOffset;a<n&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||e>n)&&!t.paused&&t.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(t){var n;if(this.el){var i=this.formattingFn(t);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},r.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},r.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const L=Object.freeze(Object.defineProperty({__proto__:null,CountUp:G},Symbol.toStringTag,{value:"Module"})),q=M(L);Object.defineProperty(D,"__esModule",{value:!0});var c=z,Y=q;function k(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var i,e,a,o,s=[],u=!0,l=!1;try{if(a=(n=n.call(r)).next,t!==0)for(;!(u=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);u=!0);}catch(f){l=!0,e=f}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw e}}return s}}function _(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,i)}return n}function A(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(i){W(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}function $(r,t){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var i=n.call(r,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function H(r){var t=$(r,"string");return typeof t=="symbol"?t:String(t)}function W(r,t,n){return t=H(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function x(){return x=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},x.apply(this,arguments)}function B(r,t){if(r==null)return{};var n={},i=Object.keys(r),e,a;for(a=0;a<i.length;a++)e=i[a],!(t.indexOf(e)>=0)&&(n[e]=r[e]);return n}function I(r,t){if(r==null)return{};var n=B(r,t),i,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)i=a[e],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(n[i]=r[i])}return n}function K(r,t){return J(r)||k(r,t)||Q(r,t)||X()}function J(r){if(Array.isArray(r))return r}function Q(r,t){if(r){if(typeof r=="string")return T(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(r,t)}}function T(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=r[n];return i}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?c.useLayoutEffect:c.useEffect;function v(r){var t=c.useRef(r);return Z(function(){t.current=r}),c.useCallback(function(){for(var n=arguments.length,i=new Array(n),e=0;e<n;e++)i[e]=arguments[e];return t.current.apply(void 0,i)},[])}var tt=function(t,n){var i=n.decimal,e=n.decimals,a=n.duration,o=n.easingFn,s=n.end,u=n.formattingFn,l=n.numerals,f=n.prefix,h=n.separator,g=n.start,b=n.suffix,p=n.useEasing,m=n.useGrouping,d=n.useIndianSeparators,S=n.enableScrollSpy,y=n.scrollSpyDelay,O=n.scrollSpyOnce,w=n.plugin;return new Y.CountUp(t,s,{startVal:g,duration:a,decimal:i,decimalPlaces:e,easingFn:o,formattingFn:u,numerals:l,separator:h,prefix:f,suffix:b,plugin:w,useEasing:p,useIndianSeparators:d,useGrouping:m,enableScrollSpy:S,scrollSpyDelay:y,scrollSpyOnce:O})},et=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],nt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},N=function(t){var n=Object.fromEntries(Object.entries(t).filter(function(V){var P=K(V,2),C=P[1];return C!==void 0})),i=c.useMemo(function(){return A(A({},nt),n)},[t]),e=i.ref,a=i.startOnMount,o=i.enableReinitialize,s=i.delay,u=i.onEnd,l=i.onStart,f=i.onPauseResume,h=i.onReset,g=i.onUpdate,b=I(i,et),p=c.useRef(),m=c.useRef(),d=c.useRef(!1),S=v(function(){return tt(typeof e=="string"?e:e.current,b)}),y=v(function(V){var P=p.current;if(P&&!V)return P;var C=S();return p.current=C,C}),O=v(function(){var V=function(){return y(!0).start(function(){u==null||u({pauseResume:w,reset:E,start:R,update:F})})};s&&s>0?m.current=setTimeout(V,s*1e3):V(),l==null||l({pauseResume:w,reset:E,update:F})}),w=v(function(){y().pauseResume(),f==null||f({reset:E,start:R,update:F})}),E=v(function(){y().el&&(m.current&&clearTimeout(m.current),y().reset(),h==null||h({pauseResume:w,start:R,update:F}))}),F=v(function(V){y().update(V),g==null||g({pauseResume:w,reset:E,start:R})}),R=v(function(){E(),O()}),U=v(function(V){a&&(V&&E(),O())});return c.useEffect(function(){d.current?o&&U(!0):(d.current=!0,U())},[o,d,U,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),c.useEffect(function(){return function(){E()}},[E]),{start:R,pauseResume:w,reset:E,update:F,getCountUp:y}},rt=["className","redraw","containerProps","children","style"],it=function(t){var n=t.className,i=t.redraw,e=t.containerProps,a=t.children,o=t.style,s=I(t,rt),u=c.useRef(null),l=c.useRef(!1),f=N(A(A({},s),{},{ref:u,startOnMount:typeof a!="function"||t.delay===0,enableReinitialize:!1})),h=f.start,g=f.reset,b=f.update,p=f.pauseResume,m=f.getCountUp,d=v(function(){h()}),S=v(function(w){t.preserveValue||g(),b(w)}),y=v(function(){if(typeof t.children=="function"&&!(u.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}m()});c.useEffect(function(){y()},[y]),c.useEffect(function(){l.current&&S(t.end)},[t.end,S]);var O=i&&t;return c.useEffect(function(){i&&l.current&&d()},[d,i,O]),c.useEffect(function(){!i&&l.current&&d()},[d,i,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),c.useEffect(function(){l.current=!0},[]),typeof a=="function"?a({countUpRef:u,start:h,reset:g,update:b,pauseResume:p,getCountUp:m}):c.createElement("span",x({className:n,ref:u,style:o},e),typeof t.start<"u"?m().formattingFn(t.start):"")},st=D.default=it;D.useCountUp=N;export{st as _};
