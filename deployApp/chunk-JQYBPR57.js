import{a as p}from"./chunk-5X3LRLMY.js";import{A as o,D as i,H as c,Ha as n,f as r}from"./chunk-GNEPA3TN.js";var b=(()=>{class t{http;productSubject=new r([]);products$=this.productSubject.asObservable();constructor(e){this.http=e}getAllProducts(){return this.http.get(`${p.backendCatalogue}`).pipe(o(e=>this.productSubject.next(e)))}static \u0275fac=function(a){return new(a||t)(c(n))};static \u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{b as a};
