import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CmXZP4ww.js";import{o,b as d,w as l,g as s,d as e,m as t,ad as i,v as c,x as g,T as r}from"./modules/vue-U4KdHHdq.js";import{_ as m}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-a5qLg23D.js";import{u,f as A}from"./slidev/context-Bs_8Zvzg.js";import"./modules/unplugin-icons-DqFNU4b1.js";import"./index-BLByoOov.js";import"./modules/shiki-CmfFBYOm.js";const E={__name:"06-scalable.md__slidev_17",setup(f){const{$clicksContext:p,$frontmatter:k}=u();return p.setup(),(y,a)=>{const n=h;return o(),d(m,c(g(r(A)(r(k),16))),{right:l(C=>[a[2]||(a[2]=s("p",null,"haproxy.cfg:",-1)),e(n,t({},{title:"",ranges:[]}),{default:l(()=>[...a[1]||(a[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"defaults")]),i(`
`),s("span",{class:"line"},[s("span",null,"    mode tcp")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout connect 5s")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout client  30s")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout server  30s")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"frontend lb-matrix")]),i(`
`),s("span",{class:"line"},[s("span",null,"    bind *:8080")]),i(`
`),s("span",{class:"line"},[s("span",null,"    default_backend servers")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"backend servers")]),i(`
`),s("span",{class:"line"},[s("span",null,"    balance roundrobin")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc1 host.docker.internal:8081 check")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc2 host.docker.internal:8082 check")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc3 host.docker.internal:8083 check")])])],-1)])]),_:1},16),a[3]||(a[3]=s("div",{style:{"text-align":"right"}},"examples/06-scalable/matrix-compute",-1))]),default:l(()=>[a[4]||(a[4]=s("h1",null,"L4 实验: HAProxy（TCP mode）",-1)),e(n,t({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# 一键启动（3个matrix-compute + HAProxy）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"docker"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," compose"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," up"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -d")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# 压测（通过HAProxy 8080端口）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ab"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -n"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 200"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -c"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 50"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'  "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"http://127.0.0.1:8080/api/matrix/multiply"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"?size=500&seed=42"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# 停止")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"docker"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," compose"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," down")])])],-1)])]),_:1},16)]),_:1},16)}}};export{E as default};
