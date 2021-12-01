(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1921204f"],{1681:function(t,e,i){},"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),u=i("e707"),h=i("e4d3"),d=i("21be"),p=i("f2e7"),v=i("a293"),m=i("58df"),f=i("d9bd"),_=i("80d2"),g=Object(m["a"])(r["a"],c["a"],l["a"],u["a"],h["a"],d["a"],p["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_["t"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(_["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(_["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"23a7":function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),s=i("53ca"),o=(i("a9e3"),i("caad"),i("d81d"),i("b0c0"),i("99af"),i("a434"),i("159b"),i("fb6a"),i("5803"),i("2677")),r=i("cc20"),c=i("80d2"),l=i("d9bd"),u=i("d9f7");e["a"]=o["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(c["B"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["r"])(e,1024===this.base))},internalArrayValue:function(){return Object(c["B"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,s=void 0===a?0:a,o=t.truncateText(n);return t.showSize?"".concat(o," (").concat(Object(c["r"])(s,1024===t.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(l["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(c["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=o["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=o["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(a["a"])(Object(a["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(n["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},"24b3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"pqreporter"}},[i("v-navigation-drawer",{staticClass:"no-print",attrs:{app:"",clipped:"",permanent:"",stateless:"","mini-variant":t.mini,"mini-variant-width":"80",dark:"",width:"360"}},[i("v-list-item",[i("v-list-item-content",[i("v-icon",{on:{click:function(e){t.mini=!t.mini}}},[t._v("mdi-unfold-more-vertical")])],1)],1),i("v-divider"),i("v-list",[i("v-list-item",{on:{click:function(e){t.loading=!0,t.importJSON()}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-file-import")])],1),i("v-list-item-title",[t._v("Import Patient JSON File")])],1),i("v-list-item",{attrs:{disabled:!t.analyzed},on:{click:function(e){return t.print2pdf()}}},[i("v-list-item-icon",[i("v-icon",{attrs:{disabled:!t.analyzed}},[t._v("mdi-printer")])],1),i("v-list-item-title",[t._v("Print to PDF")])],1)],1),i("v-divider"),i("v-list",[i("v-list-group",{on:{click:function(e){t.mini=!1}},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",[i("v-icon",[t._v("mdi-timetable")])],1),i("v-list-item-title",[t._v("Service Date:")])]},proxy:!0}])},[i("v-list-item",[i("v-card",{attrs:{outlined:""}},[i("v-card-text",[i("v-date-picker",{attrs:{"show-adjacent-months":"",width:"275"},model:{value:t.service_date,callback:function(e){t.service_date=e},expression:"service_date"}})],1)],1)],1)],1)],1),i("v-divider"),i("v-list",{directives:[{name:"show",rawName:"v-show",value:t.imported,expression:"imported"}]},[i("v-list-group",{on:{click:function(e){t.mini=!1}},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",[i("v-icon",[t._v("mdi-content-duplicate")])],1),i("v-list-item-title",[t._v("Constraint Template Matching:")])]},proxy:!0}])},[i("v-list-item",[i("v-select",{attrs:{disabled:!t.imported,items:t.cc_folders,label:"Constraint Folder"},on:{change:function(e){return t.retrieve_templates()}},model:{value:t.cc_matchedFolder,callback:function(e){t.cc_matchedFolder=e},expression:"cc_matchedFolder"}})],1),i("v-list-item",[i("v-select",{attrs:{disabled:!t.imported,items:t.cc_templates,"item-text":"template",label:"Constraint Template","return-object":""},on:{change:function(e){t.find_indices(),t.retrieve_pqdata()}},model:{value:t.cc_matchedTemplate,callback:function(e){t.cc_matchedTemplate=e},expression:"cc_matchedTemplate"}})],1),i("v-list-item",[i("v-switch",{attrs:{disabled:!t.analyzed,color:"#2774AE",label:"Constraint Matching"},model:{value:t.p_switch3,callback:function(e){t.p_switch3=e},expression:"p_switch3"}})],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-icon",[i("v-switch",{attrs:{disabled:!t.analyzed,color:"#2774AE"},model:{value:t.p_switch1,callback:function(e){t.p_switch1=e},expression:"p_switch1"}})],1),i("v-list-item-title",[t._v("UCLA Patient Statistics")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-switch",{attrs:{disabled:!t.analyzed,color:"#2774AE"},model:{value:t.p_switch2,callback:function(e){t.p_switch2=e},expression:"p_switch2"}})],1),i("v-list-item-title",[t._v("Boxplot Performance Comparison")])],1)],1),i("v-divider"),i("v-list",[i("v-list-item",{attrs:{disabled:!t.analyzed},on:{click:function(e){return t.post_pqr_patient()}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-database-plus")])],1),i("v-list-item-title",[t._v("Upload Current Patient to DB")])],1)],1)],1),i("v-container",{attrs:{justify:"center",align:"center"}},[i("v-row",{staticClass:"d-print-none"},[i("v-col",[i("v-card",{attrs:{outlined:"",loading:t.loading}},[i("v-card-title",[t._v("JSON File Parser:")]),i("v-card-text",[i("v-file-input",{attrs:{accept:".json",label:t.contents,outlined:""},model:{value:t.chosenFile,callback:function(e){t.chosenFile=e},expression:"chosenFile"}})],1),i("template",{slot:"progress"},[i("v-progress-linear",{attrs:{color:"#2774AE",indeterminate:t.loading,rounded:"",height:"6"}})],1)],2)],1)],1),i("v-row",[i("v-col",[i("h2",{staticStyle:{"text-align":"center"}},[t._v("UCLA Radiation Oncology")]),i("h2",{staticStyle:{"text-align":"center"}},[t._v("Plan Quality Reporting")])])],1),i("v-row",[i("v-col",[i("v-card",[i("v-card-title",[t._v("Special Medical Radiation Physics Consultation (CPT 77370)")]),i("v-card-text",[i("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("tbody",[i("tr",[i("td",[t._v("Patient:")]),i("td",[t._v(t._s(t.patient))])]),i("tr",[i("td",[t._v("MRN:")]),i("td",[t._v(t._s(t.mrn))])]),i("tr",[i("td",[t._v("Date of Service:")]),i("td",[t._v(t._s(t.service_date))])]),i("tr",[i("td",[t._v("Course - Plan:")]),i("td",[t._v(t._s(t.plan_info))])]),i("tr",[i("td",[t._v("Prescription:")]),i("td",t._l(t.prescription,(function(e,n){return i("p",{key:n},[t._v(t._s(e))])})),0)])])]},proxy:!0}])})],1)],1)],1)],1),i("v-row",[i("v-col",[i("v-card",[i("v-card-text",[i("v-textarea",{attrs:{outlined:"","auto-grow":"",name:"input-7-4",rows:"7",label:"Notes:",hint:"Enter any additional notes or comments here.",value:t.notes}})],1)],1)],1)],1),i("v-row",[i("v-col",[i("v-card",[i("v-card-title",[t._v("Plan Quality Report - "+t._s(t.templateName))]),i("v-card-subtitle",[t._v("The attending physician has made a Special Physics Consultation request for this course of treatment. The request involves comparing the plan quality to published data and UCLA protocols. More importantly, the plan has been analyzed and compared to prior plans in the database. A patient specific Plan Quality Report has been generated to evaluate specific features of the treatment plan. Dose volume histograms for the following structures have been analyzed for this patient."),i("br"),t._v(" The results have been reported to the attending physician and a detailed plan quality report has been generated for this patient. ")]),i("v-card-text",[i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("tbody",[i("tr",[i("th",{staticClass:"text-center"},[t._v("Structure")]),i("th",{staticClass:"text-center"},[t._v("Plan Constraint")]),i("th",{directives:[{name:"show",rawName:"v-show",value:t.p_switch3,expression:"p_switch3"}],staticClass:"text-center no-print"},[t._v("Template Constraint")]),i("th",{staticClass:"text-center"},[t._v("Achieved")]),i("th",{directives:[{name:"show",rawName:"v-show",value:t.p_switch1,expression:"p_switch1"}],staticClass:"text-center"},[t._v("UCLA Population"),i("br"),t._v("(Mean "+t._s(t.plusminus)+" St. Dev.)")]),i("th",{directives:[{name:"show",rawName:"v-show",value:t.p_switch2,expression:"p_switch2"}],staticClass:"text-center"},[t._v("Plan Performance")])]),t._l(t.constraints,(function(e){return i("tr",{key:e.Priority},[i("td",{staticClass:"text-center text-caption"},[t._v(t._s(e.StructurePlan))]),i("td",{staticClass:"text-center text-caption"},[t._v(t._s(e.ConstraintToPresent)+" "+t._s(e.GoalLimitToPresent))]),i("td",{directives:[{name:"show",rawName:"v-show",value:t.p_switch3,expression:"p_switch3"}],staticClass:"text-center no-print",attrs:{width:"120px"}},[i("v-select",{staticClass:"text-caption",attrs:{items:t.cc_matchedTemplate.constraints,"item-text":"ConstraintToPresent","item-value":"Priority",width:"100"},on:{change:function(i){return t.toggleKey(e.Priority)}},model:{value:t.indices[e.Priority],callback:function(i){t.$set(t.indices,e.Priority,i)},expression:"indices[item.Priority]"}})],1),t.plansum?i("td",{staticClass:"text-center text-caption font-weight-bold",class:t.fonts[e.PassFail]},[t._v(t._s(e.Plan1Actual))]):i("td",{staticClass:"text-center text-caption font-weight-bold",class:t.fonts[e.PassFail]},[t._v(t._s(e.Actual))])])}))],2)]},proxy:!0}])}),i("small",{directives:[{name:"show",rawName:"v-show",value:t.p_switch1||t.p_switch2,expression:"p_switch1 || p_switch2"}]},[t._v("*Statistics calculated from a population of "+t._s(t.pt_counter)+" patients.")])],1)],1)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.pq_confirmation,callback:function(e){t.pq_confirmation=e},expression:"pq_confirmation"}},[i("v-card",[i("v-card-title",[t._v("Plan Quality Template Matching:")]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"Patient Constraint Folder",readonly:""},model:{value:t.cc_chosenFolder,callback:function(e){t.cc_chosenFolder=e},expression:"cc_chosenFolder"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-combobox",{attrs:{label:"Matched Constraint Folder",hint:"Confirm the correct constraint folder",items:t.cc_folders},on:{change:function(e){return t.retrieve_templates()}},model:{value:t.cc_matchedFolder,callback:function(e){t.cc_matchedFolder=e},expression:"cc_matchedFolder"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"Patient Constraint Template",readonly:""},model:{value:t.cc_chosenTemplate,callback:function(e){t.cc_chosenTemplate=e},expression:"cc_chosenTemplate"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-combobox",{attrs:{label:"Matched Constraint Template",hint:"Confirm the correct constraint template",items:t.cc_templates,"item-text":"template","return-object":""},model:{value:t.cc_matchedTemplate,callback:function(e){t.cc_matchedTemplate=e},expression:"cc_matchedTemplate"}})],1)],1)],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"#2774AE",text:""},on:{click:function(e){t.pq_confirmation=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"#2774AE",text:""},on:{click:function(e){t.pq_confirmation=!1,t.find_indices(),t.retrieve_pqdata()}}},[t._v(" Confirm ")])],1)],1)],1)],1),i("v-overlay",{attrs:{value:t.error_overlay,absolute:""}},[i("v-btn",{attrs:{color:"error"},on:{click:function(e){t.error_overlay=!1}}},[t._v(t._s(this.error)+" ")])],1)],1)],1)},a=[],s=(i("b0c0"),i("ac1f"),i("1276"),i("fb6a"),i("d3b7"),i("caad"),i("2532"),i("4de4"),i("ddb0"),i("5319"),i("b680"),{name:"PlanQualityReporter",data:function(){return{mini:!0,message:"",satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],loading:!1,imported:!1,analyzed:!1,matched:!1,plansum:!1,chosenFile:null,contents:"Select a JSON file",notes:"",plusminus:"±",jsondata:null,templateName:null,patient:null,mrn:null,prescription:null,plan_info:null,constraints:null,stats:null,matchlist:[],indices:{},keys:{},service_date:(new Date).toISOString().substr(0,10),breasts3field:!1,heartidx:0,fonts:{Pass:"green--text",Fail:"red--text",Condition:"orange--text",Verified:"blue--text"},p_switch1:!0,p_switch2:!0,p_switch3:!1,cc_folders:[],cc_chosenFolder:"",cc_matchedFolder:"",cc_templates:[],cc_chosenTemplate:"",cc_matchedTemplate:"",pq_confirmation:!1,pt_counter:0,error:"error",error_overlay:!1}},mounted:function(){this.retrieve_folders()},methods:{importJSON:function(){var t=this;if(this.chosenFile){console.log(this.chosenFile.name);var e=new FileReader;e.readAsText(this.chosenFile),e.onload=function(){t.jsondata=JSON.parse(e.result),t.templateName=t.jsondata.TemplateName;var i=t.jsondata.TemplateName.split("(");if(t.cc_chosenFolder=i[1].slice(0,-1),t.cc_chosenTemplate=i[0].slice(0,-1),t.patient=t.jsondata.PatientLastName+", "+t.jsondata.PatientFirstName,t.mrn=t.jsondata.PatientId,t.prescription=t.jsondata.DoseInfos,t.notes=t.jsondata.ReportNotes,t.plan_info=t.jsondata.Course+" - "+t.jsondata.PlanId,t.jsondata.CalculatedConstraints)t.plansum=!0,t.constraints=t.jsondata.CalculatedConstraints;else{t.plansum=!1;var n=t.jsondata.PlanData;t.constraints=n[0].CalculatedConstraints}console.log(t.constraints),t.match_folders(),t.imported=!0,t.loading=!1,t.analyzed=!1,document.title=t.jsondata.PatientId+"-"+t.jsondata.PatientLastName+"-"+t.jsondata.TemplateName,t.pq_confirmation=!0}}},print2pdf:function(){window.print()},retrieve_folders:function(){var t=this;fetch("/api/pqr_templates/folders").then((function(t){return t.json()})).then((function(e){console.log(e),t.messages=e,t.cc_folders=e.folders}))},match_folders:function(){this.cc_folders.includes(this.cc_chosenFolder)?(this.cc_matchedFolder=this.cc_chosenFolder,this.retrieve_templates()):this.cc_matchedFolder=""},match_templates:function(){var t=this,e="/api/pqr_templates/match/";e+=this.cc_matchedFolder,e+="/",e+=this.cc_chosenTemplate,fetch(e).then((function(t){return t.json()})).then((function(e){console.log(e),t.messages=e,e.template.length>0&&(t.cc_matchedTemplate=e.template[0]),console.log(t.cc_matchedTemplate)}))},retrieve_templates:function(){var t=this,e="/api/pqr_templates/templates/";e+=this.cc_matchedFolder,fetch(e).then((function(t){return t.json()})).then((function(e){console.log(e),t.messages=e,t.cc_templates=e.templates,console.log(t.cc_templates),t.match_templates()}))},retrieve_pqdata:function(){this.analyzed=!0},find_index:function(t,e,i){if(!this.cc_matchedTemplate)return"N/A";var n=e.filter((function(e){return e.StructureTemplate===t.StructureTemplate&&t.ConstraintToPresent.includes(e.ConstraintToPresent)&&e.GoalLimitToPresent===t.GoalLimitToPresent}));if(n.length>0){var a=n[0].Priority;this.$set(this.indices,t.Priority,a)}else this.$set(this.indices,t.Priority,-1),this.p_switch3=!0;this.$set(this.keys,i,i)},find_indices:function(){console.log(this.cc_matchedTemplate);for(var t=0;t<this.constraints.length;t++)this.find_index(this.constraints[t],this.cc_matchedTemplate.constraints,t)},toggleKey:function(t){console.log("Toggle Key Event Triggered.");var e=-1*this.keys[t];this.$set(this.keys,t,e)},check_db_for_patient:function(){var t="/api/pqr_patients/match/";t+=this.mrn,t+="/",t+=this.jsondata.Course,t+="/",t+=this.jsondata.PlanId,console.log(t),fetch(t).then((function(t){return t.json()})).then((function(t){return console.log(t),!!t.patient}))},parse_prescriptions:function(){if(this.plansum)return{};var t="",e=0,i=0,n=0;t=this.prescription[0];var a=this.prescription[1].split(" "),s=a[0].split("c");i=s[0].replace(/\s+/g,""),e=a[2].replace(/\s+/g,"");var o=a[4].split("c");n=o[0].replace(/\s+/g,"");var r={plan_id:t,fx_dose:i,fractions:e,total_dose:n,dose_units:this.jsondata.EclipseDoseUnit};return console.log(r),r},post_pqr_patient:function(){var t=this;if(this.check_db_for_patient())console.log("This Patient/Course/Plan is already in the database.");else{var e={mrn:this.mrn,last_name:this.jsondata.PatientLastName,first_name:this.jsondata.PatientFirstName,dob:this.jsondata.PatientDateOfBirth,sex:this.jsondata.PatientSex,creation:this.jsondata.CurrentDate,plan_id:this.jsondata.PlanId,course_id:this.jsondata.Course,dose_info:this.jsondata.DoseInfos,rx:this.parse_prescriptions(),plansum:this.jsondata.IsPlanSum,folder:this.cc_chosenFolder,template:this.cc_chosenTemplate,match_folder:this.cc_matchedFolder,match_template:this.cc_matchedTemplate.template,match_indices:this.indices,constraints:this.constraints};console.log(e),fetch("/api/pqr_patients/new",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(t){return t.json()})).then((function(e){e.error?(t.error=e.error,t.error_overlay=!0):t.error=""}))}}},computed:{},filters:{onlysigfigs:function(t,e){return t?(t=t.toFixed(e),t):"0"},emote:function(t,e){return"Pass"==t?e[8]:"Condition"==t?e[4]:e[1]},checkTolerance:function(t,e){return t?t>e?"Fail":t<e?"Pass":void 0:"n/a"}},beforeRouteLeave:function(t,e,i){document.title="vuclaro",i()}}),o=s,r=(i("9100"),i("2877")),c=i("6544"),l=i.n(c),u=i("8336"),h=i("b0af"),d=i("99d9"),p=i("62ad"),v=i("2b5d"),m=i("a523"),f=i("2e4b"),_=i("169a"),g=i("ce7e"),b=i("23a7"),y=i("132d"),w=i("8860"),x=i("56b0"),C=i("da13"),S=i("5d23"),k=i("34c3"),j=i("f774"),T=i("a797"),P=i("8e36"),V=i("0fd9"),O=i("b974"),A=i("1f4f"),$=i("b73d"),F=i("8654"),I=i("5530"),D=(i("a9e3"),i("1681"),i("58df")),N=Object(D["a"])(F["a"]),z=N.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(I["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},F["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=F["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){F["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),E=Object(r["a"])(o,n,a,!1,null,null,null);e["default"]=E.exports;l()(E,{VBtn:u["a"],VCard:h["a"],VCardActions:d["a"],VCardSubtitle:d["b"],VCardText:d["c"],VCardTitle:d["d"],VCol:p["a"],VCombobox:v["a"],VContainer:m["a"],VDatePicker:f["a"],VDialog:_["a"],VDivider:g["a"],VFileInput:b["a"],VIcon:y["a"],VList:w["a"],VListGroup:x["a"],VListItem:C["a"],VListItemContent:S["a"],VListItemIcon:k["a"],VListItemTitle:S["b"],VNavigationDrawer:j["a"],VOverlay:T["a"],VProgressLinear:P["a"],VRow:V["a"],VSelect:O["a"],VSimpleTable:A["a"],VSwitch:$["a"],VTextField:F["a"],VTextarea:z})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"368e":function(t,e,i){},5803:function(t,e,i){},9100:function(t,e,i){"use strict";i("996d")},"996d":function(t,e,i){},"9d01":function(t,e,i){},b73d:function(t,e,i){"use strict";var n=i("15fd"),a=i("5530"),s=(i("0481"),i("ec29"),i("9d01"),i("d3b7"),i("25f0"),i("4de4"),i("c37a")),o=i("5607"),r=i("2b0e"),c=r["a"].extend({name:"rippleable",directives:{ripple:o["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=i("8547"),u=i("58df");function h(t){t.preventDefault()}var d=Object(u["a"])(s["a"],c,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:h},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),p=i("c3f0"),v=i("0789"),m=i("490a"),f=i("80d2"),_=["title"];e["a"]=d.extend({name:"v-switch",directives:{Touch:p["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(m["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f["t"].left&&this.isActive||t.keyCode===f["t"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1921204f.93f3dd5a.js.map