import{a as k}from"./chunk-YBWAZVBJ.js";import"./chunk-XFJ56UTL.js";import{a as I,b as L,c as V,d as P,e as E,f as T,g as N,h as j}from"./chunk-ZZD3EION.js";import{$ as s,E as _,Ia as C,J as p,K as v,Ka as y,N as u,O as l,Ta as S,Va as M,aa as f,ha as m,ja as b,ka as o,la as i,na as x,pa as d,qa as c,ta as a,ya as w}from"./chunk-G7GNO7MG.js";var F=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["app-account-page"]],standalone:!0,features:[w],decls:4,vars:0,consts:[[1,"bg-fairy-gradient"],[1,"flex","justify-center"]],template:function(n,r){n&1&&(o(0,"main",0)(1,"div",1)(2,"p"),a(3,"account-page works!"),i()()())}})}return e})();function q(e,h){if(e&1){let t=x();o(0,"form",6),d("ngSubmit",function(){u(t);let r=c();return l(r.login())}),o(1,"div",7)(2,"label",8),a(3,"Nom d'utilisateur :"),i(),o(4,"input",9),d("ngModelChange",function(r){u(t);let g=c();return l(g.username=r)}),i()(),o(5,"div",7)(6,"label",10),a(7,"Mot de passe :"),i(),o(8,"input",11),d("ngModelChange",function(r){u(t);let g=c();return l(g.password=r)}),i()(),o(9,"button",12),a(10,"Se connecter"),i()()}if(e&2){let t=c();s(4),m("ngModel",t.username),s(4),m("ngModel",t.password)}}function R(e,h){if(e&1){let t=x();o(0,"button",13),d("click",function(){u(t);let r=c();return l(r.logout())}),a(1,"Se d\xE9connecter"),i()}}function z(e,h){e&1&&(o(0,"p",14),a(1,"Vous n'avez pas de compte? "),o(2,"a",15),a(3,"Inscrivez-vous ici"),i(),a(4,"."),i())}var D=(()=>{class e{authService;router;username="";password="";constructor(t,n){this.authService=t,this.router=n}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate(["/account"])}login(){this.authService.login(this.username,this.password).subscribe(t=>{localStorage.setItem("token",t.token),this.router.navigate(["/account"])},t=>{console.error(t)})}logout(){this.authService.logout(),this.router.navigate(["/login"])}static \u0275fac=function(n){return new(n||e)(f(k),f(S))};static \u0275cmp=p({type:e,selectors:[["app-login-page"]],decls:7,vars:3,consts:[[1,"bg-fairy-gradient","min-h-screen","flex","items-center","justify-center"],[1,"w-full","max-w-md","p-8","bg-white","rounded","shadow-md"],[1,"text-2xl","font-bold","mb-4"],[3,"ngSubmit",4,"ngIf"],["class","w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4",3,"click",4,"ngIf"],["class","mt-4 text-center text-sm text-gray-600",4,"ngIf"],[3,"ngSubmit"],[1,"mb-4"],["for","username",1,"block","text-sm","font-medium","text-gray-700"],["type","text","id","username","name","username","required","",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-pink-500","focus:border-pink-500","sm:text-sm",3,"ngModel","ngModelChange"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","password","name","password","required","",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-pink-500","focus:border-pink-500","sm:text-sm",3,"ngModel","ngModelChange"],["type","submit",1,"w-full","bg-pink-600","text-white","py-2","px-4","rounded-md","hover:bg-pink-500","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-pink-500"],[1,"w-full","bg-red-600","text-white","py-2","px-4","rounded-md","hover:bg-red-500","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-red-500","mt-4",3,"click"],[1,"mt-4","text-center","text-sm","text-gray-600"],["href","/home",1,"text-pink-600","hover:text-pink-500"]],template:function(n,r){n&1&&(o(0,"main",0)(1,"div",1)(2,"h2",2),a(3,"Connexion"),i(),b(4,q,11,2,"form",3)(5,R,2,0,"button",4)(6,z,5,0,"p",5),i()()),n&2&&(s(4),m("ngIf",!r.authService.isLoggedIn()),s(),m("ngIf",r.authService.isLoggedIn()),s(),m("ngIf",!r.authService.isLoggedIn()))},dependencies:[C,T,I,L,V,N,E,P]})}return e})();var G=[{path:"",component:D},{path:"account",component:F},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login"}],$=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=v({type:e});static \u0275inj=_({imports:[y,j,M.forChild(G)]})}return e})();export{$ as AccountModule};
