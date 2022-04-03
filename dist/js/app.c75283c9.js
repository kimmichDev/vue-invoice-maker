(function(){"use strict";var e={8592:function(e,t,o){var i=o(9242),n=o(3396);const a={class:"d-flex justify-content-center align-items-center wrapper"},r={class:"container"},s={class:"row justify-content-center"},c={class:"col-12 col-md-8"},l={class:"invoice-card shadow px-1 py-2 p-md-3 mx-0 mx-md-2 rounded-3 w-100"};function d(e,t,o,i,d,u){const m=(0,n.up)("Modal"),v=(0,n.up)("Invoice"),b=(0,n.up)("FindForm"),p=(0,n.up)("Form"),h=(0,n.up)("ShowId"),_=(0,n.up)("Table"),f=(0,n.up)("Print");return(0,n.wg)(),(0,n.iD)(n.HY,null,[d.showModal?((0,n.wg)(),(0,n.j4)(m,{key:0,record:d.record,onCloseModal:t[0]||(t[0]=e=>d.showModal=!1)},null,8,["record"])):(0,n.kq)("",!0),(0,n._)("div",a,[(0,n._)("div",r,[(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",l,[(0,n.Wm)(v,{"invoice-number":u.invoiceNumber},null,8,["invoice-number"]),(0,n.Wm)(b,{onRecordData:u.recordData},null,8,["onRecordData"]),(0,n.Wm)(p,{items:d.items,onNewRecord:t[1]||(t[1]=e=>d.records.push(e)),isSaved:d.isSaved},null,8,["items","isSaved"]),d.showShowId?((0,n.wg)(),(0,n.j4)(h,{key:0,invoiceId:d.invoiceId},null,8,["invoiceId"])):(0,n.kq)("",!0),(0,n.Wm)(_,{records:d.records,calTotal:u.calTotal,onDelRecord:u.delRecord},null,8,["records","calTotal","onDelRecord"]),(0,n.Wm)(f,{invoiceNumber:u.invoiceNumber,calTotal:u.calTotal,onSavedToCloud:u.saved,records:d.records},null,8,["invoiceNumber","calTotal","onSavedToCloud","records"])])])])])])],64)}var u=o(7139);const m={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},v={class:"modal-dialog modal-dialog-centered"},b={class:"modal-content gradient"},p={key:0},h=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"No record found !")],-1),_=(0,n._)("div",{class:"modal-body"},"Wrong invoice key or no such related invoice",-1),f={class:"modal-footer"},w={key:1},y=(0,n._)("div",{class:"modal-header hideOnPrint"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Invoice record found !")],-1),g={class:"modal-body"},k={class:"small text-black-50"},x={class:"small text-black-50"},D={class:"table m-0 w-100 gradient border-0"},I=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-center"},"#"),(0,n._)("th",{class:"text-center"},"Item"),(0,n._)("th",{class:"text-center"},"Price"),(0,n._)("th",{class:"text-center"},"Quantity"),(0,n._)("th",{class:"text-center"},"Cost")])],-1),S={class:"text-center"},C={class:"text-center"},T={class:"text-center"},M={class:"text-center"},O={class:"text-center"},j={colspan:"5"},P={class:"d-flex justify-content-around"},z={class:"mb-0"},N=(0,n._)("div",null,null,-1),U={class:"modal-footer hideOnPrint"},R=(0,n._)("i",{class:"bi bi-printer"},null,-1),q=(0,n.Uk)(" Print"),B=[R,q];function Y(e,t,o,i,a,r){return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",v,[(0,n._)("div",b,[void 0==o.record?((0,n.wg)(),(0,n.iD)("div",p,[h,_,(0,n._)("div",f,[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:t[0]||(t[0]=(...e)=>r.closeModal&&r.closeModal(...e))},"Close")])])):((0,n.wg)(),(0,n.iD)("div",w,[y,(0,n._)("div",g,[(0,n._)("p",k,"Invoice Number "+(0,u.zw)(o.record.invoiceNumber),1),(0,n._)("p",x,"Created - "+(0,u.zw)(o.record.created_at.toDate()),1),(0,n._)("table",D,[I,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.recordDatas,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",S,(0,u.zw)(t+1),1),(0,n._)("td",C,(0,u.zw)(e.item.name),1),(0,n._)("td",T,(0,u.zw)(e.item.price),1),(0,n._)("td",M,(0,u.zw)(e.quantity),1),(0,n._)("td",O,"$"+(0,u.zw)(e.cost),1)])))),128))]),(0,n._)("tfoot",null,[(0,n._)("tr",null,[(0,n._)("td",j,[(0,n._)("div",P,[(0,n._)("h5",z,"Total - $"+(0,u.zw)(o.record.total),1),N])])])])])]),(0,n._)("div",U,[(0,n._)("div",null,[(0,n._)("button",{class:"btn btn-sm btn-secondary",onClick:t[1]||(t[1]=(...e)=>r.print&&r.print(...e))},B),(0,n._)("button",{type:"button",class:"btn btn-sm ms-2 btn-primary","data-bs-dismiss":"modal",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},"Close")])])]))])])])}var K={props:["record"],data(){return{}},methods:{closeModal(){this.$emit("closeModal")},print(){window.print()}},computed:{recordDatas(){return this.record.recordData}},mounted(){var e=new bootstrap.Modal(document.getElementById("staticBackdrop"));e.show()}},Z=o(89);const $=(0,Z.Z)(K,[["render",Y]]);var F=$;const V={class:"row"},W={class:"col-12 col-g-8 mt-3 d-flex justify-content-center hideOnPrint"},A=(0,n.Uk)("Print "),E=(0,n._)("i",{class:"bi bi-printer"},null,-1),H=[A,E],L=["disabled"],Q=(0,n.Uk)(" Upload "),J={key:0,class:"spinner-grow spinner-grow-sm text-primary",role:"status","aria-hidden":"true"},G={key:1,class:"bi bi-cloud-arrow-up"};function X(e,t,o,i,a,r){return(0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",W,[(0,n._)("button",{class:"btn btn-secondary hideOnPrint",onClick:t[0]||(t[0]=(...e)=>r.printInvoice&&r.printInvoice(...e))},H),(0,n._)("button",{class:"btn btn-secondary hideOnPrint ms-2",onClick:t[1]||(t[1]=(...e)=>r.saveToDb&&r.saveToDb(...e)),disabled:a.isSaved},[Q,a.isUploading?((0,n.wg)(),(0,n.iD)("span",J)):((0,n.wg)(),(0,n.iD)("i",G))],8,L)])])}var ee=o(2492),te=o.n(ee),oe=o(6780);o(4406);const ie={apiKey:"AIzaSyAB41-LY21P4yQ9c3Y7BeJhsLWkDgIkns8",authDomain:"invoice-maker-62fda.firebaseapp.com",projectId:"invoice-maker-62fda",storageBucket:"invoice-maker-62fda.appspot.com",messagingSenderId:"1029659539038",appId:"1:1029659539038:web:a48d6987f6ac4837a4e6cf"};let ne=oe.Z.initializeApp(ie);const ae=ne.firestore(),re=oe.Z.firestore.FieldValue.serverTimestamp;var se={props:["invoiceNumber","records","calTotal"],data(){return{isSaved:!1,isUploading:!1,id:null}},methods:{printInvoice(){window.print()},saveToDb(){te().fire({title:"Are you sure?",text:"Invoice can't be edited anymore after uploaded",icon:"warning",showCancelButton:!0,confirmButtonColor:"#9c89b8",cancelButtonColor:"#f0a6ca",confirmButtonText:"Yes, uploaded it"}).then((e=>{if(e.isConfirmed){let e=async()=>{let e={invoiceNumber:this.invoiceNumber,created_at:re(),recordData:this.records,total:this.calTotal};console.log(this.calTotal),this.isUploading=!0;let t=await ae.collection("invoices").add(e);this.id=await t.id,console.log(t),console.log(this.id),this.isSaved=!0,this.$emit("savedToCloud",t.id),this.isUploading=!1,te().fire({title:"Successfully Uploaded",icon:"success"})};e()}}))}}};const ce=(0,Z.Z)(se,[["render",X]]);var le=ce;const de=(0,n._)("hr",null,null,-1),ue={class:"hideOnPrint"},me={class:"row mt-3 justify-content-center"},ve={class:"col-12 col-md-8"},be=(0,n._)("p",{class:"fw-bolder mb-0"},"Your uploaded invoice's KEY",-1),pe=(0,n._)("div",{class:"mb-3 small text-black-50"},"Save following id in safe place to find your invoice later",-1),he={class:""},_e={class:"text-dark"},fe=(0,n.Uk)("Copied "),we=(0,n._)("i",{class:"bi bi-clipboard-check"},null,-1),ye=[fe,we];function ge(e,t,o,i,a,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[de,(0,n._)("div",ue,[(0,n._)("div",me,[(0,n._)("div",ve,[be,pe,(0,n._)("div",he,[(0,n._)("h6",null,[(0,n._)("span",_e,(0,u.zw)(o.invoiceId),1),a.isCopied?((0,n.wg)(),(0,n.iD)("span",{key:0,class:"badge bg-secondary ms-2 text-black p-2 copy-btn",onClick:t[0]||(t[0]=(...e)=>r.copy&&r.copy(...e))},ye)):((0,n.wg)(),(0,n.iD)("span",{key:1,class:"badge bg-secondary ms-2 text-black p-2 copy-btn",onClick:t[1]||(t[1]=(...e)=>r.copy&&r.copy(...e))},"Copy"))])])])])])],64)}var ke={props:["invoiceId"],data(){return{isCopied:!1}},methods:{copy(){navigator.clipboard.writeText(this.invoiceId),this.isCopied=!0}}};const xe=(0,Z.Z)(ke,[["render",ge]]);var De=xe;const Ie={class:"hideOnPrint"},Se={class:"row mt-3 justify-content-center align-items-center"},Ce={class:"col-12 col-lg-8"},Te={class:"row"},Me={class:"col-8 col-md-9"},Oe={class:"col-4 col-md-3"},je={class:"btn btn-sm btn-primary w-100"},Pe={key:0,class:"spinner-grow spinner-grow-sm text-secondary me-2",role:"status","aria-hidden":"true"},ze={key:1,class:"bi bi-search-heart"},Ne=(0,n.Uk)(" Search ");function Ue(e,t,o,a,r,s){return(0,n.wg)(),(0,n.iD)("div",Ie,[(0,n._)("div",Se,[(0,n._)("div",Ce,[(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,i.iM)(((...e)=>s.search&&s.search(...e)),["prevent"]))},[(0,n._)("div",Te,[(0,n._)("div",Me,[(0,n.wy)((0,n._)("input",{required:"","onUpdate:modelValue":t[0]||(t[0]=e=>r.invoiceKey=e),type:"text",name:"",class:"form-control",id:"",placeholder:"Enter invoice's KEY to find your invoice"},null,512),[[i.nr,r.invoiceKey]])]),(0,n._)("div",Oe,[(0,n._)("button",je,[r.isSearching?((0,n.wg)(),(0,n.iD)("span",Pe)):((0,n.wg)(),(0,n.iD)("i",ze)),Ne])])])],32)])])])}var Re={data(){return{invoiceKey:"",isSearching:!1}},methods:{async search(){this.isSearching=!0;let e=this.invoiceKey,t=await ae.collection("invoices").doc(e).get(),o=t.data();this.$emit("recordData",o),this.isSearching=!1}}};const qe=(0,Z.Z)(Re,[["render",Ue]]);var Be=qe;const Ye={class:"mt-3 hideOnPrint"},Ke={class:"row justify-content-center"},Ze={class:"col-12 col-lg-8"},$e={class:"row align-items-end justify-content-center"},Fe={class:"col-8 col-md-6"},Ve=(0,n._)("label",{for:"",class:"form-label"},"Select Item",-1),We=(0,n._)("br",null,null,-1),Ae=["disabled"],Ee=["value"],He={class:"col-4 col-md-3"},Le=(0,n._)("label",{for:"",class:"form-label"},"Quantity",-1),Qe=(0,n._)("br",null,null,-1),Je=["disabled"],Ge={class:"col-12 col-md-3 mt-2 mt-md-0"},Xe=["disabled"],et=(0,n._)("i",{class:"bi bi-plus-circle"},null,-1),tt=(0,n.Uk)(" Add"),ot=[et,tt];function it(e,t,o,a,r,s){return(0,n.wg)(),(0,n.iD)("div",Ye,[(0,n._)("div",Ke,[(0,n._)("div",Ze,[(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,i.iM)(((...e)=>s.addRecord&&s.addRecord(...e)),["prevent"]))},[(0,n._)("div",$e,[(0,n._)("div",Fe,[Ve,We,(0,n.wy)((0,n._)("select",{disabled:o.isSaved,name:"",required:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedItemValue=e),class:"form-select"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.items,(e=>((0,n.wg)(),(0,n.iD)("option",{value:e.id,key:e.id},(0,u.zw)(e.name)+" - $"+(0,u.zw)(e.price),9,Ee)))),128))],8,Ae),[[i.bM,r.selectedItemValue]])]),(0,n._)("div",He,[Le,Qe,(0,n.wy)((0,n._)("input",{disabled:o.isSaved,type:"number",min:"1","onUpdate:modelValue":t[1]||(t[1]=e=>r.quantity=e),required:"",class:"form-control"},null,8,Je),[[i.nr,r.quantity]])]),(0,n._)("div",Ge,[(0,n._)("button",{disabled:o.isSaved,class:"btn btn-primary w-100"},ot,8,Xe)])])],32)])])])}var nt={props:["items","reRecord","isSaved"],data(){return{quantity:"",selectedItemValue:""}},methods:{addRecord(){let e=this.items.find((e=>e.id===this.selectedItemValue)),t={item:e,quantity:this.quantity,cost:e.price,cost:e.price*this.quantity};this.quantity="",this.selectedItemValue="",this.$emit("newRecord",t)}}};const at=(0,Z.Z)(nt,[["render",it]]);var rt=at;const st={class:"mt-3"},ct={class:"row justify-content-center"},lt={class:"col-12 col-lg-8"},dt={class:"table gradient border-0 rounded m-0 w-100"},ut=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-center"},"#"),(0,n._)("th",{class:"text-center"},"Item"),(0,n._)("th",{class:"text-center"},"Price"),(0,n._)("th",{class:"text-center"},"Quantity"),(0,n._)("th",{class:"text-center"},"Cost"),(0,n._)("th",{class:"hideOnPrint"},"Action")])],-1),mt={class:"text-center"},vt={class:"text-center"},bt={class:"text-center"},pt={class:"text-center"},ht={class:"text-center"},_t={class:"text-center hideOnPrint"},ft=["onClick"],wt=(0,n._)("i",{class:"bi bi-trash"},null,-1),yt=[wt],gt={key:0},kt={colspan:"6"},xt={class:"d-flex justify-content-around"},Dt=(0,n._)("h5",{class:"mb-0"},"Total",-1),It={key:1},St=(0,n._)("td",{colspan:"6"},"No records",-1),Ct=[St];function Tt(e,t,o,i,a,r){return(0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("div",ct,[(0,n._)("div",lt,[(0,n._)("table",dt,[ut,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.records,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t,class:"animate__fadeInDown animate__animated"},[(0,n._)("td",mt,(0,u.zw)(t+1),1),(0,n._)("td",vt,(0,u.zw)(e.item.name),1),(0,n._)("td",bt,(0,u.zw)(e.item.price),1),(0,n._)("td",pt,(0,u.zw)(e.quantity),1),(0,n._)("td",ht,"$"+(0,u.zw)(e.cost),1),(0,n._)("td",_t,[(0,n._)("button",{onClick:e=>r.delRecord(t),class:"btn btn-outline-danger btn-sm"},yt,8,ft)])])))),128))]),(0,n._)("tfoot",null,[o.records.length>0?((0,n.wg)(),(0,n.iD)("tr",gt,[(0,n._)("td",kt,[(0,n._)("div",xt,[Dt,(0,n._)("div",null,"$"+(0,u.zw)(o.calTotal),1)])])])):((0,n.wg)(),(0,n.iD)("tr",It,Ct))])])])])])}var Mt={props:["records","calTotal"],data(){return{total:""}},computed:{},methods:{delRecord(e){this.$emit("delRecord",e)}}};const Ot=(0,Z.Z)(Mt,[["render",Tt]]);var jt=Ot;const Pt={class:"row justify-content-center align-items-center"},zt=(0,n._)("div",{class:"col-12"},[(0,n._)("div",null,[(0,n._)("h3",{class:"text-center text-primary mb-5"},"Invoice Maker")])],-1),Nt={class:"col-12 col-lg-8"},Ut={class:"d-flex justify-content-between"},Rt={class:"mb-0 text-black-50 small"},qt=(0,n._)("small",null,"Invoice Number : ",-1),Bt=(0,n._)("a",{href:"",target:"blank",class:"btn btn-sm btn-primary hideOnPrint"},[(0,n.Uk)("New Invoice"),(0,n._)("i",{class:"bi bi-file-earmark-diff"})],-1);function Yt(e,t,o,i,a,r){return(0,n.wg)(),(0,n.iD)("div",Pt,[zt,(0,n._)("div",Nt,[(0,n._)("div",Ut,[(0,n._)("p",Rt,[qt,(0,n.Uk)(" "+(0,u.zw)(o.invoiceNumber),1)]),Bt])])])}var Kt={props:["invoiceNumber"]};const Zt=(0,Z.Z)(Kt,[["render",Yt]]);var $t=Zt,Ft={components:{Modal:F,Print:le,ShowId:De,FindForm:Be,Form:rt,Table:jt,Invoice:$t},data(){return{items:[{id:1,name:"Monitor",price:300},{id:2,name:"Keyboard",price:200},{id:3,name:"Mouse",price:200},{id:4,name:"Cpu",price:1300}],records:[],isSaved:!1,invoiceId:"",showShowId:!1,record:"",showModal:!1}},methods:{delRecord(e){let t=this.records.filter(((t,o)=>o!==e));this.records=t},saved(e){this.isSaved=!0,this.invoiceId=e,this.showShowId=!0},recordData(e){this.record=e,this.showModal=!0,console.log(e)}},computed:{invoiceNumber(){let e=new Date,t=e.getDate()+""+(e.getMonth()+1)+e.getFullYear(),o=Math.floor(1e4*Math.random());return t+"-"+o},calTotal(){return this.records.reduce(((e,t)=>e+t.cost),0)}}};const Vt=(0,Z.Z)(Ft,[["render",d],["__scopeId","data-v-3399959b"]]);var Wt=Vt;o(8937);window.bootstrap=o(6744),(0,i.ri)(Wt).mount("#app")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,a){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],a=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,r=i[0],s=i[1],c=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var d=c(o)}for(t&&t(i);l<r.length;l++)a=r[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},i=self["webpackChunkinvoice_maker"]=self["webpackChunkinvoice_maker"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(8592)}));i=o.O(i)})();
//# sourceMappingURL=app.c75283c9.js.map