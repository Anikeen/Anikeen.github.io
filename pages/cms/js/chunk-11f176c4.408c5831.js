(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f176c4"],{"3c19":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Breadcrumbs",{attrs:{breadcrumbs:t.breadcrumbs}}),s("div",{staticClass:"widgets row"},t._l(t.widgets,(function(t){return s("InfoWidget",{key:t.title,attrs:{widget:t}})})),1),t.loading?s("Loader"):t._e()],1)},n=[],i=s("7a92"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("div",{class:"widget "+t.widget.color},[s("i",{class:"widget__icon "+t.widget.pic}),s("div",{staticClass:"widget__info"},[s("span",{staticClass:"widget__amount"},[t._v(" "+t._s(t.widget.count)+" ")]),s("span",{staticClass:"widget__text"},[t._v(" "+t._s(t.widget.title)+" ")])])])])},a=[],u={props:["widget"]},o=u,l=s("2877"),d=Object(l["a"])(o,c,a,!1,null,null,null),b=d.exports,_=s("2f62"),m={components:{Breadcrumbs:i["a"],InfoWidget:b},metaInfo:function(){return{title:this.$title("Главная")}},data:function(){return{loading:!0,breadcrumbs:{title:"Главная",current:""},widgets:[{title:"Кол-во заказов",count:null,color:"pink-blue",pic:"fas fa-truck"},{title:"Новых заказов",count:null,color:"green",pic:"fas fa-cart-plus"},{title:"Кол-во товаров",count:null,color:"orange-pink",pic:"fas fa-tshirt"}]}},methods:Object(_["b"])(["fetchOrdersAmount","fetchProductsAmount","fetchNewOrdersAmount"]),mounted:function(){this.fetchOrdersAmount(),this.fetchProductsAmount(),this.fetchNewOrdersAmount(),this.loading=!1,this.widgets[0].count=this.$store.getters.ordersAmount,this.widgets[1].count=this.$store.getters.newOrdersAmount,this.widgets[2].count=this.$store.getters.productsAmount}},f=m,h=Object(l["a"])(f,r,n,!1,null,null,null);e["default"]=h.exports},"7a92":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-header"},[s("h1",{staticClass:"content-header__title"},[t._v(t._s(t.breadcrumbs.title)+" "+t._s(t.breadcrumbs.id))]),t.breadcrumbs.current?s("div",{staticClass:"breadcrumbs"},[s("router-link",{staticClass:"breadcrumbs__link",attrs:{to:"/admin"}},[s("i",{staticClass:"breadcrumbs__icon fas fa-home"}),t._v(" Главная ")]),t.breadcrumbs.parent?s("router-link",{staticClass:"breadcrumbs__link",attrs:{to:t.breadcrumbs.parentLink}},[t._v(" "+t._s(t.breadcrumbs.parent)+" ")]):t._e(),s("span",{staticClass:"breadcrumbs__current"},[t._v(" "+t._s(t.breadcrumbs.current)+" "+t._s(t.breadcrumbs.id)+" ")])],1):t._e()])},n=[],i={props:["breadcrumbs"]},c=i,a=s("2877"),u=Object(a["a"])(c,r,n,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-11f176c4.408c5831.js.map