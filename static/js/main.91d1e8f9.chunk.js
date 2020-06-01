(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(51)},26:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),s=t.n(l),c=(t(26),t(3)),o=t(14),i=t(15),u=t(19),m=t(16),h=t(2),d=t(20);var g=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("h2",{className:"GuideTitle"},"Guidelines"),r.a.createElement("ul",{className:"centerBlack"},r.a.createElement("li",null,"Use a minimum password length of 10 or more characters if permitted."),r.a.createElement("li",null,"Include lowercase and uppercase alphabetic characters, numbers and symbols if permitted."),r.a.createElement("li",null,"Avoid character repetition, keyboard patterns, dictionary words, letter or number sequences.")))},p=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("h2",{className:"GuideTitle"},"Problems"),r.a.createElement("ul",{className:"centerBlack"},r.a.createElement("li",null,"Default passwords: password, default, admin, guest, etc."),r.a.createElement("li",null,"Dictionary words: chameleon, RedSox, sandbags, bunnyhop!, IntenseCrabtree, etc."),r.a.createElement("li",null,"Words with numbers appended: password1, deer2000, john1234, etc."),r.a.createElement("li",null,"Words with simple obfuscation: p@ssw0rd, l33th4x0r, g0ldf1sh, etc."),r.a.createElement("li",null,"Doubled words: crabcrab, stopstop, treetree, passpass, etc."),r.a.createElement("li",null,"Common sequences from a keyboard row: qwerty, 123456, asdfgh, fred, etc."),r.a.createElement("li",null,"Numeric sequences based on well known numbers such as 911 (9-1-1, 9/11), 314159... (pi), 27182... (e), 112 (1-1-2), etc."),r.a.createElement("li",null,"Identifiers: jsmith123, 1/1/1970, 555\u20131234, one's username, etc."),r.a.createElement("li",null,"Personally Identifiable Information (PII): license plate number, Social Security number, current or past telephone numbers, student ID, current address, etc."),r.a.createElement("li",null,"Dates: dates follow a pattern and make your password weak.")))};function f(e,a,t,n){var r="";switch(e){case 1:for(;r.length<a;)r+=b(t);break;case 2:for(var l=0;l<a;l++)r+=E();break;case 3:for(l=0;l<a;l++)r+=C(t,n.charAt(l))}return r}var v=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("h2",{className:"GeneratorTitle"},"GENERATE PASSWORD"),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onclick,className:"GeneratorButton"},"GENERATE"),r.a.createElement("input",{id:"lenslide",className:"slider",type:"range",min:"8",max:"30",onChange:e.onchange,value:e.len}),r.a.createElement("p",{className:"lengthText"},"PASSWORD LENGTH: ",e.len," "),r.a.createElement("select",{onChange:e.selectonchange,id:"genSelect",name:"generators",size:"2"},r.a.createElement("option",{value:"0"},"Random Words"),r.a.createElement("option",{value:"1"},"Random Characters"))),r.a.createElement("h2",{hint:"RESULT",className:"GeneratorOutput"},e.generated))};function b(e){var a=Object.keys(e);return a[a.length*Math.random()<<0]}function E(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",a=e.length;return e.charAt(Math.floor(Math.random()*a))}function C(e,a){if(a=a.toUpperCase(),console.log(e[a]),e.hasOwnProperty(a))var t=e[a][Math.floor(Math.random()*e[a].length)];return t}var k=t(17),y=t.n(k);function w(e,a,t,n){var r=[],l=function(e){if(e.every((function(e){return null!==e})))return null;var a="Add these character types your password:";null==e[0]&&(a+=" Numeric");null==e[1]&&(null!=e[0]&&(a+=", "),a+=" Lowercase");null==e[2]&&(null!=e[1]&&(a+=", "),a+=" Uppercase");null==e[3]&&(null!=e[2]&&(a+=", "),a+=" Special");return{problem:"Character Variety",fix:a+="."}}(a);null!=l&&r.push(l);var s=function(e){return e>=10?null:e>=20?{problem:"Length",fix:"This would be very difficult to remember without a passphrase or password manager."}:{problem:"Length",fix:"A strong password needs to contain more than 9 characters."}}(t);null!=s&&r.push(s);var c=function(e,a){return null!=function(e,a){var t=e.split(""),n="";for(;t.length>2;){if(n=t.join("").toUpperCase(),a[n])return n;t.pop()}}(e,a)?{problem:"Dictionary Word",fix:"Obfuscating words by using special characters or not using dictionary words."}:null}(e,n);null!=c&&r.push(c);var o=function(e){var a=y.a.lrs(e);if(null!=a&&a.length>=3)return{problem:"Pattern",fix:"Remove or obfuscate patterns that show up in your password."};return null}(e);return null!=o&&r.push(o),r}t(54),t(55);var N=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("h2",{className:"strtitle"},"PASSWORD STRENGTH"),r.a.createElement("div",null,r.a.createElement("div",{className:"rowflex"},r.a.createElement("input",{class:"strinput",id:"inputPass",type:e.type,placeholder:"ENTER PASSWORD",onChange:e.handleChange}),r.a.createElement("button",{onClick:e.handleclick,id:"hidebutton",class:"strButton"},"HIDE"))),r.a.createElement("div",{className:"strtime"},e.cracktime),r.a.createElement("div",{className:"IssueList"},e.children))},S=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"IssueTop"},e.problem),r.a.createElement("div",{className:"IssueBottom"},e.fix))};var O=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("div",{className:"infoCenter"},r.a.createElement("h1",{onClick:e.onclick,className:"infoTitle"},"Welcome to PassChecker!"),r.a.createElement("div",{className:"infoDesc"}," This site contains various password related information and functionality. ")),r.a.createElement("div",{className:"infoCenter"},r.a.createElement("h1",{onClick:e.onclick,className:"infoTitle"},"Guidelines"),r.a.createElement("div",{className:"infoDesc"},"This page outlines strategies for creating good passwords as well as typical problems passwords can have.")),r.a.createElement("div",{className:"infoCenter"},r.a.createElement("h1",{onClick:e.onclick,className:"infoTitle"},"Password Strength"),r.a.createElement("div",{className:"infoDesc"},"This page checks how a strong a given password is. It is also able to give recommendations base on the given password.")),r.a.createElement("div",{className:"infoCenter"},r.a.createElement("h1",{onClick:e.onclick,className:"infoTitle"},"Generate Password"),r.a.createElement("div",{className:"infoDesc"},"This page is used to generate password by using a sequence of words or characters.")),r.a.createElement("div",{className:"infoCenter"},r.a.createElement("h1",{onClick:e.onclick,className:"infoTitle"},"Compare Passwords"),r.a.createElement("div",{className:"infoDesc"},"This page is used to compare two passwords")))},T=function(e){return r.a.createElement("div",{className:"Center"},r.a.createElement("h2",{className:"strtitle"},"COMPARE PASSWORDS"),r.a.createElement("div",{className:"compareouterdiv"},r.a.createElement("div",{className:"comparediv",style:e.top},r.a.createElement("input",{onChange:e.onchange,className:"compareinput",id:"pass1",type:"text",placeholder:"ENTER PASSWORD"})),r.a.createElement("div",{className:"comparediv",style:e.bottom},r.a.createElement("input",{onChange:e.onchange,className:"compareinput",id:"pass2",type:"text",placeholder:"ENTER PASSWORD"}))))},P=t(18),j=t.n(P),A=(t(45),t(46),t(47),t(48),t(49),t(50),{}),I=function(e){return r.a.createElement("header",null,r.a.createElement("p",{onClick:e.onclick,className:"logo"},"PASSCHECKER"),r.a.createElement("nav",null,r.a.createElement("p",{onClick:e.onclick,className:"nav-element"},"Info"),r.a.createElement("p",{onClick:e.onclick,className:"nav-element"},"Guidelines"),r.a.createElement("p",{onClick:e.onclick,className:"nav-element"},"Strength"),r.a.createElement("p",{onClick:e.onclick,className:"nav-element"},"Generator"),r.a.createElement("p",{onClick:e.onclick,className:"nav-element"},"Compare")))};function G(e){if(null!=e){var a=e;if(function(e){if(null==e)console.log("String is null.");else{if(""!=e)return!0;console.log("String is empty.")}}(a)){var t=function(e){for(var a=e.match(/[0-9]/g),t=e.match(/[a-z]/g),n=e.match(/[A-Z]/g),r=e.match(/[!@#\$%\^\&*\)\(+=._-];'"/g),l=[a,t,n,r],s=["Numeric","Alphabetic Case-Insensitive","Alphabetic Case-Sensitive","Alphanumeric Case-Insensitive","Alphanumeric Case-Sensitive","Alphanumeric + Special characters"],c=[10,26,26,8],o=[],i=0,u=0;u<c.length;u++)l[u]?(o.push(!0),i+=c[u]):o.push(!1);return{amount:i,charset:r?s[s.length-1]:t&&n&&a?s[s.length-2]:t&&a||n&&a?s[s.length-3]:t&&n?s[s.length-4]:t||n?s[s.length-5]:s[s.length-6],types:l}}(a),n=a.length,r=function(e,a){return Math.log2(Math.pow(a,e))}(n,t.amount),l=function(e){return e/588235}(function(e,a){return Math.pow(a,e)}(n,t.amount));l=function(e){var a=e;console.log(e);var t={},n={millenia:31536e6,year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};Object.keys(n).forEach((function(e){t[e]=Math.floor(a/n[e]),a-=t[e]*n[e]})),console.log(t);var r="Time until crack: ";for(var l in t)if(0!=t[l]){t[l]>1&&"millenia"!=l?r+="".concat(t[l]," ").concat(l,"s"):r+="".concat(t[l]," ").concat(l);break}return"Time until crack: "==r&&(r+="Less than a second."),r}(l);var s=function(e){var a=["Very Weak","Weak","Reasonable","Strong","Very Strong"];return e<28?{strength:a[0],value:0}:e>28&&e<35?{strength:a[1],value:1}:e>35&&e<59?{strength:a[2],value:2}:{strength:a[3],value:3}}(r);o=r,r=Number.parseFloat(o).toFixed(2);var c=w(a,t.types,n,A);return{name:a,strength:s.strength,cracktime:l,bits:r,issues:c}}}var o}var R=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={password:"",generated:"",hide:0,len:16,genSelect:"0",page:4,top:{backgroundColor:"grey"},bottom:{backgroundColor:"grey"}},t.handleChangeStrength=t.handleChangeStrength.bind(Object(h.a)(t)),t.handlePageChange=t.handlePageChange.bind(Object(h.a)(t)),t.handleClickGenerator=t.handleClickGenerator.bind(Object(h.a)(t)),t.handleLengthChange=t.handleLengthChange.bind(Object(h.a)(t)),t.handleTypeChange=t.handleTypeChange.bind(Object(h.a)(t)),t.handleClickHide=t.handleClickHide.bind(Object(h.a)(t)),t.handleChangeCompare=t.handleChangeCompare.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){j.a.get("http://gavingosling.me/data/dictionary.txt").then((function(e){var a;a=function(e){for(var a=e.split("\n"),t={},n={},r=0;r<a.length;r++){t[a[r]]=!0;var l=a[r][0];void 0==n[l]?n[l]=[a[r]]:n[l].push(a[r])}return{dict:t,alphadict:n}}(e.data),A=a.dict,a.alphadict})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.page,a=null;0==e&&(a=function(e,a,t,n){if(void 0===e){e={barStyle:{display:"none"}}}var l=e.issues,s=null;return void 0!=l&&l.length!=[]&&(s=l.map((function(e){return r.a.createElement(S,{problem:e.problem,fix:e.fix})}))),r.a.createElement(N,{handleChange:a,type:t,handleclick:n,cracktime:e.cracktime},s)}(this.state.password,this.handleChangeStrength,this.state.hide,this.handleClickHide));return 1==e&&(a=r.a.createElement(v,{selectonchange:this.handleTypeChange,onclick:this.handleClickGenerator,generated:this.state.generated,onchange:this.handleLengthChange,len:this.state.len})),2==e&&(a=r.a.createElement(T,{onchange:this.handleChangeCompare,top:this.state.top,bottom:this.state.bottom})),3==e&&(a=r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(p,null))),4==e&&(a=r.a.createElement(O,{onclick:this.handlePageChange})),r.a.createElement("div",{className:"App"},r.a.createElement(I,{onclick:this.handlePageChange}),a)}},{key:"handleChangeStrength",value:function(e){var a=e.target.value;a.length>26&&(a=a.substring(0,26),e.target.value=a);var t=G(a);this.setState(Object(c.a)({},this.state,{password:t}))}},{key:"handleChangeCompare",value:function(e){var a=document.getElementById("pass1").value,t=document.getElementById("pass2").value;if(""!=a&&""!=t){var n=a;n.length>26&&(n=n.substring(0,26)),n=G(n);var r=t;r.length>26&&(r=r.substring(0,26));var l=function(e,a){if(console.log(e),console.log(a),Number(e.bits)<Number(a.bits))return 1;if(Number(e.bits)>Number(a.bits))return-1;return 0}(n,r=G(r));console.log(l),1==l?(a={backgroundColor:"#E15759"},t={backgroundColor:"#59A14F"}):-1==l?(a={backgroundColor:"#59A14F"},t={backgroundColor:"#E15759"}):(a={backgroundColor:"gray"},t={backgroundColor:"gray"}),this.setState(Object(c.a)({},this.state,{top:a,bottom:t}))}else a={backgroundColor:"gray"},t={backgroundColor:"gray"},this.setState(Object(c.a)({},this.state,{top:a,bottom:t}))}},{key:"handleClickHide",value:function(){var e=null;e="password"===document.getElementById("inputPass").type?"text":"password",this.setState(Object(c.a)({},this.state,{hide:e}))}},{key:"handleClickGenerator",value:function(){var e="";switch(this.state.genSelect){case"0":e=f(1,this.state.len,A,null);break;case"1":e=f(2,this.state.len,A,null);break;default:console.log("Case not found.")}this.setState(Object(c.a)({},this.state,{generated:e}))}},{key:"handleLengthChange",value:function(e){var a=document.getElementById("lenslide").value;this.setState(Object(c.a)({},this.state,{len:a}))}},{key:"handleTypeChange",value:function(e){var a=document.getElementById("genSelect").value;console.log(a),this.setState(Object(c.a)({},this.state,{genSelect:a}))}},{key:"handlePageChange",value:function(e){var a=null;switch(e.target.innerText){case"PassChecker":a=4;case"Info":a=4;case"Welcome to PassChecker!":a=4;break;case"Password Strength":a=0;case"Strength":a=0;break;case"Generator":a=1;case"Generate Password":a=1;break;case"Compare":a=2;case"Compare Passwords":a=2;break;case"Guidelines":a=3;break;default:a=0}this.setState(Object(c.a)({},this.state,{page:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.91d1e8f9.chunk.js.map