import{r as i,u as B,j as e,B as b,K as R,C as M,m as P,a6 as V,z as D,a7 as U,N as q,a as C,a0 as G,S as Q,o as K,p as W,q as Y,s as H,t as I}from"./index-C-yvlQ-I.js";import{L as J}from"./Layout-Bl4ZubX4.js";import{R as X,a as Z,T as ee,A as se}from"./AddFeedbackModal-flqJIlIz.js";import{_ as S}from"./react-stars-C-fjyYXQ.js";import{c as k,C as L}from"./ConfirmbookingModal-BHOY908T.js";import{D as te}from"./DataNotFound-CY8KKk5M.js";import{c as ae}from"./carouselImg-DZeZaUr4.js";import{V as re}from"./verified 1-BxJHZHCz.js";import{R as ne}from"./index-BL4r1ij3.js";import{S as oe}from"./Spinner-VyycNBZ5.js";import"./Header-BwvlhJEq.js";import"./de9to-logo-1-bqG7ETxb.js";import"./format-CW0G_LzU.js";import"./index-Bdfyzqni.js";import"./addDays-BmrnjbS8.js";const xe=({clinic:s,dentistId:r,dentistDetails:l})=>{const{clinicPhotos:v,clinicName:n,clinicAddress:u,city:m,nearbyLandmark:o,clinicLogo:h,state:j,clinicPincode:t,consultationfee:p}=s||{},[x,c]=i.useState(!1),f=B(),g=()=>{const w=`https://www.google.com/maps/@?api=1&map_action=map&center=${28.6466773},${77.1564994}&zoom=15`;window.open(w,"_blank")},d=k(s==null?void 0:s.clinicRating);return e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"grid grid-cols-[8px_1fr] gap-1",children:[e.jsx("div",{className:"border-l-8 max-[500px]:border-l-4 border-[#95C22B] h-full rounded-full w-2"}),e.jsxs("div",{className:"border-2 max-[500px]:border border-l-transparent border-[#5B5B5B] rounded-tr-md rounded-br-md px-4 grid grid-cols-[28%_60%] gap-[2%] max-[700px]:grid-cols-1 py-2",children:[e.jsx("img",{onClick:()=>f(`/our-clinic/${s==null?void 0:s._id}`),className:"w-full cursor-pointer",src:h,alt:""}),e.jsxs("div",{children:[e.jsx(S,{edit:!1,size:25,count:5,value:d,color2:"#FF8A00"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{onClick:()=>f(`/our-clinic/${s==null?void 0:s._id}`),className:"font-inter cursor-pointer font-semibold text-[#1A1A1A]",children:n}),e.jsxs(b,{onClick:g,variant:"outline",className:"flex gap-2 text-[#717171] border-[#717171] hover:text-[#939292]",children:[e.jsx(R,{className:"text-[#717171]"}),e.jsx("span",{className:"max-[500px]:hidden",children:"Search on map"})]})]}),e.jsxs("p",{className:"font-inter text-sm text-[#717171] my-2",children:[e.jsx("span",{className:"font-bold",children:"Fee:"})," ₹",p]}),e.jsxs("p",{className:"font-inter text-sm text-[#717171] my-2",children:[e.jsx("span",{className:"font-bold",children:"Timings:"})," Mon-Sat (10:45AM- 4:00PM)"]}),e.jsxs("p",{className:"font-inter text-sm text-[#717171] my-2",children:[e.jsx("span",{className:"font-bold",children:"Address:"}),"  ",`${u}, ${o}, ${m}, ${j}, ${t}`]}),e.jsx("div",{className:"flex justify-between items-end",children:e.jsxs(b,{onClick:()=>c(!0),className:"bg-[#95C22B] mt-2 ml-auto hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]",children:[e.jsx("span",{children:"Book Appointment"}),e.jsx(M,{className:"text-2xl"})]})}),x&&e.jsx(L,{isConfirmBookingModalOpen:x,setIsConfirmBookingModalOpen:c,clinic:s,dentistId:r,timing:l==null?void 0:l.dentistAvailableTiming,selectedIndex:0})]})]})]})})},le=({clinic:s,dentistId:r,dentistDetails:l})=>{const{clinicPhotos:v,clinicName:n,clinicAddress:u,city:m,nearbyLandmark:o,state:h,clinicPincode:j,clinicLogo:t}=s||{},[p,x]=i.useState(!1),c=B(),f=()=>{const N=`https://www.google.com/maps/@?api=1&map_action=map&center=${28.6466773},${77.1564994}&zoom=15`;window.open(N,"_blank")};console.log("dentistDetails",l);const g=k(s==null?void 0:s.clinicRating);return e.jsxs("div",{className:"grid grid-cols-[8px_1fr] gap-1",children:[e.jsx("div",{className:"border-l-8 max-[500px]:border-l-4 border-[#C4C4C4] h-full rounded-full w-2"}),e.jsxs("div",{className:"border-2 max-[500px]:border border-l-transparent border-[#5B5B5B] rounded-tr-md rounded-br-md px-4 py-2",children:[e.jsx("img",{className:"w-full cursor-pointer",onClick:()=>c(`/our-clinic/${s==null?void 0:s._id}`),src:t,alt:""}),e.jsxs("div",{children:[e.jsx(S,{edit:!1,size:25,count:5,value:g,color2:"#FF8A00"}),e.jsx("h2",{onClick:()=>c(`/our-clinic/${s==null?void 0:s._id}`),className:"font-inter cursor-pointer font-semibold text-[#1A1A1A]",children:n}),e.jsxs(b,{onClick:f,variant:"outline",className:"flex gap-2 mt-3 text-[#717171] border-[#717171] hover:text-[#939292]",children:[e.jsx(R,{className:"text-[#717171]"}),e.jsx("span",{children:"Search on map"})]}),e.jsxs("p",{className:"font-inter text-sm max-[500px]:text-[10px] text-[#717171] my-2",children:[e.jsx("span",{className:"font-bold",children:"Address:"}),`${u}, ${o}, ${m}, ${h}, ${j}`]}),e.jsxs("p",{className:"text-[#5B5B5B]",children:[e.jsx("span",{className:"line-through",children:"₹500"})," ",e.jsx("b",{children:"FREE"})," via ",e.jsxs("b",{children:["de",e.jsx("span",{className:"text-[#95C22B]",children:"9"}),"to"]})]}),e.jsxs(b,{onClick:()=>x(!0),className:"bg-[#95C22B] w-full mt-2 hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]",children:[e.jsx("span",{children:"Book Appointment"}),e.jsx(M,{className:"text-2xl"})]}),p&&e.jsx(L,{isConfirmBookingModalOpen:p,setIsConfirmBookingModalOpen:x,clinic:s,dentistId:r,timing:l==null?void 0:l.dentistAvailableTiming,selectedIndex:0})]})]})]})},ie="/assets/test-C9b3NSq_.mp4",ce=V("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function de({className:s,variant:r,...l}){return e.jsx("div",{className:P(ce({variant:r}),s),...l})}const me=({details:s})=>{var l,v,n,u,m,o,h,j,t,p,x,c,f,g;const r=s&&k(s==null?void 0:s.dentistRatings);return e.jsxs("div",{className:"grid grid-cols-[75%_23%] max-[900px]:grid-cols-[58%_40%] max-[700px]:grid-cols-1 gap-4",children:[e.jsx("div",{className:"rounded-[5px] flex flex-col gap-5",children:e.jsxs("div",{className:"p-4 rounded-[6px] flex max-[900px]:flex-col gap-[10px] shadow-md",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"rounded-[6px] relative w-[210px] max-[500px]:w-full max-[900px]:w-[70%] ",children:[e.jsx("img",{className:"absolute top-1 right-1",src:re,alt:""}),e.jsx("img",{className:"h-full w-full",src:(l=s==null?void 0:s.personalDetails)==null?void 0:l.image,alt:""})]}),e.jsxs("p",{className:"text-center max-[900px]:text-left font-inter font-semibold mt-4 text-sm text-[#717171]",children:["Reg. No: ",(v=s==null?void 0:s.educationalQualification)==null?void 0:v.regNumber]})]}),e.jsxs("div",{className:"pe-[25px] ps-[9px] max-[500px]:px-0 gap-6 w-[calc(100%-210px)] max-[900px]:w-full",children:[e.jsxs("div",{className:"flex items-center justify-between max-[500px]:justify-start max-[500px]:items-start max-[500px]:flex-col max-[500px]:gap-0 gap-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h4",{className:"text-[#1A1A1A] text-2xl font-semibold font-inter",children:`${(n=s==null?void 0:s.personalDetails)==null?void 0:n.prefix}. ${(u=s==null?void 0:s.personalDetails)==null?void 0:u.Firstname} ${(m=s==null?void 0:s.personalDetails)==null?void 0:m.lastName}`})}),e.jsxs("div",{children:[e.jsx(S,{edit:!1,size:25,count:5,value:r,color2:"#FF8A00"}),e.jsxs("div",{className:"text-[#000000] text-[10px] max-[900px]:text-left text-right font-normal font-inter",children:["Rated by ",(o=s==null?void 0:s.dentistRatings)==null?void 0:o.length," users"]})]})]}),e.jsxs("div",{className:"flex flex-col justify-start gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(D,{className:"text-[#95C22B] text-2xl"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("p",{className:" text-[#95C22B] font-inter font-semibold whitespace-nowrap max-[760px]:text-sm max-[500px]:text-xs",children:(h=s==null?void 0:s.personalDetails)==null?void 0:h.degree}),e.jsx("div",{className:"w-[2px] h-[14px] bg-[#95C22B]"}),e.jsx("p",{className:"text-[#95C22B] font-inter font-semibold whitespace-nowrap max-[760px]:text-sm max-[500px]:text-xs",children:(j=s==null?void 0:s.personalDetails)==null?void 0:j.specialty}),e.jsx("div",{className:"w-[2px] h-[14px] bg-[#95C22B]"}),e.jsx("p",{className:"text-[#95C22B] font-inter font-semibold whitespace-nowrap max-[760px]:text-sm max-[500px]:text-xs",children:((t=s==null?void 0:s.clinic)==null?void 0:t.length)===1?(p=s==null?void 0:s.clinic[0])==null?void 0:p.clinicName:(c=(x=s==null?void 0:s.clinic)==null?void 0:x.find(d=>d==null?void 0:d.defaultClinic))==null?void 0:c.clinicName})]})]}),e.jsx("p",{className:"text-[#717171] font-inter font-normal max-[700px]:text-xs text-sm mt-1",children:(f=s==null?void 0:s.personalDetails)==null?void 0:f.Bio})]}),e.jsxs(de,{className:"rounded-md text-[#95C22B] text-sm font-semibold border-[#95C22B] mt-8",variant:"outline",children:[(g=s==null?void 0:s.educationalQualification)==null?void 0:g.yearsOfExperience," years Experience"]})]})]})}),e.jsx("div",{className:"relative rounded-md h-full w-full",children:e.jsx(ne,{url:ie,playing:!0,controls:!0,width:"100%",height:"100%",light:e.jsxs("div",{className:"h-full w-full",children:[e.jsx("img",{className:"h-full w-full",src:ae,alt:""}),e.jsx("div",{className:"absolute inset-0 flex justify-center items-center",children:e.jsx("div",{className:"bg-[#95C22B] rounded-full flex justify-center cursor-pointer items-center h-[70px] w-[70px]",children:e.jsx(U,{className:"text-xl text-white"})})})]})})})]})},A=({degree:s,year:r})=>e.jsxs("div",{className:"border-2 flex gap-3 w-full p-4 border-[#95C22B] rounded-md bg-[#F9FFEA]",children:[e.jsx("div",{className:"flex justify-center items-center bg-[#E9FFB4] h-8 w-8",children:e.jsx(D,{className:"text-[#95C22B] text-2xl"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg max-[500px]:text-sm font-inter font-semibold text-[#1A1A1A]",children:s}),e.jsx("p",{className:"text-sm max-[500px]:text-xs font-inter font-semibold text-[#1A1A1A]",children:r})]})]}),ke=()=>{var F,_;const s=q(),{res:r,fetchData:l,isLoading:v}=C(),{res:n,fetchData:u,isLoading:m}=C(),{res:o,fetchData:h,isLoading:j}=C(),[t,p]=i.useState(""),[x,c]=i.useState([]),[f,g]=i.useState({}),[d,y]=i.useState("newest"),[N,w]=i.useState(!1),T=B(),z=i.useCallback(async()=>{l(`/dentist/get-dentist-details?dentistId=${s.dentistId||"66d02520cd6af954e0eba864"}`)},[l]);i.useEffect(()=>{z()},[]),i.useEffect(()=>{var a,E;((r==null?void 0:r.status)===200||(r==null?void 0:r.status)===201)&&(console.log("Dentist details res",r),p((E=(a=r==null?void 0:r.data)==null?void 0:a.data)==null?void 0:E.dentist))},[r]);const $=async()=>{u(`/patient/get-dentist-reviews?dentistId=${s==null?void 0:s.dentistId}&sort=${d}`)};i.useEffect(()=>{$()},[d]),i.useEffect(()=>{var a;((n==null?void 0:n.status)===200||(n==null?void 0:n.status)===201)&&(c((a=n==null?void 0:n.data)==null?void 0:a.data),console.log("dentistRatingsRes response",n))},[n]);const O=async()=>{h(`/patient/get-grouped-ratings?dentistId=${s==null?void 0:s.dentistId}&reviewType=dentist`)};return i.useEffect(()=>{O()},[]),i.useEffect(()=>{((o==null?void 0:o.status)===200||(o==null?void 0:o.status)===201)&&(g(o==null?void 0:o.data),console.log("allRatingsRes response",o))},[o]),e.jsx(J,{children:e.jsxs("section",{className:"max-w-[1240px] px-4 mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 h-[18px] my-5",children:[e.jsx(G,{onClick:()=>T(-1),className:"text-[#717171] cursor-pointer"}),e.jsx("span",{className:"text-[#1A1A1A] text-sm font-semibold font-inter",children:"Search List"})]}),e.jsx("div",{className:"mb-10",children:e.jsx(me,{details:t})}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"font-inter max-[900px]:hidden font-medium px-4 py-2 border-r-[3px] w-28 text-right text-[#717171] border-r-[#95C22B]",children:"Clinics"}),e.jsxs("div",{className:"bg-white shadow w-full rounded",children:[e.jsx("p",{className:"p-3 font-inter font-medium text-[#717171]",children:"Book Your Appointment"}),e.jsxs("div",{className:"p-3 pt-4",children:[(F=t==null?void 0:t.clinic)==null?void 0:F.map(a=>(a==null?void 0:a.defaultClinic)&&e.jsx(xe,{clinic:a,dentistId:t==null?void 0:t._id,dentistDetails:t},a._id)),e.jsx("div",{className:"grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-4 mt-5",children:(_=t==null?void 0:t.clinic)==null?void 0:_.map(a=>!(a!=null&&a.defaultClinic)&&e.jsx(le,{clinic:a,dentistId:t==null?void 0:t._id,dentistDetails:t},a._id))})]})]})]}),e.jsxs("div",{className:"flex max-[900px]:flex-col items-start gap-2 mt-10",children:[e.jsx("div",{className:"font-inter max-[900px]:border-none font-medium max-[900px]:px-0 px-4 py-2 border-r-[3px] text-[#717171] w-28 max-[900px]:text-left text-right border-r-[#95C22B]",children:"Educations"}),e.jsxs("div",{className:"flex flex-col gap-10 w-full",children:[e.jsx(A,{degree:"Bachelor of Dental Surgery (BDS) - TMS University",year:"(2014-2019)"}),e.jsx(A,{degree:"Master of Dental Surgery (MDS) - Specialization in Endodontics and Conservative Dentistry",year:"(2020-2023)"}),e.jsx(A,{degree:"Advanced Certification and Continuing Education",year:"(2024-Ongoing)"})]})]}),e.jsxs("div",{className:"flex items-start gap-2 mt-10",children:[e.jsx("div",{className:"font-inter font-medium max-[900px]:hidden text-[#717171] w-28 text-right px-4 py-2 border-r-[3px] border-r-[#95C22B]",children:"Reviews"}),e.jsxs("div",{className:"w-full mb-5",children:[e.jsx(X,{allRating:f}),e.jsx("div",{className:"flex justify-end my-5",children:e.jsxs(Q,{onValueChange:y,value:d,children:[e.jsx(K,{className:"w-1/5 max-[700px]:w-1/3 max-[500px]:w-1/2 border-[1px] border-[#95C22B] rounded-xl",children:e.jsx(W,{placeholder:""})}),e.jsx(Y,{className:"border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5",children:e.jsxs(H,{children:[e.jsx(I,{value:"newest",children:"Sort by newest review"}),e.jsx(I,{value:"oldest",children:"Sort by oldest review"})]})})]})}),e.jsxs("div",{className:"reviews flex flex-col gap-5 max-h-[420px] overflow-y-auto mb-5",children:[x==null?void 0:x.map(a=>e.jsx(Z,{rating:a},a==null?void 0:a._id)),(x==null?void 0:x.length)===0&&m&&e.jsx(oe,{size:30}),(x==null?void 0:x.length)===0&&!m&&e.jsx(te,{name:"Reviews"})]}),e.jsxs(b,{onClick:()=>w(!0),className:"bg-[#95C22B] hover:bg-[#9dd41d] flex gap-2 items-center rounded-3xl px-16",children:[e.jsx("span",{children:"Write a Review"}),e.jsx(ee,{className:"text-2xl"})]})]})]}),N&&e.jsx(se,{isAddFeedbackModalOpen:N,setIsAddFeedbackModalOpen:w,dentistId:t==null?void 0:t._id,reviewType:"dentist",getData:$})]})})};export{ke as default};
