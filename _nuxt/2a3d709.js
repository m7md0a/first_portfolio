(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(t,e,l){"use strict";l.r(e);var r={props:["project","dashboard","img"],data:function(){return{isOpen:!1,projectKey:null}},methods:{isSure:function(t){this.isOpen=!this.isOpen,this.projectKey=t},deleteProject:function(){this.isOpen=!this.isOpen,this.$store.dispatch("projects/deleteData",this.projectKey)}},computed:{user:function(){return this.$store.state.user}}},c=l(30),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full h-56 md:h-64 relative group rounded-md"},[t.dashboard?l("img",{staticClass:"w-full h-56 md:h-64 rounded-md",attrs:{src:t.img,alt:t.project.name}}):l("img",{staticClass:"w-full h-56 md:h-64 rounded-md",attrs:{src:t.project.imageUrl,alt:t.project.name}}),t._v(" "),t.user&&!t.dashboard?l("a",{staticClass:"absolute cursor-pointer right-3 rtl:right-auto rtl:left-3 top-3 p-1.5 bg-red-500 text-sm text-white rounded",on:{click:function(e){return t.isSure(t.project.id)}}},[t._v("Delete")]):t._e(),t._v(" "),l("div",{staticClass:"absolute -bottom-16 w-full"},[l("div",{staticClass:"bg-white dark:bg-gray-800 p-5 mx-7 md:mx-9 center rounded space-y-3 group-hover:bg-me text-gray-600 dark:text-gray-200 group-hover:text-gray-100"},[l("h4",{staticClass:"text-xl text-center"},[t._v(t._s(t.project.name))]),t._v(" "),l("div",{staticClass:"flex space-x-2"},[t.project.github&&"false"!=t.project.github&&t.project.github.startsWith("http")?l("a",{staticClass:"text-me hover:scale-110 duration-300",attrs:{href:t.project.github,target:"_blank"}},[l("svg",{staticClass:"w-9 h-9",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",version:"1.1"}},[l("g",{attrs:{id:"brand",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[l("g",{attrs:{id:"github",fill:"#000000"}},[l("path",{attrs:{d:"M12,2 C6.475,2 2,6.475 2,12 C2,16.425 4.8625,20.1625 8.8375,21.4875 C9.3375,21.575 9.525,21.275 9.525,21.0125 C9.525,20.775 9.5125,19.9875 9.5125,19.15 C7,19.6125 6.35,18.5375 6.15,17.975 C6.0375,17.6875 5.55,16.8 5.125,16.5625 C4.775,16.375 4.275,15.9125 5.1125,15.9 C5.9,15.8875 6.4625,16.625 6.65,16.925 C7.55,18.4375 8.9875,18.0125 9.5625,17.75 C9.65,17.1 9.9125,16.6625 10.2,16.4125 C7.975,16.1625 5.65,15.3 5.65,11.475 C5.65,10.3875 6.0375,9.4875 6.675,8.7875 C6.575,8.5375 6.225,7.5125 6.775,6.1375 C6.775,6.1375 7.6125,5.875 9.525,7.1625 C10.325,6.9375 11.175,6.825 12.025,6.825 C12.875,6.825 13.725,6.9375 14.525,7.1625 C16.4375,5.8625 17.275,6.1375 17.275,6.1375 C17.825,7.5125 17.475,8.5375 17.375,8.7875 C18.0125,9.4875 18.4,10.375 18.4,11.475 C18.4,15.3125 16.0625,16.1625 13.8375,16.4125 C14.2,16.725 14.5125,17.325 14.5125,18.2625 C14.5125,19.6 14.5,20.675 14.5,21.0125 C14.5,21.275 14.6875,21.5875 15.1875,21.4875 C19.1375,20.1625 22,16.4125 22,12 C22,6.475 17.525,2 12,2 L12,2 Z",id:"Shape"}})])])])]):t._e(),t._v(" "),l("a",{staticClass:"text-me hover:scale-110 duration-300",attrs:{href:t.project.url,target:"_blank"}},[l("svg",{staticClass:"w-8 h-8",staticStyle:{"enable-background":"new 0 0 496.158 496.158"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 496.158 496.158","xml:space":"preserve"}},[l("path",{staticStyle:{fill:"rgb(17 30 50 / 90%)"},attrs:{d:"M0,248.085C0,111.064,111.07,0.003,248.076,0.003c137.012,0,248.082,111.061,248.082,248.082  c0,137.002-111.07,248.07-248.082,248.07C111.07,496.155,0,385.087,0,248.085z"}}),t._v(" "),l("g",[l("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M394.463,151.309l-49.615-49.614c-10.727-10.728-28.119-10.726-38.844,0l-76.631,76.63   c-10.726,10.728-10.727,28.119-0.001,38.847l49.615,49.614c10.727,10.727,28.119,10.726,38.845-0.002l76.631-76.63   C405.188,179.429,405.189,162.036,394.463,151.309z M312.59,235.423c-6.289,6.288-16.484,6.289-22.772,0.001l-29.084-29.084   c-6.288-6.288-6.287-16.483,0.001-22.772l50.511-50.511c6.287-6.287,16.482-6.288,22.771,0l29.084,29.085   c6.288,6.287,6.287,16.482,0,22.77L312.59,235.423z"}}),t._v(" "),l("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M266.786,278.986l-49.614-49.614c-10.727-10.727-28.119-10.726-38.845,0l-76.631,76.632   c-10.726,10.726-10.727,28.118,0,38.844l49.615,49.615c10.726,10.727,28.119,10.725,38.844,0l76.632-76.633   C277.511,307.105,277.513,289.713,266.786,278.986z M184.912,363.1c-6.288,6.288-16.482,6.29-22.771,0.001l-29.084-29.084   c-6.289-6.288-6.288-16.483,0-22.771l50.512-50.512c6.287-6.287,16.482-6.288,22.771,0l29.084,29.084   c6.288,6.289,6.287,16.484,0,22.771L184.912,363.1z"}})]),t._v(" "),l("path",{staticStyle:{fill:"#48A1AF"},attrs:{d:"M306.907,191.673l-2.42-2.421c-7.742-7.743-20.34-7.743-28.083,0l-87.151,87.151  c-7.742,7.742-7.742,20.34,0,28.082l2.42,2.421c7.742,7.741,20.34,7.741,28.083,0l87.151-87.152  C314.649,212.013,314.649,199.414,306.907,191.673z"}}),t._v(" "),l("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M215.398,302.548c-5.348,5.348-14.02,5.349-19.368,0.001l-2.421-2.421  c-5.348-5.348-5.348-14.02,0-19.367l87.152-87.152c5.348-5.349,14.019-5.348,19.368,0.002l2.42,2.42  c5.347,5.348,5.349,14.019,0,19.366L215.398,302.548z"}})])])]),t._v(" "),l("div",{staticClass:"flex flex-wrap gap-2 text-sm"},t._l(t.project.tech,(function(i,t){return l("img",{key:t+"h",staticClass:"w-auto h-6",attrs:{src:i.url,alt:"",srcset:""}})})),0)])]),t._v(" "),l("div",{staticClass:"absolute right-3 top-12 z-50 bg-white dark:bg-gray-900 block rounded p-2",class:{hidden:!t.isOpen}},[l("div",{staticClass:"w-full flex-1"},[t._v("\n            Do you sure ?\n        ")]),t._v(" "),l("div",{staticClass:"flex justify-between space-x-2"},[l("button",{staticClass:"text-blue-500 hover:bg-gray-500 hover:bg-opacity-20 p-1",on:{click:t.isSure}},[t._v("Close")]),t._v(" "),l("button",{staticClass:"text-red-500 hover:bg-gray-500 hover:bg-opacity-20 p-1",on:{click:t.deleteProject}},[t._v("Delete")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);