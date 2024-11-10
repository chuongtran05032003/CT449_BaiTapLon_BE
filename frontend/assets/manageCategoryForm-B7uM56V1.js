import{r as m,u as T,o as k,a as B,c as f,b as o,t as p,d as H,e as g,v as w,l as V,h as j,i as b,B as y}from"./index-bggiZOz8.js";import{c as d}from"./category_service-BKHrZazu.js";import{S as N}from"./sweetalert2.esm.all-DwEdJQJv.js";const z={class:"w-full h-full rounded-xl bg-white"},F={class:"rounded-xl w-full h-full bg-white"},W={class:"rounded-xl w-full h-full bg-white"},q={class:"text-xl font-bold mb-6 text-center whitespace-nowrap"},D=["disabled"],E=["disabled"],L={class:"flex justify-end space-x-1"},U={key:0,type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 whitespace-nowrap"},P={__name:"manageCategoryForm",props:{action:{type:String},id:{type:Object}},setup(x){const u=m(null),c=j(),i=T(),r=m({}),n=x,v=s=>{switch(s){case"add":return"Thêm mục sách";case"update":return"Cập nhật mục sách";case"view":return"Chi tiết mục sách";default:return"Hành động không xác định"}},h=()=>{c.go(-1)},M=async()=>{(await N.fire({title:"Xác nhận lưu?",text:"Bạn có chắc muốn lưu các thay đổi này?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Lưu",cancelButtonText:"Hủy"})).isConfirmed&&await S()},S=async()=>{var s,e;try{const t={MaMucSach:r.value.MaMucSach,TenMucSach:r.value.TenMucSach};if(n.action==="add"){const a=await d.create(t);y.emit("reload"),i.success(a.message),c.go(-1)}else if(n.action==="update"){const a=await d.update(n.id,t);y.emit("reload"),i.success(a.message),c.go(-1)}}catch(t){console.log(t);const a=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Có lỗi xảy ra. Vui lòng thử lại.";i.error(a)}};function l(){const s=u.value;if(s){const e=window.innerHeight,t=window.innerWidth,a=parseFloat(window.getComputedStyle(s).padding),_=e-2*a,C=t-2*a;s.style.maxHeight=`${_}px`,s.style.maxWidth=`${C}px`}}return k(async()=>{var s,e;if(l(),window.addEventListener("resize",l),n.action!=="add")try{const t=await d.get(n.id);r.value={...t}}catch(t){const a=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Có lỗi xảy ra. Vui lòng thử lại.";i.error(a)}else r.value={MaMucSach:"",TenMucSach:""}}),B(()=>{window.removeEventListener("resize",l)}),(s,e)=>(b(),f("div",null,[o("div",{class:"absolute inset-0 bg-black opacity-50 z-30",onClick:h}),o("div",{ref_key:"formContainer",ref:u,class:"fixed bg-white z-40 box-border overflow-y-auto overflow-x-hidden rounded-xl w-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 border-2 shadow-md",style:{"scrollbar-gutter":"stable","clip-path":"inset(0 round 10px)"}},[o("div",z,[o("div",F,[o("div",W,[o("h2",q,p(v(n.action)),1),o("form",{onSubmit:H(M,["prevent"]),class:"space-y-4"},[o("div",null,[e[2]||(e[2]=o("label",{for:"ma-muc-sach",class:"block font-medium text-gray-700 whitespace-nowrap"},"Mã mục sách",-1)),g(o("input",{type:"text",id:"ma-muc-sach","onUpdate:modelValue":e[0]||(e[0]=t=>r.value.MaMucSach=t),disabled:n.action==="view",required:"",placeholder:"Nhập mã mục sách",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,D),[[w,r.value.MaMucSach]])]),o("div",null,[e[3]||(e[3]=o("label",{for:"ten-muc-sach",class:"block font-medium text-gray-700 whitespace-nowrap"},"Tên mục sách",-1)),g(o("input",{type:"text",id:"ten-muc-sach","onUpdate:modelValue":e[1]||(e[1]=t=>r.value.TenMucSach=t),required:"",disabled:n.action==="view",placeholder:"Nhập tên mục sách",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,E),[[w,r.value.TenMucSach]])]),o("div",L,[o("button",{type:"button",onClick:h,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"},p(n.action==="view"?"Thoát":"Hủy"),1),n.action!=="view"?(b(),f("button",U," Xác Nhận ")):V("",!0)])],32)])])])],512)]))}};export{P as default};
