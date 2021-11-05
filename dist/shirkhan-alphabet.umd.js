var g=Object.defineProperty;var C=(u,e,c)=>e in u?g(u,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):u[e]=c;var s=(u,e,c)=>(C(u,typeof e!="symbol"?e+"":e,c),c);(function(u,e){typeof exports=="object"&&typeof module!="undefined"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(u=typeof globalThis!="undefined"?globalThis:u||self,e(u["shirkhan-alphabet"]={}))})(this,function(u){"use strict";const e=[{uchar:"\u0626",volwes:!1,uly:""+String.fromCharCode(0),khan:"?"},{uchar:"\u0627",volwes:!0,uly:"a",khan:"a"},{uchar:"\u06D5",volwes:!0,uly:"e",khan:"e"},{uchar:"\u06D0",volwes:!0,uly:"\xEB",khan:"e'"},{uchar:"\u0649",volwes:!0,uly:"i",khan:"i"},{uchar:"\u0648",volwes:!0,uly:"o",khan:"o"},{uchar:"\u06C7",volwes:!0,uly:"u",khan:"u"},{uchar:"\u06C6",volwes:!0,uly:"\xF6",khan:"c"},{uchar:"\u06C8",volwes:!0,uly:"\xFC",khan:"v"},{uchar:"\u0628",volwes:!1,uly:"b",khan:"b"},{uchar:"\u067E",volwes:!1,uly:"p",khan:"p"},{uchar:"\u062A",volwes:!1,uly:"t",khan:"t"},{uchar:"\u062C",volwes:!1,uly:"j",khan:"j"},{uchar:"\u0686",volwes:!1,uly:"ch"+String.fromCharCode(0),khan:"c'"},{uchar:"\u062E",volwes:!1,uly:"x",khan:"k'"},{uchar:"\u062F",volwes:!1,uly:"d",khan:"d"},{uchar:"\u0631",volwes:!1,uly:"r",khan:"r"},{uchar:"\u0632",volwes:!1,uly:"z",khan:"z"},{uchar:"\u0698",volwes:!1,uly:"zh"+String.fromCharCode(0),khan:"z'"},{uchar:"\u0633",volwes:!1,uly:"s",khan:"s"},{uchar:"\u0634",volwes:!1,uly:"sh"+String.fromCharCode(0),khan:"x"},{uchar:"\u063A",volwes:!1,uly:"gh"+String.fromCharCode(0),khan:"g'"},{uchar:"\u0642",volwes:!1,uly:"q",khan:"q"},{uchar:"\u0641",volwes:!1,uly:"f",khan:"f"},{uchar:"\u0643",volwes:!1,uly:"k",khan:"k"},{uchar:"\u06AF",volwes:!1,uly:"g",khan:"g"},{uchar:"\u06AD",volwes:!1,uly:"ng"+String.fromCharCode(0),khan:"n'"},{uchar:"\u0644",volwes:!1,uly:"l",khan:"l"},{uchar:"\u0645",volwes:!1,uly:"m",khan:"m"},{uchar:"\u0646",volwes:!1,uly:"n",khan:"n"},{uchar:"\u06BE",volwes:!1,uly:"h",khan:"h"},{uchar:"\u06CB",volwes:!1,uly:"w",khan:"w"},{uchar:"\u064A",volwes:!1,uly:"y",khan:"y"}];class c{constructor(){s(this,"alphabet",new t)}toKhan(r){const l={};return this.alphabet.getTable().forEach(a=>l[a.uchar]=a.khan),Array.from(r).map(a=>l[a]||a).join("")}toU(r){return this.alphabet.getTable().sort((a,n)=>n.khan.length-a.khan.length).forEach(a=>{r=r.replaceAll(a.khan,a.uchar)}),r}}class o{constructor(){s(this,"alphabet",new t)}toUly(r){const l={};return this.alphabet.getTable().forEach(a=>l[a.uchar]=a.uly),Array.from(r).map(a=>l[a]||a).join("")}toU(r){return this.alphabet.getTable().sort((a,n)=>n.uly.length-a.uly.length).forEach(a=>{r=r.replaceAll(a.uly,a.uchar)}),r}}function k(h){return new o().toUly(h)}function w(h){return new o().toU(h)}function v(h){return new c().toKhan(h)}function i(h){return new c().toU(h)}class t{constructor(){s(this,"_table");this._table=e}getTable(){return this._table}}const b=[{schar:"\u0626",tchar:"q"},{schar:"\u0627",tchar:"w"},{schar:"\u06D5",tchar:"e"},{schar:"\u0628",tchar:"r"},{schar:"\u067E",tchar:"t"},{schar:"\u062A",tchar:"y"},{schar:"\u062C",tchar:"u"},{schar:"\u0686",tchar:"i"},{schar:"\u062E",tchar:"o"},{schar:"\u062F",tchar:"p"},{schar:"\u0631",tchar:"a"},{schar:"\u0632",tchar:"s"},{schar:"\u0698",tchar:"d"},{schar:"\u0633",tchar:"f"},{schar:"\u0634",tchar:"g"},{schar:"\u063A",tchar:"h"},{schar:"\u0641",tchar:"j"},{schar:"\u0642",tchar:"k"},{schar:"\u0643",tchar:"l"},{schar:"\u06AF",tchar:"z"},{schar:"\u0644",tchar:"x"},{schar:"\u06AD",tchar:"c"},{schar:"\u0645",tchar:"v"},{schar:"\u0646",tchar:"b"},{schar:"\u06BE",tchar:"n"},{schar:"\u0648",tchar:"m"},{schar:"\u06C7",tchar:"7"},{schar:"\u06C6",tchar:"6"},{schar:"\u06C8",tchar:"5"},{schar:"\u06CB",tchar:"4"},{schar:"\u06D0",tchar:"3"},{schar:"\u0649",tchar:"2"},{schar:"\u064A",tchar:"1"}],f={},y={};b.forEach(h=>{f[h.schar]=h.tchar,y[h.tchar]=h.schar});function p(h){return Array.from(h).map(r=>f[r]||r).join("")}function d(h){return Array.from(h).map(r=>y[r]||r).join("")}u.Alphabet=t,u.decode=d,u.encode=p,u.khan2u=i,u.u2khan=v,u.u2uly=k,u.uly2u=w,Object.defineProperty(u,"__esModule",{value:!0}),u[Symbol.toStringTag]="Module"});