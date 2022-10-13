(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{272:function(t,e,r){"use strict";r.r(e);var o={props:["project","dashboard","img"],data:function(){return{isOpen:!1,projectKey:null}},methods:{isSure:function(t){this.isOpen=!this.isOpen,this.projectKey=t},deleteProject:function(){this.isOpen=!this.isOpen,this.$store.dispatch("projects/deleteData",this.projectKey)}},computed:{user:function(){return this.$store.state.user}}},l=r(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full h-56 md:h-64 relative group rounded-md"},[t.dashboard?r("img",{staticClass:"w-full h-56 md:h-64 rounded-md",attrs:{src:t.img,alt:t.project.name}}):r("img",{staticClass:"w-full h-56 md:h-64 rounded-md",attrs:{src:t.project.imageUrl,alt:t.project.name}}),t._v(" "),t.user&&!t.dashboard?r("a",{staticClass:"absolute cursor-pointer right-3 rtl:right-auto rtl:left-3 top-3 p-1.5 bg-red-500 text-sm text-white rounded",on:{click:function(e){return t.isSure(t.project.id)}}},[t._v("Delete")]):t._e(),t._v(" "),r("div",{staticClass:"absolute -bottom-16 w-full"},[r("div",{staticClass:"bg-white dark:bg-gray-800 p-5 mx-7 md:mx-9 center rounded space-y-3 group-hover:bg-me text-gray-600 dark:text-gray-200 group-hover:text-gray-100"},[r("h4",{staticClass:"text-xl text-center"},[t._v(t._s(t.project.name))]),t._v(" "),r("div",{staticClass:"flex space-x-2"},[t.project.github&&"false"!=t.project.github&&t.project.github.startsWith("http")?r("a",{staticClass:"text-me hover:scale-110 duration-300",attrs:{href:t.project.github,target:"_blank"}},[r("svg",{staticClass:"w-9 h-9",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",version:"1.1"}},[r("g",{attrs:{id:"brand",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"github",fill:"#000000"}},[r("path",{attrs:{d:"M12,2 C6.475,2 2,6.475 2,12 C2,16.425 4.8625,20.1625 8.8375,21.4875 C9.3375,21.575 9.525,21.275 9.525,21.0125 C9.525,20.775 9.5125,19.9875 9.5125,19.15 C7,19.6125 6.35,18.5375 6.15,17.975 C6.0375,17.6875 5.55,16.8 5.125,16.5625 C4.775,16.375 4.275,15.9125 5.1125,15.9 C5.9,15.8875 6.4625,16.625 6.65,16.925 C7.55,18.4375 8.9875,18.0125 9.5625,17.75 C9.65,17.1 9.9125,16.6625 10.2,16.4125 C7.975,16.1625 5.65,15.3 5.65,11.475 C5.65,10.3875 6.0375,9.4875 6.675,8.7875 C6.575,8.5375 6.225,7.5125 6.775,6.1375 C6.775,6.1375 7.6125,5.875 9.525,7.1625 C10.325,6.9375 11.175,6.825 12.025,6.825 C12.875,6.825 13.725,6.9375 14.525,7.1625 C16.4375,5.8625 17.275,6.1375 17.275,6.1375 C17.825,7.5125 17.475,8.5375 17.375,8.7875 C18.0125,9.4875 18.4,10.375 18.4,11.475 C18.4,15.3125 16.0625,16.1625 13.8375,16.4125 C14.2,16.725 14.5125,17.325 14.5125,18.2625 C14.5125,19.6 14.5,20.675 14.5,21.0125 C14.5,21.275 14.6875,21.5875 15.1875,21.4875 C19.1375,20.1625 22,16.4125 22,12 C22,6.475 17.525,2 12,2 L12,2 Z",id:"Shape"}})])])])]):t._e(),t._v(" "),r("a",{staticClass:"text-me hover:scale-110 duration-300",attrs:{href:t.project.url,target:"_blank"}},[r("svg",{staticClass:"w-8 h-8",staticStyle:{"enable-background":"new 0 0 496.158 496.158"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 496.158 496.158","xml:space":"preserve"}},[r("path",{staticStyle:{fill:"rgb(17 30 50 / 90%)"},attrs:{d:"M0,248.085C0,111.064,111.07,0.003,248.076,0.003c137.012,0,248.082,111.061,248.082,248.082  c0,137.002-111.07,248.07-248.082,248.07C111.07,496.155,0,385.087,0,248.085z"}}),t._v(" "),r("g",[r("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M394.463,151.309l-49.615-49.614c-10.727-10.728-28.119-10.726-38.844,0l-76.631,76.63   c-10.726,10.728-10.727,28.119-0.001,38.847l49.615,49.614c10.727,10.727,28.119,10.726,38.845-0.002l76.631-76.63   C405.188,179.429,405.189,162.036,394.463,151.309z M312.59,235.423c-6.289,6.288-16.484,6.289-22.772,0.001l-29.084-29.084   c-6.288-6.288-6.287-16.483,0.001-22.772l50.511-50.511c6.287-6.287,16.482-6.288,22.771,0l29.084,29.085   c6.288,6.287,6.287,16.482,0,22.77L312.59,235.423z"}}),t._v(" "),r("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M266.786,278.986l-49.614-49.614c-10.727-10.727-28.119-10.726-38.845,0l-76.631,76.632   c-10.726,10.726-10.727,28.118,0,38.844l49.615,49.615c10.726,10.727,28.119,10.725,38.844,0l76.632-76.633   C277.511,307.105,277.513,289.713,266.786,278.986z M184.912,363.1c-6.288,6.288-16.482,6.29-22.771,0.001l-29.084-29.084   c-6.289-6.288-6.288-16.483,0-22.771l50.512-50.512c6.287-6.287,16.482-6.288,22.771,0l29.084,29.084   c6.288,6.289,6.287,16.484,0,22.771L184.912,363.1z"}})]),t._v(" "),r("path",{staticStyle:{fill:"#48A1AF"},attrs:{d:"M306.907,191.673l-2.42-2.421c-7.742-7.743-20.34-7.743-28.083,0l-87.151,87.151  c-7.742,7.742-7.742,20.34,0,28.082l2.42,2.421c7.742,7.741,20.34,7.741,28.083,0l87.151-87.152  C314.649,212.013,314.649,199.414,306.907,191.673z"}}),t._v(" "),r("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M215.398,302.548c-5.348,5.348-14.02,5.349-19.368,0.001l-2.421-2.421  c-5.348-5.348-5.348-14.02,0-19.367l87.152-87.152c5.348-5.349,14.019-5.348,19.368,0.002l2.42,2.42  c5.347,5.348,5.349,14.019,0,19.366L215.398,302.548z"}})])])]),t._v(" "),r("div",{staticClass:"flex flex-wrap gap-2 text-sm"},t._l(t.project.tech,(function(i,t){return r("img",{key:t+"h",staticClass:"w-auto h-6",attrs:{src:i.url,alt:"",srcset:""}})})),0)])]),t._v(" "),r("div",{staticClass:"absolute right-3 top-12 z-50 bg-white dark:bg-gray-900 block rounded p-2",class:{hidden:!t.isOpen}},[r("div",{staticClass:"w-full flex-1"},[t._v("\n            Do you sure ?\n        ")]),t._v(" "),r("div",{staticClass:"flex justify-between space-x-2"},[r("button",{staticClass:"text-blue-500 hover:bg-gray-500 hover:bg-opacity-20 p-1",on:{click:t.isSure}},[t._v("Close")]),t._v(" "),r("button",{staticClass:"text-red-500 hover:bg-gray-500 hover:bg-opacity-20 p-1",on:{click:t.deleteProject}},[t._v("Delete")])])])])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("4719f48e",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r(280)},288:function(t,e,r){var o=r(75)((function(i){return i[1]}));o.push([t.i,".input[data-v-1c8e3f86]{display:flex;width:100%;flex-direction:column}.input[data-v-1c8e3f86] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.input input[data-v-1c8e3f86]{height:100%;width:100%;border-radius:0.25rem;border-width:1px;background-color:transparent;padding:0.5rem}.input input[data-v-1c8e3f86]:focus{outline:2px solid transparent;outline-offset:2px}.dark .input input[data-v-1c8e3f86]{--tw-border-opacity:1;border-color:rgba(75, 85, 99, var(--tw-border-opacity))}.dark .bg-me[data-v-1c8e3f86]{--tw-bg-opacity:0.75}",""]),o.locals={},t.exports=o},302:function(t,e,r){"use strict";r.r(e);r(34),r(108),r(62),r(77),r(193);var o={data:function(){return{project:{name:"",url:"",github:!1,tech:[]},imgUrl:null,img:null,done:"",error:""}},computed:{projects:function(){return this.$store.state.projects.data},techArray:function(){return this.$store.state.skills.data}},methods:{addProject:function(){var t=this;""!==this.project.name&&""!==this.project.url&&0!==this.project.tech.length&&null!==this.img?(this.project.github&&(!this.project.github.startsWith("http")&&(this.project.github=!1)),this.done="",this.error="",this.$fire.database.ref("projects/").push(this.project).then((function(data){return data.key})).then((function(e){var r={};r.key=e,t.$fire.storage.ref("projects/"+e+".webp").put(t.img);var o="https://firebasestorage.googleapis.com/v0/b/portfolio-87e8b.appspot.com/o/projects%2F"+e+".webp?alt=media&token=";return r.imgUrl=o,r})).then((function(data){return t.$fire.database.ref("projects/"+data.key).update({imageUrl:data.imgUrl})})).then((function(e){t.project.name="",t.project.url="",t.project.github="",t.project.tech="",t.imgUrl="",t.img="",t.$router.push("/projects"),t.done="Done..!"})).catch((function(e){return t.error=e}))):this.error="Please enter all inputs "},uploadFile:function(){this.$refs.inputFile.click()},fileUploaded:function(t){var e=this,r=t.target.files;if(r[0].name.lastIndexOf(".")<=0)return alert("plz add file");var o=new FileReader;o.addEventListener("load",(function(){e.imgUrl=o.result})),o.readAsDataURL(r[0]),this.img=r[0]},addTech:function(t){if(this.project.tech.includes(t)){var e=this.project.tech.indexOf(t);this.project.tech.splice(e,1)}else this.project.tech.push(t)}}},l=(r(287),r(30)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col md:flex-row gap-y-14 md:gap-y-0 gap-x-5 pt-5 pb-16 _container min-h-screen md:items-center md:-mt-28"},[r("div",{staticClass:"md:w-2/4 bg-gray-500 bg-opacity-40 p-5"},[r("Project",{staticClass:"w-full shadow-md",attrs:{project:t.project,dashboard:!0,img:t.imgUrl}})],1),t._v(" "),r("form",{staticClass:"flex flex-col space-y-5 p-5 w-full md:w-2/4 break-all shadow-md",on:{submit:function(e){return e.preventDefault(),t.addProject.apply(null,arguments)}}},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"project_name"}},[t._v("Project Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],attrs:{id:"project_name",type:"text"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})]),t._v(" "),r("a",{staticClass:"bg-me text-white px-4 py-2 rounded w-auto",on:{click:t.uploadFile}},[t._v("Upload Image")]),t._v(" "),r("input",{ref:"inputFile",staticClass:"hidden",attrs:{type:"file",accept:"image/webp"},on:{change:t.fileUploaded}}),t._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"project_url"}},[t._v("REBO URL")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.url,expression:"project.url"}],attrs:{id:"project_url",type:"url"},domProps:{value:t.project.url},on:{input:function(e){e.target.composing||t.$set(t.project,"url",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"project_github"}},[t._v("Github URL")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.github,expression:"project.github"}],attrs:{id:"project_github",type:"text"},domProps:{value:t.project.github},on:{input:function(e){e.target.composing||t.$set(t.project,"github",e.target.value)}}})]),t._v(" "),r("ul",{staticClass:"flex flex-wrap gap-2"},t._l(t.techArray,(function(e){return r("li",{key:e.url,staticClass:"cursor-pointer px-3 py-1.5",class:{"bg-me":!t.project.tech.includes(e.name),"bg-green-800":t.project.tech.includes(e.name)},on:{click:function(r){return t.addTech(e)}}},[r("img",{staticClass:"w-auto h-6",attrs:{src:e.url,alt:"",srcset:""}})])})),0),t._v(" "),r("button",{staticClass:"p-3 bg-me text-white rounded",attrs:{type:"submit"}},[t._v("ADD")]),t._v(" "),t.done?r("div",{staticClass:"bg-green-300 text-green-900 rounded p-2 border border-green-500 break-words"},[t._v(t._s(t.done))]):t._e(),t._v(" "),t.error?r("div",{staticClass:"bg-red-300 text-red-900 rounded p-2 border border-red-500 break-words"},[t._v(t._s(t.error))]):t._e()])])}),[],!1,null,"1c8e3f86",null);e.default=component.exports;installComponents(component,{Project:r(272).default})}}]);