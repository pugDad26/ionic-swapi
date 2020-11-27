!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(e,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",(function(){return T}));var s,a,f=i("ofXK"),l=i("TEn/"),p=i("3Pt+"),h=i("tyNb"),b=i("fXoL"),d=i("EY2u"),v=i("l7GE"),y=i("ZUHj"),m=function(){function t(e,n,r){c(this,t),this.project=e,this.concurrent=n,this.scheduler=r}return u(t,[{key:"call",value:function(t,e){return e.subscribe(new g(t,this.project,this.concurrent,this.scheduler))}}]),t}(),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(o,t);var e=r(o);function o(t,n,r,i){var s;return c(this,o),(s=e.call(this,t)).project=n,s.concurrent=r,s.scheduler=i,s.index=0,s.active=0,s.hasCompleted=!1,r<Number.POSITIVE_INFINITY&&(s.buffer=[]),s}return u(o,[{key:"_next",value:function(t){var e=this.destination;if(e.closed)this._complete();else{var n=this.index++;if(this.active<this.concurrent){e.next(t);try{var r=(0,this.project)(t,n);this.scheduler?this.destination.add(this.scheduler.schedule(o.dispatch,0,{subscriber:this,result:r,value:t,index:n})):this.subscribeToProjection(r,t,n)}catch(i){e.error(i)}}else this.buffer.push(t)}}},{key:"subscribeToProjection",value:function(t,e,n){this.active++,this.destination.add(Object(y.a)(this,t,e,n))}},{key:"_complete",value:function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()}},{key:"notifyNext",value:function(t,e,n,r,o){this._next(e)}},{key:"notifyComplete",value:function(t){var e=this.buffer;this.destination.remove(t),this.active--,e&&e.length>0&&this._next(e.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()}}],[{key:"dispatch",value:function(t){var e=t.subscriber,n=t.result,r=t.value,o=t.index;e.subscribeToProjection(n,r,o)}}]),o}(v.a),O=i("lJxs"),w=i("tk/3"),j=((a=function(){function t(e){c(this,t),this.httpSvc=e}return u(t,[{key:"fetchPlanets",value:function(){var t=this;return this.httpSvc.get("https://swapi.dev/api/planets/").pipe(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,n=arguments.length>2?arguments[2]:void 0;return e=(e||0)<1?Number.POSITIVE_INFINITY:e,function(r){return r.lift(new m(t,e,n))}}((function(e){return e.next?t.httpSvc.get(e.next.replaceAll("http: , https:")):d.a})),Object(O.a)((function(t){return t.results.map((function(t){return{name:t.name}}))})))}}]),t}()).\u0275fac=function(t){return new(t||a)(b.Nb(w.a))},a.\u0275prov=b.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a),P=((s=function(){function t(){c(this,t)}return u(t,[{key:"getDisplayColor",value:function(t){return"unknown"==t.name?"goldenrod":"Tatooine"==t.name?"green":"inherit"}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275prov=b.Db({token:s,factory:s.\u0275fac,providedIn:"root"}),s);function x(t,e){if(1&t&&(b.Kb(0,"ion-item"),b.bc(1),b.Jb()),2&t){var n=e.$implicit;b.Zb("color",n.displayColor),b.xb(1),b.cc(" ",n.name," ")}}var _,C,I,S=[{path:"",component:(_=function e(n,r){var o=this;c(this,e),this.swapiSvc=n,this.bizLogicSvc=r,this.planets=[],this.swapiSvc.fetchPlanets().subscribe((function(e){return o.planets=[].concat(t(o.planets),t(e)).map((function(t){return Object.assign(Object.assign({},t),{displayColor:o.bizLogicSvc.getDisplayColor(t)})})).sort((function(t,e){return t.name.toUpperCase()>e.name.toUpperCase()?1:-1}))}),(function(t){return console.error(t)}))},_.\u0275fac=function(t){return new(t||_)(b.Hb(j),b.Hb(P))},_.\u0275cmp=b.Bb({type:_,selectors:[["app-home"]],decls:7,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],[3,"color",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header",0),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.bc(3),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content",1),b.Kb(5,"ion-list"),b.ac(6,x,2,3,"ion-item",2),b.Jb(),b.Jb()),2&t&&(b.Vb("translucent",!0),b.xb(3),b.cc(" SWAPI Planets ",e.planets.length," "),b.xb(1),b.Vb("fullscreen",!0),b.xb(2),b.Vb("ngForOf",e.planets))},directives:[l.c,l.h,l.g,l.b,l.e,f.h,l.d],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),_)}],k=((I=function t(){c(this,t)}).\u0275mod=b.Fb({type:I}),I.\u0275inj=b.Eb({factory:function(t){return new(t||I)},imports:[[h.i.forChild(S)],h.i]}),I),T=((C=function t(){c(this,t)}).\u0275mod=b.Fb({type:C}),C.\u0275inj=b.Eb({factory:function(t){return new(t||C)},imports:[[f.b,p.a,l.i,k]]}),C)}}])}();