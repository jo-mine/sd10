(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=u(a(0)),o=(u(a(1)),a(18)),l=a(2);function u(t){return t&&t.__esModule?t:{default:t}}a(22);var i=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return a.state={data:[[0,0,0],[0,0,0],[0,0,0]],turn:0},a.setData=a.setData.bind(a),a.makeMark=a.makeMark.bind(a),a.check=a.check.bind(a),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"setData",value:function(t,e){var a=this.state;if(0==a.data[t][e]){a.turn%2==0?a.data[t][e]=1:a.data[t][e]=-1,a.turn++,this.setState(a);var n=this.check();0!=n&&(1==n?l.notification.alert("丸の勝ち！"):-1==n?l.notification.alert("バツの勝ち！"):-99==n&&l.notification.alert("ひきわけ。"),this.setState({data:[[0,0,0],[0,0,0],[0,0,0]],turn:0}))}}},{key:"makeMark",value:function(t){return 1==t?"○":-1==t?"×":" "}},{key:"check",value:function(){for(var t=this.state.data,e=0;e<3;e++){if(0!=t[0][e]&&t[0][e]==t[1][e]&&t[0][e]==t[2][e])return t[0][e];if(0!=t[e][0]&&t[e][0]==t[e][1]&&t[e][0]==t[e][2])return t[e][0]}return 0!=t[0][0]&&t[0][0]==t[1][1]&&t[0][0]==t[2][2]?t[0][0]:0!=t[0][2]&&t[0][2]==t[1][1]&&t[0][2]==t[2][0]?t[0][2]:this.state.turn>=9?-99:0}},{key:"renderToolbar",value:function(){return r.default.createElement(o.Toolbar,null,r.default.createElement("div",{className:"center"},"Onsen UI"))}},{key:"render",value:function(){for(var t=this,e=[[0,0,0],[0,0,0],[0,0,0]],a=this.state.data,n=0;n<3;n++)for(var l=0;l<3;l++)1==a[n][l]?e[n][l]="box red":-1==a[n][l]?e[n][l]="box blue":e[n][l]="box";return r.default.createElement(o.Page,{renderToolbar:this.renderToolbar},r.default.createElement(o.Row,null,r.default.createElement(o.Col,{className:e[0][0],onClick:function(){return t.setData(0,0)}},this.makeMark(this.state.data[0][0])),r.default.createElement(o.Col,{className:e[0][1],onClick:function(){return t.setData(0,1)}},this.makeMark(this.state.data[0][1])),r.default.createElement(o.Col,{className:e[0][2],onClick:function(){return t.setData(0,2)}},this.makeMark(this.state.data[0][2]))),r.default.createElement(o.Row,null,r.default.createElement(o.Col,{className:e[1][0],onClick:function(){return t.setData(1,0)}},this.makeMark(this.state.data[1][0])),r.default.createElement(o.Col,{className:e[1][1],onClick:function(){return t.setData(1,1)}},this.makeMark(this.state.data[1][1])),r.default.createElement(o.Col,{className:e[1][2],onClick:function(){return t.setData(1,2)}},this.makeMark(this.state.data[1][2]))),r.default.createElement(o.Row,null,r.default.createElement(o.Col,{className:e[2][0],onClick:function(){return t.setData(2,0)}},this.makeMark(this.state.data[2][0])),r.default.createElement(o.Col,{className:e[2][1],onClick:function(){return t.setData(2,1)}},this.makeMark(this.state.data[2][1])),r.default.createElement(o.Col,{className:e[2][2],onClick:function(){return t.setData(2,2)}},this.makeMark(this.state.data[2][2]))))}}]),e}(r.default.Component);e.default=i},22:function(t,e,a){},7:function(t,e,a){t.exports=a(8)},8:function(t,e,a){"use strict";a(9);var n=a(11),r=i(a(0)),o=i(a(1)),l=i(a(2)),u=i(a(17));function i(t){return t&&t.__esModule?t:{default:t}}a(23),a(24),l.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var s=document.getElementById("app");o.default.render(r.default.createElement(n.AppContainer,null,r.default.createElement(u.default,null)),s)}},[[7,1,2]]]);