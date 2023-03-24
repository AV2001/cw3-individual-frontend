(function(){"use strict";var t={8437:function(t,e,s){var r=s(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("h1",[t._v(t._s(t.sitename))]),e("p",{staticClass:"fa-solid fa-cart-shopping checkout",on:{click:function(e){t.displayLessonsPage=!t.displayLessonsPage}}},[e("span",{staticClass:"cart-count"},[t._v(t._s(t.cartItemCount))])])]),t.displayLessonsPage?e("div",[e("main",[e("section",{staticClass:"section-search"},[e("div",{staticClass:"search-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"text",name:"search",id:"search",placeholder:"Search by subject or location..."},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),e("div",{staticClass:"sorting-features"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortValue,expression:"sort.sortValue"}],attrs:{type:"radio",id:"price",value:"price"},domProps:{checked:t._q(t.sort.sortValue,"price")},on:{change:function(e){return t.$set(t.sort,"sortValue","price")}}}),e("label",{attrs:{for:"price"}},[t._v("Price")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortValue,expression:"sort.sortValue"}],attrs:{type:"radio",id:"subject",value:"subject"},domProps:{checked:t._q(t.sort.sortValue,"subject")},on:{change:function(e){return t.$set(t.sort,"sortValue","subject")}}}),e("label",{attrs:{for:"subject"}},[t._v("Subject")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortValue,expression:"sort.sortValue"}],attrs:{type:"radio",id:"availability",value:"availability"},domProps:{checked:t._q(t.sort.sortValue,"availability")},on:{change:function(e){return t.$set(t.sort,"sortValue","availability")}}}),e("label",{attrs:{for:"availability"}},[t._v("Availability")])]),e("div",{staticClass:"location"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortValue,expression:"sort.sortValue"}],attrs:{type:"radio",id:"location",value:"location"},domProps:{checked:t._q(t.sort.sortValue,"location")},on:{change:function(e){return t.$set(t.sort,"sortValue","location")}}}),e("label",{attrs:{for:"location"}},[t._v("Location")])])]),e("div",[e("div",{staticClass:"ascending-descending"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortOrder,expression:"sort.sortOrder"}],attrs:{type:"radio",name:"ascending-descending",id:"ascending",value:"ascending"},domProps:{checked:t._q(t.sort.sortOrder,"ascending")},on:{change:function(e){return t.$set(t.sort,"sortOrder","ascending")}}}),e("label",{attrs:{for:"ascending"}},[t._v("Ascending")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.sortOrder,expression:"sort.sortOrder"}],attrs:{type:"radio",name:"ascending-descending",id:"descending",value:"descending"},domProps:{checked:t._q(t.sort.sortOrder,"descending")},on:{change:function(e){return t.$set(t.sort,"sortOrder","descending")}}}),e("label",{attrs:{for:"descending"}},[t._v("Descending")])])])])]),e("LessonsComponent",{attrs:{lessons:t.searchTerm.length>0||t.sort.sortValue&&t.sort.sortOrder?t.sortedLessons:t.fetchedLessons},on:{"lesson-added":t.addToCart}})],1)]):e("div",[e("main",[e("CheckoutComponent",{attrs:{cart:t.cartItems},on:{"lesson-removed":t.removeLesson}}),0!==t.cartItemCount?e("div",[e("section",{staticClass:"section-checkout-form"},[e("form",{staticClass:"checkout-form"},[e("div",[e("label",{attrs:{for:"name"}},[t._v("Full Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fullName,expression:"form.fullName"}],attrs:{type:"text"},domProps:{value:t.form.fullName},on:{input:function(e){e.target.composing||t.$set(t.form,"fullName",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"phone-number"}},[t._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phoneNumber,expression:"form.phoneNumber"}],attrs:{type:"text"},domProps:{value:t.form.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.form,"phoneNumber",e.target.value)}}})]),t.checkoutFormValidation?e("button",{staticClass:"btn btn-submit-order",on:{click:e=>t.submitOrder("Order submitted successfully!",e)}},[t._v(" Submit ")]):e("button",{staticClass:"btn",staticStyle:{"pointer-events":"none"},attrs:{disabled:"disabled"}},[t._v(" Submit ")])])])]):t._e()],1)])])},a=[],n=(s(7658),function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"section-lessons"},t._l(t.lessons,(function(s,r){return e("figure",{key:"A"+r,staticClass:"lesson"},[e("img",{staticClass:"lesson-img",attrs:{src:s.image}}),e("div",{staticClass:"lesson-details"},[e("h2",{staticClass:"subject"},[t._v(t._s(s.subject))]),e("div",{staticClass:"lesson-details-extra"},[e("p",{staticClass:"location"},[e("span",{staticClass:"fa-solid fa-location-dot"}),t._v(" "+t._s(s.location)+" ")]),e("p",{staticClass:"price"},[e("span",{staticClass:"fa-solid fa-dollar-sign"}),t._v(" "+t._s(s.price)+" ")]),e("p",{staticClass:"spaces"},[e("span",[t._v("Spaces Left: ")]),t._v(" "+t._s(s.spacesLeft)+" ")])]),e("button",{staticClass:"btn btn-add-cart",attrs:{disabled:t.isLessonAvailable(s)},on:{click:function(e){return t.addToCart(s)}}},[e("span",{staticClass:"fa-solid fa-cart-shopping"}),t._v(" Add To Cart ")])])])})),0)])}),i=[],c={props:{lessons:{type:Array,required:!0}},methods:{addToCart(t){this.$emit("lesson-added",t)}},computed:{isLessonAvailable(){return t=>0===t.spacesLeft}}},l=c,u=s(1001),d=(0,u.Z)(l,n,i,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("div",[e("main",[t._m(0),t.isCheckoutPageEmpty?e("div",[e("h2",{staticClass:"heading-secondary"},[t._v(" There are no items in the cart. ")])]):e("div",[e("section",{staticClass:"section-lessons"},t._l(t.cart,(function(s,r){return e("figure",{key:"B"+r,staticClass:"lesson"},[e("img",{staticClass:"lesson-img",attrs:{src:s.image}}),e("div",{staticClass:"lesson-details"},[e("h2",{staticClass:"subject"},[t._v(" "+t._s(s.subject)+" ")]),e("div",{staticClass:"lesson-details-extra"},[e("p",{staticClass:"location"},[e("span",{staticClass:"fa-solid fa-location-dot"}),t._v(" "+t._s(s.location)+" ")]),e("p",{staticClass:"price"},[e("span",{staticClass:"fa-solid fa-sterling-sign"}),t._v(" "+t._s(s.price)+" ")])]),e("button",{staticClass:"btn btn-remove-cart",on:{click:function(e){return t.removeFromCart(s)}}},[e("span",{staticClass:"fa-solid fa-trash",staticStyle:{"pointer-events":"none"}}),t._v(" Remove ")])])])})),0)])])])},f=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"section-heading"},[e("h2",{staticClass:"heading-secondary"},[t._v("Checkout")])])}],h={props:{cart:{type:Array,required:!0}},methods:{removeFromCart(t){this.$emit("lesson-removed",t)}},computed:{isCheckoutPageEmpty(){return 0===this.cart.length},checkoutFormValidation(){const t=/^[A-Za-z\s]*$/,e=/^[0-9]{10}$/;return this.form.fullName.length>3&&t.test(this.form.fullName)&&e.test(this.form.phoneNumber)}}},v=h,b=(0,u.Z)(v,p,f,!1,null,null,null),g=b.exports,C={components:{LessonsComponent:m,CheckoutComponent:g},data(){return{sitename:"Lesson Store",fetchedLessons:[],cartItems:[],displayLessonsPage:!0,searchTerm:"",sort:{sortValue:"",sortOrder:""},form:{fullName:"",phoneNumber:""}}},created(){fetch("https://cw3-individual-backend.herokuapp.com/collection/lessons").then((t=>t.json())).then((t=>this.fetchedLessons=t)).catch((t=>console.log(t)))},methods:{addToCart(t){this.cartItems.push(t),t.spacesLeft--},removeLesson(t){t.spacesLeft++,this.cartItems.splice(this.cartItems.indexOf(t),1)},submitOrder(t,e){if(e){e.preventDefault();const t={name:this.form.fullName,phoneNumber:this.form.phoneNumber,lesson:this.cartItems};fetch("https://cw3-individual-backend.herokuapp.com/collection/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),fetch("https://cw3-individual-backend.herokuapp.com/collection/lessons",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.cartItems)})}alert(t),this.form.fullName="",this.form.phoneNumber=null,this.cartItems=[]}},computed:{cartItemCount(){return this.cartItems.length},sortedLessons(){let t=[...this.fetchedLessons];if(this.searchTerm.length>0){const e=this.searchTerm.toLowerCase();return t.filter((t=>t.subject.toLowerCase().includes(e)||t.location.toLowerCase().includes(e)))}if("price"===this.sort.sortValue){if("ascending"===this.sort.sortOrder)return t.sort(((t,e)=>t.price-e.price));if("descending"===this.sort.sortOrder)return t.sort(((t,e)=>e.price-t.price))}if("subject"===this.sort.sortValue)return t.sort(((t,e)=>t.subject>e.subject?1:t.subject<e.subject?-1:0)),"ascending"===this.sort.sortOrder?t:t.reverse();if("availability"===this.sort.sortValue){if("ascending"===this.sort.sortOrder)return t.sort(((t,e)=>t.spacesLeft-e.spacesLeft));if("descending"===this.sort.sortOrder)return t.sort(((t,e)=>e.spacesLeft-t.spacesLeft))}return"location"===this.sort.sortValue?(t.sort(((t,e)=>t.location>e.location?1:t.location<e.location?-1:0)),"ascending"===this.sort.sortOrder?t:t.reverse()):t},checkoutFormValidation(){const t=/^[A-Za-z\s]*$/,e=/^[0-9]{10}$/;return this.form.fullName.length>3&&t.test(this.form.fullName)&&e.test(this.form.phoneNumber)}}},_=C,y=(0,u.Z)(_,o,a,!1,null,null,null),k=y.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(k)}).$mount("#app")}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,o,a){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(i=!1,a<n&&(n=a));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,n=r[0],i=r[1],c=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(c)var u=c(s)}for(e&&e(r);l<n.length;l++)a=n[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(8437)}));r=s.O(r)})();
//# sourceMappingURL=app.134a321f.js.map