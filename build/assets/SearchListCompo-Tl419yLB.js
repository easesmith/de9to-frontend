import{j as e,k as _,S as q,o as z,p as O,q as T,t as E,r as i,u as V,a as P,B as X,H as L}from"./index-CcpRPS1f.js";import{_ as b}from"./react-stars-B-CvSG_R.js";import{a as J}from"./index-CDpN19XY.js";import{D as w}from"./DataNotFound-dfLtKkIv.js";import{c as v}from"./ConfirmbookingModal-FQmnlL6i.js";import{I as M}from"./Header-Xri131j3.js";const K=({searchQuery:m,setSearchQuery:p,handleGetSerachQuery:o,location:h,isShadow:x,setLocation:u,setIsShadow:f,setShowDentistAndClinic:C})=>e.jsxs("div",{className:` bg-[#FFFFFF] flex max-[700px]:hidden justify-center items-center gap-5 ${x?"rounded-b-none border-t-0 border-s-0 border-e-0":""} rounded-2xl p-3 shadow-sm`,children:[e.jsxs("div",{className:"relative w-[500px]",children:[e.jsx(_,{type:"search",value:m,onChange:l=>p(l.target.value),placeholder:"Search doctors, clinic etc.",className:"text-[#000000] text-base font-medium font-poppins rounded-2xl placeholder:text-[#000000] px-10 py-8"}),m&&e.jsx(J,{onClick:()=>{f(!1),C("All"),p("")},className:"absolute text-lg right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"})]}),e.jsxs(q,{value:h,onValueChange:u,children:[e.jsx(z,{className:"w-[228px] px-5 py-8 rounded-2xl text-base text-[#3F3F3F] font-medium font-poppins",children:e.jsx(O,{placeholder:"location"})}),e.jsxs(T,{children:[e.jsx(E,{value:"Najabgarh",children:"Najabgarh"}),e.jsx(E,{value:"Ramlila Maidan",children:"Ramlila Maidan"})]})]}),e.jsx("div",{className:" ",children:e.jsx("button",{onClick:o,className:" w-[228px] bg-[#95C22B] text-[#FFFFFF] text-xl font-semibold font-poppins border-[1px] border-[#95C22B]  rounded-lg px-10 py-4",children:"search"})})]}),le=({setAllData:m=()=>{},setAllClinics:p=()=>{}})=>{const[o,h]=i.useState(!1),[x,u]=i.useState(""),[f,C]=i.useState(""),[l,A]=i.useState([]),[a,y]=i.useState([]),[g,S]=i.useState(!1),[j,D]=i.useState(!1),[d,F]=i.useState("All"),I=()=>{setQuery(!0)};console.log("showDentistAndClinic",d);const Q=V(),N=s=>{Q(s)},{res:t,fetchData:G,isLoading:U}=P(),H=i.useCallback(async()=>{G(`/patient/search?searchText=${x}&location=${f}`)},[x,f]),k=()=>{x&&H()};return i.useEffect(()=>{var s,n;if((t==null?void 0:t.status)===200||(t==null?void 0:t.status)===201)if(h(!0),((s=t==null?void 0:t.data)==null?void 0:s.status)===!0){console.log("search res :",t);const{foundClinics:c,foundDentists:r}=(t==null?void 0:t.data)||{};A(c),y(r),m(r),p(c)}else console.log("res :",t),console.log((n=t==null?void 0:t.data)==null?void 0:n.message),A([]),y([]),m([]),p([])},[t]),console.log("foundClinics :",l),console.log("allDentist :",a),i.useEffect(()=>{const s=n=>{o&&n.target.classList.contains("modal")&&h(!1)};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[o]),e.jsxs("section",{className:`max-w-[1240px] relative w-full mx-auto ${o?"min-[700px]:shadow-custom7":""}`,children:[e.jsx(K,{searchQuery:x,setSearchQuery:u,handleQuery:I,handleGetSerachQuery:k,location:f,isShadow:o,setIsShadow:h,setShowDentistAndClinic:F,setLocation:C}),e.jsxs("div",{className:"min-[700px]:hidden mt-4 flex items-center gap-2",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx(M,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]"}),e.jsx(_,{value:x,onChange:s=>u(s.target.value),placeholder:"Search doctors, clinic etc.",className:"placeholder:text-[#717171] w-full pl-10 h-12 border-[#E4E6EE]"})]}),e.jsx(X,{className:"h-12",onClick:k,children:e.jsx(M,{size:20})})]}),e.jsx(e.Fragment,{children:o&&e.jsxs("div",{className:`flex max-[700px]:hidden flex-col py-8 px-10 gap-8 max-w-[1240px] w-full  z-30 mx-auto absolute  bg-white ${o?"shadow-custom7 rounded-b-2xl":"hidden"}`,children:[e.jsxs("div",{className:"flex justify-center gap-10",children:[e.jsx("button",{onClick:()=>F("All"),className:`${d==="All"?"bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]":"bg-[#FFFFFF] text-[#95C22B] border-[#808080]"} text-base font-bold font-inter border  rounded-[10px] py-3 px-24`,children:"All"}),e.jsx("button",{onClick:()=>F("doctor"),className:`${d==="doctor"?"bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]":"bg-[#FFFFFF] text-[#95C22B] border-[#808080]"} text-base font-bold font-inter border  rounded-[10px] py-3 px-24`,children:"Doctor"}),e.jsx("button",{onClick:()=>F("clinic"),className:`${d==="clinic"?"bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]":"bg-[#FFFFFF] text-[#95C22B] border-[#808080]"} text-base font-bold font-inter border  rounded-[10px] py-3 px-24`,children:"Clinics"})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[d==="All"&&e.jsx("div",{children:l.length===0&&a.length===0?e.jsx(w,{name:"Clinics and Dentists"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col justify-between gap-12",children:[a.length>0&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:"Doctors"}),e.jsxs("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:[a.length," results"]})]}),e.jsx("div",{className:"flex flex-col gap-5",children:a.length>0&&a.slice(0,j?a.length:3).map((s,n)=>{var r,B,$,R;const c=v(s==null?void 0:s.dentistRatings);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("img",{onClick:()=>N(`/our-dentist/${s._id}`),src:(r=s==null?void 0:s.personalDetails)==null?void 0:r.image,alt:"",className:"w-[60px] h-[60px] rounded-sm cursor-pointer"}),e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-9 -mt-1",children:[e.jsxs("h4",{className:"text-[#1A1A1A] text-lg font-semibold font-inter",children:[s.personalDetails.Firstname," ",s.personalDetails.lastName]}),e.jsx(b,{count:5,value:c,edit:!1,color2:"#FF8A00"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(L,{className:"text-[#717171] text-2xl"}),e.jsxs("h4",{className:"text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2",children:["BDS ",e.jsx("div",{className:"border border-[#FF8A00] h-3"})," ",(B=s==null?void 0:s.clinic[0])==null?void 0:B.clinicName," ",(($=s==null?void 0:s.clinic[1])==null?void 0:$.clinicName)&&e.jsx("div",{className:"border border-[#FF8A00] h-3"}),(R=s==null?void 0:s.clinic[1])==null?void 0:R.clinicName]})]})]})]}),e.jsxs("h6",{className:"text-[#3F3F3F] text-sm font-normal font-inter",children:["Searched keywords: ",e.jsx("span",{className:"text-[#95C22B] font-semibold",children:"Multi-Speciality Clinic"})]})]},n)})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("p",{onClick:()=>D(!0),className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:a.length>3&&`${j?"":"See All"}`})})]}),e.jsx("div",{className:"w-full border border-[#D9D9D9] mb-5"}),e.jsxs("div",{className:"flex flex-col justify-between gap-12",children:[l.length>0&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:"Clinics"}),e.jsxs("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:[l.length," results"]})]}),e.jsx("div",{className:"flex flex-col gap-5",children:l.length>0&&l.slice(0,g?l.length:3).map((s,n)=>{const c=v(s==null?void 0:s.clinicRating);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("img",{onClick:()=>N(`/our-clinic/${s._id}`),src:s==null?void 0:s.clinicLogo,alt:"",className:"w-[60px] h-[60px] rounded-sm cursor-pointer"}),e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-9 -mt-1",children:[e.jsx("h4",{className:"text-[#1A1A1A] text-lg font-semibold font-inter",children:s.clinicName}),e.jsx(b,{count:5,value:c,edit:!1,color2:"#FF8A00"})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx("h4",{className:"text-[#FF8A00] text-base font-semibold font-inter",children:"Multi-Speciality Clinic"})})]})]}),e.jsxs("h6",{className:"text-[#3F3F3F] text-sm font-normal font-inter",children:["Searched keywords: ",e.jsx("span",{className:"text-[#95C22B] font-semibold",children:"2 years experience"})]})]},n)})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("p",{onClick:()=>S(!0),className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:l.length>3&&`${g?"":"See All"}`})})]})]})}),d==="doctor"&&e.jsxs("div",{className:"flex flex-col justify-between gap-12",children:[a.length>0&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:"Doctors"}),e.jsxs("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:[a.length," results"]})]}),e.jsx("div",{className:"flex flex-col gap-5",children:a.length===0?e.jsx(w,{name:"Docters"}):a.slice(0,j?a.length:3).map((s,n)=>{var r;const c=v(s==null?void 0:s.dentistRatings);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("img",{onClick:()=>N(`/our-dentist/${s._id}`),src:(r=s==null?void 0:s.personalDetails)==null?void 0:r.image,alt:"",className:"w-[60px] h-[60px] rounded-sm cursor-pointer"}),e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-9 -mt-1",children:[e.jsxs("h4",{className:"text-[#1A1A1A] text-lg font-semibold font-inter",children:[s.personalDetails.Firstname," ",s.personalDetails.lastName]}),e.jsx(b,{count:5,value:c,edit:!1,color2:"#FF8A00"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(L,{className:"text-[#717171] text-2xl"}),e.jsxs("h4",{className:"text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2",children:["BDS ",e.jsx("div",{className:"border border-[#FF8A00] h-3"})," Oral Pathology ",e.jsx("div",{className:"border border-[#FF8A00] h-3"})," Dr. Narang’s Dental Hub"]})]})]})]}),e.jsxs("h6",{className:"text-[#3F3F3F] text-sm font-normal font-inter",children:["Searched keywords: ",e.jsx("span",{className:"text-[#95C22B] font-semibold",children:"Multi-Speciality Clinic"})]})]},n)})})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("p",{onClick:()=>D(!0),className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:a.length>3&&`${j?"":"See All"}`})})]}),d==="clinic"&&e.jsxs("div",{className:"flex flex-col justify-between gap-12",children:[l.length>0&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:"Clinics"}),e.jsxs("p",{className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:[l.length," results"]})]}),e.jsx("div",{className:"flex flex-col gap-5",children:l.length===0?e.jsx(w,{name:"Clinics"}):l.slice(0,g?l.length:3).map((s,n)=>{const c=v(s==null?void 0:s.clinicRating);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("img",{onClick:()=>N(`/our-clinic/${s._id}`),src:s==null?void 0:s.clinicLogo,alt:"",className:"w-[60px] h-[60px] rounded-sm cursor-pointer"}),e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-9 -mt-1",children:[e.jsx("h4",{className:"text-[#1A1A1A] text-lg font-semibold font-inter",children:s.clinicName}),e.jsx(b,{count:5,value:c,edit:!1,color2:"#FF8A00"})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx("h4",{className:"text-[#FF8A00] text-base font-semibold font-inter",children:"Multi-Speciality Clinic"})})]})]}),e.jsxs("h6",{className:"text-[#3F3F3F] text-sm font-normal font-inter",children:["Searched keywords: ",e.jsx("span",{className:"text-[#95C22B] font-semibold",children:"2 years experience"})]})]},n)})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("p",{onClick:()=>S(!0),className:"text-[#3F3F3F] text-lg font-medium font-poppins",children:l.length>3&&`${g?"":"See All"}`})})]})]})]})})]})};export{le as S};