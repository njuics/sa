import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CmXZP4ww.js";import{o,b as d,w as a,g as s,d as e,m as t,ad as i,v as c,x as u,T as p}from"./modules/vue-U4KdHHdq.js";import{_ as g}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-a5qLg23D.js";import{u as m,f}from"./slidev/context-Bs_8Zvzg.js";import"./modules/unplugin-icons-DqFNU4b1.js";import"./index-BLByoOov.js";import"./modules/shiki-CmfFBYOm.js";const P={__name:"06-scalable.md__slidev_18",setup(y){const{$clicksContext:r,$frontmatter:k}=m();return r.setup(),(A,l)=>{const n=h;return o(),d(g,c(u(p(f)(p(k),17))),{right:a(x=>[l[2]||(l[2]=s("br",null,null,-1)),l[3]||(l[3]=s("p",null,[s("strong",null,"相比L4（TCP mode）的优势：")],-1)),l[4]||(l[4]=s("ul",null,[s("li",null,[i("基于URL路径路由（"),s("code",null,"path_beg"),i("）")]),s("li",null,[i("HTTP健康检查（"),s("code",null,"option httpchk"),i("）")]),s("li",null,"可插入Cookie实现会话粘滞"),s("li",null,"支持Header改写、请求重定向")],-1)),e(n,t({},{title:"",ranges:[]}),{default:a(()=>[...l[1]||(l[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# 使用L7配置启动")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"docker"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," run"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," -d"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," --name"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," haproxy-l7"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"  -v"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," $("),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"pwd"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/haproxy-http.cfg:"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"/usr/local/etc/haproxy/haproxy.cfg "),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"  -p"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," 8080:8080"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," haproxy:latest")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# HAProxy同时支持L4和L7")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# mode tcp → L4（性能优先）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# mode http → L7（功能优先）")])])],-1)])]),_:1},16),l[5]||(l[5]=s("div",{style:{"text-align":"right"}},"examples/06-scalable/matrix-compute",-1))]),default:a(()=>[l[6]||(l[6]=s("h1",null,"L7 实验: HAProxy（HTTP mode）",-1)),l[7]||(l[7]=s("p",null,"haproxy-http.cfg:",-1)),e(n,t({},{title:"",ranges:[]}),{default:a(()=>[...l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"defaults")]),i(`
`),s("span",{class:"line"},[s("span",null,"    mode http")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout connect 5s")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout client  30s")]),i(`
`),s("span",{class:"line"},[s("span",null,"    timeout server  30s")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"frontend lb-matrix")]),i(`
`),s("span",{class:"line"},[s("span",null,"    bind *:8080")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"    acl is_matrix path_beg /api/matrix")]),i(`
`),s("span",{class:"line"},[s("span",null,"    use_backend matrix_servers if is_matrix")]),i(`
`),s("span",{class:"line"},[s("span",null,"    default_backend matrix_servers")]),i(`
`),s("span",{class:"line"},[s("span")]),i(`
`),s("span",{class:"line"},[s("span",null,"backend matrix_servers")]),i(`
`),s("span",{class:"line"},[s("span",null,"    balance roundrobin")]),i(`
`),s("span",{class:"line"},[s("span",null,"    option httpchk GET /actuator/health")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc1 host.docker.internal:8081 check")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc2 host.docker.internal:8082 check")]),i(`
`),s("span",{class:"line"},[s("span",null,"    server mc3 host.docker.internal:8083 check")])])],-1)])]),_:1},16)]),_:1},16)}}};export{P as default};
