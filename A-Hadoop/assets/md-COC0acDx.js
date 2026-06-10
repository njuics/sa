import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s,x as c}from"./modules/shiki-DB9HpJnJ.js";import{nt as l,rt as u}from"./index-D7FuMmv9.js";import{t as d}from"./slidev/CodeBlockWrapper-SOGDNktT.js";import{t as f}from"./slidev/two-cols-BHotIpo7.js";var p={__name:`A-Hadoop.md__slidev_72`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=u();return g.setup(),(u,p)=>{let m=d;return e(),r(f,o(t(s(l)(s(b),71))),{right:n(e=>[p[2]||=a(`p`,null,[a(`br`),a(`br`)],-1),c(m,{title:``,ranges:[]},{default:n(()=>[...p[1]||=[a(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[a(`code`,{class:`language-text`},[a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`NameNode 要快`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> metadata in RAM`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`机器会坏`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> replication + heartbeat`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`要高吞吐写入`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> pipeline write`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`机架会坏`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> rack-aware placement`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`长期运行会漂移`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> replication manager + balancer + scanner`)])])],-1)]]),_:1})]),default:n(()=>[p[3]||=a(`h1`,null,`从零构建路径回顾`,-1),p[4]||=a(`br`,null,null,-1),p[5]||=a(`p`,null,`我们是这样一步步长出 HDFS 的：`,-1),c(m,{title:``,ranges:[]},{default:n(()=>[...p[0]||=[a(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[a(`code`,{class:`language-text`},[a(`span`,{class:`line`},[a(`span`,null,`单机放不下`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> 多机存储池`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`多机要扩展容量和带宽`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> DataNode`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`客户端需要统一文件系统视图`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> NameNode`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`大文件要分布、并行、复制、恢复`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`  -> split into blocks`)])])],-1)]]),_:1})]),_:1},16)}}};export{p as default};