(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),r=(a(15),a(16),a(1)),s=a(2),m=a(4),i=a(3),u=a(5),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).setToggle=function(e){a.setState({toggleSidebar:e}),console.log(a.state.toggleSidebar)},a.state={toggleSidebar:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"position-absolute float-left"},this.state.toggleSidebar?l.a.createElement("nav",null,l.a.createElement("button",{type:"button",className:"btn btn-success my-3",onClick:function(){return e.setToggle(!1)}},"Toggle Sidebar"),l.a.createElement("ul",null,l.a.createElement("li",{className:"my-3 h4"},"Basic Style of my Portfolio"),l.a.createElement("li",{className:"my-3 h4"},"Responsive Style of my Portfolio"))):l.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return e.setToggle(!0)}},"Toggle Sidebar")))}}]),t}(n.Component),E=a(6),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={age:void 0},a.computeAge=a.computeAge.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.computeAge("02/13/1997")}},{key:"computeAge",value:function(e){var t=new Date,a=new Date(e),n=t.getFullYear()-a.getFullYear(),l=t.getMonth()-a.getMonth();(l<0||0===l&&t.getDate()<a.getDate())&&(n-=1),this.setState({age:n})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"rounded-circle",src:"https://wiki.d-addicts.com/images/8/80/Jerry_yan_profile.jpg"}),l.a.createElement("h1",null,"Jaypee S. Tan"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"col-3 h4"},"Address:"),l.a.createElement("span",{className:"col-3 text-left"},"Blk 1 Fb Lot 2 Mahogany St. Cristina Homes Camarin Caloocan City"),l.a.createElement("span",{className:"col-3 h4"},"Date of Birth:"),l.a.createElement("span",{className:"col-3 text-left"},"February 13, 1997, Age: ",this.state.age," years old")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"col-3 h4"},"Contact: "),l.a.createElement("span",{className:"col-3 text-left"},l.a.createElement("strong",null,"Mobile#:")," +639971699023 ",l.a.createElement("br",null),l.a.createElement("strong",null,"Tel #:")," +029830799 ",l.a.createElement("br",null),l.a.createElement("strong",null,"E-mail:")," jaypeetan.bsit@gmail.com")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"col-3 h4"},"Educational Background:"),l.a.createElement("span",{className:"col-7 text-left"},l.a.createElement("strong",null,"Tertianary: "),"AMA Computer College Fairview Campus (2014-2017)",l.a.createElement("img",{width:"200px",src:"http://www.ama.edu.ph/wp-content/uploads/2017/05/amau_logo_basic2a.png"})),l.a.createElement("span",{className:"col-2 text-left"},"Bachelor of Science in Information Technology")),l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"col-3"}),l.a.createElement("span",{className:"col-9 text-left"},l.a.createElement("strong",null,"Secondary: "),"Cielito Zamora High-School Annex II (2011-2014)")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"col-3"}),l.a.createElement("span",{className:"col-9 text-left"},l.a.createElement("strong",null,"Primary: "),"Cielito Zamora Memorial Elementary School (2006-2011)")),l.a.createElement("hr",null))}}]),t}(n.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",{className:"h4"},"This is purely made from React.js ",l.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",className:"app-logo"})))}}]),t}(n.Component);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(p,null),l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c635a731.chunk.js.map