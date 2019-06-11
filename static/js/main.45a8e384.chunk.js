(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),l=a(14),s=a(15),i=a(5),u=a(6),m=a(8),p=a(7),h=a(9),d=a(2),b=a.n(d),f=a(12),v=a(38),E=a(19),y=a(13),g=a.n(y),C=r.a.createContext(),w=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return w(t,e)})}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=C.Consumer,j=(a(62),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.toggleDetails=function(){return a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=t.website,i=this.state.showContactInfo;return r.a.createElement(O,null,function(t){var u=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h5",null,n," ",r.a.createElement("i",{className:"far fa-address-card app-btn",onClick:function(){e.toggleDetails()}}),r.a.createElement(l.b,{to:"contact/edit/".concat(a),className:"fas fa-edit app-btn"}),r.a.createElement("i",{className:"fas fa-skull app-btn",onClick:e.onDeleteClick.bind(e,a,u)})),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o),r.a.createElement("li",{className:"list-group-item"},"Website: ",s)):null)})}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-3"},"Contact List"),t.map(function(e){return r.a.createElement(j,{key:e.id,contact:e})}))})}}]),t}(n.Component),x=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"1.0.0"))},S=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})))))))};S.defaultProps={branding:"My App"};var A=S,T=(a(67),a(68),a(16)),D=a(37),P=a.n(D),q=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:P()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};q.defaultProps={type:"text"};var W=q,_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",website:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=r.website,""!==c){e.next=5;break}return a.setState({errors:{name:"name required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"email required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"phone required"}}),e.abrupt("return");case 11:if(""!==s){e.next=14;break}return a.setState({errors:{website:"website required"}}),e.abrupt("return");case 14:return i={name:c,email:o,phone:l,website:s},e.next=17,g.a.post("https://jsonplaceholder.typicode.com/users",i);case 17:u=e.sent,t({type:"ADD_CONTACT",payload:u.data}),a.setState({name:"",email:"",phone:"",website:"",errors:{}}),a.props.history.push("/");case 21:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.website,l=t.errors;return r.a.createElement(O,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(W,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:l.name}),r.a.createElement(W,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(W,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement(W,{label:"Website",name:"website",placeholder:"Enter Website",value:o,onChange:e.onChange,error:l.website}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",website:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,u,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=r.website,""!==c){e.next=5;break}return a.setState({errors:{name:"name required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"email required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"phone required"}}),e.abrupt("return");case 11:if(""!==s){e.next=14;break}return a.setState({errors:{website:"website required"}}),e.abrupt("return");case 14:return i={name:c,email:o,phone:l,website:s},u=a.props.match.params.id,e.next=18,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(u),i);case 18:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",website:"",errors:{}}),a.props.history.push("/");case 22:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone,website:n.website});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.website,l=t.errors;return r.a.createElement(O,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(W,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:l.name}),r.a.createElement(W,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(W,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement(W,{label:"Website",name:"website",placeholder:"Enter Website",value:o,onChange:e.onChange,error:l.website}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"NOPE, GOSH"))},L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("bang"),fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),B=function(){return r.a.createElement(N,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:M}),r.a.createElement(s.a,{exact:!0,path:"/about",component:x}),r.a.createElement(s.a,{exact:!0,path:"/test",component:L}),r.a.createElement(s.a,{component:I}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.45a8e384.chunk.js.map