(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{311:function(t,e,r){var content=r(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("746d6844",content,!0,{sourceMap:!1})},312:function(t,e,r){var content=r(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("72e83798",content,!0,{sourceMap:!1})},313:function(t,e,r){var content=r(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("1f707da2",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";var n=r(311),o=r.n(n);r.d(e,"default",(function(){return o.a}))},315:function(t,e,r){(e=r(4)(!1)).push([t.i,'.wrapper_1Q2sL{width:20%;padding:0 15px;margin-bottom:30px}.card_7317G{padding:15px;background-color:#fff;border:1px solid #eee;border-radius:10px;box-shadow:0 0 10px 0 #eee;transition:all .4s}.card_7317G:hover{box-shadow:0 0 10px 0 #e61aff;border-color:#e61aff}.elements_2GgCN{display:flex;justify-content:space-between;align-items:center}.push-btn_2e2Cn{z-index:1}.image-holder_2QkGj{position:relative;overflow:hidden}.spacer_30x1Y{padding-top:100%}.image_ZihfN{position:absolute;top:0;left:0;width:100%;-o-object-fit:cover;object-fit:cover}.name_QVT7s{margin:10px 0 5px;white-space:nowrap;color:#999;overflow:hidden;text-overflow:ellipsis}.price_2gQVu{font-weight:800}.price_2gQVu:after{content:"₽";margin-left:5px}@media(max-width:1399.98px){.wrapper_1Q2sL{width:25%}}@media(max-width:767.98px){.wrapper_1Q2sL{width:33.33333%}}@media(max-width:575.98px){.wrapper_1Q2sL{width:50%}}@media(max-width:420.98px){.wrapper_1Q2sL{width:100%}}',""]),e.locals={wrapper:"wrapper_1Q2sL",card:"card_7317G",elements:"elements_2GgCN","push-btn":"push-btn_2e2Cn","image-holder":"image-holder_2QkGj",spacer:"spacer_30x1Y",image:"image_ZihfN",name:"name_QVT7s",price:"price_2gQVu"},t.exports=e},316:function(t,e,r){"use strict";var n=r(312),o=r.n(n);r.d(e,"default",(function(){return o.a}))},317:function(t,e,r){(e=r(4)(!1)).push([t.i,".icon_2Vl1y{width:25px;height:25px}.icon_2Vl1y:hover path{fill:#333}.icon_2Vl1y path{fill:#999;transition:fill .4s}",""]),e.locals={icon:"icon_2Vl1y"},t.exports=e},318:function(t,e,r){"use strict";var n=r(313),o=r.n(n);r.d(e,"default",(function(){return o.a}))},319:function(t,e,r){(e=r(4)(!1)).push([t.i,".container_2tI9W{display:flex;flex-wrap:wrap;margin:0 -15px}",""]),e.locals={container:"container_2tI9W"},t.exports=e},320:function(t,e,r){"use strict";r.r(e);r(56),r(28),r(97),r(40),r(19),r(29),r(42),r(43);var n={name:"ProductCard",props:{product:{type:Object}},computed:{photo:function(){return"https://frontend-test.idaproject.com"+this.product.photo},name:function(){var t=this.product.name.toLowerCase(),e=t.split(" ");return t=e.map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),t},price:function(){return this.product.price.toString().slice(0,3)+" "+this.product.price.toString().slice(3)}},methods:{addToCart:function(t){this.$store.dispatch("cart/addToCart",t),this.$store.dispatch("cart/storeCart")}}},o=r(314),c=r(2);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.wrapper},[r("div",{class:t.$style.card},[r("nuxt-link",{attrs:{to:""}},[r("div",{class:t.$style.elements},[r("rating-elem",{attrs:{rating:t.product.rating}}),t._v(" "),r("button",{class:t.$style["push-btn"],on:{click:function(e){return t.addToCart(t.product)}}},[r("cart-icon")],1)],1),t._v(" "),r("div",{class:t.$style["image-holder"]},[r("div",{class:t.$style.spacer}),t._v(" "),r("img",{class:t.$style.image,attrs:{src:t.photo,alt:t.product.name}})]),t._v(" "),r("div",{class:t.$style.name},[t._v(t._s(t.name))]),t._v(" "),r("div",{class:t.$style.price},[t._v(t._s(t.price))])])],1)])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports;installComponents(component,{RatingElem:r(194).default,CartIcon:r(322).default})},321:function(t,e,r){"use strict";r.r(e);var n=r(318),o=r(2);var component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.$style.container},[this._t("default")],2)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);var n=r(316),o=r(2);var component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{class:this.$style.icon},[e("path",{attrs:{d:"M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.117-0.111 0.182-0.065 0.137-0.096 0.283-0.095 0.426v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z"}})])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);r(19),r(41);var n=r(11),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,fetch("https://frontend-test.idaproject.com/api/product?category=2");case 3:return n=e.sent,e.next=6,n.json();case 6:return o=e.sent,r.commit("products/updateProducts",o),e.abrupt("return",{products:o});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{products:[]}},transition:{name:"fade"}},c=r(2),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("product-section",this._l(this.products,(function(t){return e("product-card",{key:t.id,attrs:{product:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCard:r(320).default,ProductSection:r(321).default})}}]);