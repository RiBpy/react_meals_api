(this.webpackJsonpreact_meals_api=this.webpackJsonpreact_meals_api||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/ri.368e0d6f.png"},23:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(3),i=a(1),o=a(12),m=a.n(o),u=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-img"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:m.a,alt:"logo",className:"footer-logo"}))),r.a.createElement("div",{className:"footer-info"},"Developed by \xa9 ",r.a.createElement(s.b,{className:"footer-add",to:"https://linkedin.com/in/ribpy"},"Riaz Bappy")))},E=function(){return r.a.createElement("section",{className:"section about-section"},r.a.createElement("h1",{className:"section-title"},"about us"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"))},p=function(){return r.a.createElement("section",{className:"error-page section"},r.a.createElement("div",{className:"error-container"},r.a.createElement("h1",null,"oops! it's a dead end"),r.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home")))},f=function(){return r.a.createElement("div",{className:"loader"})},d=function(e){var t=e.image,a=e.name,n=e.id,c=e.info,l=e.type;return r.a.createElement("article",{className:"meal"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t,alt:a})),r.a.createElement("div",{className:"meal-footer",key:n},r.a.createElement("h3",null,a),r.a.createElement("h4",null,l),r.a.createElement("p",null,c),r.a.createElement(s.b,{to:"/meal/".concat(n),className:"btn btn-primary btn-details"},"details")))},b=a(9),g=a.n(b),h=a(13),v=a(7),N=r.a.createContext(),j=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(v.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)([]),o=Object(v.a)(i,2),m=o[0],u=o[1],E=Object(n.useState)("a"),p=Object(v.a)(E,2),f=p[0],d=p[1],b=Object(n.useState)([]),j=Object(v.a)(b,2),y=j[0],O=j[1],x=function(){var e=Object(h.a)(g.a.mark((function e(){var t,a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://www.themealdb.com/api/json/v1/1/search.php?s=").concat(f));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,(n=a.meals)?(r=n.map((function(e){return{id:e.idMeal,name:e.strMeal,image:e.strMealThumb,type:e.strCategory,info:e.strArea,tag:e.strTags,instructions:e.strInstructions}})),u(r)):u([]),s(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),s(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[f,x]),r.a.createElement(N.Provider,{value:{loading:l,meals:m,searchText:f,setSearchText:d,filterText:y,setFilterText:O}},t)},y=function(){return Object(n.useContext)(N)},O=function(){var e,t=y(),a=t.meals,n=t.loading,c=t.filterText;return e=c.length>0?a.filter((function(e){return e.type===c})):a,n?r.a.createElement(f,null):a.length<1?r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,"No Meals found based on your search")):r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"section-title"},"Meals"),r.a.createElement("div",{className:"meals-center"},e.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},x=a(22),k=function(){var e=y(),t=e.setSearchText,a=e.meals,c=e.setFilterText,l=Object(n.useRef)("");Object(n.useEffect)((function(){l.current.focus()}),[t]);var s=Object(x.a)(new Set(a.map((function(e){return e.type}))));return r.a.createElement("section",{className:"section search"},r.a.createElement("form",{className:"search-form"},r.a.createElement("div",{className:"form-control",onSubmit:function(e){e.preventDefault()}},r.a.createElement("label",{htmlFor:"name"},"Search food"),r.a.createElement("input",{type:"text",name:"name",id:"name",ref:l,onChange:function(){t(l.current.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"name"},"Filter food"),r.a.createElement("select",{id:""},r.a.createElement("option",null,"All"),s.map((function(e){return r.a.createElement("option",{key:e,onClick:function(){return c(e)}},e)}))))))},w=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(O,null))},I=function(){var e=Object(i.f)().id,t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),m=Object(v.a)(o,2),u=m[0],E=m[1];if(Object(n.useEffect)((function(){l(!0),function(){var t=Object(h.a)(g.a.mark((function t(){var a,n,r,c,s,i,o,m,u,p,f,d,b,h,v,N,j,y;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://www.themealdb.com/api/json/v1/1/lookup.php?i=").concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,console.log(n),n.meals?(r=n.meals[0],c=r.idMeal,s=r.strMeal,i=r.strMealThumb,o=r.strCategory,m=r.strArea,u=r.strTags,p=r.strInstructions,f=r.strIngredient1,d=r.strIngredient2,b=r.strIngredient3,h=r.strIngredient4,v=r.strIngredient5,N=r.strIngredient6,j=r.strIngredient7,y=r.strIngredient8,E({id:c,Name:s,image:i,type:o,info:m,tag:u,instructions:p,ingredients:[f,d,b,h,v,N,j,y]})):E(null),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:l(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),c)return r.a.createElement(f,null);if(u){var p=u.Name,d=u.image,b=u.type,N=u.info,j=u.tag,y=u.instructions,O=u.ingredients;return r.a.createElement("section",{className:"section single-section"},r.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home"),r.a.createElement("h2",{className:"section-title"},p),r.a.createElement("div",{className:"single"},r.a.createElement("img",{src:d,alt:p}),r.a.createElement("div",{className:"single-info"},r.a.createElement("p",null,r.a.createElement("span",{className:"single-data"},"Type:"),b),r.a.createElement("p",null,r.a.createElement("span",{className:"single-data"},"Origin:"),N),r.a.createElement("p",null,r.a.createElement("span",{className:"single-data"},"Tag:"),j),r.a.createElement("p",null,r.a.createElement("span",{className:"single-data"},"Instructions:"),y),r.a.createElement("p",null,r.a.createElement("span",{className:"single-data"},"Ingredients:"),O.map((function(e,t){return e?r.a.createElement("i",{key:t},e,", "):null}))))))}return r.a.createElement("h2",{className:"section-title"},"No meal to display")},T=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:m.a,alt:"logo",className:"logo"})),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about"},"About")))))};var S=function(){return r.a.createElement(s.a,{basename:"/react_meals_api"},r.a.createElement(T,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(E,null)),r.a.createElement(i.a,{path:"/meal/:id"},r.a.createElement(I,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement(p,null))),r.a.createElement(u,null))};a(34);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null,r.a.createElement(S,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6f351636.chunk.js.map