(function(e){function t(t){for(var n,i,o=t[0],u=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var u=s[o];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/pages/test-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0492":function(e,t,s){"use strict";s("16de")},1057:function(e,t,s){"use strict";s("1f4b")},"16de":function(e,t,s){},"1f4b":function(e,t,s){},2334:function(e,t,s){"use strict";s("3903")},"372c":function(e,t,s){"use strict";s("839f")},3903:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Contacts")],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contacts"},[s("div",{staticClass:"users-list"},[s("button",{staticClass:"just-btn",on:{click:e.widgetToggle}},[e._v(" Добавить ")]),e.users.length>0?s("Users",{attrs:{users:e.users}}):s("p",{staticClass:"warning"},[e._v(" Нет добавленных пользователей ")])],1),e.WidgetIsOpen?s("AddingWidget"):e._e()],1)},o=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-table"},[s("UsersTableHeader"),s("div",{staticClass:"users-table__body"},[e._l(e.users,(function(t){return[s("UserRow",{key:t.id,attrs:{user:t}}),t.subordinates.length>0?e._l(t.subordinates,(function(e){return s("UserRow",{key:e.id,attrs:{user:e}})})):e._e()]}))],2)],1)},l=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-table__header"},[s("div",{staticClass:"users-table__row"},[s("div",{staticClass:"users-table__cell",on:{click:e.sortByName}},[e._v("Имя")]),s("div",{staticClass:"users-table__cell",on:{click:e.sortByPhone}},[e._v("Телефон")])])])},d=[],f={name:"UsersTableHeader",methods:{sortByName(){this.$parent.sortByName()},sortByPhone(){this.$parent.sortByPhone()}}},p=f,h=(s("1057"),s("2877")),m=Object(h["a"])(p,c,d,!1,null,null,null),_=m.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-table__row"},[s("div",{staticClass:"users-table__cell",class:e.isSubcell},[e.hasSubordinates||e.hasChief?s("button",{staticClass:"users-table__button"},[e._v(" + ")]):e._e(),e._v(" "+e._s(e.user.name)+" ")]),s("div",{staticClass:"users-table__cell"},[e._v(e._s(e.user.phone))])])},g=[],b={name:"UserRow",props:["user"],computed:{hasSubordinates(){return this.user.subordinates.length>0},hasChief(){return!!this.user.chiefId},isSubcell(){return this.user.chiefId?"subcell":""}}},w=b,y=(s("2334"),Object(h["a"])(w,v,g,!1,null,null,null)),C=y.exports,O={name:"Users",components:{UsersTableHeader:_,UserRow:C},props:["users"],methods:{sortByName(){this.users.sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)},sortByPhone(){this.users.sort((e,t)=>e.phone<t.phone?-1:e.phone>t.phone?1:0)}}},j=O,U=(s("372c"),Object(h["a"])(j,u,l,!1,null,null,null)),x=U.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"adding-widget"},[s("div",{staticClass:"adding-widget__header"},[s("h2",{staticClass:"adding-widget__title"},[e._v("Добавление пользователя")]),s("button",{staticClass:"adding-widget__btn",attrs:{type:"button"},on:{click:e.widgetToggle}},[e._v(" × ")])]),s("form",{staticClass:"adding-form",on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[s("div",{staticClass:"adding-form__row"},[s("label",{staticClass:"adding-form__label",attrs:{for:"name"}},[e._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"adding-form__input",attrs:{id:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"adding-form__row"},[s("label",{staticClass:"adding-form__label",attrs:{for:"phone"}},[e._v("Телефон")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"adding-form__input",attrs:{id:"phone",type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),s("div",{staticClass:"adding-form__row"},[s("label",{staticClass:"adding-form__label",attrs:{for:"chief"}},[e._v("Начальник")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.chiefId,expression:"chiefId"}],staticClass:"adding-form__select",attrs:{id:"chief"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.chiefId=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}}),e._l(e.users,(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),s("button",{staticClass:"just-btn",attrs:{type:"submit"}},[e._v("Сохранить")])])])},S=[],P=s("2f62"),T={name:"AddingWidget",data(){return{users:[],name:null,phone:null,chiefId:null}},methods:{...Object(P["d"])(["addUser"]),...Object(P["b"])(["storeUsers"]),widgetToggle(){this.$parent.widgetToggle()},submitHandler(){if(!this.name||!this.phone)return;const e={id:(new Date).valueOf().toString().slice(11),name:this.name,phone:this.phone,chiefId:this.chiefId,subordinates:[]};this.addUser(e),this.storeUsers(),this.name=null,this.phone=null,this.chief=null}},mounted(){this.users=this.$store.getters.users}},$=T,k=(s("0492"),Object(h["a"])($,I,S,!1,null,null,null)),N=k.exports,B={name:"Contacts",components:{Users:x,AddingWidget:N},data(){return{WidgetIsOpen:!1}},computed:Object(P["c"])(["users"]),methods:{...Object(P["b"])(["fetchUsers"]),widgetToggle(){this.WidgetIsOpen=!this.WidgetIsOpen}},mounted(){this.fetchUsers()}},W=B,E=(s("90e8"),Object(h["a"])(W,i,o,!1,null,null,null)),A=E.exports,H={name:"App",components:{Contacts:A}},J=H,M=(s("034f"),Object(h["a"])(J,r,a,!1,null,null,null)),R=M.exports,D={state:{users:[]},getters:{users(e){return e.users}},actions:{fetchUsers(e){let t=window.localStorage.getItem("users"),s=[];t&&(s=JSON.parse(t)),e.commit("updateUsers",s)},storeUsers({getters:e}){const t=JSON.stringify(e.users);window.localStorage.setItem("users",t)}},mutations:{updateUsers(e,t){e.users=t},addUser(e,t){if(t.chiefId){const s=e.users.findIndex(e=>e.id==t.chiefId);e.users[s].subordinates.push(t)}else e.users.push(t)}}};n["a"].use(P["a"]);var q=new P["a"].Store({modules:{users:D}});n["a"].config.productionTip=!1,new n["a"]({store:q,render:function(e){return e(R)}}).$mount("#app")},"839f":function(e,t,s){},"85ec":function(e,t,s){},"90e8":function(e,t,s){"use strict";s("d5e1")},d5e1:function(e,t,s){}});
//# sourceMappingURL=app.27042f1a.js.map