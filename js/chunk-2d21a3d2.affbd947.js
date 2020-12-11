(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Skills"),e("Experience"),e("Projects"),e("PetProjects")],1)},i=[],l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{staticClass:"section-title"},[t._v("Проекты")]),e("div",{staticClass:"projects-cards row"},t._l(t.works,(function(s){return e("div",{key:s.title,staticClass:"card-container col-sm-6 col-md-4"},[e("div",{staticClass:"project-card",attrs:{"data-modal-target":s.modal}},[e("div",{staticClass:"project-card__img"},[e("div",{staticClass:"project-card__spacer"}),e("img",{staticClass:"project-card__pic",attrs:{src:s.img,alt:""}})]),e("div",{staticClass:"project-card__layout"},[e("span",{staticClass:"project-card__description"},[t._v(t._s(s.title))])])]),e("ProjectsModal",{attrs:{card:s}})],1)})),0)])},c=[],o={data:function(){return{works:[{title:"Matchday Shop",type:"Интернет-магазин",img:"./images/screenshots/matchdayshop.jpg",link:"https://matchdayshop.ru",modal:"matchdayshop",desc:"Интернет-магазин Matchday Shop. Самый большой проект. Полная разработка. Back-end реализован на PHP Laravel. Админка делалась самостоятельно под ключ, за основу взят шаблон AdminLTE. Front-end написан на HTML и JQuery. Для клиентской части, из сторонних модулей, использованы только карусели. Для серверной - рассылка писем, метатеги и генератор меню."},{title:"Brandrock",type:"Интернет-магазин",img:"./images/screenshots/brandrock.jpg",link:"https://brandrock.shop/",modal:"Brandrock",desc:"Интернет-магазин Brandrock. Производилась доработка шаблона и устранение багов, а именно: создание или изменение большинства анимаций, в том числе и анимация при загрузке страницы и переходе на другую; устранение багов в верстке при работе плагина( изменение исходного кода ), также багов в адаптивной верстке; общее изменение стилей."},{title:"Brandrock 2",type:"Интернет-магазин",img:"./images/screenshots/brandrock2.jpg",link:"pages/brandrock/index.html",modal:"Brandrock2",desc:"Изначальный дизайн интернет-магазина Brandrock. Была сделана вёрстка 14 страниц, но в итоге решили изменить дизайн полностью. Представлены основные страницы. Навигация через главную."},{title:"Red Rabbit",type:"Кино-портал",img:"./images/screenshots/red-rabbit.jpg",link:"https://r-rabbit.net",modal:"redrabbit",desc:"Кинопортал Red Rabbit. Производилась доработка шаблона, а именно: полностью делалась адаптивная верстка; изменено и добавлено множество блоков, значительно доработан личный кабинет; создание анимаций; создание регулятора громкости на странице( в данный момент заменен на другой плагин )."},{title:"Spanish Football Academy",type:"Лендинг",img:"./images/screenshots/sfa.jpg",link:"pages/sfa/index.html",modal:"sfa",desc:"Лендинг Spanish Football Academy. Адаптивный front-end, плюс JS. Для модальных окон использован собственный плагин."},{title:"CMS интернет-магазина",type:"cms",img:"./images/screenshots/cms.jpg",link:"pages/cms/index.html",modal:"cms",desc:"Прототип новой админки для интернет-магазина Matchday Shop. Реализован на Vue."}]}}},r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-window__wrapper",attrs:{"data-modal-window":t.card.modal}},[e("div",{staticClass:"modal-window__layout"}),e("div",{staticClass:"modal-window__container"},[e("button",{staticClass:"modal-window__closer",attrs:{type:"button"}},[e("svg",{staticStyle:{"enable-background":"new 0 0 60 60"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",width:"25px",x:"0px",y:"0px",viewBox:"0 0 60 60","xml:space":"preserve"}},[e("g",[e("path",{attrs:{d:"M0,0v60h60V0H0z M58,58H2V2h56V58z"}}),e("polygon",{attrs:{points:"16.009,45.405 30.151,31.263 44.293,45.405 45.707,43.991 31.565,29.849 45.707,15.707 44.293,14.293    30.151,28.435 16.009,14.293 14.595,15.707 28.737,29.849 14.595,43.991  "}})])])]),e("div",{staticClass:"work-details"},[e("div",{staticClass:"work-details__img image-holder"},[e("div",{staticClass:"work-details__spacer"}),e("img",{staticClass:"image-holder__img",attrs:{src:t.card.img,alt:""}})]),e("p",{staticClass:"work-details__text"},[t._v(" "+t._s(t.card.desc)+" ")]),e("div",{staticClass:"work-details__buttons"},[e("a",{staticClass:"work-details__btn",attrs:{href:t.card.link,target:"_blank"}},[t._v(" перейти ")]),t.card.git?e("a",{staticClass:"work-details__btn",attrs:{href:t.card.git,target:"_blank"}},[t._v(" GitHub ")]):t._e()])])])])},n=[],d={props:["card"]},p=d,m=e("2877"),_=Object(m["a"])(p,r,n,!1,null,null,null),g=_.exports,h={components:{ProjectsModal:g},mixins:[o]},u=h,k=Object(m["a"])(u,l,c,!1,null,null,null),v=k.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{staticClass:"section-title"},[t._v("Pet-проекты")]),e("div",{staticClass:"projects-cards row"},t._l(t.petProjects,(function(s){return e("div",{key:s.title,staticClass:"card-container col-sm-6 col-md-4"},[e("div",{staticClass:"project-card",attrs:{"data-modal-target":s.modal}},[e("div",{staticClass:"project-card__img"},[e("div",{staticClass:"project-card__spacer"}),e("img",{staticClass:"project-card__pic",attrs:{src:s.img,alt:""}})]),e("div",{staticClass:"project-card__layout"},[e("span",{staticClass:"project-card__description"},[t._v(t._s(s.title))])])]),e("ProjectsModal",{attrs:{card:s}})],1)})),0)])},b=[],j={data:function(){return{petProjects:[{title:"Мини-игра",type:"Мини-игра",img:"./images/screenshots/coincidence.jpg",link:"pages/coincidence_mini-game/index.html",git:"https://github.com/Anikeen/Coincidence-mini-game",modal:"coincidence",desc:"Игра создавалась для практики JavaScript."},{title:"Majestical",type:"Лендинг",img:"./images/screenshots/majestical.jpg",link:"pages/majestical/index.html",git:"https://github.com/Anikeen/Majestical",modal:"majestical",desc:"Страница для демонстрации верстки и код-стайла."},{title:"Methodic Grey",type:"Лендинг",img:"./images/screenshots/methodic-grey.jpg",link:"pages/methodic_grey/index.html",git:"https://github.com/Anikeen/Methodic-grey",modal:"methodic-grey",desc:"Страница для демонстрации верстки и код-стайла."},{title:"Nobodys Fool",type:"Лендинг",img:"./images/screenshots/nobodys-fool.jpg",link:"pages/nobodys_fool/index.html",git:"https://github.com/Anikeen/Nobodys-fool",modal:"nobodys-fool",desc:"Страница для демонстрации верстки и код-стайла."},{title:"The Modernist",type:"Лендинг",img:"./images/screenshots/the-modernist.jpg",link:"pages/the_modernist/index.html",git:"https://github.com/Anikeen/The-modernist",modal:"the-modernist",desc:"Страница для демонстрации верстки и код-стайла."},{title:"Utopic Flowers",type:"Лендинг",img:"./images/screenshots/utopic_flowers.jpg",link:"pages/utopic_flowers/index.html",git:"https://github.com/Anikeen/Utopic-flowers",modal:"utopic",desc:"Страница для демонстрации верстки и код-стайла."}]}}},C={components:{ProjectsModal:g},mixins:[j]},y=C,x=Object(m["a"])(y,w,b,!1,null,null,null),f=x.exports,S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{staticClass:"section-title"},[t._v("Навыки")]),e("ul",{staticClass:"skills-list"},t._l(t.skills,(function(s){return e("li",{key:s.text,staticClass:"skills-list__row"},[e("span",{staticClass:"skills-list__span"},[t._v(t._s(s.title))]),e("span",{staticClass:"skills-list__delimiter"},[t._v(":")]),t._v(" "+t._s(s.text)+" ")])})),0)])},P=[],M={data:function(){return{skills:[{title:"JavaScript",text:"ES6+, AJAX, Promise, Async/Await. Фреймворки и библиотеки: Vue, JQuery."},{title:"Вёрстка",text:"HTML, CSS, Sass. Семантическая и адаптивная вёрстка. Методология БЭМ."},{title:"PHP",text:"ООП, паттерны проектирования. Из фреймворков - Laravel."},{title:"SQL",text:"Основное из теории БД. Практический опыт заключается в работе с сущностями."},{title:"Вспомогательные инструменты",text:"Webpack, Gulp, Git."}]}}},A={mixins:[M]},E=A,J=Object(m["a"])(E,S,P,!1,null,null,null),B=J.exports,H=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{staticClass:"section-title"},[t._v("Опыт работы")]),e("ul",{staticClass:"skills-list"},[e("li",{staticClass:"skills-list__row"},[t._v(" Работа в веб-студии (4 месяца). Занимался front-end. В основном доработка проектов, плюс один полноценный. ")]),e("li",{staticClass:"skills-list__row"},[t._v(" Фриланс. Каталог товаров с простой админкой для пополнения. Реализован на нативном PHP. В основе лежит упрощенный вариант MVC. ")]),e("li",{staticClass:"skills-list__row"},[t._v(' Фриланс. Интернет-магазин "Matchday Shop". Проект с полной разработкой приложения, включая админку. Получен большой опыт в различных аспектах разработки, бизнес-логике и SEO. ')]),e("li",{staticClass:"skills-list__row"},[t._v(" Создание JS плагинов (тултипы, модальные окна, AJAX загрузчик файлов и т.д.), используя нативные средства JS. ")])])])}],$={},L=Object(m["a"])($,H,O,!1,null,null,null),V=L.exports,F={components:{Skills:B,Experience:V,Projects:v,PetProjects:f}},T=F,G=Object(m["a"])(T,a,i,!1,null,null,null);s["default"]=G.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.affbd947.js.map