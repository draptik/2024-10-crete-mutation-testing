import{d as H,A as D,t as A,G as T,n as B,L as V,E as I,o as f,b as h,i as b,e as i,x as p,ac as P,C as $,F,ab as z,ad as K,l as R,g as j}from"../modules/vue-m12L8xKP.js";import{C as q,u as G,h as W,c as E}from"../index-BJ2boB4J.js";import"../modules/shiki-B8ZLk2oe.js";const X=["innerHTML"],J=["textContent"],O=["textContent"],y="slidev-note-fade",_="slidev-note-click-mark",Q=H({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(w,{emit:C}){const n=w,v=C,r=D(()=>{var a;return n.clicksContext!=null&&((a=n.noteHtml)==null?void 0:a.includes("slidev-note-click-mark"))}),m=A(null);function c(){var N,S;if(!m.value||!r.value)return;const a=Array.from(m.value.querySelectorAll(`.${_}`)),k=new Map,u=new Map;let L=0;for(const s of a){const o=Number(s.dataset.clicks);k.set(s,o);let e=s,t=s.parentElement;for(;t&&e!==m.value;)u.has(t)||u.set(t,[[null,L]]),u.get(t).push([e,o]),e=t,t=t.parentElement;L=o}const M=new Map;for(const[s,o]of u){let e=!1,t=0;for(const l of Array.from(s.childNodes)){let g=!1;for(;l===((N=o[t+1])==null?void 0:N[0]);)g=!0,t++;if(g)continue;let x=l;if(l.nodeType===3){if(!((S=l.textContent)!=null&&S.trim()))continue;x=document.createElement("span"),x.textContent=l.textContent,s.insertBefore(x,l),l.remove()}e||(e=t===0),M.set(x,o[t][1])}e||(o[0][1]=-1)}return s=>{const o=n.highlight;for(const[e,t]of u)e.classList.toggle(y,o&&!t.some(([l,g])=>g===s));for(const[e,t]of M)e.classList.toggle(y,o&&t!==s);for(const[e,t]of k)e.classList.remove(y),e.classList.toggle(`${_}-past`,o&&t<s),e.classList.toggle(`${_}-active`,o&&t===s),e.classList.toggle(`${_}-next`,o&&t===s+1),e.classList.toggle(`${_}-future`,o&&t>s+1),e.ondblclick=o?l=>{v("markerDblclick",l,t),!l.defaultPrevented&&(n.clicksContext.current=t,l.stopPropagation(),l.stopImmediatePropagation())}:null,e.onclick=o?l=>{v("markerClick",l,t)}:null,o&&n.autoScroll&&t===s&&e.scrollIntoView({block:"center",behavior:"smooth"})}}const d=A();return T(()=>[n.noteHtml,n.highlight],()=>{B(()=>{d.value=c()})},{immediate:!0}),V(()=>{c()}),I(()=>{var k,u;const a=((k=n.clicksContext)==null?void 0:k.current)??q;(u=d.value)==null||u.call(d,a)}),(a,k)=>a.noteHtml?(f(),h("div",{key:0,ref_key:"noteDisplay",ref:m,class:b(["prose overflow-auto outline-none slidev-note",[n.class,r.value?"slidev-note-with-clicks":""]]),innerHTML:a.noteHtml},null,10,X)):a.note?(f(),h("div",{key:1,class:b(["prose overflow-auto outline-none slidev-note",n.class])},[i("p",{textContent:p(a.note)},null,8,J)],2)):(f(),h("div",{key:2,class:b(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",n.class])},[i("p",{textContent:p(n.placeholder||"No notes.")},null,8,O)],2))}}),U={id:"page-root"},Y={class:"m-4"},Z={class:"mb-10"},tt={class:"text-4xl font-bold mt-2"},et={class:"opacity-50"},ot={class:"text-lg"},st={class:"font-bold flex gap-2"},lt={class:"opacity-50"},nt=i("div",{class:"flex-auto"},null,-1),at={key:0,class:"border-main mb-8"},mt=H({__name:"print",setup(w){const{slides:C,total:n}=G();P(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),W({title:`Notes - ${E.title}`});const v=D(()=>C.value.map(r=>{var m;return(m=r.meta)==null?void 0:m.slide}).filter(r=>r!==void 0&&r.noteHTML!==""));return(r,m)=>(f(),h("div",U,[i("div",Y,[i("div",Z,[i("h1",tt,p($(E).title),1),i("div",et,p(new Date().toLocaleString()),1)]),(f(!0),h(F,null,z(v.value,(c,d)=>(f(),h("div",{key:d,class:"flex flex-col gap-4 break-inside-avoid-page"},[i("div",null,[i("h2",ot,[i("div",st,[i("div",lt,p(c==null?void 0:c.no)+"/"+p($(n)),1),K(" "+p(c==null?void 0:c.title)+" ",1),nt])]),R(Q,{"note-html":c.noteHTML,class:"max-w-full"},null,8,["note-html"])]),d<v.value.length-1?(f(),h("hr",at)):j("",!0)]))),128))])]))}});export{mt as default};