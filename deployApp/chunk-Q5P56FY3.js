import{c as n,d as l,e as u,f as p,g as i}from"./chunk-GYVBEFLY.js";import{D as s,i as r}from"./chunk-GNEPA3TN.js";var o=class a{static getCartProducts(t){return t.products}static getCartCount(t){return t.products?t.products.length:0}add({getState:t,patchState:e},{payload:c}){let d=t();e({products:[...d.products,c]})}del({getState:t,patchState:e},{payload:c}){let d=t();e({products:d.products.filter(m=>m.name!==c.name)})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=s({token:a,factory:a.\u0275fac})};r([n(p)],o.prototype,"add",null);r([n(i)],o.prototype,"del",null);r([u()],o,"getCartProducts",null);r([u()],o,"getCartCount",null);o=r([l({name:"cart",defaults:{products:[]}})],o);export{o as a};