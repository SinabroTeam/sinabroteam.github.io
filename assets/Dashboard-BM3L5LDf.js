import{k as p,r as b,j as a}from"./index-BfbG9Jwa.js";import{c as j}from"./index-ANJneBlC.js";import{c}from"./index.es-Hh3-dyJd.js";import{W as v,a as h}from"./WidgetsDropdown-C8XUAsMW.js";import"./index.esm-CBphg3Tr.js";import{C as o,a as y}from"./CCardBody-B59E2JEk.js";import{C as f}from"./CCardFooter-CJmlD5DP.js";import{C as i,a as l}from"./CRow-DhE2g5IQ.js";import{C as d}from"./CProgress-CTXJvbuT.js";import{C}from"./CCardHeader-BWaIBF8w.js";import{C as N,a as w,b as m,c as s,d as J,e as r}from"./CTable-N6pIJzNI.js";import{c as A}from"./cil-people-CULC9130.js";import{C as E}from"./DefaultLayout-BHDCUZvu.js";import{c as P,a as T,b as D,d as I,e as k,f as B}from"./cif-us-DcptizC8.js";import{c as L,a as S,b as F,d as R,e as z,f as H}from"./cib-cc-visa-CZ-f0BA5.js";import"./axios-B4uVmeYG.js";import"./cil-user-CkgHmeNI.js";const W="/sinabroteam.github.io/assets/1-Bxx5tbqp.jpg",Q="/sinabroteam.github.io/assets/2-DU4eQes8.jpg",U="/sinabroteam.github.io/assets/3-D73ZQ4h9.jpg",M="/sinabroteam.github.io/assets/4-TDOHctEN.jpg",V="/sinabroteam.github.io/assets/5-C7PguISa.jpg",q="/sinabroteam.github.io/assets/6-DAej8nlJ.jpg",la=()=>{const n=p();b.useEffect(()=>{localStorage.getItem("access_token")||(alert("로그인이 필요합니다. 로그인 페이지로 이동합니다."),n("/login"))},[n]);const u=[{title:"앱 실행수",value:"125,457 회",percent:40,color:"success"},{title:"신규 가입자",value:"12,587 명",percent:20,color:"info"},{title:"회원 이탈지수",value:"25 명",percent:60,color:"warning"},{title:"챌린지 달성률",value:"달성률",percent:80,color:"danger"},{title:"이벤트 참여율",value:"참여율",percent:40.15,color:"primary"}],x=[{avatar:{src:W,status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2023"},country:{name:"USA",flag:P},usage:{value:50,period:"Jun 11, 2023 - Jul 10, 2023",color:"success"},payment:{name:"Mastercard",icon:L},activity:"10 sec ago"},{avatar:{src:Q,status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2023"},country:{name:"Brazil",flag:T},usage:{value:22,period:"Jun 11, 2023 - Jul 10, 2023",color:"info"},payment:{name:"Visa",icon:S},activity:"5 minutes ago"},{avatar:{src:U,status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2023"},country:{name:"India",flag:D},usage:{value:74,period:"Jun 11, 2023 - Jul 10, 2023",color:"warning"},payment:{name:"Stripe",icon:F},activity:"1 hour ago"},{avatar:{src:M,status:"secondary"},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2023"},country:{name:"France",flag:I},usage:{value:98,period:"Jun 11, 2023 - Jul 10, 2023",color:"danger"},payment:{name:"PayPal",icon:R},activity:"Last month"},{avatar:{src:V,status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2023"},country:{name:"Spain",flag:k},usage:{value:22,period:"Jun 11, 2023 - Jul 10, 2023",color:"primary"},payment:{name:"Google Wallet",icon:z},activity:"Last week"},{avatar:{src:q,status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2023"},country:{name:"Poland",flag:B},usage:{value:43,period:"Jun 11, 2023 - Jul 10, 2023",color:"success"},payment:{name:"Amex",icon:H},activity:"Last week"}];return a.jsxs(a.Fragment,{children:[a.jsx(v,{className:"mb-4"}),a.jsx(o,{className:"mb-4",children:a.jsx(f,{children:a.jsx(i,{xs:{cols:1,gutter:4},sm:{cols:2},lg:{cols:4},xl:{cols:5},className:"mb-2 text-center",children:u.map((e,t,g)=>a.jsxs(l,{className:j({"d-none d-xl-block":t+1===g.length}),children:[a.jsx("div",{className:"text-body-secondary",children:e.title}),a.jsxs("div",{className:"fw-semibold text-truncate",children:[e.value," (",e.percent,"%)"]}),a.jsx(d,{thin:!0,className:"mt-2",color:e.color,value:e.percent})]},t))})})}),a.jsx(h,{className:"mb-4",withCharts:!0}),a.jsx(i,{children:a.jsx(l,{xs:!0,children:a.jsxs(o,{className:"mb-4",children:[a.jsx(C,{children:"가입자 리스트"}),a.jsxs(y,{children:[a.jsx("br",{}),a.jsxs(N,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[a.jsx(w,{className:"text-nowrap",children:a.jsxs(m,{children:[a.jsx(s,{className:"bg-body-tertiary text-center",children:a.jsx(c,{icon:A})}),a.jsx(s,{className:"bg-body-tertiary",children:"아이디"}),a.jsx(s,{className:"bg-body-tertiary text-center",children:"국가"}),a.jsx(s,{className:"bg-body-tertiary",children:"이메일"}),a.jsx(s,{className:"bg-body-tertiary text-center",children:"등반횟수"}),a.jsx(s,{className:"bg-body-tertiary",children:"가입일자"})]})}),a.jsx(J,{children:x.map((e,t)=>a.jsxs(m,{"v-for":"item in tableItems",children:[a.jsx(r,{className:"text-center",children:a.jsx(E,{size:"md",src:e.avatar.src,status:e.avatar.status})}),a.jsxs(r,{children:[a.jsx("div",{children:e.user.name}),a.jsxs("div",{className:"small text-body-secondary text-nowrap",children:[a.jsx("span",{children:e.user.new?"New":"Recurring"})," | Registered:"," ",e.user.registered]})]}),a.jsx(r,{className:"text-center",children:a.jsx(c,{size:"xl",icon:e.country.flag,title:e.country.name})}),a.jsxs(r,{children:[a.jsxs("div",{className:"d-flex justify-content-between text-nowrap",children:[a.jsxs("div",{className:"fw-semibold",children:[e.usage.value,"%"]}),a.jsx("div",{className:"ms-3",children:a.jsx("small",{className:"text-body-secondary",children:e.usage.period})})]}),a.jsx(d,{thin:!0,color:e.usage.color,value:e.usage.value})]}),a.jsx(r,{className:"text-center",children:a.jsx(c,{size:"xl",icon:e.payment.icon})}),a.jsxs(r,{children:[a.jsx("div",{className:"small text-body-secondary text-nowrap",children:"Last login"}),a.jsx("div",{className:"fw-semibold text-nowrap",children:e.activity})]})]},t))})]})]})]})})})]})};export{la as default};
