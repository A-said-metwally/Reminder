(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{104:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(9),c=n.n(a),s=n(33),d=n(34),o=n(43),l=n(40),u="ADD_REMINDER",h="REMOVE_REMINDER",j="CLEAR_REMINDER",m=n(20),p=n(36),b=n.n(p),x=n(37),f=n.n(x),O=(n(56),n(57),n(4)),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={text:"",date:new Date},e.render_Reminders=function(){var t=e.props.reminders;return Object(O.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(O.jsxs)("li",{className:"list-group-item",children:[Object(O.jsxs)("div",{className:"reminder-data",children:[Object(O.jsx)("h2",{children:t.text}),Object(O.jsx)("p",{children:b()(new Date(t.date)).fromNow()})]}),Object(O.jsx)("div",{className:"remove btn btn-danger",onClick:function(){return e.props.remove_Reminder(t.id)},children:"X"})]},t.text.id)}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("img",{src:"reminder.jpg"}),Object(O.jsx)("div",{className:"reminder-title",children:Object(O.jsx)("h2",{children:"What Should U Do ?"})}),Object(O.jsx)("input",{className:"input",type:"text",value:this.state.text,placeholder:"Enter What You Think .... ?",onChange:function(t){return e.setState({text:t.target.value})}}),Object(O.jsx)(f.a,{selected:this.state.date,showTimeSelect:!0,dateFormat:"Pp",value:this.state.date,className:"input",onChange:function(t){return e.setState({date:t})}}),Object(O.jsx)("button",{style:{display:"block",width:"100%"},className:"btn btn-primary ",onClick:function(){e.props.add_Reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},children:"Add Reminder.."}),this.render_Reminders(),this.props.reminders.length>0&&Object(O.jsx)("button",{style:{display:"block",width:"100%"},className:"btn btn-danger ",onClick:function(){return e.props.clear_Reminder()},children:"Clear All"})]})}}]),n}(r.Component),g=Object(m.b)((function(e){return{reminders:e}}),{add_Reminder:function(e,t){return{type:u,text:e,date:t}},remove_Reminder:function(e){return{type:h,id:e}},clear_Reminder:function(){return{type:j}}})(v),R=n(42),y=n(41),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return t.type===u?(n=[].concat(Object(y.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),console.log("from reducer",n),n):t.type===h?n=e.filter((function(e){return e.id!==t.id})):t.type===j?n=[]:e},C=(n(103),n(104),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))}),E=Object(R.a)(N);c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(m.a,{store:E,children:Object(O.jsx)(g,{})})}),document.getElementById("root")),C()},57:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.82f3f620.chunk.js.map