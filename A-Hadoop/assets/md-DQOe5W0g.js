import{_ as c}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CnGLj2rV.js";import{o as u,b as d,w as l,g as s,d as i,m as p,D as n,v as m,x as f,z as t}from"./modules/vue-D2XQG_Zi.js";import{_ as k}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-Bbe2bsJd.js";import{u as g,f as b}from"./slidev/context-Cvs-fYvT.js";import"./modules/unplugin-icons-Dh1c2lUi.js";import"./index-BPkebdeX.js";import"./modules/shiki-C_lgq8_O.js";const D={__name:"A-Hadoop.md__slidev_69",setup(h){const{$clicksContext:r,$frontmatter:o}=g();return r.setup(),(_,a)=>{const e=c;return u(),d(k,m(f(t(b)(t(o),68))),{right:l(v=>[a[2]||(a[2]=s("p",null,[s("br"),s("br")],-1)),i(e,p({},{title:"",ranges:[]}),{default:l(()=>[...a[1]||(a[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"NameNode 要快")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> metadata in RAM")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"机器会坏")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> replication + heartbeat")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"要高吞吐写入")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> pipeline write")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"机架会坏")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> rack-aware placement")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"长期运行会漂移")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> replication manager + balancer + scanner")])])],-1)])]),_:1},16)]),default:l(()=>[a[3]||(a[3]=s("h1",null,"从零构建路径回顾",-1)),a[4]||(a[4]=s("br",null,null,-1)),a[5]||(a[5]=s("p",null,"我们是这样一步步长出 HDFS 的：",-1)),i(e,p({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"单机放不下")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> 多机存储池")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"多机要扩展容量和带宽")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> DataNode")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"客户端需要统一文件系统视图")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> NameNode")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"大文件要分布、并行、复制、恢复")]),n(`
`),s("span",{class:"line"},[s("span",null,"  -> split into blocks")])])],-1)])]),_:1},16)]),_:1},16)}}};export{D as default};
