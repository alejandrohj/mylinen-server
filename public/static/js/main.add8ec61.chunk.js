(this["webpackJsonpmylinen-client"]=this["webpackJsonpmylinen-client"]||[]).push([[0],{61:function(e,a,t){e.exports=t(93)},66:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},69:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),o=(t(66),t(5)),m=t(9),i=(t(67),t(68),t(69),t(6)),u=t.n(i),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://mylinen.herokuapp.com/api",d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://mylinen.herokuapp.com/",E=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL,t(102)),p=t(99),g=t(95),f=t(101),b=t(8);function h(e){"url(".concat(d,"/water-background.jpg)");return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{sticky:"top",className:"general-nav",expand:"lg",style:{backgroundColor:"#04c3fe"}},l.a.createElement(b.b,{to:"/"},l.a.createElement("img",{src:"".concat(d,"/white-logo.png"),style:{width:"150px"},alt:"logo"})),l.a.createElement("div",{style:{justifySelf:"self-end"}})))}function y(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1];if(Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){c(e.data)}))}),[e.loggedInUser]),r){if("gobernanta"===r.userType)return l.a.createElement(m.a,{to:"/hotel/home"});if("admin"===r.userType)return l.a.createElement(m.a,{to:"/laundry/home"})}return console.log(e.err),console.log(e.errorMessage),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("div",{className:"signin"},l.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"25px"}},l.a.createElement("em",null,"Organiza tu lencer\xeda con SmartLinen")),l.a.createElement(E.a,{id:"siginCard",style:{backgroundColor:"#FEFEFE"}},l.a.createElement(p.a,{noValidate:!0,className:"admin-signinform",onSubmit:e.onSignIn,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement(p.a.Group,{style:{width:"100%"},controlId:"formBasicEmail"},l.a.createElement(p.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Direcci\xf3n de correo"),l.a.createElement(p.a.Control,{style:{textAlign:"center"},name:"email",type:"email",placeholder:"cliente@lavanderiamogan.com"}),l.a.createElement(p.a.Text,{className:"text-muted"},"Tu email")),l.a.createElement(p.a.Group,{style:{width:"80%"},controlId:"formBasicPassword"},l.a.createElement(p.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Contrase\xf1a"),l.a.createElement(p.a.Control,{style:{textAlign:"center"},name:"password",type:"password",placeholder:"Contrase\xf1a"}),l.a.createElement(p.a.Text,{className:"text-muted"},"Si no recuerdas tu contrase\xf1a, llamanos")),e.err?l.a.createElement("p",{style:{color:"#ff2b2b"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement(g.a,{className:"general-btn",type:"submit"},"Acceder"))),l.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"16px"}},l.a.createElement("em",null,"Aplicaci\xf3n exclusiva para clientes de Lavander\xeda Mog\xe1n"))))}var C=t(100);function v(e){"url(".concat(d,"/water-background.jpg)");return l.a.createElement(f.a,{style:{backgroundColor:"#04c3fe"},collapseOnSelect:!0,expand:"lg",sticky:"top"},l.a.createElement(f.a.Brand,{href:"/"},l.a.createElement("img",{src:"".concat(d,"/white-logo.png"),alt:"logo",height:"50"})),l.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"},l.a.createElement(C.a.Link,{href:"/laundry/complexes"},"Complejos"),l.a.createElement(C.a.Link,{href:"/laundry/users"},"Usuarios"),l.a.createElement(C.a.Link,{href:"/laundry/laundries"},"Prendas")),e.loggedInUser?l.a.createElement(C.a,null,l.a.createElement(C.a,null,l.a.createElement(g.a,{onClick:e.logOut},"LogOut "))):l.a.createElement(C.a,null,l.a.createElement(C.a,null,l.a.createElement(b.b,{to:"/signin"}," ",l.a.createElement(g.a,null,"Registrarse"))))))}function O(e){var a=Object(n.useState)(e.loggedInUser),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(!1),d=Object(o.a)(i,2),E=d[0],p=d[1];return Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(){p(!0)}))}),[]),E?l.a.createElement(m.a,{to:"/"}):r?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{logOut:e.logOut,loggedInUser:r})):l.a.createElement("p",null,"Loading...")}function x(e){"url(".concat(d,"/water-background.jpg)");return l.a.createElement(f.a,{collapseOnSelect:!0,expand:"lg",style:{backgroundColor:"#04c3fe"},sticky:"top"},l.a.createElement(f.a.Brand,{href:"/"},l.a.createElement("img",{src:"".concat(d,"/white-logo.png"),alt:"logo",height:"50"})),l.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"},l.a.createElement(C.a.Link,{href:"/hotel/home"},"Mis Lavados"),l.a.createElement(C.a.Link,{href:"/gmao"},"Trazabilidad"),l.a.createElement(C.a.Link,{href:"/hotel/stock/".concat(e.loggedInUser.rfidComplexId)},"Stock")),e.loggedInUser?l.a.createElement(C.a,null,l.a.createElement(C.a,null,l.a.createElement(g.a,{onClick:e.logOut},"LogOut "))):l.a.createElement(C.a,null,l.a.createElement(C.a,null,l.a.createElement(b.b,{to:"/signin"}," ",l.a.createElement(g.a,null,"Registrarse"))))))}var j=t(96);function S(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],i=r[1],d=Object(n.useState)(null),E=Object(o.a)(d,2),p=E[0],g=E[1],f=Object(n.useState)(null),b=Object(o.a)(f,2),h=(b[0],b[1],Object(n.useState)(!1)),y=Object(o.a)(h,2),C=y[0],v=y[1];return Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){i(e.data)})).catch((function(){v(!0)})),e&&u.a.get("".concat(s,"/customer/envio/").concat(a),{withCredentials:!0}).then((function(e){g(e.data)}))}),[]),C?l.a.createElement(m.a,{to:"/"}):(console.log(p),p?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{loggedInUser:c,logOut:e.logOut}),l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"10px"},id:"ComplexLaundriesTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("h4",null,"Albaran n\xba:",p.envio[0].codigo," Fecha. ",p.envio[0].fecha)),l.a.createElement("tr",null,l.a.createElement("th",null,"Art\xedculo"),l.a.createElement("th",null,"Cantidad"),l.a.createElement("th",null,"Subtotal"))),p?p.serial.map((function(e,a){return console.log(e),l.a.createElement("tbody",{key:a+"alb_art"},l.a.createElement("tr",null,l.a.createElement("td",null,e.articulo.name),l.a.createElement("td",null,e.cantidad),l.a.createElement("td",{style:{width:"200px",padding:"0px"}})))})):"")):l.a.createElement("p",null,"Loading..."))}function N(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),d=Object(o.a)(i,2),p=(d[0],d[1],Object(n.useState)(!1)),f=Object(o.a)(p,2),h=f[0],y=(f[1],Object(n.useState)(null)),C=Object(o.a)(y,2),v=C[0],O=C[1],j=Object(n.useState)(!1),S=Object(o.a)(j,2),N=S[0],I=(S[1],Object(n.useState)(null)),L=Object(o.a)(I,2),w=L[0],k=(L[1],{display:"flex",flexDirecction:"row",justifyContent:"space-between"});Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){c(e.data),u.a.get("".concat(s,"/customer/").concat(e.data.rfidComplexId,"/envios"),{withCredentials:!0}).then((function(e){O(e.data)}))}))}),[]);return h?l.a.createElement(m.a,{to:"/"}):r?N?l.a.createElement(m.a,{to:"/customer/service/".concat(w,"/edit")}):v?(v.sort((function(e,a){return a.id-e.id})),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{loggedInUser:r,logOut:e.logOut}),l.a.createElement("div",{style:{marginBottom:"50px"}},v.map((function(e,a){return console.log(e),l.a.createElement(E.a,{key:"alb"+a,style:{margin:"20px"}},l.a.createElement(E.a.Header,null,l.a.createElement("div",{style:k},l.a.createElement("p",null,e.codigo),e.fecha.slice(0,10))),l.a.createElement(E.a.Body,null,l.a.createElement(b.b,{to:"/hotel/albaran/".concat(e.id)},l.a.createElement(g.a,null,"Detalles"))))}))))):l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{loggedInUser:r,logOut:e.logOut}),l.a.createElement("p",null,"Loading...")):l.a.createElement("p",null,"Loading...")}var I=t(97),L=t(54),w=t(98);function k(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],m=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{textAlign:"center",marginTop:"20px",color:"#328CB6",fontWeight:"600",fontSize:"20px"}},"Clientes"),l.a.createElement("div",{className:"create-laundryitem-btn",style:{textAlign:"center"}},l.a.createElement(g.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Crear nuevo")),l.a.createElement(w.a,{centered:!0,show:r,onHide:m},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,{className:"admin-card-title"},"Nuevo cliente")),l.a.createElement(w.a.Body,null,l.a.createElement(p.a,{onSubmit:e.onCreateComplex},l.a.createElement(I.a,null,l.a.createElement(L.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Name"),l.a.createElement(p.a.Control,{name:"name",type:"text",placeholder:"Enter name"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Address"),l.a.createElement(p.a.Control,{name:"adress",type:"text",placeholder:"Enter description",maxLength:"100"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"RFID_ID"),l.a.createElement(p.a.Control,{name:"rfidId",type:"number",placeholder:"RFID_ID",maxLength:"10"})),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Category"),l.a.createElement(p.a.Control,{name:"services",as:"select"},l.a.createElement("option",null,"Choose a service"),["laundry","renting"].map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)})))))),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Create Item"),e.createSucces?l.a.createElement(g.a,{className:"general-btn",onClick:m},"Back to list"):l.a.createElement(l.a.Fragment,null))))))}function T(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),d=Object(o.a)(i,2),f=d[0],h=d[1],y=Object(n.useState)(!1),C=Object(o.a)(y,2),O=C[0],x=C[1],j=["laundry","renting"];Object(n.useEffect)((function(){u.a.get("".concat(s,"/complexes"),{withCredentials:!0}).then((function(e){c(e.data)})),u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){h(e.data)})).catch((function(){x(!0)}))}),[]);return O?l.a.createElement(m.a,{to:"/"}):r&&f?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{logOut:e.logOut,loggedInUser:f}),l.a.createElement(k,{onCreateComplex:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.adress,l=a.services,o=a.rfidId;console.log(t,n,l),u.a.post("".concat(s,"/complex/create"),{name:t.value,adress:n.value,services:l.value,rfidId:o.value},{withCredentials:!0}).then((function(e){var a=JSON.parse(JSON.stringify(r));a.push(e.data),c(a)}))}}),l.a.createElement("hr",null),l.a.createElement("div",{className:"usersComplexCards"},r.map((function(a,t){return l.a.createElement("div",{className:"userComplexCard",key:"complex"+t},l.a.createElement(E.a,{style:{width:"18rem",margin:"10px"}},l.a.createElement(E.a.Body,null,l.a.createElement(p.a,{onSubmit:e.onCreateComplex},l.a.createElement(I.a,null,l.a.createElement(L.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Name"),l.a.createElement(p.a.Control,{name:"name",type:"text",defaultValue:a.name})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Address"),l.a.createElement(p.a.Control,{name:"adress",type:"text",defaultValue:a.adress,maxLength:"100"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"RFID ID"),l.a.createElement(p.a.Control,{name:"rfidId",type:"number",defaultValue:a.rfidId,maxLength:"10"})),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Category"),l.a.createElement(p.a.Control,{name:"services",as:"select"},l.a.createElement("option",null,a.services),j.map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)})))))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement("div",{className:"buttonCouple"},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Modificar"),l.a.createElement(g.a,{variant:"warning",onClick:void a._id},a.disable?"Abilitar":"Desabilitar"),l.a.createElement(b.b,{to:"/complex/".concat(a._id,"/laundries")},l.a.createElement(g.a,{variant:"info"},"Art\xedculos"))))))))})))):l.a.createElement("p",null,"Loading...")}function _(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{textAlign:"center",marginTop:"20px",color:"#328CB6",fontWeight:"600",fontSize:"20px"}},"Usuarios"),l.a.createElement("div",{className:"create-laundryitem-btn",style:{textAlign:"center"}},l.a.createElement(g.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Crear nuevo")),l.a.createElement(w.a,{centered:!0,show:r,onHide:function(){return c(!1)}},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,{className:"admin-card-title"},"Nuevo usuario")),l.a.createElement(w.a.Body,null,l.a.createElement(p.a,{onSubmit:e.handleCreateUser},l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(p.a.Control,{name:"firstName",type:"text",placeholder:"Nombre"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(p.a.Control,{name:"userName",type:"text",placeholder:"Nombre de usuario"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Email"),l.a.createElement(p.a.Control,{name:"email",type:"email",placeholder:"email"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"RfidComplexId"),l.a.createElement(p.a.Control,{name:"rfidComplexId",type:"number",placeholder:"rfidComplexId"})),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Category"),l.a.createElement(p.a.Control,{name:"userType",as:"select"},l.a.createElement("option",null,"Tipo de usuario"),["gobernanta","empaquetador","admin","revisador","direccion"].map((function(e,a){return l.a.createElement("option",{key:"userType"+a,value:e},e)})))),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Complejo"),l.a.createElement(p.a.Control,{name:"complex",as:"select"},l.a.createElement("option",null,"Seleciona un complejo"),e.complexes.map((function(e,a){return l.a.createElement("option",{key:"complexId"+a,value:e._id},e.name)})))),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Contrase\xf1a"),l.a.createElement(p.a.Control,{name:"password",type:"password",placeholder:"Contrase\xf1a"})),l.a.createElement("div",{className:"buttonCouple"},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Crear"))))))}function A(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(!1),d=Object(o.a)(i,2),f=d[0],b=d[1],h=Object(n.useState)(null),y=Object(o.a)(h,2),C=y[0],O=y[1],x=Object(n.useState)(null),j=Object(o.a)(x,2),S=j[0],N=j[1];Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(){b(!0)})),u.a.get("".concat(s,"/user/all"),{withCredentials:!0}).then((function(e){O(e.data)})),u.a.get("".concat(s,"/complexes"),{withCredentials:!0}).then((function(e){N(e.data)}))}),[]);return f?l.a.createElement(m.a,{to:"/"}):C&&r&&S?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{logOut:e.logOut,loggedInUser:r}),l.a.createElement(_,{handleCreateUser:function(e){e.preventDefault();var a=e.currentTarget,t=a.userName,n=a.firstName,l=a.email,r=a.userType,c=a.complex,o=a.password,m=a.rfidComplexId;u.a.post("".concat(s,"/signup"),{userName:t.value,firstName:n.value,email:l.value,userType:r.value,complex:c?c.value:null,password:o.value,rfidComplexId:m.value},{withCredentials:!0}).then((function(e){var a=JSON.parse(JSON.stringify(C));a.push(e.data),O(a)}))},complexes:S}),l.a.createElement("hr",null),l.a.createElement("div",{className:"usersComplexCards"},C.map((function(a,t){return l.a.createElement("div",{className:"userComplexCard",key:"users"+t},l.a.createElement(E.a,{key:"user"+t,style:{width:"18rem",margin:"10px"}},l.a.createElement(E.a.Body,null,l.a.createElement(p.a,{onSubmit:function(e){return function(e,a){e.preventDefault(),console.log(e);var t=e.currentTarget,n=t.firstName,l=t.email,r=t.userType,c=t.complex;u.a.post("".concat(s,"/user/").concat(a,"/edit"),{firstName:n.value,email:l.value,userType:r.value,complex:c?c.value:null},{withCredentials:!0}).then((function(e){var t=JSON.parse(JSON.stringify(C));t.map((function(t){return t._id===a?e.data:t})),O(t)}))}(e,a._id)}},l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(p.a.Control,{name:"firstName",type:"text",defaultValue:a.firstName})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"email"),l.a.createElement(p.a.Control,{name:"email",type:"email",defaultValue:a.email})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Acceso"),l.a.createElement(p.a.Control,{name:"userType",type:"text",defaultValue:a.userType})),"gobernanta"===a.userType?l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Complejo"),l.a.createElement(p.a.Control,{name:"complex",as:"select"},l.a.createElement("option",null,a.complex?a.complex.name:"Elige una categor\xeda"),S.map((function(e,a){return l.a.createElement("option",{key:"complexId"+a,value:e._id},e.name)})))):"",l.a.createElement("div",{className:"buttonCouple"},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Modificar"),l.a.createElement(g.a,{variant:"warning",onClick:function(){return e=a._id,console.log("disabling"),void u.a.put("".concat(s,"/user/").concat(e,"/disabled"),{},{withCredentials:!0}).then((function(e){console.log("disabled")}));var e}},a.disable?"Abilitar":"Desabilitar"))))))})))):l.a.createElement("p",null,"Loading...")}function U(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],m=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{textAlign:"center",marginTop:"20px",color:"#328CB6",fontWeight:"600",fontSize:"20px"}},"Prendas"),l.a.createElement("div",{className:"create-laundryitem-btn",style:{textAlign:"center"}},l.a.createElement(g.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Crear nuevo")),l.a.createElement(w.a,{centered:!0,show:r,onHide:m},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,{className:"admin-card-title"},"Nuevo art\xedculo")),l.a.createElement(w.a.Body,null,l.a.createElement(p.a,{onSubmit:e.onCreateLaundry},l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(p.a.Control,{name:"name",type:"text",placeholder:"Introduce el nombre de la prenda"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"C\xf3digo"),l.a.createElement(p.a.Control,{name:"code",type:"text",placeholder:"Introduce un c\xf3digo",maxLength:"100"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"RFID ID"),l.a.createElement(p.a.Control,{name:"rfidId",type:"number",placeholder:"RFID ID",maxLength:"10"})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Create Item"),e.createSucces?l.a.createElement(g.a,{className:"general-btn",onClick:m},"Back to list"):l.a.createElement(l.a.Fragment,null))))))}function F(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),d=Object(o.a)(i,2),f=d[0],b=d[1],h=Object(n.useState)(!1),y=Object(o.a)(h,2),C=y[0],O=y[1];Object(n.useEffect)((function(){u.a.get("".concat(s,"/laundries"),{withCredentials:!0}).then((function(e){c(e.data)})),u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){b(e.data)})).catch((function(){O(!0)}))}),[]);return C?l.a.createElement(m.a,{to:"/"}):r&&f?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{logOut:e.logOut,loggedInUser:f}),l.a.createElement(U,{onCreateLaundry:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.code,l=a.rfidId;u.a.post("".concat(s,"/laundry/create"),{name:t.value,code:n.value,rfidId:l.value},{withCredentials:!0}).then((function(e){var a=JSON.parse(JSON.stringify(r));a.push(e.data),c(a)}))}}),l.a.createElement("hr",null),l.a.createElement("div",{className:"usersComplexCards"},r.map((function(a,t){return l.a.createElement("div",{className:"userComplexCard"},l.a.createElement(E.a,{key:"complex"+t,style:{width:"18rem",margin:"10px"}},l.a.createElement(E.a.Body,null,l.a.createElement(p.a,{onSubmit:function(e){return function(e,a){e.preventDefault();var t=e.currentTarget,n=t.name,l=t.code,o=t.rfidId;u.a.post("".concat(s,"/laundry/").concat(a,"/update"),{name:n.value,code:l.value,rfidId:o.value},{withCredentials:!0}).then((function(e){var t=JSON.parse(JSON.stringify(r));t.map((function(t){return t._id===a?e.data:t})),c(t)}))}(e,a._id)}},l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(p.a.Control,{name:"name",type:"text",defaultValue:a.name})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"C\xf3digo"),l.a.createElement(p.a.Control,{name:"code",type:"text",defaultValue:a.code,maxLength:"100"})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"RFID ID"),l.a.createElement(p.a.Control,{name:"rfidId",type:"number",defaultValue:a.rfidId,maxLength:"10"})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement("div",{className:"buttonCouple"},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Modificar"),l.a.createElement(g.a,{variant:"danger"},"Eliminar")))))))})))):l.a.createElement("p",null,"Loading...")}function D(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],m=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"create-laundryitem-btn",style:{textAlign:"center"}},l.a.createElement(g.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"A\xf1adir art\xedculo")),l.a.createElement(w.a,{centered:!0,show:r,onHide:m},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,{className:"admin-card-title"},"Nuevo art\xedculo")),l.a.createElement(w.a.Body,null,l.a.createElement("h6",null,e.complex.name),l.a.createElement(p.a,{onSubmit:e.AddLaundry},l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,{className:"admin-card-title"},"Prenda"),l.a.createElement(p.a.Control,{name:"laundry",as:"select"},l.a.createElement("option",null,"Selecciona el art\xedculo"),e.laundries.map((function(e,a){return l.a.createElement("option",{key:"laundry"+a,value:e._id},e.code,"-",e.name)})))),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,{className:"admin-card-title"},"Precio"),l.a.createElement(p.a.Control,{name:"price",type:"number",step:"any",placeholder:"5,34"})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(g.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Create Item"),e.createSucces?l.a.createElement(g.a,{className:"general-btn",onClick:m},"Back to list"):l.a.createElement(l.a.Fragment,null))))))}function B(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],i=r[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),f=E[0],b=(E[1],Object(n.useState)(null)),h=Object(o.a)(b,2),y=h[0],C=h[1],O=Object(n.useState)(null),x=Object(o.a)(O,2),S=x[0],N=x[1];Object(n.useState)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){i(e.data)})),u.a.get("".concat(s,"/laundries"),{withCredentials:!0}).then((function(e){C(e.data)})),u.a.get("".concat(s,"/complex/").concat(a,"/details"),{withCredentials:!0}).then((function(e){N(e.data)}))}),[]);return console.log(S),f?l.a.createElement(m.a,{to:"/"}):y&&S&&c?l.a.createElement("div",null,l.a.createElement(v,{logOut:e.logOut,loggedInUser:c}),l.a.createElement("h4",{style:{textAlign:"center",margin:"10px"}},S.name),l.a.createElement("hr",null),l.a.createElement(D,{laundries:y,complex:S,AddLaundry:function(e){e.preventDefault();var t,n=e.currentTarget,l=n.laundry,r=n.price;if(S.linen){var c=JSON.parse(JSON.stringify(S.linen)),o={laundry:l.value,price:r.value};c.push(o),t=c}else t=[{laundry:l.value,price:r.value}];console.log(t),u.a.post("".concat(s,"/complex/").concat(a,"/updatelinen"),{linen:t},{withCredentials:!0}).then((function(e){window.location.reload(!1)}))}}),l.a.createElement("hr",null),l.a.createElement("div",{id:"ComplexLaundries"},l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"10px"},id:"ComplexLaundriesTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"C\xf3digo"),l.a.createElement("th",null,"Art\xedculo"),l.a.createElement("th",null,"Precio"))),S.linen?S.linen.map((function(e,t){return l.a.createElement("tbody",{key:t+"laundry"},l.a.createElement("tr",null,l.a.createElement("td",null,e.laundry.code),l.a.createElement("td",null,e.laundry.name),l.a.createElement("td",{style:{width:"200px",padding:"0px"}},l.a.createElement(p.a,{onSubmit:function(t){return function(e,t){e.preventDefault();var n=e.currentTarget.price,l=JSON.parse(JSON.stringify(S)).linen.map((function(e){return console.log(t,"id"),console.log(e.laundry._id,"laundryId"),e.laundry._id===t&&(e.price=n.value),e}));console.log(l),u.a.post("".concat(s,"/complex/").concat(a,"/updatelinen"),{linen:l},{withCredentials:!0}).then((function(e){console.log(e.data)}))}(t,e.laundry._id)},style:{display:"flex",justifyContent:" space-around",alignItems:"center",padding:"5px"}},l.a.createElement(p.a.Control,{style:{width:"80px",textAlign:"left"},name:"price",type:"number",step:"any",defaultValue:e.price}),"\u20ac",l.a.createElement(g.a,{variant:"secondary",type:"submit"},"Editar")))))})):""))):l.a.createElement("p",null,"Loading...")}function G(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],i=r[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),f=E[0],h=E[1],y=Object(n.useState)(null),C=Object(o.a)(y,2),v=C[0],O=C[1];return Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){i(e.data)})).catch((function(){h(!0)})),u.a.get("".concat(s,"/customer/order/").concat(a),{withCredentials:!0}).then((function(e){O(e.data)}))}),[]),f?l.a.createElement(m.a,{to:"/"}):c&&v?(console.log(v),l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"C\xf3digo de pedido: ",v._id),l.a.createElement("h5",null,"Cliente: ",v.complexId.name),l.a.createElement("h6",null,"Creado por: ",v.CreatedBy.firstName),l.a.createElement("h5",null,"Estado: ","ordering"===v.status?"Por enviar":"ordered"===v.status?"Enviado":"cerrado"),l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"10px"},id:"ComplexLaundriesTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Catidad de repaso"),l.a.createElement("th",null,"Art\xedculo"),l.a.createElement("th",null,"Cantidad"))),v.complexId.linen?v.complexId.linen.map((function(a,t){return l.a.createElement("tbody",{key:t+"laundry"},l.a.createElement("tr",null,l.a.createElement("td",null,a.laundry.code),l.a.createElement("td",null,a.laundry.name),l.a.createElement("td",{style:{width:"200px",padding:"0px"}},l.a.createElement(p.a,{onSubmit:function(t){return e.handleEditAmount(t,a.laundry._id)},style:{display:"flex",justifyContent:" space-around",alignItems:"center",padding:"5px"}},l.a.createElement(p.a.Control,{style:{width:"80px",textAlign:"left"},name:"price",type:"number"})))))})):"There isnt any linen uploaded in this"),l.a.createElement(b.b,{to:"/hotel/home"},l.a.createElement(g.a,null,"Atr\xe1s")))):l.a.createElement("p",null,"Loading...")}function P(){return l.a.createElement(f.a,{fixed:"bottom",expand:"lg",style:{backgroundColor:"#04c3fe",marginTop:"10px"}},l.a.createElement(f.a.Brand,{style:{color:"white"},href:"#"},"SmartLinen - Alpha"))}function R(e){return e.loggedInUser?l.a.createElement("div",{className:"sticky-top"},l.a.createElement(f.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",sticky:"top"},l.a.createElement(f.a.Brand,{href:"/gmao"},"Prendas en circulaci\xf3n"),l.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"},l.a.createElement(C.a.Link,{href:"/gamo/maintenance"},"Lavados"),l.a.createElement(C.a.Link,{href:"/gmao/stock"},"Fecha de creaci\xf3n"),l.a.createElement(C.a.Link,{href:"/gmao/warehouses"},"+")),l.a.createElement(C.a,{style:{margin:"0px 20px 0px 0px",fontSize:"20px"}},l.a.createElement("p",{style:{margin:"0px"}},e.loggedInUser.userName))))):l.a.createElement("p",null,"Loading...")}function W(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],i=r[1],d=Object(n.useState)(null),E=Object(o.a)(d,2),p=E[0],g=E[1],f=Object(n.useState)(null),b=Object(o.a)(f,2),h=(b[0],b[1],Object(n.useState)(!1)),y=Object(o.a)(h,2),C=y[0],v=y[1];return Object(n.useEffect)((function(){u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){i(e.data)})).catch((function(){v(!0)})),e&&u.a.get("".concat(s,"/customer/").concat(a,"/stock"),{withCredentials:!0}).then((function(e){console.log(e.data),g(e.data)}))}),[]),C?l.a.createElement(m.a,{to:"/"}):p?(console.log(p),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{loggedInUser:c,logOut:e.logOut}),l.a.createElement(R,{loggedInUser:c}),l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{marginTop:"10px",textAlign:"center"},id:"ComplexLaundriesTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Art\xedculo"),l.a.createElement("th",null,"Cantidad"))),p?p.map((function(e,a){if(0!==e.cantidad)return l.a.createElement("tbody",{key:a+"alb_art"},l.a.createElement("tr",null,l.a.createElement("td",null,e.articulo),l.a.createElement("td",null,e.cantidad)))})):""))):l.a.createElement("p",null,"Loading...")}var J=Object(m.g)((function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),d=i[0],E=i[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),f=g[0],b=g[1];Object(n.useEffect)((function(){t||u.a.get("".concat(s,"/user"),{withCredentials:!0}).then((function(e){r(e.data)}))}),[]);var h=function(e){e.preventDefault();var a=e.currentTarget,t=a.email,n=a.password;u.a.post("".concat(s,"/signin"),{email:t.value,password:n.value},{withCredentials:!0}).then((function(e){r(e.data),window.location.reload(!1)})).catch((function(e){E(!0);var a=e.response.data.error;console.log(a),b(a)}))},C=function(){u.a.post("".concat(s,"/logout"),{},{withCredentials:!0}).then((function(){r(null),window.location.reload(!1)}))};return d&&null==f?l.a.createElement("p",null,"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",render:function(){return l.a.createElement(y,{onSignIn:h,loggedInUser:t,err:d,errorMessage:f})}}),l.a.createElement(m.b,{path:"/laundry/home",render:function(){return l.a.createElement(O,{loggedInUser:t,logOut:C})}}),l.a.createElement(m.b,{path:"/hotel/home",render:function(){return l.a.createElement(N,{loggedInUser:t,logOut:C})}}),l.a.createElement(m.b,{path:"/hotel/albaran/:id",render:function(e){return l.a.createElement(S,Object.assign({},e,{loggedInUser:t,logOut:C}))}}),l.a.createElement(m.b,{path:"/hotel/stock/:id",render:function(e){return l.a.createElement(W,Object.assign({},e,{loggedInUser:t,logOut:C}))}}),l.a.createElement(m.b,{path:"/laundry/complexes",render:function(){return l.a.createElement(T,{loggedInUser:t,logOut:C})}}),l.a.createElement(m.b,{path:"/laundry/users",render:function(){return l.a.createElement(A,{loggedInUser:t,logOut:C})}}),l.a.createElement(m.b,{path:"/laundry/laundries",render:function(){return l.a.createElement(F,{loggedInUser:t,logOut:C})}}),l.a.createElement(m.b,{path:"/complex/:id/laundries",render:function(e){return l.a.createElement(B,Object.assign({},e,{loggedInUser:t,logOut:C}))}}),l.a.createElement(m.b,{path:"/customer/service/:id/edit",render:function(e){return l.a.createElement(G,Object.assign({},e,{loggedInUser:t,logOut:C}))}})),l.a.createElement(P,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.add8ec61.chunk.js.map