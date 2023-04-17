(function(){"use strict";var t={6999:function(t,o,e){var a=e(9242),s=e(3396);function n(t,o,e,a,n,r){const l=(0,s.up)("NavbarView"),i=(0,s.up)("router-view"),c=(0,s.up)("FooterView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{cartCount:n.cartCount,onResetCartCount:r.resetCartCount},null,8,["cartCount","onResetCartCount"]),n.products?((0,s.wg)(),(0,s.j4)(i,{key:0,style:{"min-height":"60vh"},baseURL:n.baseURL,products:n.products,onFetchData:r.fetchData},null,8,["baseURL","products","onFetchData"])):(0,s.kq)("",!0),(0,s.Wm)(c)],64)}var r=e(7139),l=e.p+"img/icon.ccba7c35.png";const i=t=>((0,s.dD)("data-v-2910cad7"),t=t(),(0,s.Cn)(),t),c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},d=i((()=>(0,s._)("img",{id:"logo",src:l},null,-1))),u=i((()=>(0,s._)("p",null,"Guava",-1))),p=i((()=>(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1))),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h=(0,s.uE)('<form class="form-inline ml-auto mr-auto" data-v-2910cad7><div class="input-group" data-v-2910cad7><input size="100" type="text" class="form-control" placeholder="Search Items" aria-label="Username" aria-describedby="basic-addon1" data-v-2910cad7><div class="input-group-prepend" data-v-2910cad7><span class="input-group-text" id="search-button-navbar" data-v-2910cad7><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" data-v-2910cad7><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" data-v-2910cad7></path></svg></span></div></div></form>',1),g={class:"navbar-nav ml-auto"},f={class:"nav-item dropdown"},v=i((()=>(0,s._)("a",{class:"nav-link text-light dropdown-toggle",href:"#",id:"navbarAccount","data-toggle":"dropdown"}," Browse ",-1))),w={class:"dropdown-menu","aria-labelledby":"navbarAccount"},_={class:"nav-item dropdown"},b=i((()=>(0,s._)("a",{class:"nav-link dropdown-toggle text-light",href:"#",id:"navbarAccount","data-toggle":"dropdown"}," Accounts ",-1))),y={class:"dropdown-menu","aria-labelledby":"navbarAccount"},k={class:"nav-item"},x={id:"cart",style:{position:"relative"}},C={id:"nav-cart-count"},D=i((()=>(0,s._)("i",{class:"fa fa-shopping-cart",style:{"font-size":"36px"}},null,-1)));function P(t,o,e,a,n,l){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",c,[(0,s.Wm)(i,{class:"navbar-brand",to:{name:"HomeView"}},{default:(0,s.w5)((()=>[d,u])),_:1}),p,(0,s._)("div",m,[h,(0,s._)("ul",g,[(0,s._)("li",f,[v,(0,s._)("div",w,[(0,s.Wm)(i,{class:"dropdown-item",to:{name:"HomeView"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Home ")])),_:1}),(0,s.Wm)(i,{class:"dropdown-item",to:{name:"HomeView"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Product ")])),_:1}),(0,s.Wm)(i,{class:"dropdown-item",to:{name:"HomeView"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Category ")])),_:1})])]),(0,s._)("li",_,[b,(0,s._)("div",y,[n.token?((0,s.wg)(),(0,s.j4)(i,{key:0,class:"dropdown-item",to:{name:"WishList"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Wishlist ")])),_:1})):(0,s.kq)("",!0),n.token?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(i,{key:1,class:"dropdown-item",to:{name:"SignupView"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign up ")])),_:1})),n.token?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(i,{key:2,class:"dropdown-item",to:{name:"SigninView"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign in ")])),_:1})),n.token?((0,s.wg)(),(0,s.iD)("a",{key:3,class:"dropdown-item",href:"#",onClick:o[0]||(o[0]=(...t)=>l.signout&&l.signout(...t))},"Sign out ")):(0,s.kq)("",!0)])]),(0,s._)("li",k,[(0,s._)("div",x,[(0,s._)("span",C,(0,r.zw)(e.cartCount),1),(0,s.Wm)(i,{class:"text-light",to:{name:"CartView"}},{default:(0,s.w5)((()=>[D])),_:1})])])])])])}e(7658);var U=e(3495),I=e.n(U),A={name:"NavbarView",props:["cartCount"],data(){return{token:null}},methods:{signout(){localStorage.removeItem("token"),this.token=null,I()({text:"Logged you out. Visit again",icon:"success"}),this.$emit("resetCartCount"),this.$router.push({name:"HomeView"})}},mounted(){this.token=localStorage.getItem("token")}},V=e(89);const S=(0,V.Z)(A,[["render",P],["__scopeId","data-v-2910cad7"]]);var L=S;const $=(0,s.uE)('<div class="container pt-5"><div class="row"><div class="col-md-3 col-6"><ul style="list-style-type:none;"><li class="text-light font-weigh-bold pb-2"> Get to know us</li><li><a class="footer-link font-weight-light" href="#"> About us </a></li><li><a class="footer-link font-weight-light" href="#"> Android App </a></li><li><a class="footer-link font-weight-light" href="#"> Ios App </a></li></ul></div><div class="col-md-3 col-6"><ul style="list-style-type:none;"><li class="text-light font-weigh-bold pb-2"> Connect with us</li><li><a class="footer-link font-weight-light" href="#"> About us </a></li><li><a class="footer-link font-weight-light" href="#"> Android App </a></li><li><a class="footer-link font-weight-light" href="#"> Ios App </a></li></ul></div><div class="col-md-3 col-6"><ul style="list-style-type:none;"><li class="text-light font-weigh-bold pb-2"> Make Money with us</li><li><a class="footer-link font-weight-light" href="#"> About us </a></li><li><a class="footer-link font-weight-light" href="#"> Android App </a></li><li><a class="footer-link font-weight-light" href="#"> Ios App </a></li></ul></div><div class="col-md-3 col-6"><ul style="list-style-type:none;"><li class="text-light font-weigh-bold pb-2"> Let us help you</li><li><a class="footer-link font-weight-light" href="#"> About us </a></li><li><a class="footer-link font-weight-light" href="#"> Android App </a></li><li><a class="footer-link font-weight-light" href="#"> Ios App </a></li></ul></div></div></div>',1),Z=[$];function R(t,o,e,a,n,r){return(0,s.wg)(),(0,s.iD)("footer",null,Z)}var q={};const W=(0,V.Z)(q,[["render",R]]);var z=W,N=e(4161),j={data(){return{baseURL:"http://localhost:8080/",products:null,cartCount:0}},methods:{async fetchData(){await N.Z.get(this.baseURL+"product/").then((t=>{this.products=t.data})).catch((t=>console.log("err",t))),this.token&&N.Z.get(`${this.baseURL}cart/?token=${this.token}`).then((t=>{const o=t.data;this.cartCount=o.cartItems.length})).catch((t=>console.log("err",t)))},resetCartCount(){this.cartCount=0}},mounted(){this.token=localStorage.getItem("token"),this.fetchData()},components:{FooterView:z,NavbarView:L}};const T=(0,V.Z)(j,[["render",n]]);var F=T,B=e(2483);const H={class:"container"},O={class:"row"};function E(t,o,e,a,n,r){const l=(0,s.up)("ProductBox");return(0,s.wg)(),(0,s.iD)("div",H,[(0,s._)("div",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.productSize,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"},[(0,s.Wm)(l,{product:e.products[t-1]},null,8,["product"])])))),128))])])}const M=t=>((0,s.dD)("data-v-3d91a15a"),t=t(),(0,s.Cn)(),t),Y={class:"card w-100 h-100"},K={class:"embed-responsive embed-responsive-16by9"},G=["src"],Q={class:"card-body"},J={class:"card-title"},X={class:"card-text"},tt={class:"card-text"},ot=M((()=>(0,s._)("a",{href:"",class:"btn btn-primary"},"Add to Cart",-1)));function et(t,o,e,a,n,l){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",K,[(0,s._)("img",{src:e.product.imagePath,alt:"Card image cap",class:"card-img embed-responsive-item"},null,8,G)]),(0,s._)("div",Q,[(0,s.Wm)(i,{to:{name:"ShowDetails",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s._)("h5",J,(0,r.zw)(e.product.name),1)])),_:1},8,["to"]),(0,s._)("p",X," ksh "+(0,r.zw)(e.product.price),1),(0,s._)("p",tt,(0,r.zw)(e.product.description.substring(0,65))+"... ",1),ot])])}var at={name:"ProductBox",props:["product"],methods:{}};const st=(0,V.Z)(at,[["render",et],["__scopeId","data-v-3d91a15a"]]);var nt=st,rt={name:"HomeView",components:{ProductBox:nt},props:["products"],data(){return{productSize:0}},mounted(){this.productSize=Math.min(8,this.products.length)}};const lt=(0,V.Z)(rt,[["render",E]]);var it=lt;const ct={class:"container"},dt={class:"row"},ut={class:"col-12 text-center"},pt=(0,s._)("h3",{class:"pt-3"},"Our Products",-1),mt=(0,s._)("button",{class:"btn",style:{float:"right"}},"Add Product",-1),ht={class:"row"};function gt(t,o,e,a,n,r){const l=(0,s.up)("router-link"),i=(0,s.up)("ProductBox");return(0,s.wg)(),(0,s.iD)("div",ct,[(0,s._)("div",dt,[(0,s._)("div",ut,[pt,(0,s.Wm)(l,{to:{name:"AddProduct"}},{default:(0,s.w5)((()=>[mt])),_:1})])]),(0,s._)("div",ht,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"col-xl-4 col-md-6 col-12 pt-3 d-flex"},[(0,s.Wm)(i,{product:t},null,8,["product"])])))),128))])])}const ft=e(7218);var vt={name:"ProductView",components:{ProductBox:nt},data(){return{baseURL:"http://localhost:8080",products:[]}},methods:{async getProducts(){await ft.get(`${this.baseURL}/product/`).then((t=>this.products=t.data)).catch((t=>console.log(t))),console.log(this.products)}},mounted(){this.getProducts()}};const wt=(0,V.Z)(vt,[["render",gt]]);var _t=wt;const bt={class:"container py-4"},yt=(0,s._)("br",null,null,-1),kt=(0,s._)("button",{class:"btn btn-primary btn-lg"}," Admin Product",-1);function xt(t,o,e,a,n,r){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",bt,[yt,(0,s.Wm)(l,{to:{name:"AdminProduct"}},{default:(0,s.w5)((()=>[kt])),_:1})])}var Ct={};const Dt=(0,V.Z)(Ct,[["render",xt]]);var Pt=Dt;const Ut={class:"container"},It=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-12 text-center"},[(0,s._)("h3",{class:"pt-3"},"Add Product")])],-1),At={class:"row"},Vt=(0,s._)("div",{class:"col-3"},null,-1),St={class:"col-6"},Lt={action:""},$t={class:"form-group"},Zt=(0,s._)("label",{for:""},"Name",-1),Rt={class:"form-group"},qt=(0,s._)("label",{for:""},"Description",-1),Wt={class:"form-group"},zt=(0,s._)("label",{for:""},"Price",-1),Nt={class:"form-group"},jt=(0,s._)("label",{for:""},"File",-1),Tt=(0,s._)("div",{class:"col-3"},null,-1);function Ft(t,o,e,n,r,l){return(0,s.wg)(),(0,s.iD)("div",Ut,[It,(0,s._)("div",At,[Vt,(0,s._)("div",St,[(0,s._)("form",Lt,[(0,s._)("div",$t,[Zt,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>r.productDetails.name=t)},null,512),[[a.nr,r.productDetails.name]])]),(0,s._)("div",Rt,[qt,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>r.productDetails.description=t)},null,512),[[a.nr,r.productDetails.description]])]),(0,s._)("div",Wt,[zt,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>r.productDetails.price=t)},null,512),[[a.nr,r.productDetails.price]])]),(0,s._)("div",Nt,[jt,(0,s._)("input",{type:"file",class:"form-control",onChange:o[3]||(o[3]=(...t)=>l.onFileSelected&&l.onFileSelected(...t))},null,32)]),(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:o[4]||(o[4]=(...t)=>l.addProduct&&l.addProduct(...t))},"Submit")])]),Tt])])}const Bt=e(3495);var Ht={data(){return{productDetails:{name:"",price:"",description:""},path:null}},methods:{onFileSelected(t){this.path=t.target.files[0]},addProduct(){const t=new FormData;t.append("productDetails",JSON.stringify(this.productDetails)),t.append("img",this.path),console.log(t);const o="http://localhost:8080";(0,N.Z)({method:"post",url:`${o}/product/add-product`,data:t,headers:{"Content-Type":"multipart/form-data"}}).then((()=>{Bt({text:"Product added successfully",icon:"success"})})).catch((t=>{console.log(t)}))}}};const Ot=(0,V.Z)(Ht,[["render",Ft]]);var Et=Ot;const Mt={class:"container"},Yt=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-12 text-center"},[(0,s._)("h4",{class:"pt-3"}," Edit Product")])],-1),Kt={class:"row"},Gt=(0,s._)("div",{class:"col-3"},null,-1),Qt={class:"col-6"},Jt={key:0},Xt={class:"form-group"},to=(0,s._)("label",null,"Name",-1),oo={class:"form-group"},eo=(0,s._)("label",null,"Description",-1),ao={class:"form-group"},so=(0,s._)("label",null,"Image URL",-1),no={class:"form-group"},ro=(0,s._)("label",null,"Price",-1),lo=(0,s._)("div",{class:"col-3"},null,-1);function io(t,o,e,n,r,l){return(0,s.wg)(),(0,s.iD)("div",Mt,[Yt,(0,s._)("div",Kt,[Gt,(0,s._)("div",Qt,[r.product?((0,s.wg)(),(0,s.iD)("form",Jt,[(0,s._)("div",Xt,[to,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>r.product.name=t),required:""},null,512),[[a.nr,r.product.name]])]),(0,s._)("div",oo,[eo,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>r.product.description=t),required:""},null,512),[[a.nr,r.product.description]])]),(0,s._)("div",ao,[so,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>r.product.imagePath=t),required:""},null,512),[[a.nr,r.product.imagePath]])]),(0,s._)("div",no,[ro,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=t=>r.product.price=t),required:""},null,512),[[a.nr,r.product.price]])]),(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:o[4]||(o[4]=(...t)=>l.editProduct&&l.editProduct(...t))},"Submit")])):(0,s.kq)("",!0)]),lo])])}var co={data(){return{product:null,id:null}},props:["baseURL","products"],methods:{async editProduct(){console.log("product",this.product),await N.Z.post(`${this.baseURL}product/update/${this.id}`,this.product).then((()=>{this.$emit("fetchData"),this.$router.push({name:"AdminProduct"}),I()({text:"product has been updated successfully",icon:"success"})})).catch((t=>console.log("err",t)))}},mounted(){this.id=this.$route.params.id,this.product=this.products.find((t=>t.id==this.id))}};const uo=(0,V.Z)(co,[["render",io]]);var po=uo;const mo={class:"container"},ho={class:"row pt-5"},go=(0,s._)("div",{class:"col-md-1"},null,-1),fo={class:"col-md-4 col-12"},vo=["src"],wo={class:"col-md-6 col-12 pt-3 pt-md-0"},_o={class:"font-weight-bold"},bo={class:"features pt-3"},yo=(0,s._)("h5",null,[(0,s._)("strong",null,"Features")],-1),ko={class:"d-flex flex-row justify-content-between"},xo={class:"input-group col-md-3 col-4 p-0"},Co=(0,s._)("div",{class:"input-group-prepend"},[(0,s._)("span",{class:"input-group-text"},"Quantity")],-1),Do={class:"input-group col-md-3 col-4 p-0"};function Po(t,o,e,n,l,i){return(0,s.wg)(),(0,s.iD)("div",mo,[(0,s._)("div",ho,[go,(0,s._)("div",fo,[(0,s._)("img",{src:l.product.imagePath,class:"img-fluid"},null,8,vo)]),(0,s._)("div",wo,[(0,s._)("h4",null,(0,r.zw)(l.product.name),1),(0,s._)("h6",_o,"Ksh "+(0,r.zw)(l.product.price),1),(0,s._)("div",bo,[yo,(0,s._)("ul",null,[(0,s._)("li",null,(0,r.zw)(l.product.description),1)])]),(0,s._)("div",ko,[(0,s._)("div",xo,[Co,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>l.quantity=t)},null,512),[[a.nr,l.quantity]])]),(0,s._)("div",Do,[(0,s._)("button",{class:"btn",type:"button",id:"add-to-cart-button",onClick:o[1]||(o[1]=(...t)=>i.addToCart&&i.addToCart(...t))}," Add to Cart ")])])])])])}var Uo={data(){return{product:{},quantity:1}},props:["baseURL","products"],methods:{addToWishlist(){this.token?N.Z:I()({text:"please login to add item in wishlist",icon:"error"})},addToCart(){this.token?N.Z.post(`${this.baseURL}cart/add?token=${this.token}`,{productId:this.id,quantity:this.quantity}).then((t=>{201==t.status&&(I()({text:"Product added in cart",icon:"success"}),this.$emit("fetchData"))})).catch((t=>console.log("err",t))):I()({text:"please login to add item in cart",icon:"error"})}},mounted(){this.id=this.$route.params.id,this.product=this.products.find((t=>t.id==this.id)),this.token=localStorage.getItem("token")}};const Io=(0,V.Z)(Uo,[["render",Po]]);var Ao=Io;const Vo={class:"container"},So=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-12 text-center"},[(0,s._)("h4",{class:"pt-3"},"Your WishList")])],-1),Lo={class:"row"};function $o(t,o,e,a,n,r){const l=(0,s.up)("ProductBox");return(0,s.wg)(),(0,s.iD)("div",Vo,[So,(0,s._)("div",Lo,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"},[(0,s.Wm)(l,{product:t},null,8,["product"])])))),128))])])}var Zo={components:{ProductBox:nt},data(){return{token:null,products:null}},props:["baseURL"],methods:{fetchWishList(){N.Z.get(`${this.baseURL}wishlist/${this.token}`).then((t=>{this.products=t.data})).catch((t=>{console.log("err",t)}))}},mounted(){this.token=localStorage.getItem("token"),this.fetchWishList()}};const Ro=(0,V.Z)(Zo,[["render",$o]]);var qo=Ro;const Wo=t=>((0,s.dD)("data-v-cc642afa"),t=t(),(0,s.Cn)(),t),zo={class:"container"},No=Wo((()=>(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-12 text-center pt-3"})],-1))),jo={class:"row"},To={class:"col-12 justify-content-center d-flex pt-3"},Fo={id:"signup",class:"flex-item border"},Bo=Wo((()=>(0,s._)("h2",{class:"pt-4 pl-4"},"Create Account",-1))),Ho={class:"form-group"},Oo=Wo((()=>(0,s._)("label",{for:"Email"},"Email",-1))),Eo={class:"form-row"},Mo={class:"col"},Yo={class:"form-group"},Ko=Wo((()=>(0,s._)("label",null," First Name",-1))),Go={class:"col"},Qo={class:"form-group"},Jo=Wo((()=>(0,s._)("label",null," Last Name",-1))),Xo={class:"form-group"},te=Wo((()=>(0,s._)("label",{for:"Password"}," Password",-1))),oe={class:"form-group"},ee=Wo((()=>(0,s._)("label",{for:"Password"}," Confirm password",-1))),ae=Wo((()=>(0,s._)("button",{class:"btn btn-primary mt-2"},"Create Account",-1)));function se(t,o,e,n,r,l){return(0,s.wg)(),(0,s.iD)("div",zo,[No,(0,s._)("div",jo,[(0,s._)("div",To,[(0,s._)("div",Fo,[Bo,(0,s._)("form",{onSubmit:o[5]||(o[5]=(...t)=>l.signup&&l.signup(...t)),class:"pt-4 pl-4 pr-4"},[(0,s._)("div",Ho,[Oo,(0,s.wy)((0,s._)("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=t=>r.email=t),class:"form-control",required:""},null,512),[[a.nr,r.email]])]),(0,s._)("div",Eo,[(0,s._)("div",Mo,[(0,s._)("div",Yo,[Ko,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>r.firstName=t),class:"form-control",required:""},null,512),[[a.nr,r.firstName]])])]),(0,s._)("div",Go,[(0,s._)("div",Qo,[Jo,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>r.lastName=t),class:"form-control",required:""},null,512),[[a.nr,r.lastName]])])])]),(0,s._)("div",Xo,[te,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":o[3]||(o[3]=t=>r.password=t),class:"form-control",required:""},null,512),[[a.nr,r.password]])]),(0,s._)("div",oe,[ee,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":o[4]||(o[4]=t=>r.confirmPassword=t),class:"form-control",required:""},null,512),[[a.nr,r.confirmPassword]])]),ae],32)])])])])}var ne={props:["baseURL"],data(){return{email:null,firstName:null,lastName:null,password:null,confirmPassword:null}},methods:{async signup(t){if(t.preventDefault(),this.password===this.confirmPassword){const t={email:this.email,firstName:this.firstName,lastName:this.lastName,password:this.password};console.log("user",t),await N.Z.post(`${this.baseURL}user/signup`,t).then((()=>{this.$router.replace("/"),I()({text:"User signup successful, please login",icon:"success"})})).catch((t=>console.log("err",t)))}else I()({text:"passwords dont match",icon:"error"})}}};const re=(0,V.Z)(ne,[["render",se],["__scopeId","data-v-cc642afa"]]);var le=re;const ie=t=>((0,s.dD)("data-v-73595e90"),t=t(),(0,s.Cn)(),t),ce={class:"conatiner"},de={class:"row"},ue={class:"col-12 justify-content-center d-flex flex-row pt-5"},pe={id:"signin",class:"flext-item border"},me=ie((()=>(0,s._)("h2",{class:"pt-4"},"Sign-In",-1))),he={class:"form-group"},ge=ie((()=>(0,s._)("label",null,"Email ",-1))),fe={class:"form-group"},ve=ie((()=>(0,s._)("label",null,"Password ",-1))),we=ie((()=>(0,s._)("button",{class:"btn btn-primary mt-2 py-0"},"Continue",-1)));function _e(t,o,e,n,r,l){return(0,s.wg)(),(0,s.iD)("div",ce,[(0,s._)("div",de,[(0,s._)("div",ue,[(0,s._)("div",pe,[me,(0,s._)("form",{onSubmit:o[2]||(o[2]=(...t)=>l.signin&&l.signin(...t)),class:"form-group pt-4 pl-4 pr-4"},[(0,s._)("div",he,[ge,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>r.email=t),type:"email",class:"form-control"},null,512),[[a.nr,r.email]])]),(0,s._)("div",fe,[ve,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>r.password=t),type:"password",class:"form-control"},null,512),[[a.nr,r.password]])]),we],32)])])])])}var be={props:["baseURL"],data(){return{email:null,password:null}},methods:{async signin(t){t.preventDefault();const o={email:this.email,password:this.password};await N.Z.post(`${this.baseURL}user/signin`,o).then((t=>{localStorage.setItem("token",t.data.token),I()({text:"Login successful",icon:"success"}),this.$emit("fetchData"),this.$router.push({name:"HomeView"})})).catch((t=>console.log("err",t)))}}};const ye=(0,V.Z)(be,[["render",_e],["__scopeId","data-v-73595e90"]]);var ke=ye;const xe=t=>((0,s.dD)("data-v-797f4abd"),t=t(),(0,s.Cn)(),t),Ce={class:"container"},De=xe((()=>(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-12 text-center"},[(0,s._)("h3",{class:"pt-3"}," Shopping cart ")])],-1))),Pe=xe((()=>(0,s._)("div",{class:"col-2"},null,-1))),Ue={class:"col-md-3 embed-responsive embed-responsive-16by9"},Ie=["src"],Ae={class:"col-md-5 px-3"},Ve={class:"card-block px-3"},Se={class:"card-title"},Le={class:"mb-0 font-weight-bold",id:"item-price"},$e={class:"mb-0",style:{float:"left"}},Ze={class:"mb-0",style:{float:"right"}},Re={class:"font-weight-bold"},qe=xe((()=>(0,s._)("br",null,null,-1))),We=["onClick"],ze=xe((()=>(0,s._)("div",{class:"col-2"},null,-1))),Ne=xe((()=>(0,s._)("div",{class:"col-12"},[(0,s._)("hr")],-1))),je={class:"total-cost pt-2 text-right"};function Te(t,o,e,a,n,l){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Ce,[De,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.cartItems,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"row mt-2 pt-3 justify-content-around"},[Pe,(0,s._)("div",Ue,[(0,s._)("img",{src:t.product.imagePath,alt:"",class:"w-100 card-image-top embed-responsive-item",style:{"object-fit":"cover"}},null,8,Ie)]),(0,s._)("div",Ae,[(0,s._)("div",Ve,[(0,s._)("h6",Se,[(0,s.Wm)(i,{to:{name:"ShowDetails",params:{id:t.product.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(t.product.name),1)])),_:2},1032,["to"])]),(0,s._)("p",Le," ksh "+(0,r.zw)(t.product.price)+" per unit ",1),(0,s._)("p",$e," Quantity:"+(0,r.zw)(t.quantity),1)]),(0,s._)("p",Ze,[(0,s.Uk)(" Total: "),(0,s._)("span",Re," ksh "+(0,r.zw)(t.product.price*t.quantity),1)]),qe,(0,s._)("a",{href:"#",class:"text-right",onClick:o=>l.deleteItem(t.id)},"Remove from cart ",8,We)]),ze,Ne])))),128)),(0,s._)("div",je,[(0,s._)("h5",null,"Total : ksh"+(0,r.zw)(n.totalCost.toFixed(2)),1),(0,s._)("button",{type:"button",class:"btn btn-primary confirm",onClick:o[0]||(o[0]=(...t)=>l.checkout&&l.checkout(...t))}," Confirm order ")])])}var Fe={data(){return{cartItems:[],token:null,totalCost:0}},props:["baseURL"],methods:{listCartItems(){N.Z.get(`${this.baseURL}cart/?token=${this.token}`).then((t=>{const o=t.data;this.cartItems=o.cartItems,this.totalCost=o.totalCost})).catch((t=>console.log("err",t)))},deleteItem(t){N.Z["delete"](`${this.baseURL}cart/delete/${t}?token=${this.token}`).then((t=>{200==t.status&&this.$router.go(0)})).catch((t=>console.log("err",t)))},checkout(){this.$router.push({name:"CheckoutView"})}},mounted(){this.token=localStorage.getItem("token"),this.listCartItems()}};const Be=(0,V.Z)(Fe,[["render",Te],["__scopeId","data-v-797f4abd"]]);var He=Be;const Oe={class:"text-center"},Ee=(0,s._)("h1",null,"Success",-1),Me=[Ee];function Ye(t,o,e,a,n,r){return(0,s.wg)(),(0,s.iD)("div",Oe,Me)}var Ke={};const Ge=(0,V.Z)(Ke,[["render",Ye]]);var Qe=Ge;const Je={class:"text-center"},Xe=(0,s._)("h1",null,"Failed",-1),ta=[Xe];function oa(t,o,e,a,n,r){return(0,s.wg)(),(0,s.iD)("div",Je,ta)}var ea={};const aa=(0,V.Z)(ea,[["render",oa]]);var sa=aa;const na=t=>((0,s.dD)("data-v-bdbf9010"),t=t(),(0,s.Cn)(),t),ra={class:"div_class"},la=na((()=>(0,s._)("h3",null,"You will be redirected to payment page",-1))),ia=na((()=>(0,s._)("div",{class:"alert alert-primary"}," While making payment use card number 4242 4242 4242 4242 and enter random date and cvv (3 digit) ",-1)));function ca(t,o,e,a,n,r){return(0,s.wg)(),(0,s.iD)("div",ra,[la,ia,(0,s._)("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...t)=>r.goToCheckout&&r.goToCheckout(...t))},"Make Payment")])}var da={data(){return{stripeAPIToken:"<stripe token>",stripe:"",token:null,checkoutBodyArray:[]}},name:"CheckoutView",props:["baseURL"],methods:{getAllItems(){N.Z.get(`${this.baseURL}cart/?token=${this.token}`).then((t=>{if(200==t.status){let o=t.data;for(let t=0;t<o.cartItems.length;t++)this.checkoutBodyArray.push({price:o.cartItems[t].product.price,quantity:o.cartItems[t].quantity,productName:o.cartItems[t].product.name,productId:o.cartItems[t].product.id})}})).catch((t=>console.log(t)))},goToCheckout(){console.log("checkoutBodyArray",this.checkoutBodyArray),N.Z.post(`${this.baseURL}order/create-checkout-session`,this.checkoutBodyArray).then((t=>{localStorage.setItem("sessionId",t.data.sessionId),console.log("session",t.data),this.stripe.redirectToCheckout({sessionId:t.data.sessionId})})).catch((t=>console.log(t)))}},mounted(){this.token=localStorage.getItem("token"),this.stripe=window.Stripe(this.stripeAPIToken),this.getAllItems()}};const ua=(0,V.Z)(da,[["render",ca],["__scopeId","data-v-bdbf9010"]]);var pa=ua;const ma=[{path:"/",name:"HomeView",component:it},{path:"/admin",name:"AdminView",component:Pt},{path:"/admin/product",name:"AdminProduct",component:_t},{path:"/admin/product/add",name:"AddProduct",component:Et},{path:"/admin/product/:id",name:"EditProduct",component:po},{path:"/product/show/:id",name:"ShowDetails",component:Ao},{path:"/signup",name:"SignupView",component:le},{path:"/signin",name:"SigninView",component:ke},{path:"/wishlist",name:"WishList",component:qo},{path:"/product",name:"ProductView",component:_t},{path:"/cart",name:"CartView",component:He},{path:"/payment/success",name:"PaymentSuccess",component:Qe},{path:"/payment/failed",name:"PaymentFail",component:sa},{path:"/checkout",name:"CheckoutView",component:pa}],ha=(0,B.p7)({history:(0,B.PO)("/"),routes:ma});var ga=ha;(0,a.ri)(F).use(ga).mount("#app")}},o={};function e(a){var s=o[a];if(void 0!==s)return s.exports;var n=o[a]={exports:{}};return t[a].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,a,s,n){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],n=t[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[i])}))?a.splice(i--,1):(l=!1,n<r&&(r=n));if(l){t.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,s,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var s,n,r=a[0],l=a[1],i=a[2],c=0;if(r.some((function(o){return 0!==t[o]}))){for(s in l)e.o(l,s)&&(e.m[s]=l[s]);if(i)var d=i(e)}for(o&&o(a);c<r.length;c++)n=r[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(d)},a=self["webpackChunkguava_ui"]=self["webpackChunkguava_ui"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(6999)}));a=e.O(a)})();
//# sourceMappingURL=app.5f737b78.js.map