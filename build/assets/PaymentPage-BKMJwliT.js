import{j as o,B as c,q as n}from"./index-DmouPCTn.js";import{l as d}from"./de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png-Dqa2L2LM.js";const m=()=>{console.log("api url",void 0);const a={razorpay_payment_id:"",razorpay_subscription_id:"",razorpay_signature:""},s=async()=>{try{const{data:e}=await n.post("https://de9to.easesmith.com/api/dentist/make-payment",{amount:"100",currency:"INR"},{withCredentials:!0});console.log("data",e);const i={key:"rzp_test_6Jk9Vz0d3WgZRC",amount:"100",currency:"INR",name:"Dento",description:"Test Transaction",image:d,order_id:e.order.id,handler:async function(t){a.razorpay_payment_id=t.razorpay_payment_id,a.razorpay_order_id=t.razorpay_order_id,a.razorpay_signature=t.razorpay_signature;try{const r=await n.post("undefined/dentist/verify-payment",{...a},{withCredentials:!0});console.log("handler",r.data)}catch(r){console.log(r)}},prefill:{name:"test name",contact:"1234567890"},notes:{address:"Dento"},theme:{color:"#3399cc"}};new window.Razorpay(i).open()}catch(e){console.log(e)}};return o.jsx("div",{className:"flex justify-center items-center h-screen",children:o.jsx(c,{onClick:s,children:"Test Payment"})})};export{m as default};
