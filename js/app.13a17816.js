(function(){"use strict";var t={5799:function(t,e,r){var i=r(8935),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"find-input"},[r("AutocompleteComponent",{attrs:{options:t.doctors,placeholder:"Врач, заболевания, услуги","list-title":"Специальность","empty-title":"Не найдено специальностей"},on:{input:t.setCurrentDoctor}})],1),r("div",{staticClass:"find-btn"},[r("BlueButton",{attrs:{text:"Найти"},on:{click:t.findDoctor}})],1)])])},n=[],l=r(4665),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"appearance",class:t.focus&&"rotate"}),t.inputValue?r("div",{staticClass:"close",attrs:{tabindex:"-1",id:"select-list"},on:{click:t.clearInput}}):t._e(),r("input",{ref:"input",staticClass:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.inputValue},on:{input:t.checkEmpty,focus:t.setFocus,blur:t.blur,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.incCurrentSelect.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.decCurrentSelect.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.sample[t.currentSelect])}]}}),r("p",{staticClass:"label",class:(t.inputValue||t.focus)&&"input-modified",domProps:{textContent:t._s(t.placeholder)}}),t.focus?r("div",{staticClass:"list",attrs:{id:"select-list",tabindex:"0"},on:{blur:function(e){t.focus=!1}}},[r("ul",[r("li",{staticClass:"list-title",attrs:{id:"select-list",tabindex:"-1"},domProps:{textContent:t._s(t.listTitle)}}),t.sample.length?t._e():r("li",{domProps:{textContent:t._s(t.emptyTitle)}}),t._l(t.sample,(function(e,i){return r("li",{key:e.id,ref:"item"+i,refInFor:!0,staticClass:"select-list-item",class:t.currentSelect===i&&"selected",attrs:{id:"select-list-item",tabindex:-i-2},domProps:{textContent:t._s(e.title)},on:{click:function(r){return t.selectItem(e)}}})}))],2)]):t._e()])},c=[],u=(r(6699),{name:"AutocompleteComponent",props:{options:{type:Array,required:!1,default:()=>[]},placeholder:{type:String,required:!1,default:"text"},listTitle:{type:String,required:!1,default:"title"},emptyTitle:{type:String,required:!1,default:"empty"}},emits:["input"],data:()=>({inputValue:"",savedValue:"",focus:!1,currentSelect:0}),methods:{clearInput(){this.inputValue="",this.lastValue="",this.currentSelect=0},incCurrentSelect(){this.currentSelect<this.sample.length-1&&(this.currentSelect++,this.focusList())},decCurrentSelect(){this.currentSelect>0&&(this.currentSelect--,this.focusList())},focusList(){this.$refs["item"+this.currentSelect]&&(this.$refs["item"+this.currentSelect][0].focus(),this.$refs.input.focus())},setFocus(){this.focus=!0},checkEmpty(t){this.inputValue=t.target.value,this.currentSelect=0,this.inputValue||(this.lastValue="")},blur(t){const e=["select-list","select-list-item"];return t&&t.relatedTarget&&e.includes(t.relatedTarget.id)?"select-list"===t.relatedTarget.id?this.$refs.input.focus():void 0:(this.inputValue=this.inputValue?this.lastValue:"",this.currentSelect=0,this.$refs.input.blur(),void(this.focus=!1))},selectItem(t){t&&t.title&&(this.lastValue=t.title,this.inputValue=t.title,this.blur())}},computed:{lastValue:{get(){return this.savedValue},set(t){this.savedValue=t,this.$emit("input",t)}},sample(){return this.options.filter((t=>{if(t.title.toLowerCase().startsWith(this.inputValue.toLowerCase()))return t}))}}}),a=u,p=r(1001),d=(0,p.Z)(a,o,c,!1,null,"a7181736",null),h=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"submit-btn",attrs:{disabled:t.disabled,type:"submit"},domProps:{textContent:t._s(t.text)},on:{click:function(e){return e.preventDefault(),t.$emit("click")}}})},v=[],y={name:"BlueButton",props:{disabled:{type:Boolean,required:!1,default:!1},text:{type:String,required:!1,default:"Отправить"}},emits:["click"]},m=y,g=(0,p.Z)(m,f,v,!1,null,"65c9d257",null),C=g.exports,b={name:"App",components:{AutocompleteComponent:h,BlueButton:C},methods:{findDoctor(){this.currentDoctor&&alert(`${this.currentDoctor} is coming!`)},setCurrentDoctor(t){this.$store.dispatch("setCurrentDoctor",t)}},computed:(0,l.rn)({doctors:t=>t.doctors,currentDoctor:t=>t.currentDoctor}),async created(){await this.$store.dispatch("fetchDoctors")}},k=b,x=(0,p.Z)(k,s,n,!1,null,null,null),_=x.exports;i.Z.use(l.ZP);var w=new l.ZP.Store({state:{doctors:[],currentDoctor:""},getters:{},mutations:{addDoctors(t,e){t.doctors=[...e]},setCurrentDoctor(t,e){t.currentDoctor=e}},actions:{setCurrentDoctor({commit:t},e){return t("setCurrentDoctor",e)},fetchDoctors({commit:t}){const e=[{title:"Аллерголог",id:"9440",url:"vrachi/allergolog",type:"spec"},{title:"Андролог",id:"11690",url:"vrachi/androlog",type:"spec"},{title:"Артролог",id:"7757",url:"vrachi/artrolog",type:"spec"},{title:"Вегетолог",id:"8385",url:"vrachi/vegetolog",type:"spec"},{title:"Вертебролог",id:"7758",url:"vrachi/vertebrolog",type:"spec"},{title:"Вертеброневролог",id:"7759",url:"vrachi/vertebronevrolog",type:"spec"},{title:"Висцеральный массажист",id:"8170",url:"vrachi/visczeralnyj-massazhist",type:"spec"},{title:"Висцеральный терапевт",id:"7760",url:"vrachi/visczeralnyij-terapevt",type:"spec"},{title:"Врач восточной медицины",id:"7763",url:"vrachi/vrach-vostochnoj-mediczinyi",type:"spec"},{title:"Врач китайской медицины",id:"7764",url:"vrachi/vrach-kitayskoy-mediciny",type:"spec"},{title:"Врач ЛФК",id:"7761",url:"vrachi/vrach-lfk",type:"spec"},{title:"Врач общей практики",id:"7765",url:"vrachi/vrach-obshhey-praktiki",type:"spec"},{title:"Врач первичного приёма",id:"7766",url:"vrachi/vrach-pervichnogo-priema",type:"spec"},{title:"Врач тибетской медицины",id:"7767",url:"vrachi/vrach-tibetskoy-mediciny",type:"spec"},{title:"Врач УВТ",id:"7762",url:"vrachi/vrach-uvt",type:"spec"},{title:"Врач УЗИ",id:"8386",url:"vrachi/vrach-uzi",type:"spec"},{title:"Гастроэнтеролог",id:"7768",url:"vrachi/gastroenterolog",type:"spec"},{title:"Гериатр",id:"8374",url:"vrachi/geriatr",type:"spec"},{title:"Геронтолог",id:"8375",url:"vrachi/gerontolog",type:"spec"},{title:"Гинеколог",id:"8387",url:"vrachi/ginekolog",type:"spec"},{title:"Гинеколог-эндокринолог",id:"8388",url:"vrachi/ginekolog-endokrinolog",type:"spec"},{title:"Гипнотерапевт",id:"7771",url:"vrachi/gipnoterapevt",type:"spec"},{title:"Гирудолог",id:"7772",url:"vrachi/girudolog",type:"spec"},{title:"Гирудотерапевт",id:"7773",url:"vrachi/girudoterapevt",type:"spec"},{title:"Гомеопат",id:"7774",url:"vrachi/gomeopat",type:"spec"}];return new Promise((r=>{setTimeout((()=>{t("addDoctors",e),r()}),500)}))}},modules:{}});i.Z.config.productionTip=!1,new i.Z({store:w,render:t=>t(_)}).$mount("#app")}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,s,n){if(!i){var l=1/0;for(a=0;a<t.length;a++){i=t[a][0],s=t[a][1],n=t[a][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||l>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<l&&(l=n));if(o){t.splice(a--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var a=t.length;a>0&&t[a-1][2]>n;a--)t[a]=t[a-1];t[a]=[i,s,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,l=i[0],o=i[1],c=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var a=c(r)}for(e&&e(i);u<l.length;u++)n=l[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(a)},i=self["webpackChunkautocomplete_test_app"]=self["webpackChunkautocomplete_test_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(5799)}));i=r.O(i)})();
//# sourceMappingURL=app.13a17816.js.map