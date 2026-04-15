import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DLQrKh7m.js";import{o as p,b as c,w as a,g as e,d,m as u,ad as s,v as m,x as f,T as o}from"./modules/vue--p6ZIV_T.js";import{I as S}from"./slidev/default-DlEgsyde.js";import{u as C,f as k}from"./slidev/context-Coiuqy-s.js";import"./modules/unplugin-icons-BaFLhggH.js";import"./index-Du6tgMcU.js";import"./modules/shiki-CI4NU6Wf.js";const N={__name:"06-scalable.md__slidev_6",setup(g){const{$clicksContext:l,$frontmatter:r}=C();return l.setup(),(h,n)=>{const t=i;return p(),c(S,m(f(o(k)(o(r),5))),{default:a(()=>[n[1]||(n[1]=e("h2",null,"五、IoC 容器组装",-1)),n[2]||(n[2]=e("p",null,"所有框架构件由 IoC 容器统一管理，通过配置切换：",-1)),d(t,u({},{title:"",ranges:[]}),{default:a(()=>[...n[0]||(n[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"IoC 容器")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── HttpServer          ← 依赖 Router、HandlerAdapter、ViewResolver、SessionStore")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── SessionStore        ← MemorySessionStore / FileSessionStore / None（无状态模式）")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── CacheStore          ← MemoryCacheStore（可通过 --cache on|off 启用）")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── SignedCookieStore   ← 签名 Cookie 编解码（用于无状态模式）")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── ProductController   ← 依赖 ProductService（使用 @cacheable）")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── CartController      ← 有状态版，依赖 Session")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── ApiCartController   ← 无状态版，依赖 SignedCookieStore")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── OrderController     ← 依赖 OrderService")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ├── ProductService      ← @cacheable")]),s(`
`),e("span",{class:"line"},[e("span",null,"  └── ProductRepository   ← JSON 文件持久化 + 模拟延迟")])])],-1)])]),_:1},16)]),_:1},16)}}};export{N as default};
