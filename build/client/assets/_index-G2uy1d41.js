import{r as s,j as e}from"./jsx-runtime-vcCcxsHL.js";import{G as A,S as X,M as D}from"./MyNavbar-0guKYTLw.js";import{a as o,l as I,p as W,c as u,s as R,m as L}from"./index-mfzvuM8w.js";import{S as d}from"./StopPoint-Tk_V2Tj1.js";import{c as i}from"./components-d_Semb9D.js";import"./Apis-wLhAyKKJ.js";import"./index-9mIUPUcS.js";const P=({words:t,speed:a=100,textStyle:n})=>{const[r,m]=s.useState(0),[g,y]=s.useState(""),[x,h]=s.useState(!1),[v,f]=s.useState(!0);return s.useEffect(()=>{const j=a,w=()=>{const c=t[r];y(l=>x?l.length>0?l.slice(0,-1):(h(!1),m(C=>(C+1)%t.length),""):l.length<c.length?c.slice(0,l.length+1):(h(!0),l))},k=500,N=()=>{f(c=>!c)},G=setInterval(w,j),S=setInterval(N,k);return()=>{clearInterval(G),clearInterval(S)}},[g,r,x,a,t]),e.jsx(e.Fragment,{children:e.jsxs("p",{className:`typing-effect block text-center h-6 ${r===0?` ${n||"text-red-500"}`:r===1?"text-blue-500":r===2?"text-red-500":""}`,children:[g,v&&e.jsx("b",{className:"pl-1 text-red-500",children:"|"})]})})},p=P,H=()=>{const t=["Good Way Giver","Good Way Giver Shop"];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"highlights mb-2  md:mt-[24px] py-2 text-center  flex justify-center items-center dark:bg-gray-900 dark:text-white dark:border dark:border-white dark:rounded-sm",children:[e.jsx("img",{className:" logoimg rounded-full w-[8rem] m-[9px] md:w-52",src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif",alt:""}),e.jsxs("div",{style:{width:"70%"},className:" contants flex flex-col",children:[e.jsxs("span",{className:"textHighLight ml-2 text-sm lg:text-lg font-bold",children:[" ","Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."]}),e.jsx("span",{className:"my-1 text-blue-600 font-medium",children:"Contact :- contact@goodwaygiver.site"}),e.jsx("div",{style:{color:"black"},className:" typeMyLogo font-extrabold text-xl mt-2",children:e.jsx(p,{textStyle:"text-black dark:text-white",words:t,speed:150})})]})]})})},_=H;function b(t){return A({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M508.416 1023.28c-241.248 0-412.369-167.28-412.369-397.777 0-122.368 73.376-254.192 76.496-259.712 6.368-11.343 18.88-17.504 31.936-16.063a32.052 32.052 0 0 1 26.88 23.567c.192.752 19.968 74.752 46.064 115.84 17.536 27.649 35.312 47.185 55.312 60.753-13.536-58.656-23.904-146.912-7.024-237.472C372.047 63.84 567.695 4.368 576.08 1.968c10.784-3.088 22.225-.32 30.433 7.151 8.192 7.504 11.936 18.752 9.808 29.665-.32 1.744-32.624 175.776 35.936 324.064 6.223 13.471 14.912 29.12 24.256 44.784 2.656-21.504 6.784-44.368 13.12-66.56 25.152-87.969 90.192-118 92.944-119.217 10.848-4.944 23.504-3.312 32.88 4.032a32.061 32.061 0 0 1 11.68 31.007c-.336 2.16-9.409 62.033 41.536 146.944 46 76.672 59.28 126.368 59.28 221.681 0 230.48-176.432 397.761-419.536 397.761zm-312.721-555.6c-17.568 44.304-35.665 103.246-35.665 157.806 0 193.408 144.192 333.776 348.368 333.776 206 0 355.536-140.368 355.536-333.776 0-83.536-10.32-122.32-50.16-188.752-26.624-44.368-39.777-84.256-46.065-116-6.336 10.256-12.223 22.784-16.527 37.872-19.504 68.193-14.592 147.937-14.527 148.753.944 14.273-7.744 27.473-21.248 32.257s-28.529.064-36.817-11.663c-2.4-3.408-59.312-83.968-84.4-138.24-52.096-112.592-51.216-234.336-45.904-304.464-52.72 30.72-133.664 99.344-159.664 238.912-25.312 135.808 23.872 271.6 24.4 272.943 4.256 11.088 2 23.664-5.808 32.592-7.84 8.88-19.904 12.815-31.536 10.03-3.967-.975-94.032-24.399-152.336-116.286-10.416-16.464-19.76-36.384-27.647-55.76z"}}]})(t)}const V=()=>e.jsxs("div",{style:{width:"100%"},className:"latestpost p-3 items-center md:flex md:flex-col block xl:flex xl:flex-row text-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("figure",{className:"max-w-md mx-auto",children:e.jsx(o,{height:200,width:300})}),e.jsxs("div",{className:"pl-5 pr-2 mainContentsPost md:w-full",children:[e.jsx(o,{height:30,width:200,style:{marginBottom:"10px"}}),e.jsx(o,{height:80,style:{marginBottom:"10px"}}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(o,{height:30,width:150}),e.jsx(o,{height:20,width:30})]})]})]}),Z=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"hover:shadow-lg hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("figure",{className:"max-w-md mx-auto",children:e.jsx(o,{height:180,width:300})}),e.jsx("div",{className:"pt-1",children:e.jsx("h3",{className:"text-sm font-[600] tracking-tight text-gray-900 dark:text-white",children:e.jsx(o,{height:15,count:2,width:300,style:{marginTop:"1px"}})})})]})}),E=()=>{const{latestPostData:t}=s.useContext(I),[a,n]=s.useState(!0);return s.useEffect(()=>{const r=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(r)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:" dark:bg-gray-900 bg-[azure] drop-shadow-md px-1 font-sans pb-3 ",children:[e.jsxs("div",{className:"flex  items-center",children:[e.jsxs("h2",{className:"my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white",children:["Latest"," "]})," ",e.jsx("img",{className:"h-8 w-8 dark:filter dark:invert",src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png",alt:"new"})]}),t&&t.length>0?e.jsx("div",{className:"grid gap-8 mt-2 md:grid-cols-2 mb-2 ",children:t.map((r,m)=>e.jsxs("div",{style:{width:"100%"},className:"latestpost p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row text-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("figure",{className:"max-w-md mx-auto",children:e.jsx("img",{className:"h-auto max-w-full rounded-lg hover:scale-105 duration-300 transition-transform",src:`${r.thumbnail}`,alt:"image description"})}),e.jsx("div",{className:"pl-5 pr-2 mainContentsPost md:w-full",style:{},children:e.jsxs(i,{to:`/posts${r.link}`,children:[e.jsx("h3",{className:"mytitle text-md font-bold my-2 tracking-[0.03] text-gray-900 dark:text-white",children:e.jsx("p",{children:r.title})}),e.jsx("p",{className:"mb-2 mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description",children:r.description}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{type:"button",className:"text-gray-900 -z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-3 py-1 text-center m-0",children:"Continue Reading »»"}),e.jsxs("span",{className:"flex items-ceneter",children:[e.jsx(b,{className:"w-5 h-5 pr-0.5 text-gray-800 dark:text-white"}),e.jsxs("p",{className:"inline-block dark:text-white pl-[2px] text-sm",children:[" ",r.views]})]})]})]})})]},r._id))}):e.jsx("div",{className:"grid gap-8 mt-2 md:grid-cols-2 mb-2 ",children:[...Array(4)].map(r=>e.jsx(V,{}))})]}),e.jsx(d,{})]})},J=E,F=()=>{const{popularPostData:t}=s.useContext(W);return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"bg-blue-100 rounded-sm  dark:bg-gray-900 px-1 drop-shadow-md",children:e.jsxs("div",{className:"py-2 px-0 mx-auto max-w-screen-xl ",children:[e.jsxs("div",{className:"flex  items-center mb-4",children:[e.jsxs("h2",{className:"my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white",children:["Popular"," "]})," ",e.jsx("img",{className:"h-8 w-8 dark:filter dark:invert",src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png",alt:"popular logo"})]}),t&&t.length>0?e.jsx("div",{className:"grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2",children:t.map((a,n)=>e.jsx("div",{className:"hover:shadow-lg hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",children:e.jsxs(i,{to:`/posts${a.link}`,children:[e.jsx("img",{className:"w-full rounded-lg",src:`${a.thumbnail}`,alt:"Bonnie Avatar"}),e.jsx("div",{className:"p-2",children:e.jsx("h3",{className:"text-sm font-[600] tracking-tight text-gray-900 dark:text-white",children:e.jsxs("span",{className:"font-medium",children:[a.title," "]})})})]})},a._id))}):e.jsx("div",{className:"grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 mt-0",children:[...Array(4)].map(a=>e.jsx(Z,{}))})]})}),e.jsx(d,{})]})},z=F,M=()=>{const t=["#YouTube","#FaceBook","#Instagram"];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-gray-100 rounded shadow-lg p-4 dark:bg-gray-900 dark:border dark:border-white ",children:[e.jsx("h1",{className:"text-2xl  block text-center font-semibold dark:text-white",children:"Feel Connected With Me On"}),e.jsx(p,{words:t}),e.jsx("section",{className:"bg-gray-100 dark:bg-gray-900",children:e.jsx("div",{className:"py-4 px-4  mx-auto max-w-screen-xl text-center lg:py-8 lg:px-4",children:e.jsxs("div",{className:"flex justify-around",style:{display:"flex",justifyContent:"space-around"},children:[e.jsx("div",{className:"text-center text-gray-500  dark:text-gray-400",children:e.jsxs(i,{target:"_blank",to:"https://youtube.com/@goodwaygiver",children:[e.jsx("img",{className:"mx-auto mb-4 w-12 h-auto rounded-full border border-red-500 p-1",src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtjm00gGaVKpffquELDG8a7fkQtD4sQu0brKoX0Ui9ianXLfJ4SSmtdDn9E1KB-gYXHrV75Ji5Y-tu6kLiPEiHAZechmKMFEgqZ-z18h2KaB4k5YD2Qz4lrri_W_ufvPodsmHa-M2-CL4Lz_0fC2S84YVdOP7s4O4JjuLF1RDZBbfVwRrW6szC0knixI8/s240/unnamed%20(2).webp",alt:"Bonnie Avatar"}),e.jsx("h3",{className:"mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white",children:e.jsx("b",{children:"Good Way Giver"})}),e.jsx("p",{children:"YouTube"})]})}),e.jsx("div",{className:"text-center text-gray-500 dark:text-gray-400",children:e.jsxs(i,{to:"https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL",target:"_blank",children:[e.jsx("img",{className:"mx-auto mb-4 w-12 h-auto rounded-full border border-blue-300 p-1",src:"https://play-lh.googleusercontent.com/LYXR81vaeuI2KIy4xQarox4qAYnrkWnmKOwl1JoLIJuCRUoK9dqPGAAjELsAf1J_qw=w240-h480-rw",alt:"Helene Avatar"}),e.jsx("h3",{className:"mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white",children:e.jsx("b",{children:"Good Way Giver"})}),e.jsx("p",{children:"FaceBook"})]})}),e.jsx("div",{className:"text-center text-gray-500 dark:text-gray-400",children:e.jsxs(i,{to:"https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==",target:"_blank",children:[e.jsx("img",{className:"mx-auto mb-4 w-12 h-auto border border-red-500 rounded-full p-1",src:"https://play-lh.googleusercontent.com/h9THn4Ou1Qz9_CpTVxtatkF8yZV9YP2T3D6-ZxMvsnV0TbLL_LiVIMmTprcosjq0SPHu=w240-h480-rw",alt:"Jese Avatar"}),e.jsx("h3",{className:"mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white",children:e.jsx("b",{children:"Good Way Giver"})}),e.jsx("p",{children:"Instagram"})]})})]})})})]})})},B=M,T=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[100%] flex flex-col justify-center items-center",children:["   ",e.jsx("section",{className:"bg-[azure] dark:bg-gray-900 ",children:e.jsx("div",{className:"py-8 px-4 mx-auto  lg:py-16 lg:px-6",children:e.jsxs("div",{className:"mx-auto max-w-screen-sm text-center",children:[e.jsx("h1",{className:"mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-primary-600  text-[red] dark:text-primary-500 dark:text-white",children:"No Results found"}),e.jsx("p",{className:"mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white",children:"Something's missing."}),e.jsx("button",{type:"button",className:"text-white font-extrabold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:"No Search Results"})]})})})]})}),K=T,Q=()=>{const{postData:t}=s.useContext(u),{showSpin:a}=s.useContext(R);return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"bg-[azure] dark:bg-gray-900 pb-3 mt-1",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("h2",{className:"my-4 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white",children:["Search Results"," "]})," ",e.jsx("img",{className:"h-6 w-6 dark:filter dark:invert",src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsEeJRnoySeHJb0vdjra9h3neT5FnmlJabvzW0SMbU-zTwfaAQgtCFfUuaW-0YHbEQZwfuai-Iah1xiNhct3ASNQLn36DHadBgv2weHln_6SPZMOCXwUsMfLSOpC1vaDcD-u4oLx5f5IBI1ZANWT6YrlVZis_EjoClblmOZ_1Sh9nNOHAcxMqZs-UcfXI/w640-h640/result%20success.png",alt:""})]}),a?e.jsx(X,{}):t.length?e.jsx("div",{className:"grid gap-8 mt-2  md:grid-cols-2 mb-2 ",children:t.length&&t.map(n=>e.jsx("div",{children:e.jsxs("div",{style:{width:"100%"},className:"searchPosts p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5  hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row   text-start  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("figure",{className:"max-w-md mx-auto  inline-block overflow-hidden",children:e.jsx("img",{className:"h-auto max-w-full rounded-lg  hover:scale-105 duration-300 transition-transform",src:`${n.thumbnail}`,alt:"image description"})}),e.jsx("div",{className:" pl-5 pr-2 mainContentsPost md:w-full",style:{},children:e.jsxs(i,{to:`/posts${n.link}`,children:[e.jsx("h3",{className:"text-md mytitle font-bold my-1 tracking-[0.03] text-gray-900 dark:text-white",children:e.jsxs("p",{children:[" ",n.title]})}),e.jsx("p",{className:"mt-[5px] mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description",children:n.description}),e.jsxs("div",{className:"flex justify-between items-center ",children:[e.jsx("button",{type:"button",className:"text-gray-900 animate-pulse 	-z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center m-0 ",children:"Continue Reading »»"}),e.jsxs("span",{className:" flex items-ceneter",children:[e.jsx(b,{className:"w-5 h-5 pr-0.5 text-gray-800 dark:text-white"}),e.jsxs("p",{className:"inline-block dark:text-white pl-[2px] text-sm",children:[" ",n.views]})]})]})]})})]})},n.id))}):e.jsx(K,{})]}),e.jsx(d,{})]})},O=Q,U=()=>{s.useContext(u);const{searchInput:t}=s.useContext(L);return e.jsx(e.Fragment,{children:e.jsx("div",{style:{width:"100%"},className:"m-0 p-0",children:e.jsx("section",{className:"bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"py-1 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6 ",children:[e.jsxs("div",{className:` highlightsMainDiv ${t.length?"hidden":"block"} mt-[1rem] bg-blue-50 rounded-sm `,children:[" ",e.jsx(_,{})]}),e.jsxs("div",{className:`${t.length?"hidden":"block"}`,children:[" ",e.jsx(J,{})]}),e.jsx("div",{className:`${t.length?"hidden":"block"}`,children:e.jsx(z,{})}),e.jsxs("div",{className:`${t.length?"hidden":"block"}`,children:[" ",e.jsx(B,{})]}),e.jsxs("div",{className:`${t.length?"block":"hidden"}`,children:[" ",e.jsx(O,{})]})]})})})})},Y=U,ne=()=>[{title:"Good Way Giver"},{name:"description",content:"Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."},{name:"application-name",content:"Good Way Giver Blog"},{name:"author",content:"Shivam Kumar"},{name:"generator",content:"Remix.js"},{name:"keywords",content:"Good Way Giver, good way giver, good way giver youtube, good way giver blog, good way giver site, good way giver website, good way giver tech, Good Way Giver Blog"},{name:"referrer",content:"origin-when-cross-origin"},{name:"creator",content:"Shivam Kumar"},{name:"publisher",content:"Shivam Kumar"},{name:"robots",content:"index, follow"},{name:"googlebot",content:"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"},{rel:"canonical",href:"https://www.goodwaygiver.site"},{rel:"alternate",type:"application/rss+xml",href:"https://www.davegray.codes/feed.xml"},{name:"google-site-verification",content:"py8IGKH0Z-P_AY-wa8R7GiHbXxS12LA_Q3mbD-QmUuk"},{name:"yandex-verification",content:"953e838be963cb87"},{property:"og:title",content:"Good Way Giver"},{property:"og:description",content:"Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."},{property:"og:url",content:"https://www.goodwaygiver.site"},{property:"og:site_name",content:"Good Way Giver Blog"},{property:"og:image",content:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"},{property:"og:image:secure_url",content:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:image:alt",content:"Preview image for Good Way Giver"},{property:"og:type",content:"article"},{property:"article:author",content:"Shivam Kumar"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@goodwaygiver"},{name:"twitter:creator",content:"@goodwaygiver"},{name:"twitter:title",content:"Good Way Giver"},{name:"twitter:description",content:"Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."},{name:"twitter:image",content:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"},{name:"twitter:image:alt",content:"Preview image for Good Way Giver"},{rel:"icon",href:"/favicon.ico",type:"image/x-icon",sizes:"48x48"},{rel:"icon",href:"/icon.svg?3c76353a766c6496",type:"image/svg+xml",sizes:"any"},{rel:"apple-touch-icon",href:"/apple-icon.png?ebbb82dc3cc1b5eb",type:"image/png",sizes:"180x180"}];function oe(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(Y,{})]})}export{oe as default,ne as meta};
