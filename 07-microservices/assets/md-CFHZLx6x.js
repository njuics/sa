import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CoL7wiSr.js";import{o as p,b as o,w as a,g as l,d,m as c,ad as n,v as m,x as f,T as e}from"./modules/vue-U4KdHHdq.js";import{I as g}from"./slidev/default-ptFbLofy.js";import{u as k,f as v}from"./slidev/context-D_J3MUhX.js";import"./modules/unplugin-icons-DqFNU4b1.js";import"./index-BTNBJufk.js";import"./modules/shiki-CmfFBYOm.js";const _={class:"grid grid-cols-2 gap-4"},I={__name:"07-microservices.md__slidev_6",setup(h){const{$clicksContext:t,$frontmatter:i}=k();return t.setup(),(x,s)=>{const u=r;return p(),o(g,m(f(e(v)(e(i),5))),{default:a(()=>[s[2]||(s[2]=l("h1",null,"微服务基础设施全景",-1)),l("div",_,[l("div",null,[d(u,c({},{title:"",ranges:[]}),{default:a(()=>[...s[0]||(s[0]=[l("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[l("code",{class:"language-text"},[l("span",{class:"line"},[l("span",null,"              ┌─────────────┐")]),n(`
`),l("span",{class:"line"},[l("span",null,"              │  API Gateway │  ← 统一入口")]),n(`
`),l("span",{class:"line"},[l("span",null,"              └──────┬──────┘")]),n(`
`),l("span",{class:"line"},[l("span",null,"                     │")]),n(`
`),l("span",{class:"line"},[l("span",null,"        ┌────────────┼────────────┐")]),n(`
`),l("span",{class:"line"},[l("span",null,"        │            │            │")]),n(`
`),l("span",{class:"line"},[l("span",null,"   ┌────┴────┐ ┌────┴────┐ ┌────┴────┐")]),n(`
`),l("span",{class:"line"},[l("span",null,"   │Service A│ │Service B│ │Service C│")]),n(`
`),l("span",{class:"line"},[l("span",null,"   │ (多实例) │ │ (多实例) │ │ (多实例) │")]),n(`
`),l("span",{class:"line"},[l("span",null,"   └────┬────┘ └────┬────┘ └────┬────┘")]),n(`
`),l("span",{class:"line"},[l("span",null,"        │           │           │")]),n(`
`),l("span",{class:"line"},[l("span",null,"        └─────┬─────┴───────────┘")]),n(`
`),l("span",{class:"line"},[l("span",null,"              │")]),n(`
`),l("span",{class:"line"},[l("span",null,"    ┌─────────┼─────────┐")]),n(`
`),l("span",{class:"line"},[l("span",null,"    │         │         │")]),n(`
`),l("span",{class:"line"},[l("span",null,"┌───┴───┐ ┌──┴───┐ ┌───┴────┐")]),n(`
`),l("span",{class:"line"},[l("span",null,"│服务注册│ │配置中心│ │链路追踪 │")]),n(`
`),l("span",{class:"line"},[l("span",null,"└───────┘ └──────┘ └────────┘")])])],-1)])]),_:1},16)]),s[1]||(s[1]=l("div",{class:"text-sm"},[l("p",null,[n("微服务不只是拆分应用，还需要一套"),l("strong",null,"基础设施"),n("支撑服务间的协作")]),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"组件"),l("th",null,"解决什么问题"),l("th",null,"Spring Cloud")])]),l("tbody",null,[l("tr",null,[l("td",null,"服务注册与发现"),l("td",null,"服务在哪里？"),l("td",null,"Eureka / Consul")]),l("tr",null,[l("td",null,"配置中心"),l("td",null,"配置如何统一管理？"),l("td",null,"Config Server")]),l("tr",null,[l("td",null,"API Gateway"),l("td",null,"客户端如何访问？"),l("td",null,"Spring Cloud Gateway")]),l("tr",null,[l("td",null,"负载均衡"),l("td",null,"请求分给哪个实例？"),l("td",null,"LoadBalancer")]),l("tr",null,[l("td",null,"断路器"),l("td",null,"下游故障怎么办？"),l("td",null,"Resilience4j")]),l("tr",null,[l("td",null,"链路追踪"),l("td",null,"请求经过了哪里？"),l("td",null,"Micrometer Tracing")])])])],-1))])]),_:1},16)}}};export{I as default};
