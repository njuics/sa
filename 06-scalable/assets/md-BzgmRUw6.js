import{a as i,b as p,o as d,w as n,g as s,e as c,ac as e,m as u,v as m,x as f,C as l}from"./modules/vue-BClY7r2L.js";import{I as b}from"./slidev/default-Dceip5by.js";import{u as k,f as g}from"./slidev/context-ClwLB5qC.js";import"./index-DEnij-S3.js";import"./modules/shiki-ajanUN2i.js";const v="/sa/06-scalable/assets/05-exp-haproxy-CO-RA8Ix.png",P={__name:"06-scalable.md__slidev_17",setup(x){const{$clicksContext:t,$frontmatter:o}=k();return t.setup(),(h,a)=>{const r=i("CodeBlockWrapper");return d(),p(b,m(f(l(g)(l(o),16))),{default:n(()=>[a[1]||(a[1]=s("h1",null,"L4 实验: HAProxy（TCP mode）",-1)),a[2]||(a[2]=s("img",{src:v,class:"m-5 h-30"},null,-1)),a[3]||(a[3]=s("p",null,[s("a",{href:"https://www.bilibili.com/video/BV1X7411S7yM?p=3",target:"_blank"},"https://www.bilibili.com/video/BV1X7411S7yM?p=3"),e(" (23:00)")],-1)),c(r,u({},{ranges:[]}),{default:n(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"defaults")]),e(`
`),s("span",{class:"line"},[s("span",null,"    mode tcp")]),e(`
`),s("span",{class:"line"},[s("span",null,"frontend lb-app-pi")]),e(`
`),s("span",{class:"line"},[s("span",null,"    bind *:8080")]),e(`
`),s("span",{class:"line"},[s("span",null,"    default_backend servers")]),e(`
`),s("span",{class:"line"},[s("span",null,"backend servers")]),e(`
`),s("span",{class:"line"},[s("span",null,"    balance roundrobin")]),e(`
`),s("span",{class:"line"},[s("span",null,"    server server1 localhost:8081")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...")])])],-1)])),_:1},16)]),_:1},16)}}};export{P as default};
