(this["webpackJsonppraveenorugantitech-calculator"]=this["webpackJsonppraveenorugantitech-calculator"]||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(12),i=t.n(r),s=(t(20),t(10)),l=function(e){return c.a.createElement("button",{id:e.id,style:{display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid black"},onClick:function(){switch(e.name){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":e.updateSecondNumber(e.name);break;case"+":case"-":case"x":case"/":case"=":e.updateOperator(e.name);break;case"C":e.reset()}}},c.a.createElement("h3",null,e.name))},o={background:"black",color:"white",textAlign:"right",paddingRight:20},u=function(e){return c.a.createElement("div",{id:"display",style:o},c.a.createElement("h2",null,""!==e.secondNumber?e.secondNumber:e.firstNumber))},m=[{id:"C",name:"C"},{id:"seven",name:"7"},{id:"eight",name:"8"},{id:"nine",name:"9"},{id:"add",name:"+"},{id:"four",name:"4"},{id:"five",name:"5"},{id:"six",name:"6"},{id:"subtract",name:"-"},{id:"one",name:"1"},{id:"two",name:"2"},{id:"three",name:"3"},{id:"multiply",name:"x"},{id:"zero",name:"0"},{id:"decimal",name:"."},{id:"equals",name:"="},{id:"divide",name:"/"}],d=(t(21),m);function p(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)("0"),o=Object(s.a)(i,2),m=o[0],p=o[1],b=Object(n.useState)(""),f=Object(s.a)(b,2),h=f[0],v=f[1],E=function(){r(""),p("0"),v("")},k=function(){r(t.slice(0,-1)),p(m.slice(0,-1)),v("")},g=function(e){"0"===m&&"."===e?p(m+e):"0"===m&&"."!==e?(r(m),p(e)):"."===e&&m.includes(".")?p(m):p(m+e)},N=function(e){""===h?(r(m),p(""),v(e)):""!==m&&"-"!==m||"-"===e?""===m&&"-"===e?p(e):(r(m),p(""),v(e),x()):(p(""),v(e))},x=function(){var e;switch(h){case"+":e=parseFloat(t)+parseFloat(m);break;case"-":e=parseFloat(t)-parseFloat(m);break;case"x":e=parseFloat(t)*parseFloat(m);break;case"/":e=parseFloat(t)/parseFloat(m)}r(e.toString()),p("")};return c.a.createElement("div",{className:"calculator-container"},c.a.createElement(u,{secondNumber:m,firstNumber:t}),c.a.createElement("div",{className:"buttons-container"},d.map((function(e){return c.a.createElement(l,{id:e.id,key:e.name,name:e.name,updateSecondNumber:g,updateOperator:N,reset:E,backspace:k})}))))}t(22);var b=t(45),f=t(43),h=t(44);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b.a,null,c.a.createElement(f.a,null,c.a.createElement(h.a,{variant:"h6"},"Calculator"))),c.a.createElement(p,null))};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);