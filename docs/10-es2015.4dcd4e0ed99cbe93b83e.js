(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return C}));var s=n("ofXK"),i=n("TEn/"),o=n("3Pt+"),c=n("tyNb"),r=n("fXoL"),a=n("EY2u"),h=n("l7GE"),l=n("ZUHj");class p{constructor(t,e,n){this.project=t,this.concurrent=e,this.scheduler=n}call(t,e){return e.subscribe(new u(t,this.project,this.concurrent,this.scheduler))}}class u extends h.a{constructor(t,e,n,s){super(t),this.project=e,this.concurrent=n,this.scheduler=s,this.index=0,this.active=0,this.hasCompleted=!1,n<Number.POSITIVE_INFINITY&&(this.buffer=[])}static dispatch(t){const{subscriber:e,result:n,value:s,index:i}=t;e.subscribeToProjection(n,s,i)}_next(t){const e=this.destination;if(e.closed)return void this._complete();const n=this.index++;if(this.active<this.concurrent){e.next(t);try{const{project:e}=this,s=e(t,n);this.scheduler?this.destination.add(this.scheduler.schedule(u.dispatch,0,{subscriber:this,result:s,value:t,index:n})):this.subscribeToProjection(s,t,n)}catch(s){e.error(s)}}else this.buffer.push(t)}subscribeToProjection(t,e,n){this.active++,this.destination.add(Object(l.a)(this,t,e,n))}_complete(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()}notifyNext(t,e,n,s,i){this._next(e)}notifyComplete(t){const e=this.buffer;this.destination.remove(t),this.active--,e&&e.length>0&&this._next(e.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()}}var b=n("lJxs"),d=n("tk/3");let f=(()=>{class t{constructor(t){this.httpSvc=t}fetchPlanets(){return this.httpSvc.get("https://swapi.dev/api/planets/").pipe(function(t,e=Number.POSITIVE_INFINITY,n){return e=(e||0)<1?Number.POSITIVE_INFINITY:e,s=>s.lift(new p(t,e,n))}(t=>t.next?this.httpSvc.get(t.next.replaceAll("http: , https:")):a.a),Object(b.a)(t=>t.results.map(t=>({name:t.name}))))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(d.a))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(){}getDisplayColor(t){return"unknown"==t.name?"goldenrod":"Tatooine"==t.name?"green":"inherit"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,e){if(1&t&&(r.Kb(0,"ion-item"),r.bc(1),r.Jb()),2&t){const t=e.$implicit;r.Zb("color",t.displayColor),r.xb(1),r.cc(" ",t.name," ")}}const v=[{path:"",component:(()=>{class t{constructor(t,e){this.swapiSvc=t,this.bizLogicSvc=e,this.planets=[],this.swapiSvc.fetchPlanets().subscribe(t=>this.planets=[...this.planets,...t].map(t=>Object.assign(Object.assign({},t),{displayColor:this.bizLogicSvc.getDisplayColor(t)})).sort((t,e)=>t.name.toUpperCase()>e.name.toUpperCase()?1:-1),t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(f),r.Hb(m))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-home"]],decls:7,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],[3,"color",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.Kb(0,"ion-header",0),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-title"),r.bc(3),r.Jb(),r.Jb(),r.Jb(),r.Kb(4,"ion-content",1),r.Kb(5,"ion-list"),r.ac(6,g,2,3,"ion-item",2),r.Jb(),r.Jb()),2&t&&(r.Vb("translucent",!0),r.xb(3),r.cc(" SWAPI Planets ",e.planets.length," "),r.xb(1),r.Vb("fullscreen",!0),r.xb(2),r.Vb("ngForOf",e.planets))},directives:[i.c,i.h,i.g,i.b,i.e,s.h,i.d],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(v)],c.i]}),t})(),C=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[s.b,o.a,i.i,x]]}),t})()}}]);