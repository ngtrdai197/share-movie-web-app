"use strict";(self.webpackChunkapp_share_movies=self.webpackChunkapp_share_movies||[]).push([[372],{3372:(wt,T,s)=>{s.r(T),s.d(T,{HomeModule:()=>yt});var p=s(6895),x=s(9966),o=s(4650),E=s(9646),U=s(4968),K=s(5577),y=s(4004),w=s(8505),N=s(9300),F=s(4986),z=s(4482),C=s(5403),A=s(8421);const O={leading:!0,trailing:!1};var Y=s(5963);function P(t,e=F.z,n=O){const i=(0,Y.H)(t,e);return function R(t,e=O){return(0,z.e)((n,i)=>{const{leading:l,trailing:r}=e;let c=!1,u=null,a=null,f=!1;const d=()=>{a?.unsubscribe(),a=null,r&&(I(),f&&i.complete())},v=()=>{a=null,f&&i.complete()},b=h=>a=(0,A.Xf)(t(h)).subscribe((0,C.x)(i,d,v)),I=()=>{if(c){c=!1;const h=u;u=null,i.next(h),!f&&b(h)}};n.subscribe((0,C.x)(i,h=>{c=!0,u=h,(!a||a.closed)&&(l?I():b(h))},()=>{f=!0,(!(r&&c&&a)||a.closed)&&i.complete()}))})}(()=>i,n)}function Z(t,e,n,i){const l=window&&!!window.document&&window.document.documentElement;let r=l&&e?window:n;if(t&&(r=t&&l&&"string"==typeof t?function B(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,i):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function g(t){return t&&!t.firstChange}const J={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},L={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class V{constructor(e=!0){this.vertical=e,this.propsMap=e?J:L}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function G(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function S(t,e){return t?e.document.documentElement:null}function M(t,e){const n=function _({container:t,isWindow:e,axis:n}){const{offsetHeightKey:i,clientHeightKey:l}=D(n);return H(t,e,i,l)}(e);return e.isWindow?function k(t,e,n){const{axis:i,container:l,isWindow:r}=n,{offsetHeightKey:c,clientHeightKey:u}=D(i),a=t+W(S(r,l),i,r),f=H(e.nativeElement,r,c,u),d=function tt(t,e,n){const i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+W(t,e,n)}(e.nativeElement,i,r)+f;return{height:t,scrolled:a,totalToScroll:d,isWindow:r}}(n,t,e):function q(t,e,n){const{axis:i,container:l}=n;return{height:t,scrolled:l[i.scrollTopKey()],totalToScroll:l[i.scrollHeightKey()],isWindow:!1}}(n,0,e)}function D(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function H(t,e,n,i){if(isNaN(t[n])){const l=S(e,t);return l?l[i]:0}return t[n]}function W(t,e,n){const i=e.pageYOffsetKey(),l=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?S(n,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[r]}function et(t,e={down:0,up:0},n){let i,l;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(i=(t.totalToScroll-r)/t.totalToScroll,l=(e?.down?e.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-r)),l=(e?.up?e.up:0)/10),i<=l}class rt{constructor({totalToScroll:e}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=e}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,n){this.updateScrollPosition(e),this.updateTotalToScroll(n)}updateTriggeredFlag(e,n){n?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,n){return n?this.triggered.down===e:this.triggered.up===e}}const m={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function ft(t){const{scrollDown:e,stats:{scrolled:n}}=t;return{type:e?m.DOWN:m.UP,payload:{currentScrollPosition:n}}}let ut=(()=>{class t{constructor(n,i){this.element=n,this.zone=i,this.scrolled=new o.vpe,this.scrolledUp=new o.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:n,infiniteScrollDisabled:i,infiniteScrollDistance:l}){const r=g(n),c=g(i),u=g(l),a=!c&&!this.infiniteScrollDisabled||c&&!i.currentValue||u;(r||c||u)&&(this.destroyScroller(),a&&this.setup())}setup(){(function j(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function st(t){const{scrollContainer:e,scrollWindow:n,element:i,fromRoot:l}=t,r=function $({windowElement:t,axis:e}){return function Q(t,e){const n=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return{...t,container:n}}({axis:e,isWindow:G(t)},t)}({axis:new V(!t.horizontal),windowElement:Z(e,n,i,l)}),c=new rt({totalToScroll:M(i,r)}),a={up:t.upDistance,down:t.downDistance};return function ct(t){let e=(0,U.R)(t.container,"scroll");return t.throttle&&(e=e.pipe(P(t.throttle,void 0,{leading:!0,trailing:!0}))),e}({container:r.container,throttle:t.throttle}).pipe((0,K.z)(()=>(0,E.of)(M(i,r))),(0,y.U)(f=>function at(t,e,n){const{scrollDown:i,fire:l}=function ot(t,e,n){const i=function nt(t,e){return t<e.scrolled}(t,e);return{fire:et(e,n,i),scrollDown:i}}(t,e,n);return{scrollDown:i,fire:l,stats:e}}(c.lastScrollPosition,f,a)),(0,w.b)(({stats:f})=>c.updateScroll(f.scrolled,f.totalToScroll)),(0,N.h)(({fire:f,scrollDown:d,stats:{totalToScroll:v}})=>function X(t,e,n){return!!(t&&e||!n&&e)}(t.alwaysCallback,f,c.isTriggeredScroll(v,d))),(0,w.b)(({scrollDown:f,stats:{totalToScroll:d}})=>{c.updateTriggeredFlag(d,f)}),(0,y.U)(ft))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(n=>this.handleOnScroll(n))})}handleOnScroll({type:n,payload:i}){const l=n===m.DOWN?this.scrolled:this.scrolledUp;(function dt(t){return t.observed??t.observers.length>0})(l)&&this.zone.run(()=>l.emit(i))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275dir=o.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[o.TTD]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})();var pt=s(4466),gt=s(4189),St=s(1481);let mt=(()=>{class t{constructor(n){this.sanitizer=n}transform(n){return this.sanitizer.bypassSecurityTrustResourceUrl(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(St.H7,16))},t.\u0275pipe=o.Yjl({name:"safe",type:t,pure:!0}),t})();function vt(t,e){if(1&t&&(o.TgZ(0,"li")(1,"div",2),o._UZ(2,"iframe",3),o.ALo(3,"safe"),o.qZA(),o.TgZ(4,"div",4)(5,"p",5),o._uU(6),o.qZA(),o.TgZ(7,"p",6)(8,"strong"),o._uU(9,"Shared By"),o.qZA(),o._uU(10),o.qZA(),o.TgZ(11,"p",7)(12,"strong"),o._uU(13,"Description"),o.qZA(),o._uU(14),o.qZA()()()),2&t){const n=e.$implicit;o.xp6(2),o.Q6J("src",o.lcZ(3,4,(null==n?null:n.videoUrl)||""),o.uOi),o.xp6(4),o.Oqu(null==n?null:n.title),o.xp6(4),o.hij(": ",null==n?null:n.sharedBy,""),o.xp6(4),o.hij(": ",null==n?null:n.description,"")}}let Tt=(()=>{class t{constructor(n){this.movieService=n,this.page=1,this.perPage=3,this.loading=!1,this.moviesResponse$=this.movieService.listMovies$}ngOnInit(){this.loadMovies()}onScrollDown(){this.page++,this.loadDataThrottle()}loadMovies(){this.loading=!0,this.movieService.getListMovies({page:this.page,perPage:this.perPage}).subscribe({complete:()=>{this.loading=!1},error:()=>{this.loading=!1}})}loadDataThrottle(){this.loading=!0,this.movieService.getListMovies({page:this.page,perPage:this.perPage}).pipe(P(500)).subscribe({complete:()=>{this.loading=!1},error:()=>{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(gt.u))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:5,vars:5,consts:[["infinite-scroll","",1,"search-results",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[4,"ngFor","ngForOf"],[1,"video"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen","",3,"src"],[1,"content"],[1,"title"],[1,"shared-by"],[1,"description"]],template:function(n,i){if(1&n&&(o.ynx(0),o.TgZ(1,"div",0),o.NdJ("scrolled",function(){return i.onScrollDown()}),o.TgZ(2,"ul"),o.YNc(3,vt,15,6,"li",1),o.ALo(4,"async"),o.qZA()(),o.BQk()),2&n){let l;o.xp6(1),o.Q6J("infiniteScrollDistance",0)("infiniteScrollThrottle",500),o.xp6(2),o.Q6J("ngForOf",null==(l=o.lcZ(4,3,i.moviesResponse$))?null:l.data)}},dependencies:[p.sg,ut,p.Ov,mt],styles:["[_nghost-%COMP%]{display:block;margin-top:26px}ul[_ngcontent-%COMP%]{padding-left:0;margin-bottom:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;width:100%;margin-bottom:24px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{width:40%;padding-right:24px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:60%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#ed3737;margin-bottom:4px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-bottom:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),t})(),yt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,x.Bz.forChild([{path:"",component:Tt}]),pt.m,ht]}),t})()}}]);