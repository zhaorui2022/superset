"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2569],{31405:(e,t,s)=>{s.d(t,{n:()=>n}),s(67294);var r=s(11965);const n=()=>(0,r.tZ)(r.xB,{styles:e=>r.iv`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong,
      th {
        font-weight: ${e.typography.weights.bold};
      }
    `})},38552:(e,t,s)=>{s.d(t,{Z:()=>m});var r=s(19755),n=s.n(r),a=s(31069),l=s(98286),i=s(92869),u=s(67663),o=s(67294),R=s(61988),g=s(11965);function c({code:e,message:t}){return(0,g.tZ)(o.Fragment,null,t," ",(0,g.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${e}`,rel:"noopener noreferrer",target:"_blank"},(0,g.tZ)("i",{className:"fa fa-external-link"})))}var _=s(91178);const E=function({error:e,source:t}){const{extra:s,level:r}=e,n=["dashboard","explore"].includes(t),a=n?(0,R.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",s.timeout,s.timeout):(0,R.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",s.timeout,s.timeout),l=(0,g.tZ)(o.Fragment,null,(0,g.tZ)("p",null,(0,R.t)("This may be triggered by:"),(0,g.tZ)("br",null),s.issue_codes.map((e=>(0,g.tZ)(c,e))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t]))),n&&s.owners&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("br",null),(0,g.tZ)("p",null,(0,R.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",s.owners.length)),(0,g.tZ)("p",null,(0,R.tn)("Chart Owner: %s","Chart Owners: %s",s.owners.length,s.owners.join(", "))))),i=(0,R.t)("%(subtitle)s\nThis may be triggered by:\n %(issue)s",{subtitle:a,issue:s.issue_codes.map((e=>e.message)).join("\n")});return(0,g.tZ)(_.Z,{title:(0,R.t)("Timeout error"),subtitle:a,level:r,source:t,copyText:i,body:l})};var O=s(5872),d=s.n(O);const C=function({error:e,source:t="dashboard",subtitle:s}){const{extra:r,level:n,message:a}=e,l=["dashboard","explore"].includes(t),i=r&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("p",null,(0,R.t)("This may be triggered by:"),(0,g.tZ)("br",null),r.issue_codes.map((e=>(0,g.tZ)(c,d()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t]))),l&&r.owners&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("br",null),(0,g.tZ)("p",null,(0,R.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",r.owners.length)),(0,g.tZ)("p",null,(0,R.tn)("Chart Owner: %s","Chart Owners: %s",r.owners.length,r.owners.join(", "))))),u=r&&r.issue_codes?(0,R.t)("%(message)s\nThis may be triggered by: \n%(issues)s",{message:a,issues:r.issue_codes.map((e=>e.message)).join("\n")}):a;return(0,g.tZ)(_.Z,{title:(0,R.t)("%s Error",r&&r.engine_name||(0,R.t)("DB engine")),subtitle:s,level:n,source:t,copyText:u,body:i})};var h=s(39991),N=s.n(h);const T=function({error:e,source:t="sqllab",subtitle:s}){const{extra:r={issue_codes:[]},level:n,message:a}=e,l=(0,R.tn)("This was triggered by:","This may be triggered by:",r.issue_codes.length),i=((e,t)=>{const s={};return e.forEach((e=>{t.forEach((t=>{N()(e,t)<=2&&(s[e]||(s[e]=[]),s[e].push(`"${t}"`))}))})),s})(r.undefined_parameters||[],Object.keys(r.template_parameters||{})),u=(0,g.tZ)(o.Fragment,null,(0,g.tZ)("p",null,Object.keys(i).length>0&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("p",null,(0,R.t)("Did you mean:")),(0,g.tZ)("ul",null,Object.entries(i).map((([e,t])=>(0,g.tZ)("li",null,(0,R.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',t.length,{suggestion:t.join(", "),firstSuggestions:t.slice(0,-1).join(", "),lastSuggestion:t[t.length-1],undefinedParameter:e}))))),(0,g.tZ)("br",null)),l,(0,g.tZ)("br",null),r.issue_codes.length>0&&r.issue_codes.map((e=>(0,g.tZ)(c,e))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t])))),E=`${a}\n${l}\n${r.issue_codes.map((e=>e.message)).join("\n")}`;return(0,g.tZ)(_.Z,{title:(0,R.t)("Parameter error"),subtitle:s,level:n,source:t,copyText:E,body:u})},b=function({error:e,source:t="dashboard",subtitle:s}){const{level:r,message:n}=e;return(0,g.tZ)(_.Z,{title:(0,R.t)("Missing dataset"),subtitle:s,level:r,source:t,copyText:n,body:null})};function m(){n()(document).ready((function(){n()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=n()(this);var t,s;t=e.data("checkbox-api-prefix"),s=`#${e.attr("id")}`,a.Z.get({endpoint:t+n()(s)[0].checked}).then((()=>{})).catch((e=>(0,l.O)(e).then((e=>{e&&e.message&&function(e){const t=e.severity||"info";n()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(n()("#alert-container"))}(e)}))))})),n()("#language-picker a").click((function(e){e.preventDefault(),a.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=n(),window.jQuery=n(),s(57915),function(){const e=(0,i.Z)();e.registerValue(u.C.FRONTEND_TIMEOUT_ERROR,E),e.registerValue(u.C.BACKEND_TIMEOUT_ERROR,E),e.registerValue(u.C.DATABASE_NOT_FOUND_ERROR,C),e.registerValue(u.C.GENERIC_DB_ENGINE_ERROR,C),e.registerValue(u.C.GENERIC_BACKEND_ERROR,C),e.registerValue(u.C.COLUMN_DOES_NOT_EXIST_ERROR,C),e.registerValue(u.C.TABLE_DOES_NOT_EXIST_ERROR,C),e.registerValue(u.C.MISSING_TEMPLATE_PARAMS_ERROR,T),e.registerValue(u.C.INVALID_TEMPLATE_PARAMS_ERROR,T),e.registerValue(u.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,C),e.registerValue(u.C.DML_NOT_ALLOWED_ERROR,C),e.registerValue(u.C.INVALID_CTAS_QUERY_ERROR,C),e.registerValue(u.C.INVALID_CVAS_QUERY_ERROR,C),e.registerValue(u.C.QUERY_SECURITY_ACCESS_ERROR,C),e.registerValue(u.C.CONNECTION_INVALID_HOSTNAME_ERROR,C),e.registerValue(u.C.RESULTS_BACKEND_ERROR,C),e.registerValue(u.C.ASYNC_WORKERS_ERROR,C),e.registerValue(u.C.SQLLAB_TIMEOUT_ERROR,C),e.registerValue(u.C.CONNECTION_PORT_CLOSED_ERROR,C),e.registerValue(u.C.CONNECTION_HOST_DOWN_ERROR,C),e.registerValue(u.C.CONNECTION_INVALID_USERNAME_ERROR,C),e.registerValue(u.C.CONNECTION_INVALID_PASSWORD_ERROR,C),e.registerValue(u.C.CONNECTION_ACCESS_DENIED_ERROR,C),e.registerValue(u.C.CONNECTION_UNKNOWN_DATABASE_ERROR,C),e.registerValue(u.C.SCHEMA_DOES_NOT_EXIST_ERROR,C),e.registerValue(u.C.OBJECT_DOES_NOT_EXIST_ERROR,C),e.registerValue(u.C.SYNTAX_ERROR,C),e.registerValue(u.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,C),e.registerValue(u.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,b)}()}}}]);
//# sourceMappingURL=2569.916c1cd39e37ed533a44.entry.js.map