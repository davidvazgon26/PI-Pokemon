(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),j=n(15),i=n.n(j),s=(n(35),n(36),n(2)),r=n(7),o=n(10),l=n.n(o),b="TRAER_POKEMONS",d="BUSCAR_POKEMONS",O="SORT",h="SORT_FORCE",u="FILTER",p="TRAER_TIPOS";var x=n(4),m=n(0);function f(e){var t=e.name,n=e.img,c=e.id;return Object(m.jsxs)("div",{id:c,children:[Object(m.jsx)(x.b,{to:"/pokemons/".concat(c),children:Object(m.jsx)("span",{children:"Ir a Detalle"})}),Object(m.jsx)("img",{src:n,alt:"imagen pokemon"}),Object(m.jsx)("h3",{children:t})]},c)}function v(){var e=Object(r.c)((function(e){return e.filtroPokemons})),t=Object(r.b)();return Object(c.useEffect)((function(){t((function(e){l.a.get("http://localhost:3001/pokemons").then((function(t){e({type:b,payload:t.data})})).catch((function(e){console.log(e)}))}))}),[t]),Object(m.jsx)("div",{children:e.map((function(e){return Object(m.jsx)(f,{id:e.id,name:e.name,img:e.img},e.id)}))})}var g=n(9);function y(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],j=Object(r.b)();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(function(e){return function(t){l.a.get("http://localhost:3001/pokemons?name="+e).then((function(e){t({type:d,payload:e.data})})).catch((function(e){console.log(e)}))}}(n))},children:[Object(m.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),a(e.target.value)},value:n}),Object(m.jsx)("input",{type:"submit",value:"Buscar"})]})})}function k(){var e=Object(r.b)();return Object(m.jsxs)("select",{name:"select",onChange:function(t){var n;e((n=t.target.value,{type:O,payload:n}))},children:[Object(m.jsx)("option",{value:"ascendente",children:"ascendente"}),Object(m.jsx)("option",{value:"descendente",children:"descendente"})]})}function P(){var e=Object(r.b)();return Object(m.jsxs)("select",{name:"select",onChange:function(t){var n;e((n=t.target.value,{type:h,payload:n}))},children:[Object(m.jsx)("option",{value:"Menor a Mayor",children:"Menor a Mayor"}),Object(m.jsx)("option",{value:"Mayor a Menor",children:"Mayor a Menor"})]})}function C(){return Object(m.jsx)("div",{children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(x.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(x.b,{to:"/pokemons",children:"pokemons"})}),Object(m.jsx)("li",{children:Object(m.jsx)(x.b,{to:"/agregar",children:"Add Pokemones"})}),Object(m.jsx)("li",{children:Object(m.jsx)(x.b,{to:"/about",children:"About"})})]})})})}function S(){var e=Object(r.c)((function(e){return e.tipos})),t=Object(r.b)();return Object(c.useEffect)((function(){t((function(e){l.a.get("http://localhost:3001/tipo").then((function(t){e({type:p,payload:t.data})})).catch((function(e){console.log(e)}))}))})),Object(m.jsx)("div",{children:Object(m.jsx)("select",{name:"tipos",onChange:function(e){var n=e.target.name,c=e.target.value;console.log(n,c),t(function(e,t){return{type:u,payload:{key:e,value:t}}}(n,c))},children:e.map((function(e){return Object(m.jsx)("option",{id:e.id,value:e.name,children:e.name},e.id)}))})})}function F(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsx)(y,{}),Object(m.jsx)(k,{}),Object(m.jsx)(P,{}),Object(m.jsx)(S,{}),Object(m.jsx)(v,{})]})}function E(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"La ruta buscada no existe!"}),Object(m.jsx)("p",{children:Object(m.jsx)(x.b,{to:"/",children:"Ir a Home"})}),Object(m.jsx)("p",{children:Object(m.jsx)(x.b,{to:"/pokemons",children:"Ir a pagina principal"})})]})}function M(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Home"}),Object(m.jsx)("p",{children:Object(m.jsx)(x.b,{to:"/pokemons",children:"Ir a pagina principal"})})]})}function T(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsx)("h2",{children:"Este es About"})]})}function A(){var e=Object(c.useState)(null),t=Object(g.a)(e,2),n=t[0],a=t[1],j=Object(s.g)().id;return Object(c.useEffect)((function(){return l.a.get("http://localhost:3001/pokemons/"+j).then((function(e){a(e.data)})),function(){a(null)}}),[j]),Object(m.jsx)("div",{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:n.img,alt:"imagen pokemon"}),Object(m.jsx)("h3",{children:n.name}),Object(m.jsxs)("span",{children:["Id: ",n.id]})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Vida | HP"}),Object(m.jsx)("span",{children:n.life})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Velocidad | Speed"}),Object(m.jsx)("span",{children:n.speed})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Ataque | Attack"}),Object(m.jsx)("span",{children:n.force})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Defensa | Defense"}),Object(m.jsx)("span",{children:n.defending})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Altura | Height"}),Object(m.jsx)("span",{children:n.height})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Peso | Weight"}),Object(m.jsx)("span",{children:n.weight})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Tipos | Types"}),n.tipos.length>1?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:n.tipos[0].name}),Object(m.jsx)("span",{children:n.tipos[1].name})]}):n.tipos.length>0?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{children:n.tipos[0].name})}):Object(m.jsx)("span",{children:"Sin Tipos"})]})]})]}),Object(m.jsx)(x.b,{to:"/pokemons",children:"Regresar"})]}):Object(m.jsx)("div",{children:"loading..."})})}var R=n(16),D=n(3);function _(){var e=Object(c.useState)({}),t=Object(g.a)(e,2),n=t[0],a=t[1],j=Object(s.f)();function i(e){e.preventDefault(),a(Object(D.a)(Object(D.a)({},n),{},Object(R.a)({},e.target.name,e.target.value)))}return Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("http://localhost:3001/pokemons/",n).then((function(){j("/pokemons")}))},children:[Object(m.jsx)("label",{htmlFor:"",children:"Nombre del Pokemon:"}),Object(m.jsx)("input",{name:"name",type:"text",onChange:i,value:n.name}),Object(m.jsx)("label",{htmlFor:"",children:"Vida:"}),Object(m.jsx)("input",{name:"life",type:"number",onChange:i,value:n.life}),Object(m.jsx)("label",{htmlFor:"",children:"Velocidad:"}),Object(m.jsx)("input",{name:"speed",type:"number",onChange:i,value:n.speed}),Object(m.jsx)("label",{htmlFor:"",children:"Ataque:"}),Object(m.jsx)("input",{name:"force",type:"number",onChange:i,value:n.force}),Object(m.jsx)("label",{htmlFor:"",children:"Defensa:"}),Object(m.jsx)("input",{name:"defending",type:"number",onChange:i,value:n.defending}),Object(m.jsx)("label",{htmlFor:"",children:"Altura:"}),Object(m.jsx)("input",{name:"height",type:"number",onChange:i,value:n.height}),Object(m.jsx)("label",{htmlFor:"",children:"Peso:"}),Object(m.jsx)("input",{name:"weight",type:"number",onChange:i,value:n.weight}),Object(m.jsx)("label",{htmlFor:"",children:"Url de la imagen del Pokemon:"}),Object(m.jsx)("input",{name:"img",type:"text",onChange:i,value:n.img}),Object(m.jsx)("input",{type:"submit",value:"Registrar"})]})]})}var I=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{index:!0,element:Object(m.jsx)(M,{})}),Object(m.jsx)(s.a,{path:"/pokemons",element:Object(m.jsx)(F,{})}),Object(m.jsx)(s.a,{path:"/pokemons/:id",element:Object(m.jsx)(A,{})}),Object(m.jsx)(s.a,{path:"/agregar",element:Object(m.jsx)(_,{})}),Object(m.jsx)(s.a,{path:"/about",element:Object(m.jsx)(T,{})}),Object(m.jsx)(s.a,{path:"*",element:Object(m.jsx)(E,{})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,j=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),j(e),i(e)}))},N=n(17),H=n(20),L={pokemons:[],filtroPokemons:[],tipos:[]};var V=n(30),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.b,U=Object(N.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(D.a)(Object(D.a)({},e),{},{pokemons:t.payload,filtroPokemons:t.payload});case p:return Object(D.a)(Object(D.a)({},e),{},{tipos:t.payload});case d:return Object(D.a)(Object(D.a)({},e),{},{filtroPokemons:t.payload});case O:var n=Object(H.a)(e.pokemons);return n=n.sort((function(e,n){return e.name<n.name?"ascendente"===t.payload?-1:1:e.name>n.name?"ascendente"===t.payload?1:-1:0})),Object(D.a)(Object(D.a)({},e),{},{filtroPokemons:n});case h:var c=Object(H.a)(e.pokemons);return c=c.sort((function(e,n){return e.force<n.force?"Menor a Mayor"===t.payload?-1:1:e.force>n.force?"Menor a Mayor"===t.payload?1:-1:0})),Object(D.a)(Object(D.a)({},e),{},{filtroPokemons:c});case u:var a=t.payload.key,j=t.payload.value,i=e.filtroPokemons.filter((function(e){return e[a]===j}));return Object(D.a)(Object(D.a)({},e),{},{pokemons:i});default:return e}}),B(Object(N.a)(V.a))),q=U;i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(r.a,{store:q,children:Object(m.jsx)(I,{})})})}),document.getElementById("root")),w()}},[[59,1,2]]]);
//# sourceMappingURL=main.513d3915.chunk.js.map