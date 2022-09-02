"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5094],{25094:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var o=n(67294),a=n(45697),i=n.n(a),l=n(24198),s=n(35932),r=n(51995),h=n(61988),u=n(11064),d=n(60524),p=n(95826),c=n(31069),m=n(81545),y=n(68135),v=n(82199),g=n(79684),b=n(79069),T=n(10945),Z=n(83734),w=n(82342),C=n(94301),f=n(11965);const S="",A={name:i().string,annotationType:i().string,sourceType:i().string,color:i().string,opacity:i().string,style:i().string,width:i().number,showMarkers:i().bool,hideLine:i().bool,value:i().oneOfType([i().string,i().number]),overrides:i().object,show:i().bool,showLabel:i().bool,titleColumn:i().string,descriptionColumns:i().arrayOf(i().string),timeColumn:i().string,intervalEndColumn:i().string,vizType:i().string,error:i().string,colorScheme:i().string,addAnnotationLayer:i().func,removeAnnotationLayer:i().func,close:i().func},L={name:"",annotationType:T.qy,sourceType:"",color:S,opacity:"",style:"solid",width:1,showMarkers:!1,hideLine:!1,overrides:{},colorScheme:"d3Category10",show:!0,showLabel:!1,titleColumn:"",descriptionColumns:[],timeColumn:"",intervalEndColumn:"",addAnnotationLayer:()=>{},removeAnnotationLayer:()=>{},close:()=>{}},E=r.iK.div`
  && > div:first-child {
    padding-left: 0;
    padding-right: 0;
  }
`,k=()=>(0,f.tZ)(E,null,(0,f.tZ)(C.Tc,{title:(0,h.t)("No annotation layers"),description:(0,f.tZ)("span",null,(0,h.t)("Add an annotation layer")," ",(0,f.tZ)("a",{href:"/annotationlayermodelview/list",target:"_blank",rel:"noopener noreferrer"},(0,h.t)("here")),"."),image:"empty.svg"}));var O={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};class _ extends o.PureComponent{constructor(e){super(e);const{name:t,annotationType:n,sourceType:o,color:a,opacity:i,style:l,width:s,showMarkers:r,hideLine:h,value:d,overrides:p,show:c,showLabel:m,titleColumn:y,descriptionColumns:v,timeColumn:g,intervalEndColumn:b,vizType:T}=e;("since"in p||"until"in p)&&(p.time_range=null,delete p.since,delete p.until);const Z=(0,u.Z)().get(T),w=(null==Z?void 0:Z.supportedAnnotationTypes)||[],C=w.includes(n)?n:w[0];this.state={name:t,annotationType:C,sourceType:o,value:d,overrides:p,show:c,showLabel:m,titleColumn:y,descriptionColumns:v,timeColumn:g,intervalEndColumn:b,color:a||S,opacity:i,style:l,width:s,showMarkers:r,hideLine:h,isNew:!t,isLoadingOptions:!0,valueOptions:[]},this.submitAnnotation=this.submitAnnotation.bind(this),this.deleteAnnotation=this.deleteAnnotation.bind(this),this.applyAnnotation=this.applyAnnotation.bind(this),this.fetchOptions=this.fetchOptions.bind(this),this.handleAnnotationType=this.handleAnnotationType.bind(this),this.handleAnnotationSourceType=this.handleAnnotationSourceType.bind(this),this.handleValue=this.handleValue.bind(this),this.isValidForm=this.isValidForm.bind(this)}componentDidMount(){const{annotationType:e,sourceType:t,isLoadingOptions:n}=this.state;this.fetchOptions(e,t,n)}componentDidUpdate(e,t){t.sourceType!==this.state.sourceType&&this.fetchOptions(this.state.annotationType,this.state.sourceType,!0)}getSupportedSourceTypes(e){var t;const n=(0,u.Z)().entries().filter((({value:t})=>t.canBeAnnotationType(e))).map((({key:e,value:t})=>({value:e,label:t.name})));return null!=(t=T.J_[e])&&t.supportNativeSource&&n.unshift(T.dS.NATIVE),n}isValidFormulaAnnotation(e,t){return t!==T.DT.FORMULA||(0,d.$)(e)}isValidForm(){const{name:e,annotationType:t,sourceType:n,value:o,timeColumn:a,intervalEndColumn:i}=this.state,l=[(0,p.Z)(e),(0,p.Z)(t),(0,p.Z)(o)];return n!==T.S4.NATIVE&&(t===T.DT.EVENT&&l.push((0,p.Z)(a)),t===T.DT.INTERVAL&&(l.push((0,p.Z)(a)),l.push((0,p.Z)(i)))),l.push(!this.isValidFormulaAnnotation(o,t)),!l.filter((e=>e)).length}handleAnnotationType(e){this.setState({annotationType:e,sourceType:null,value:null})}handleAnnotationSourceType(e){const{sourceType:t}=this.state;t!==e&&this.setState({sourceType:e,value:null,isLoadingOptions:!0})}handleValue(e){this.setState({value:e,descriptionColumns:[],intervalEndColumn:null,timeColumn:null,titleColumn:null,overrides:{time_range:null}})}fetchOptions(e,t,n){n&&(t===T.S4.NATIVE?c.Z.get({endpoint:"/annotationlayermodelview/api/read?"}).then((({json:e})=>{const t=e?e.result.map((e=>({value:e.id,label:e.name}))):[];this.setState({isLoadingOptions:!1,valueOptions:t})})):(0,T.m7)(t)?c.Z.get({endpoint:"/superset/user_slices"}).then((({json:t})=>{const n=(0,u.Z)();this.setState({isLoadingOptions:!1,valueOptions:t.filter((t=>{const o=n.get(t.viz_type);return o&&o.canBeAnnotationType(e)})).map((e=>({value:e.id,label:e.title,slice:e})))})})):this.setState({isLoadingOptions:!1,valueOptions:[]}))}deleteAnnotation(){this.props.removeAnnotationLayer(),this.props.close()}applyAnnotation(){if(this.isValidForm()){const e={};["name","annotationType","sourceType","color","opacity","style","width","showMarkers","hideLine","value","overrides","show","showLabel","titleColumn","descriptionColumns","timeColumn","intervalEndColumn"].forEach((t=>{null!==this.state[t]&&(e[t]=this.state[t])})),e.color===S&&(e.color=null),this.props.addAnnotationLayer(e),this.setState({isNew:!1})}}submitAnnotation(){this.applyAnnotation(),this.props.close()}renderOption(e){return(0,f.tZ)("span",{css:O,title:e.label},e.label)}renderValueConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,isLoadingOptions:a}=this.state;let i="",l="";return(0,T.m7)(t)?t===T.S4.NATIVE?(i="Annotation layer",l="Select the Annotation Layer you would like to use."):(i=(0,h.t)("Chart"),l=(0,h.t)("Use another existing chart as a source for annotations and overlays.\n          Your chart must be one of these visualization types: [%s]",this.getSupportedSourceTypes(e).map((e=>e.label)).join(", "))):e===T.DT.FORMULA&&(i="Formula",l="Expects a formula with depending time parameter 'x'\n        in milliseconds since epoch. mathjs is used to evaluate the formulas.\n        Example: '2x+5'"),(0,T.m7)(t)?(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer value"),name:"annotation-layer-value",showHeader:!0,hovered:!0,description:l,label:i,placeholder:"",options:o,isLoading:a,value:n,onChange:this.handleValue,validationErrors:n?[]:["Mandatory"],optionRenderer:this.renderOption,notFoundContent:(0,f.tZ)(k,null)}):e===T.DT.FORMULA?(0,f.tZ)(g.Z,{name:"annotation-layer-value",hovered:!0,showHeader:!0,description:l,label:i,placeholder:"",value:n,onChange:this.handleValue,validationErrors:this.isValidFormulaAnnotation(n,e)?[]:["Bad formula."]}):""}renderSliceConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,overrides:a,titleColumn:i,timeColumn:l,intervalEndColumn:s,descriptionColumns:r}=this.state,{slice:u}=o.find((e=>e.value===n))||{};if(t!==T.S4.NATIVE&&u){const t=(u.data.groupby||[]).concat(u.data.all_columns||[]).map((e=>({value:e,label:e}))),n=u.data.include_time?[{value:"__timestamp",label:"__timestamp"}].concat(t):t;return(0,f.tZ)("div",{style:{marginRight:"2rem"}},(0,f.tZ)(Z.Z,{isSelected:!0,title:(0,h.t)("Annotation Slice Configuration"),info:(0,h.t)("This section allows you to configure how to use the slice\n               to generate annotations.")},(e===T.DT.EVENT||e===T.DT.INTERVAL)&&(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer time column"),hovered:!0,name:"annotation-layer-time-column",label:e===T.DT.INTERVAL?(0,h.t)("Interval start column"):(0,h.t)("Event time column"),description:(0,h.t)("This column must contain date/time information."),validationErrors:l?[]:["Mandatory"],clearable:!1,options:n,value:l,onChange:e=>this.setState({timeColumn:e})}),e===T.DT.INTERVAL&&(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer interval end"),hovered:!0,name:"annotation-layer-intervalEnd",label:(0,h.t)("Interval End column"),description:(0,h.t)("This column must contain date/time information."),validationErrors:s?[]:["Mandatory"],options:t,value:s,onChange:e=>this.setState({intervalEndColumn:e})}),(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer title column"),hovered:!0,name:"annotation-layer-title",label:(0,h.t)("Title Column"),description:(0,h.t)("Pick a title for you annotation."),options:[{value:"",label:"None"}].concat(t),value:i,onChange:e=>this.setState({titleColumn:e})}),e!==T.DT.TIME_SERIES&&(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer description columns"),hovered:!0,name:"annotation-layer-title",label:(0,h.t)("Description Columns"),description:(0,h.t)("Pick one or more columns that should be shown in the annotation. If you don't select a column all of them will be shown."),multi:!0,options:t,value:r,onChange:e=>this.setState({descriptionColumns:e})}),(0,f.tZ)("div",{style:{marginTop:"1rem"}},(0,f.tZ)(b.Z,{hovered:!0,name:"annotation-override-time_range",label:"Override time range",description:'This controls whether the "time_range" field from the current\n                  view should be passed down to the chart containing the annotation data.',value:"time_range"in a,onChange:e=>{delete a.time_range,e?this.setState({overrides:{...a,time_range:null}}):this.setState({overrides:{...a}})}}),(0,f.tZ)(b.Z,{hovered:!0,name:"annotation-override-timegrain",label:"Override time grain",description:"This controls whether the time grain field from the current\n                  view should be passed down to the chart containing the annotation data.",value:"time_grain_sqla"in a,onChange:e=>{delete a.time_grain_sqla,delete a.granularity,e?this.setState({overrides:{...a,time_grain_sqla:null,granularity:null}}):this.setState({overrides:{...a}})}}),(0,f.tZ)(g.Z,{hovered:!0,name:"annotation-layer-timeshift",label:"Time Shift",description:"Time delta in natural language\n                  (example:  24 hours, 7 days, 56 weeks, 365 days)",placeholder:"",value:a.time_shift,onChange:e=>this.setState({overrides:{...a,time_shift:e}})}))))}return""}renderDisplayConfiguration(){const{color:e,opacity:t,style:n,width:o,showMarkers:a,hideLine:i,annotationType:r}=this.state,u=(0,m.Z)().get(this.props.colorScheme).colors.concat();return e&&e!==S&&!u.find((t=>t.toLowerCase()===e.toLowerCase()))&&u.push(e),(0,f.tZ)(Z.Z,{isSelected:!0,title:(0,h.t)("Display configuration"),info:(0,h.t)("Configure your how you overlay is displayed here.")},(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer stroke"),name:"annotation-layer-stroke",label:(0,h.t)("Style"),options:[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"longDashed",label:"Long dashed"},{value:"dotted",label:"Dotted"}],value:n,clearable:!1,onChange:e=>this.setState({style:e})}),(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer opacity"),name:"annotation-layer-opacity",label:(0,h.t)("Opacity"),options:[{value:"",label:"Solid"},{value:"opacityLow",label:"0.2"},{value:"opacityMedium",label:"0.5"},{value:"opacityHigh",label:"0.8"}],value:t,onChange:e=>this.setState({opacity:e})}),(0,f.tZ)("div",null,(0,f.tZ)(w.Z,{label:(0,h.t)("Color")}),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"column"}},(0,f.tZ)(l.Ie,{color:e,colors:u,onChangeComplete:e=>this.setState({color:e.hex})}),(0,f.tZ)(s.Z,{style:{marginTop:"0.5rem",marginBottom:"0.5rem"},buttonStyle:e===S?"success":"default",buttonSize:"xsmall",onClick:()=>this.setState({color:S})},"Automatic Color"))),(0,f.tZ)(g.Z,{name:"annotation-layer-stroke-width",label:(0,h.t)("Line width"),isInt:!0,value:o,onChange:e=>this.setState({width:e})}),r===T.DT.TIME_SERIES&&(0,f.tZ)(b.Z,{hovered:!0,name:"annotation-layer-show-markers",label:"Show Markers",description:"Shows or hides markers for the time series",value:a,onChange:e=>this.setState({showMarkers:e})}),r===T.DT.TIME_SERIES&&(0,f.tZ)(b.Z,{hovered:!0,name:"annotation-layer-hide-line",label:"Hide Line",description:"Hides the Line for the time series",value:i,onChange:e=>this.setState({hideLine:e})}))}render(){const{isNew:e,name:t,annotationType:n,sourceType:a,show:i,showLabel:l}=this.state,r=this.isValidForm(),d=(0,u.Z)().get(this.props.vizType),p=d?d.supportedAnnotationTypes.map((e=>T.J_[e])):[],c=this.getSupportedSourceTypes(n);return(0,f.tZ)(o.Fragment,null,this.props.error&&(0,f.tZ)("span",{style:{color:this.props.theme.colors.error.base}},"ERROR: ",this.props.error),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"row"}},(0,f.tZ)("div",{style:{marginRight:"2rem"}},(0,f.tZ)(Z.Z,{isSelected:!0,title:(0,h.t)("Layer configuration"),info:(0,h.t)("Configure the basics of your Annotation Layer.")},(0,f.tZ)(g.Z,{name:"annotation-layer-name",label:(0,h.t)("Name"),placeholder:"",value:t,onChange:e=>this.setState({name:e}),validationErrors:t?[]:[(0,h.t)("Mandatory")]}),(0,f.tZ)(b.Z,{name:"annotation-layer-hide",label:(0,h.t)("Hide layer"),value:!i,onChange:e=>this.setState({show:!e})}),(0,f.tZ)(b.Z,{name:"annotation-label-show",label:(0,h.t)("Show label"),value:l,hovered:!0,description:(0,h.t)("Whether to always show the annotation label"),onChange:e=>this.setState({showLabel:e})}),(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation layer type"),hovered:!0,description:(0,h.t)("Choose the annotation layer type"),label:(0,h.t)("Annotation layer type"),name:"annotation-layer-type",clearable:!1,options:p,value:n,onChange:this.handleAnnotationType}),c.length>0&&(0,f.tZ)(v.Z,{ariaLabel:(0,h.t)("Annotation source type"),hovered:!0,description:(0,h.t)("Choose the source of your annotations"),label:(0,h.t)("Annotation source"),name:"annotation-source-type",options:c,notFoundContent:(0,f.tZ)(k,null),value:a,onChange:this.handleAnnotationSourceType,validationErrors:a?[]:[(0,h.t)("Mandatory")]}),this.renderValueConfiguration())),this.renderSliceConfiguration(),this.renderDisplayConfiguration()),(0,f.tZ)("div",{style:{display:"flex",justifyContent:"space-between"}},e?(0,f.tZ)(s.Z,{buttonSize:"small",onClick:()=>this.props.close()},(0,h.t)("Cancel")):(0,f.tZ)(s.Z,{buttonSize:"small",onClick:this.deleteAnnotation},(0,h.t)("Remove")),(0,f.tZ)("div",null,(0,f.tZ)(s.Z,{buttonSize:"small",disabled:!r,onClick:this.applyAnnotation},(0,h.t)("Apply")),(0,f.tZ)(s.Z,{buttonSize:"small",buttonStyle:"primary",disabled:!r,onClick:this.submitAnnotation},(0,h.t)("OK")))))}}_.propTypes=A,_.defaultProps=L;const x=(0,y.b)(_)},60524:(e,t,n)=>{n.d(t,{f:()=>s,$:()=>r});var o=n(22087),a=n.n(o);const i=[[new RegExp(/==/g),"Eq"],[new RegExp(/>=/g),"Gte"],[new RegExp(/<=/g),"Lte"],[new RegExp(/>/g),"Gt"],[new RegExp(/</g),"Lt"]],l=[{type:3,token:"x",show:"x",value:"x"},{type:2,token:"&",show:"&",value:(e,t)=>e&t},{type:2,token:"|",show:"|",value:(e,t)=>e|t},{type:2,token:"and",show:"and",value:(e,t)=>e&&t},{type:2,token:"xor",show:"xor",value:(e,t)=>e^t},{type:2,token:"or",show:"or",value:(e,t)=>Number(e||t)},{type:2,token:"Eq",show:"Eq",value:(e,t)=>Number(e===t)},{type:2,token:"Lt",show:"Lt",value:(e,t)=>Number(e<t)},{type:2,token:"Lte",show:"Lte",value:(e,t)=>Number(e<=t)},{type:2,token:"Gt",show:"Gt",value:(e,t)=>Number(e>t)},{type:2,token:"Gte",show:"Gte",value:(e,t)=>Number(e>=t)}];function s(e,t){var n;let o=e;i.forEach((([e,t])=>{o=o.replace(e,t)}));const s=String(o).split("=");return o=null!=(n=s[1])?n:s[0],Number(a().eval(o,l,{x:t}))}function r(e){try{s(e,0)}catch(e){return!1}return!0}}}]);
//# sourceMappingURL=00b4fe4aafbe798dface.chunk.js.map