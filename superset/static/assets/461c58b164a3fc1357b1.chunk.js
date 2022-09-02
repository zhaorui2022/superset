"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3588],{23588:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v}),n(67294);var a=n(43323),r=n(11965),s=n(51995),i=n(15078),o=n.n(i),d=n(45697),l=n.n(d),c=n(28041),u=n.n(c),p=n(67190),g=n(51115),h=n(28062);const m={data:l().objectOf(l().arrayOf(l().shape({key:l().arrayOf(l().string),name:l().arrayOf(l().string),time:l().number,value:l().number}))),width:l().number,height:l().number,dateTimeFormat:l().string,numberFormat:l().string,useRichTooltip:l().bool,useAreaProportions:l().bool};function f(t){return{startAngle:t.startAngle,endAngle:t.endAngle,innerRadius:t.innerRadius,outerRadius:t.outerRadius}}function y(t,e){return t.value===e.value?t.name>e.name?1:-1:e.value-t.value}function b(t,e){const{data:n,width:a,height:r,colorScheme:s,dateTimeFormat:i,numberFormat:d,useRichTooltip:l,useAreaProportions:c,sliceId:m}=e,b=o().select(t);b.classed("superset-legacy-chart-rose",!0);const I=n,A=Object.keys(I).map((t=>parseInt(t,10))).sort(((t,e)=>t-e)),v=A.length,R=I[A[0]].length,T=(0,p.JB)(d),w=(0,g.bt)(i),k=h.getScale(s);o().select(".nvtooltip").remove(),b.selectAll("*").remove();const x=o().svg.arc(),O=u().models.legend(),N=u().models.tooltip(),$={disabled:I[A[0]].map((()=>!1))},S=b.append("svg").attr("width",a).attr("height",r).append("g").attr("class","rose").append("g"),M=S.append("g").attr("class","legendWrap");function C(t){return t[A[0]].map(((t,e)=>({disabled:$.disabled[e],key:t.name})))}O.width(a).color((t=>k(t.key,m))),M.datum(C(I)).call(O),N.headerFormatter(w).valueFormatter(T),N.classes("tooltip");const P=r-O.height(),J=O.height(),W=Math.min(a,P)/2-35,F=.075,L=`translate(${a/2},${P/2+J})`,Z=S.append("g").attr("transform",L).attr("class","roseWrap"),z=S.append("g").attr("transform",L).attr("class","labelsWrap"),U=S.append("g").attr("transform",L).attr("class","groupLabelsWrap");function j(t){let e=0,n=0;const a=[];for(const t of A){const r=I[t].reduce(((t,e,n)=>t+($.disabled[n]?0:e.value)),0);e=r>e?r:e,a[n]=r,n+=1}const r=2*Math.PI/v,s=[];for(let t=0;t<=v;t+=1)s.push(r*t-Math.PI/2);const i=W/e,o=i*W,d=(t,e)=>c?Math.sqrt(o*t+e*e):i*t+e,l={data:[],extend:{},push:{},pieStart:{},pie:{},pieOver:{},mini:{},labels:[],groupLabels:[]};let u=0;for(let e=0;e<v;e+=1){const n=A[e],r=s[e],i=s[e+1],o=2*Math.PI/a[e];let c,p,g=0,h=0;for(const e of t[n]){const t=$.disabled[u%R]?0:e.value,{name:n,time:a}=e;e.id=u,c=d(t,g),l.data.push({startAngle:r,endAngle:i,innerRadius:g,outerRadius:c,name:n,arcId:u,val:t,time:a}),l.extend[u]={startAngle:r,endAngle:i,innerRadius:g,name:n,outerRadius:c+8},l.push[u]={startAngle:r,endAngle:i,innerRadius:g+8,outerRadius:c+8},l.pieStart[u]={startAngle:r,endAngle:i,innerRadius:F*W,outerRadius:W},l.mini[u]={startAngle:r,endAngle:i,innerRadius:g*F,outerRadius:c*F},u+=1,g=c}const m={...l.data[e*R]};m.outerRadius=W+20,m.innerRadius=W+15,l.labels.push(m);for(const r of t[n].concat().sort(y))p=o*($.disabled[r.id%R]?0:r.value)+h,l.pie[r.id]={startAngle:h,endAngle:p,innerRadius:W*F,outerRadius:W,percent:r.value/a[e]},l.pieOver[r.id]={startAngle:h,endAngle:p,innerRadius:W*F,outerRadius:W+8},h=p}return l.groupLabels=l.data.slice(0,R),l}let D=j(I);function K(t,e){return function(n){const a=o().interpolate(f(n),f(t));return t=>e(Object.assign(n,a(t)))}}function B(t){return K(t,(t=>x(t)))}function q(t){return K(t,(t=>`translate(${x.centroid(t)})`))}const G={};function E(t){if(G[t])return G[t];const e=Math.floor(t/R);return G[t]=[t+1,R*(e+1)-1],G[t]}const H={};function Q(t){if(H[t])return H[t];const e=Math.floor(t/R);return H[t]=[e*R,(e+1)*R-1],H[t]}let V=-1,X=!1;const Y=Z.selectAll("g").data(JSON.parse(JSON.stringify(D.data))).enter().append("g").attr("class","segment").classed("clickable",!0).on("mouseover",(function(t,e){N.data(function(t,e,n){const a=Math.floor(t.arcId/R),r=l?n[A[a]].filter((t=>!$.disabled[t.id%R])).map((e=>({key:e.name,value:e.value,color:k(e.name,m),highlight:e.id===t.arcId}))):[{key:t.name,value:t.val,color:k(t.name,m)}];return{key:"Date",value:t.time,series:r}}(t,0,I)).hidden(!1);const n=o().select(this);if(n.classed("hover",!0),V<0&&!X){n.select("path").interrupt().transition().duration(180).attrTween("d",B(D.extend[e]));const t=E(e);et.filter((e=>t[0]<=e.arcId&&e.arcId<=t[1])).interrupt().transition().duration(180).attrTween("d",(t=>B(D.push[t.arcId])(t)))}else if(!X){const a=Q(V);a[0]<=t.arcId&&t.arcId<=a[1]&&n.select("path").interrupt().transition().duration(180).attrTween("d",B(D.pieOver[e]))}})).on("mouseout",(function(t,e){N.hidden(!0);const n=o().select(this);if(n.classed("hover",!1),V<0&&!X){n.select("path").interrupt().transition().duration(180).attrTween("d",B(D.data[e]));const t=E(e);et.filter((e=>t[0]<=e.arcId&&e.arcId<=t[1])).interrupt().transition().duration(180).attrTween("d",(t=>B(D.data[t.arcId])(t)))}else if(!X){const a=Q(V);a[0]<=t.arcId&&t.arcId<=a[1]&&n.select("path").interrupt().transition().duration(180).attrTween("d",B(D.pie[e]))}})).on("mousemove",(function(){N()})).on("click",(function(t,e){if(X)return;const n=o().event.altKey?3750:375,a=Q(e);if(V<0)X=!0,V=e,_.interrupt().transition().duration(n).attrTween("transform",(t=>q({outerRadius:0,innerRadius:0,startAngle:t.startAngle,endAngle:t.endAngle})(t))).style("opacity",0),tt.attr("transform",`translate(${x.centroid({outerRadius:W+20,innerRadius:W+15,startAngle:D.data[e].startAngle,endAngle:D.data[e].endAngle})})`).interrupt().transition().delay(n).duration(n).attrTween("transform",(t=>q({outerRadius:W+20,innerRadius:W+15,startAngle:D.pie[a[0]+t.arcId].startAngle,endAngle:D.pie[a[0]+t.arcId].endAngle})(t))).style("opacity",(t=>$.disabled[t.arcId]||D.pie[a[0]+t.arcId].percent<.05?0:1)),Y.classed("clickable",(t=>a[0]>t.arcId||t.arcId>a[1])),et.filter((t=>a[0]<=t.arcId&&t.arcId<=a[1])).interrupt().transition().duration(n).attrTween("d",(t=>B(D.pieStart[t.arcId])(t))).transition().duration(n).attrTween("d",(t=>B(D.pie[t.arcId])(t))).each("end",(()=>{X=!1})),et.filter((t=>a[0]>t.arcId||t.arcId>a[1])).interrupt().transition().duration(n).attrTween("d",(t=>B(D.mini[t.arcId])(t)));else if(V<a[0]||a[1]<V){X=!0;const t=Q(V);_.interrupt().transition().delay(n).duration(n).attrTween("transform",(t=>q(D.labels[t.arcId/R])(t))).style("opacity",1),tt.interrupt().transition().duration(n).attrTween("transform",q({outerRadius:W+20,innerRadius:W+15,startAngle:D.data[V].startAngle,endAngle:D.data[V].endAngle})).style("opacity",0),Y.classed("clickable",!0),et.filter((e=>t[0]<=e.arcId&&e.arcId<=t[1])).interrupt().transition().duration(n).attrTween("d",(t=>B(D.pieStart[t.arcId])(t))).transition().duration(n).attrTween("d",(t=>B(D.data[t.arcId])(t))).each("end",(()=>{V=-1,X=!1})),et.filter((e=>t[0]>e.arcId||e.arcId>t[1])).interrupt().transition().delay(n).duration(n).attrTween("d",(t=>B(D.data[t.arcId])(t)))}})),_=z.selectAll("g").data(JSON.parse(JSON.stringify(D.labels))).enter().append("g").attr("class","roseLabel").attr("transform",(t=>`translate(${x.centroid(t)})`));_.append("text").style("text-anchor","middle").style("fill","#000").text((t=>w(t.time)));const tt=U.selectAll("g").data(JSON.parse(JSON.stringify(D.groupLabels))).enter().append("g");tt.style("opacity",0).attr("class","roseGroupLabels").append("text").style("text-anchor","middle").style("fill","#000").text((t=>t.name));const et=Y.append("path").attr("class","arc").attr("fill",(t=>k(t.name,m))).attr("d",x);O.dispatch.on("stateChange",(t=>{$.disabled!==t.disabled&&($.disabled=t.disabled,function(){const t=o().event.altKey?3e3:300;M.datum(C(I)).call(O);const e=j(I);if(X=!0,V<0)et.style("opacity",1).interrupt().transition().duration(t).attrTween("d",(t=>B(e.data[t.arcId])(t))).each("end",(()=>{X=!1,D=e})).transition().duration(0).style("opacity",(t=>$.disabled[t.arcId%R]?0:1));else{const n=Q(V);et.style("opacity",1).interrupt().transition().duration(t).attrTween("d",(t=>n[0]<=t.arcId&&t.arcId<=n[1]?B(e.pie[t.arcId])(t):B(e.mini[t.arcId])(t))).each("end",(()=>{X=!1,D=e})).transition().duration(0).style("opacity",(t=>$.disabled[t.arcId%R]?0:1)),tt.interrupt().transition().duration(t).attrTween("transform",(t=>q({outerRadius:W+20,innerRadius:W+15,startAngle:e.pie[n[0]+t.arcId].startAngle,endAngle:e.pie[n[0]+t.arcId].endAngle})(t))).style("opacity",(t=>$.disabled[t.arcId]||D.pie[n[0]+t.arcId].percent<.05?0:1))}}())}))}b.displayName="Rose",b.propTypes=m;const I=b,A=(0,a.Z)(I),v=(0,s.iK)((({className:t,...e})=>(0,r.tZ)("div",{className:t},(0,r.tZ)(r.xB,{styles:t=>r.iv`
        .tooltip {
          line-height: 1;
          padding: ${3*t.gridUnit}px;
          background: ${t.colors.grayscale.dark2};
          color: ${t.colors.grayscale.light5};
          border-radius: 4px;
          pointer-events: none;
          z-index: 1000;
          font-size: ${t.typography.sizes.s}px;
        }
      `}),(0,r.tZ)(A,e))))`
  ${({theme:t})=>`\n    .superset-legacy-chart-rose path {\n        transition: fill-opacity 180ms linear;\n        stroke: ${t.colors.grayscale.light5};\n        stroke-width: 1px;\n        stroke-opacity: 1;\n        fill-opacity: 0.75;\n    }\n\n    .superset-legacy-chart-rose text {\n        font-weight: ${t.typography.weights.normal};\n        font-size: ${t.typography.sizes.s}px;\n        font-family: ${t.typography.families.sansSerif};\n        pointer-events: none;\n    }\n\n    .superset-legacy-chart-rose .clickable path {\n        cursor: pointer;\n    }\n\n    .superset-legacy-chart-rose .hover path {\n        fill-opacity: 1;\n    }\n\n    .nv-legend .nv-series {\n        cursor: pointer;\n    }\n  `}
`},43323:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(67294),r=n(11965);function s(t,e){class n extends a.Component{constructor(t){super(t),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(0,r.tZ)("div",{ref:this.setContainerRef,id:t,className:e})}}const s=n;return t.displayName&&(s.displayName=t.displayName),t.propTypes&&(s.propTypes={...s.propTypes,...t.propTypes}),t.defaultProps&&(s.defaultProps=t.defaultProps),n}}}]);
//# sourceMappingURL=461c58b164a3fc1357b1.chunk.js.map