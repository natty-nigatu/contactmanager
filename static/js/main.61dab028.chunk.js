(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(40),s=a.n(r),i=a(9),o=a(10),l=a(12),j=a(11),u=a(15),d=a(3),h=a(13),m=a.n(h),b=a(18),p=(a(29),a(16)),O=a(17),x=a(14),v=a.n(x),f=a(44),y=a(20),g=a(0),C=c.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"EDIT_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return e}},k=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return N(e,t)}))}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({contacts:t.data})}))}},{key:"render",value:function(){return Object(g.jsx)(C.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),w=C.Consumer,S=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={show:!1},e.onShowClick=function(){e.setState({show:!e.state.show})},e.onDeleteClick=function(){var e=Object(b.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,r=t.phone;return Object(g.jsx)(w,{children:function(t){return Object(g.jsxs)("div",{className:"card card-body mb-3",children:[Object(g.jsxs)("h4",{className:"card-title",children:[n,Object(g.jsx)(p.a,{icon:O.e,onClick:e.onShowClick,style:{cursor:"pointer",marginLeft:"0.5em"}}),Object(g.jsx)(p.a,{icon:O.f,onClick:e.onDeleteClick.bind(e,a,t.dispatch),style:{cursor:"pointer",float:"right",color:"red"}}),Object(g.jsx)(u.b,{to:"/contact/edit/".concat(a),children:Object(g.jsx)(p.a,{icon:O.c,style:{cursor:"pointer",float:"right",color:"black",marginRight:".5em"}})})]}),e.state.show?Object(g.jsxs)("ul",{className:"list-group",children:[Object(g.jsxs)("li",{className:"list-group-item",children:["Email: ",c," "]}),Object(g.jsxs)("li",{className:"list-group-item",children:["Phone: ",r," "]})]}):null]})}})}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)(w,{children:function(e){var t=e.contacts;return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsxs)("h1",{className:"display-4 mb-2",children:[" ",Object(g.jsx)("span",{className:"text-info",children:"Contact"})," List"]}),t.map((function(e){return Object(g.jsx)(S,{contact:e},e.id)}))]})}})}}]),a}(n.Component);function T(){return Object(g.jsx)("nav",{className:"navbar navbar-dark bg-info navbar-expand-md mb-3 py-0",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"/",children:"Contact Manager"}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(u.b,{to:"/",className:"nav-link",children:[Object(g.jsx)(p.a,{icon:O.a,style:{marginRight:"0.25em"}}),"Home"]})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(u.b,{to:"/contact/add",className:"nav-link",children:[Object(g.jsx)(p.a,{icon:O.d,style:{marginRight:"0.25em"}}),"Add"]})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(u.b,{to:"/about",className:"nav-link",children:[Object(g.jsx)(p.a,{icon:O.b,style:{marginRight:"0.25em"}}),"About"]})})]})})]})})}var E=a(21),D=a(43),P=a.n(D);function R(e){var t=e.name,a=e.label,n=e.onChange,c=e.value,r=e.type,s=e.error;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"form-group mb-2",children:[Object(g.jsx)("label",{htmlFor:t,children:a}),Object(g.jsx)("input",{type:r,name:t,className:P()("form-control form-control-lg",{"is-invalid":s}),placeholder:"Enter ".concat(a,"..."),value:c,onChange:n}),s&&Object(g.jsxs)("div",{className:"invalid-feedback",children:[" ",s," "]})]})})}R.defaultProps={type:"text"};var F=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",error:{}},e.onSubmit=function(){var t=Object(b.a)(m.a.mark((function t(a,n){var c,r,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=!1,r={},""===e.state.name&&(r.name="Name is Required.",c=!0),""===e.state.email&&(r.email="Email is Required.",c=!0),""===e.state.phone&&(r.phone="Phone is Required.",c=!0),!c||!r){t.next=9;break}return e.setState({error:r}),t.abrupt("return");case 9:return s={name:e.state.name,email:e.state.email,phone:e.state.phone},t.next=12,v.a.post("https://jsonplaceholder.typicode.com/users",s);case 12:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/");case 16:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(E.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,r=t.error;return Object(g.jsx)(w,{children:function(t){return Object(g.jsxs)("div",{className:"card mb-3",children:[Object(g.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:e.onSubmit.bind(e,t.dispatch),children:[Object(g.jsx)(R,{label:"Name",name:"name",value:a,onChange:e.onChange,error:r.name}),Object(g.jsx)(R,{label:"Email",name:"email",value:n,type:"email",onChange:e.onChange,error:r.email}),Object(g.jsx)(R,{label:"Phone",name:"phone",value:c,onChange:e.onChange,error:r.phone}),Object(g.jsx)("div",{className:"d-grid",children:Object(g.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light"})})]})})]})}})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:0,name:"",email:"",phone:"",error:{}},e.onSubmit=function(){var t=Object(b.a)(m.a.mark((function t(a,n,c){var r,s,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),r=!1,s={},""===e.state.name&&(s.name="Name is Required.",r=!0),""===e.state.email&&(s.email="Email is Required.",r=!0),""===e.state.phone&&(s.phone="Phone is Required.",r=!0),!r||!s){t.next=9;break}return e.setState({error:s}),t.abrupt("return");case 9:return i={name:e.state.name,email:e.state.email,phone:e.state.phone},t.next=12,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(a),i);case 12:o=t.sent,n({type:"EDIT_CONTACT",payload:o.data}),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/");case 16:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(E.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t,a,n,c,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,c=n.name,r=n.email,s=n.phone,this.setState({id:t,name:c,email:r,phone:s});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.id,n=t.name,c=t.email,r=t.phone,s=t.error;return Object(g.jsx)(w,{children:function(t){return Object(g.jsxs)("div",{className:"card mb-3",children:[Object(g.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:e.onSubmit.bind(e,a,t.dispatch),children:[Object(g.jsx)(R,{label:"Name",name:"name",value:n,onChange:e.onChange,error:s.name}),Object(g.jsx)(R,{label:"Email",name:"email",value:c,type:"email",onChange:e.onChange,error:s.email}),Object(g.jsx)(R,{label:"Phone",name:"phone",value:r,onChange:e.onChange,error:s.phone}),Object(g.jsx)("div",{className:"d-grid",children:Object(g.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-light"})})]})})]})}})}}]),a}(n.Component);function L(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(g.jsx)("p",{className:"lead",children:"React App to Manage Contacts"}),Object(g.jsx)("p",{className:"text-secondary",children:"v1.0.0"})]})}a(74);function M(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:"display-4",children:[Object(g.jsx)("span",{className:"text-danger",children:"404"})," Page Not Found"]}),Object(g.jsx)("p",{className:"lead",children:"Sorry, Page Does Not Exist"})]})}var _=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)(k,{children:Object(g.jsx)(u.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(T,{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{exact:!0,path:"/",component:A}),Object(g.jsx)(d.a,{exact:!0,path:"/contact/add",component:F}),Object(g.jsx)(d.a,{exact:!0,path:"/contact/edit/:id",component:q}),Object(g.jsx)(d.a,{exact:!0,path:"/about",component:L}),Object(g.jsx)(d.a,{component:M})]})})]})})})}}]),a}(n.Component),I=_,B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),B()}},[[75,1,2]]]);
//# sourceMappingURL=main.61dab028.chunk.js.map