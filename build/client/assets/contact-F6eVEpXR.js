import{r as a,j as e}from"./jsx-runtime-vcCcxsHL.js";import{S as x}from"./StopPoint-Tk_V2Tj1.js";import{s as j}from"./Apis-wLhAyKKJ.js";import{c as v}from"./components-d_Semb9D.js";import"./index-9mIUPUcS.js";const E=()=>{const[t,n]=a.useState({subject:"",from:"",text:""}),[l,i]=a.useState(!1),[c,h]=a.useState(!1),[d,m]=a.useState(""),[b,u]=a.useState(!1),o=s=>{n({...t,[s.target.name]:s.target.value}),m("")},y=s=>{m(s)},g=()=>{i(!1)},p=async s=>{if(s==null||s.preventDefault(),!t.subject||!t.from||!t.text){y("Please fill in all required fields.");return}i(!0);const r=await j(t);let f;if(typeof r=="string")return console.error("Error:",r),u(!0);f=r.data,console.log("response=>>>",r),console.log(f),r.status===200?h(!0):u(!0),n({subject:"",from:"",text:""})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-4 lg:mx-16",children:[e.jsxs("div",{className:"  dark:text-white w-full lg:text-2xl shadow-lg rounded-md py-8 font-medium bg-gray-50 dark:bg-slate-800",children:[e.jsxs("span",{className:" w-full  text-justify text-gray-400",children:["Hey, if you are seeing any bugs, spelling mistakes, or errors in the content, please inform me using the contact information below. I will definitely respond and fix any issues. Also you want to inform me something you can contact to me. You will get responece within 12 hours. Email ","=>"," ",e.jsx("b",{className:"text-gray-100 text-underline",children:"contact@goodwaygiver.site"})," ",e.jsx(v,{className:"text-blue-500",target:"_blank",to:"mailto:contact%40goodwaygiver.site",children:"Contect Now"})]}),e.jsx(x,{style:"dark:bg-slate-800"}),e.jsxs("div",{id:"send-message",className:"px-4 flex flex-col justify-center min-h-screen max-w-md mx-auto",children:[e.jsxs("span",{className:"block pt-2 text-start text-white font-bold  text-xl",children:["Contact Now - Fill this form"," "]}),e.jsxs("div",{className:"relative py-3 sm:mx-auto sm:min-w-[35rem] my-4",children:[e.jsx("div",{className:"to-light-blue-500 absolute inset-0 -skew-y-6 transform rounded-3xl bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0"}),e.jsx("div",{className:"relative rounded-3xl bg-white p-20 px-4 py-10 shadow-lg",children:e.jsxs("form",{children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"name",className:"mb-2 block text-sm font-medium text-gray-600",children:"Full Name"}),e.jsx("input",{type:"text",id:"name",name:"name",className:"w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("label",{htmlFor:"title",className:"mb-2 block text-sm font-medium text-gray-600",children:["Title / Subject ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",id:"title",name:"subject",className:"w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800",required:!0,value:t.subject,onChange:o})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium text-gray-600",children:["Email",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"email",id:"email",name:"from",className:"w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800",required:!0,value:t.from,onChange:o})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("label",{htmlFor:"message",className:"mb-2 block text-sm font-medium text-gray-600",children:["Messages",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("textarea",{id:"message",name:"text",rows:6,className:"w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 ",required:!0,value:t.text,onChange:o})]}),e.jsxs("div",{className:"mt-6",children:[d&&e.jsx("div",{className:"custom-alert",children:e.jsx("p",{className:"block mx-auto mb-1 text-semibold text-[red]",children:d})}),!c&&!l&&e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",onClick:()=>p(),children:"Send Message"}),l&&e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",children:"Sending..."}),c&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-lime-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",children:"Sent Successfully"}),e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",onClick:g,children:"Send Again"})]}),b&&e.jsxs("div",{className:"flex gap-2",children:[" ",e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-red-600 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-red-600 focus:ring-offset-2",children:"Error while sending"}),e.jsx("button",{className:"to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",onClick:g,children:"Send Again"})]})]})]})})]})]})]}),e.jsx(x,{style:"dark:bg-slate-800"})]})})};export{E as default};