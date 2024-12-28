import{c as u,d as h,r as b,_ as f,j as e,e as j,f as n,g as o,h as r,i as l,k as c,l as x,w as N,V as g,B as y,x as I,a2 as w}from"./index-C-yvlQ-I.js";import{L as F}from"./Layout-Bl4ZubX4.js";import"./Header-BwvlhJEq.js";import"./de9to-logo-1-bqG7ETxb.js";const v="/assets/excited-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-doing-call-gesture-DnOQK1as.png",A=()=>{const a=u({resolver:I(w),defaultValues:{fullName:"",contactNumber:"",emailId:"",location:"",pincode:"",dentalIssue:""}}),{res:s,fetchData:m,isLoading:E}=h(),{reset:i,handleSubmit:d}=a,p=t=>{console.log(t),m("/patient/submit-contact-form",{name:t.fullName,email:t.emailId,phone:t.contactNumber,location:t.location,pincode:t.pincode,dentalIssues:t.dentalIssue})};return b.useEffect(()=>{var t;((s==null?void 0:s.status)===200||(s==null?void 0:s.status)===201)&&(console.log("contact form res",s),f.success((t=s==null?void 0:s.data)==null?void 0:t.message),i({fullName:"",contactNumber:"",emailId:"",location:"",pincode:"",dentalIssue:""}))},[s]),e.jsx(F,{children:e.jsx("main",{className:"max-w-[1240px] p-4 mx-auto flex flex-col gap-10 max-sm:gap-5 mt-4 mb-2",children:e.jsxs("section",{className:"flex flex-col justify-center items-center",children:[e.jsx("h1",{className:"text-[#95C22B] text-[40px] text-center font-bold font-inter opacity-90 mb-2 max-lg:text-2xl",children:"Get in touch"}),e.jsx("p",{className:"text-[#717171] text-base text-center font-medium font-inter opacity-70 max-lg:text-xs",children:"We're Here to Help Your Smile"}),e.jsxs("div",{className:" max-w-[1130px] flex justify-between items-start gap-5 shadow-custom rounded-[20px] p-5 max-lg:px-3 my-10 h-full",children:[e.jsx("div",{className:"w-1/2 max-[768px]:w-full border-[1px] border-[#212121] px-4 pt-5 pb-10 rounded-[10px] max-lg:px-3",children:e.jsxs(j,{...a,children:[e.jsx("p",{className:"text-[#A4A4A4] text-base font-normal font-inter mb-5 max-[768px]:text-sm",children:"Have questions or need assistance? Reach out to us for support, appointments, or any dental care inquiries"}),e.jsxs("form",{onSubmit:d(p),className:"flex flex-col gap-[18px]",children:[e.jsx(n,{control:a.control,name:"fullName",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base font-medium font-inter mb-4 max-[768px]:text-base",children:["Full Name ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(l,{children:e.jsx(c,{placeholder:"Enter full name",...t,className:"h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"})}),e.jsx(x,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-[24px] w-full max-lg:grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[18px]",children:[e.jsx(n,{control:a.control,name:"contactNumber",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base font-medium font-inter mb-4 max-[768px]:text-base",children:["Contact Number ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(l,{children:e.jsx(c,{placeholder:"Enter contact number",...t,className:"h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"})}),e.jsx(x,{})]})}),e.jsx(n,{control:a.control,name:"emailId",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base font-medium max-[768px]:text-base font-inter mb-4",children:["Email Id ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(l,{children:e.jsx(c,{placeholder:"Enter email id",...t,className:"h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"})}),e.jsx(x,{})]})})]}),e.jsx(n,{control:a.control,name:"location",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base font-medium max-[768px]:text-base font-inter mb-4",children:["Location ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx(l,{children:e.jsx(c,{placeholder:"Enter your location",...t,className:"h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 pr-10 py-[10px] placeholder:text-[#838383]"})}),e.jsx(N,{className:"text-[#C8C8C8] text-xl absolute top-[28%] right-[4%]"})]}),e.jsx(x,{})]})}),e.jsx(n,{control:a.control,name:"pincode",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base max-[768px]:text-base font-medium font-inter mb-4",children:["Pincode ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(l,{children:e.jsx(c,{placeholder:"Enter your pincode",...t,className:"h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"})}),e.jsx(x,{})]})}),e.jsx(n,{control:a.control,name:"dentalIssue",render:({field:t})=>e.jsxs(o,{children:[e.jsxs(r,{className:"text-base max-[768px]:text-base font-medium font-inter mb-4",children:["Dental Issue ",e.jsx("span",{className:"text-[red]",children:"*"})]}),e.jsx(l,{children:e.jsx(g,{placeholder:"Write your dental issue...",...t,id:"message-2",className:"max-h-20 resize-none max-[768px]:text-base min-h-20 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"})}),e.jsx(x,{})]})}),e.jsx(y,{variant:"submit",size:"lg",className:"h-12 max-[768px]:text-base",type:"submit",children:"Submit"})]})]})}),e.jsx("div",{className:"w-1/2 max-[768px]:hidden h-full",children:e.jsx("img",{src:v,alt:"",className:"h-[704px] max-lg:h-[807px] w-full"})})]})]})})})};export{A as default};
