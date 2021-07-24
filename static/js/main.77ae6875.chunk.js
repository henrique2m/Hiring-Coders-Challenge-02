(this.webpackJsonpdesafio02=this.webpackJsonpdesafio02||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o,a,r,c,i,s=t(0),l=t.n(s),d=t(12),u=t.n(d),b=t(2),j=t(8),f=t(25),p=t(3),h=t(4),x=h.b.div(o||(o=Object(p.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 42px;\n\n  section {\n    width: 40rem;\n    border-radius: 10px;\n  }\n\n  section form {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    padding: 10px;\n\n    background: #ff3366;\n  }\n\n  section form span {\n    font-size: 14px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    background: #88e340;\n    border-radius: 10px;\n  }\n\n  section form span.error {\n    background: #ff6347;\n  }\n\n  section form input,\n  button {\n    width: 100%;\n    height: 54px;\n    margin-top: 10px;\n    color: #292929;\n    font-size: 18px;\n    border-radius: 10px;\n  }\n\n  section form input {\n    padding-left: 10px;\n  }\n\n  section form button {\n    background: #292929;\n    color: #fff;\n    font-weight: bold;\n    transition: background 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      color: #292929;\n      background: #fff;\n    }\n  }\n"]))),O=h.b.footer(a||(a=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n    width: 40rem;\n    min-height: 50px;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    margin-top: 60px;\n  }\n\n  li {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    border-radius: 10px;\n    padding: 10px;\n    margin-bottom: 10px;\n\n    border-left: 1px solid #ff3366;\n  }\n\n  li strong {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  li small {\n    font-size: 14px;\n  }\n\n  li strong,\n  small {\n    color: #292929;\n  }\n\n  ul li img {\n    width: 50px;\n    height: 50px;\n    border: 1px solid #ff3366;\n    border-radius: 50%;\n  }\n\n  ul li div {\n    display: flex;\n    min-height: 50px;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n    border-left: 1px solid #ff3366;\n    margin-left: 10px;\n  }\n"]))),g=t(1),m=function(){var n=Object(s.useState)(!1),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(s.useState)(!1),r=Object(b.a)(a,2),c=r[0],i=r[1],l=Object(s.useState)(""),d=Object(b.a)(l,2),u=d[0],p=d[1],h=Object(s.useState)(""),m=Object(b.a)(h,2),v=m[0],S=m[1],w=Object(s.useState)(""),y=Object(b.a)(w,2),k=y[0],C=y[1],N=Object(s.useState)(""),z=Object(b.a)(N,2),F=z[0],I=z[1],J=Object(s.useState)(""),P=Object(b.a)(J,2),A=P[0],D=P[1],R=Object(s.useState)(""),E=Object(b.a)(R,2),U=E[0],T=E[1],B=localStorage.getItem("users"),M=Object(s.useState)(),q=Object(b.a)(M,2),G=q[0],H=q[1],K=Object(s.useCallback)((function(n){if(n.preventDefault(),""!==u&&""!==v&&""!==k&&""!==F&&""!==A&&""!==U){i(!1);var e=localStorage.getItem("users"),t=[],a=Object(f.a)(),r={id:a,firstName:u,lastName:v,email:k,ages:F,cpf:A,address:U,avatar:"https://avatars.dicebear.com/api/male/".concat(a,".svg")};if(e){var c=JSON.parse(e);t=[].concat(Object(j.a)(c),[r])}else t=[r];localStorage.setItem("users",JSON.stringify(t)),o(!0),p(""),S(""),C(""),I(""),D(""),T("")}else i(!0)}),[u,v,k,F,A,U]);return Object(s.useEffect)((function(){B&&H(JSON.parse(B))}),[B]),Object(g.jsxs)(x,{children:[Object(g.jsx)("section",{children:Object(g.jsxs)("form",{onSubmit:K,onFocus:function(){o(!1)},children:[t&&Object(g.jsx)("span",{children:"Cadastro realizado com sucesso!"}),c&&Object(g.jsx)("span",{className:"error",children:"Preencha todos campos."}),Object(g.jsx)("input",{name:"firstName",value:u,placeholder:"Nome",onChange:function(n){return p(n.target.value)}}),Object(g.jsx)("input",{name:"lastName",placeholder:"Sobrenome",value:v,onChange:function(n){return S(n.target.value)}}),Object(g.jsx)("input",{name:"email",placeholder:"E-mail",value:k,onChange:function(n){return C(n.target.value)}}),Object(g.jsx)("input",{name:"ages",value:F,placeholder:"Idade",onChange:function(n){return I(n.target.value)}}),Object(g.jsx)("input",{name:"cpf",placeholder:"CPF",value:A,onChange:function(n){return D(n.target.value)}}),Object(g.jsx)("input",{name:"address",placeholder:"Endere\xe7o",value:U,onChange:function(n){return T(n.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"CADASTRAR USU\xc1RIO"})]})}),0!==(null===G||void 0===G?void 0:G.length)&&Object(g.jsx)(O,{children:Object(g.jsx)("ul",{children:null===G||void 0===G?void 0:G.map((function(n){return Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{src:n.avatar,alt:n.firstName}),Object(g.jsxs)("div",{children:[Object(g.jsx)("strong",{children:"".concat(n.firstName," ").concat(n.lastName)}),Object(g.jsx)("small",{children:n.email})]})]},n.id)}))})})]})},v=function(){var n=Object(s.useState)(!1),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(s.useState)(!1),r=Object(b.a)(a,2),c=r[0],i=r[1],l=Object(s.useState)(""),d=Object(b.a)(l,2),u=d[0],p=d[1],h=Object(s.useState)(""),O=Object(b.a)(h,2),m=O[0],v=O[1],S=Object(s.useState)(""),w=Object(b.a)(S,2),y=w[0],k=w[1],C=Object(s.useCallback)((function(n){if(n.preventDefault(),""!==u&&""!==m&&""!==y){i(!1);var e=localStorage.getItem("products"),t=[],a={id:Object(f.a)(),product:u,description:m,price:y};if(e){var r=JSON.parse(e);t=[].concat(Object(j.a)(r),[a])}else t=[a];localStorage.setItem("products",JSON.stringify(t)),o(!0),p(""),v(""),k("")}else i(!0)}),[u,m,y]);return Object(g.jsxs)(x,{children:[Object(g.jsx)("section",{children:Object(g.jsxs)("form",{onSubmit:C,onFocus:function(){o(!1)},children:[t&&Object(g.jsx)("span",{children:"Cadastro realizado com sucesso!"}),c&&Object(g.jsx)("span",{className:"error",children:"Preencha todos campos."}),Object(g.jsx)("input",{name:"product",value:u,placeholder:"Produto",onChange:function(n){return p(n.target.value)}}),Object(g.jsx)("input",{name:"description",placeholder:"Descri\xe7\xe3o",value:m,onChange:function(n){return v(n.target.value)}}),Object(g.jsx)("input",{name:"price",placeholder:"Pre\xe7o",value:y,onChange:function(n){return k(n.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"CADASTRAR PRODUTO"})]})}),Object(g.jsx)("footer",{})]})},S=h.b.div(r||(r=Object(p.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),w=h.b.div(c||(c=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n\n  button {\n    width: 100px;\n    height: 100px;\n\n    font-size: 16px;\n    font-weight: bold;\n    border-radius: 5px;\n    margin-right: 10px;\n    background: #ff3366;\n    cursor: pointer;\n    transition: background 0.2s;\n\n    &:hover {\n      background: #fff;\n      color: #ff3366;\n    }\n  }\n"]))),y=function(){var n=Object(s.useState)(!0),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(s.useCallback)((function(){o(!t)}),[t]);return Object(g.jsxs)(S,{children:[Object(g.jsxs)(w,{children:[Object(g.jsx)("button",{onClick:a,children:"Novo Usu\xe1rio"}),Object(g.jsx)("button",{onClick:a,children:"Novo Produto"})]}),t?Object(g.jsx)(m,{}):Object(g.jsx)(v,{})]})},k=function(){return Object(g.jsx)(y,{})},C=Object(h.a)(i||(i=Object(p.a)(["\n:root {\n  font-size: 60%;\n  --color-background: #292929;\n  --color-text-base: #FFFFFF;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, #root {\n  height: 100vh;\n}\n\nbody {\n  background: var(--color-background);\n  overflow-x: hidden;\n}\n\n#root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody,\ninput,\nbutton,\ntextarea {\n  color: var(--color-text-base);\n  border: 0;\n  box-shadow: 0 0 0 0;\n  outline: 0;\n}\n"])));u.a.render(Object(g.jsxs)(l.a.StrictMode,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(C,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.77ae6875.chunk.js.map