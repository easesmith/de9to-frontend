import{j as e,B as $,X as y,u as te,c as se,x as ae,r as d,a as le,ab as oe,ac as ne,ad as re,ae as ce,e as de,f as ie,g as xe,h as ue,i as fe,S as me,o as be,p as he,q as ge,s as pe,t as je,l as Se,L as ye,ax as ve,ay as Ne,aa as we,_ as Ce}from"./index-C-yvlQ-I.js";import{f as g}from"./format-CW0G_LzU.js";import{a as De}from"./addDays-BmrnjbS8.js";const _e=x=>{if(x.length===0)return 0;const b=x.reduce((h,f)=>h+Number(f==null?void 0:f.patientRating),0)/(x==null?void 0:x.length);return Number(b)},Ee="/assets/Vector%20(7)-8ZgEcU2B.png",Ae=({title:x,slots:u,selectedSlot:b,handleSlotClick:h,dayDate:f})=>e.jsx("div",{className:"grid w-full gap-3",children:(u==null?void 0:u.length)>0?e.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-full gap-2",children:u.map((a,v)=>{var r,p,i;return e.jsx($,{type:"button",variant:"secondary",className:`border-2 ${b===((r=a==null?void 0:a.slotId)==null?void 0:r.startTime)?"bg-[#95C22B] hover:bg-[#95C22B] text-white":""} text-xs sm:text-base`,onClick:()=>{var D,N;return h((D=a==null?void 0:a.slotId)==null?void 0:D.startTime,f,(N=a==null?void 0:a.slotId)==null?void 0:N._id)},disabled:(p=a==null?void 0:a.slotId)==null?void 0:p.isBooked,children:(i=a==null?void 0:a.slotId)==null?void 0:i.startTime},v)})}):e.jsx("p",{className:"text-red-500",children:"No slots available"})}),Be=y.object({clinic:y.string().min(1,"Please select a clinic"),date:y.string().min(1,"Please select a date"),time:y.string().min(1,"Please select a time slot"),dentistId:y.string().optional()}),Me=({isConfirmBookingModalOpen:x,setIsConfirmBookingModalOpen:u,selectedDate:b,selectedTime:h,selectedIndex:f,clinic:a="",dentistId:v,timing:r})=>{const p=te(),i=se({resolver:ae(Be),defaultValues:{clinic:(a==null?void 0:a._id)||"",date:b||"",time:h||"",dentistId:v||""}});console.log("timing:",r);const{reset:D,handleSubmit:N,getValues:w}=i,T=s=>{console.log("Booking Data:",s);const t=we("userInfo");if(!t||!(t!=null&&t.userId)){Ce.error("Please login first"),p("/");return}u(!1),p("/confirm-booking",{state:{data:s,clinicDetails:a,slotId:q,timing:r,startIndex:o}})},[P,E]=d.useState(h),[q,G]=d.useState(""),[V,_]=d.useState([]),[j,C]=d.useState(b||g(new Date,"yyyy-MM-dd")),[M,A]=d.useState(f||"selected0"),[o,B]=d.useState(f),n=(s=>Array.from({length:s},(t,l)=>{const F=De(new Date,l),S=g(F,"EEEE"),O=g(F,"yyyy-MM-dd"),Q=l===0?"Today":l===1?"Tomorrow":g(F,"EEE, dd MMM"),W=r==null?void 0:r.filter(m=>(m==null?void 0:m.day.toLowerCase())===(S==null?void 0:S.toLowerCase())),ee=r==null?void 0:r.some(m=>{var L;return m.day.toLowerCase()===S.toLowerCase()&&((L=m==null?void 0:m.slot)==null?void 0:L.length)>0});return{name:Q,date:O,day:S,slotsAvailable:ee,slots:W[0]||""}}))(7);console.log(n);const z=(s,t,l)=>{E(s),G(l),C(t),i.setValue("time",s),i.setValue("date",t)},H=s=>{A(`selected${s}`),E("");const t=n[s].date;C(t),i.setValue("date",t)},R=s=>{A(`selected${s}`),E(""),B(s);const t=n[s].date;C(t),i.setValue("date",t)},I=s=>{const t=n.findIndex(l=>l.date===s);for(let l=t+1;l<n.length;l++)if(n[l].slotsAvailable)return{name:n[l].name,index:l};return null},U=()=>{o+3<n.length&&B(o+3)},X=()=>{o>0&&B(o-3)},[Y,Z]=d.useState([]);d.useEffect(()=>{var l;const s=n.slice(o,o+3);Z(s),A(`selected${o}`);const t=(l=n[o])==null?void 0:l.date;C(t)},[o]);const{res:c,fetchData:J,isLoading:ke,error:k}=le(),K=async()=>{J(`/patient/get-dentist-available-timing?clinicId=${w("clinic")}&dentistId=${v}&day=${g(new Date(j),"EEEE")}&date=${g(new Date(j),"dd-MM-yyy")}`)};return d.useEffect(()=>{w("clinic")&&K()},[j,w("clinic")]),d.useEffect(()=>{var s,t;((c==null?void 0:c.status)===200||(c==null?void 0:c.status)===201)&&(_((t=(s=c==null?void 0:c.data)==null?void 0:s.data)==null?void 0:t.availableSlots),console.log("slotsRes response",c))},[c]),d.useEffect(()=>{k&&(console.log("slotsRes error",k),_([]))},[k]),e.jsx(oe,{open:x,onOpenChange:u,children:e.jsx(ne,{className:"max-w-[700px] max-h-[90vh] overflow-y-auto w-full",children:e.jsxs(re,{className:"text-left",children:[e.jsx(ce,{className:"font-inter font-medium text-[#0D0E0E] text-base sm:text-2xl ",children:"Confirm Your Booking"}),e.jsx(de,{...i,children:e.jsxs("form",{onSubmit:N(T),className:"flex flex-col items-start gap-4 w-full",children:[a&&a.length>0&&e.jsx("div",{className:"w-full",children:e.jsx(ie,{control:i.control,name:"clinic",render:({field:s})=>e.jsxs(xe,{children:[e.jsx(ue,{className:"font-inter text-sm sm:text-base text-left sm:text-left",children:"Select Clinic"}),e.jsx(fe,{children:e.jsxs(me,{value:s.value,onValueChange:s.onChange,children:[e.jsx(be,{className:"w-full border bg-[#F9FFEA] border-[#95C22B]",children:e.jsx(he,{placeholder:"Select clinic"})}),e.jsx(ge,{className:"border border-[#95C22B] rounded-lg py-[10px]",children:e.jsx(pe,{children:a.map(t=>e.jsx(je,{value:t==null?void 0:t._id,children:t==null?void 0:t.clinicName},t==null?void 0:t._id))})})]})}),e.jsx(Se,{})]})})}),w("clinic")&&e.jsxs(e.Fragment,{children:[e.jsx(ye,{className:"font-inter text-sm sm:text-base border-b pb-2 border-b-[#71717154] w-full",children:"Select Availability"}),e.jsxs("div",{className:"grid w-full gap-4 grid-cols-[10%_1fr_10%]",children:[e.jsx("button",{type:"button",className:"flex justify-center items-center disabled:text-gray-300",onClick:X,disabled:o===0,children:e.jsx(ve,{className:"border w-14 h-14 p-2 sm:p-4 rounded-full"})}),e.jsx("div",{className:"grid w-full gap-4 grid-cols-[1fr_1fr_1fr]",children:Y.map((s,t)=>{const l=s.date===j&&V.length;return e.jsxs("button",{type:"button",onClick:()=>H(t+o),className:`${j===s.date?"border-b-2 border-[#95C22B]":"border-b-2 border-transparent"}`,children:[e.jsx("p",{className:"font-inter sm:text-base text-xs font-medium text-center text-[#1A1A1A]",children:s.name}),e.jsx("p",{className:`font-inter sm:text-sm text-xs font-medium text-center ${l>0?"text-[#95C22B]":"text-[#717171]"}`,children:l>0?`${l} Slots Available`:"Click to check"})]},t+o)})}),e.jsx("button",{type:"button",className:"flex justify-center items-center disabled:text-gray-300",onClick:U,disabled:o+3>=n.length,children:e.jsx(Ne,{className:"border w-14 h-14 p-2 sm:p-4 rounded-full"})})]}),e.jsx("div",{className:"mt-3 w-full",children:n.map((s,t)=>{var l;return e.jsx("div",{children:s.slotsAvailable?e.jsxs("div",{className:`grid grid-cols-1 gap-3 ${M===`selected${t}`?"":"hidden"}`,children:[e.jsx(Ae,{title:"Slots",slots:V,selectedSlot:P,handleSlotClick:z,dayDate:s.date}),e.jsx($,{type:"submit",className:"bg-[#95C22B] w-full",children:"Confirm Booking"})]}):e.jsxs("div",{className:`flex flex-col gap-2 items-center w-full ${M===`selected${t}`?"":"hidden"}`,children:[e.jsx("img",{src:Ee,alt:"No slots available"}),e.jsx("p",{className:"font-inter text-[#1A1A1A]",children:"Sorry, no slots available today"}),e.jsxs($,{type:"button",className:"bg-[#95C22B] w-full",onClick:()=>R(t+I(s.date).index),disabled:!I(s.date),children:["Next availability on ",(l=I(s.date))==null?void 0:l.name," "]})]})},t)})})]})]})})]})})})};export{Me as C,_e as c};
