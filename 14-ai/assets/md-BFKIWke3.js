import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-4QSJ_g0W.js";import{o,b as u,w as l,g as s,d,m,D as n,v as c,x as g,z as e}from"./modules/vue-D2XQG_Zi.js";import{I as f}from"./slidev/default-DkkAYGLO.js";import{u as k,f as A}from"./slidev/context-CWhhtyMn.js";import"./modules/unplugin-icons-Dh1c2lUi.js";import"./index-C4c9getm.js";import"./modules/shiki-C_lgq8_O.js";const _={class:"text-sm"},y={__name:"14-ai.md__slidev_35",setup(x){const{$clicksContext:t,$frontmatter:r}=k();return t.setup(),(v,a)=>{const p=i;return o(),u(f,c(g(e(A)(e(r),34))),{default:l(()=>[a[1]||(a[1]=s("h1",null,"Harness · Guardrails（安全护栏）",-1)),a[2]||(a[2]=s("p",null,'Agent 自主执行多步操作——如果其中一步是"退款 ¥5000"，让 LLM 自主决定吗？',-1)),a[3]||(a[3]=s("p",null,[s("strong",null,"设计原则：查询自动执行，写操作需要人工确认（Human-in-the-Loop）。")],-1)),s("div",_,[d(p,m({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"用户: 帮我处理订单 ORD-001 的退货")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'Agent 第1轮: queryOrder("ORD-001")        → 自动执行 ✅ (只读)')]),n(`
`),s("span",{class:"line"},[s("span",null,"  → 已签收，金额 5499 元")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"Agent 第2轮: [RAG] 查退货政策              → 自动执行 ✅ (只读)")]),n(`
`),s("span",{class:"line"},[s("span",null,"  → 15天内可退")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'Agent 第3轮: applyReturn("ORD-001")        → ⚠️ 暂停！需要人工确认')]),n(`
`),s("span",{class:"line"},[s("span",null,'  → 系统: "Agent 要申请退货(¥5499)，是否同意？" → 人工: 同意')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'Agent 第4轮: refund("ORD-001", 5499)       → ⚠️ 暂停！需要人工确认')]),n(`
`),s("span",{class:"line"},[s("span",null,'  → 系统: "Agent 要退款 ¥5499，是否同意？" → 人工: 同意')])])],-1)])]),_:1},16)]),a[4]||(a[4]=s("p",null,[s("strong",null,"Guardrails 不只是权限控制"),n("——还包括输入过滤（拦截 prompt 注入攻击）、输出审核（过滤敏感/有害内容）、成本熔断（token 超预算时终止）。Spring AI 的 "),s("code",null,"PromptGuardAdvisor"),n(" 就是输入层 Guardrail。")],-1))]),_:1},16)}}};export{y as default};
