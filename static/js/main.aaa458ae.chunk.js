(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){e.exports=a.p+"static/media/elfIcon.f6a00497.png"},227:function(e,t,a){e.exports=a.p+"static/media/PizzaCover.a157fd76.png"},228:function(e,t,a){e.exports=a.p+"static/media/PizzaImage.30597ecc.png"},241:function(e,t,a){e.exports=a(403)},246:function(e,t,a){},247:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),i=a.n(l),m=(a(246),a(247),a(99)),c=a(100),s=a(106),o=a(102),u=a(107),d=a(206),h=function(e){return r.a.createElement("div",{className:"four ui buttons fluid"},r.a.createElement("button",{className:"ui button ",onClick:e.handleFilteredItems,name:"wingButton"},"Wings & Sides"),r.a.createElement("button",{className:"ui button ",onClick:e.handleFilteredItems,name:"pizzaButton"},"Pizza"),r.a.createElement("button",{className:"ui button ",onClick:e.handleFilteredItems,name:"beverageButton"},"Beverages"),r.a.createElement("button",{className:"ui button shopping cart icon",onClick:e.handleFilteredItems,name:"cartButton"}," Cart - ",e.itemCount))},p=a(419),g=a(420),E=a(232),I=a(207),b=a.n(I),v=a(412),f=a(417),C=a(48),z=a(404),F=function(e){return r.a.createElement(v.a,{id:"menuIcon"},r.a.createElement(f.a,{basic:!0,inline:!0,icon:r.a.createElement(C.a,{name:"bars",size:"big"})},r.a.createElement(f.a.Menu,{id:"dropdown_background"},r.a.createElement(z.a.Group,{vertical:!0},r.a.createElement(z.a,{onClick:e.handleFilteredItems,name:"pizzaButton"},"Pizza Menu"),r.a.createElement(z.a,{onClick:e.handleFilteredItems,name:"wingButton"},"Wings & Sides Menu"),r.a.createElement(z.a,{onClick:e.handleFilteredItems,name:"beverageButton"},"Beverages Menu"),r.a.createElement("a",{href:"https://yongliang24.github.io/frontend_admin_metro_pizza/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(z.a,null,"Visit Administrator Site"))),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://github.com/YongLiang24",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{name:"github",size:"large",link:!0})),r.a.createElement("a",{href:"https://www.linkedin.com/in/yongliang24/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{name:"linkedin",size:"large",link:!0})))))},k=function(e){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement(p.a,{size:"medium",textAlign:"center",id:"myHeader",fluid:"true"},r.a.createElement(F,{handleFilteredItems:e.handleFilteredItems}),r.a.createElement(g.a,{header:"Home",trigger:r.a.createElement(E.a,{src:b.a,size:"huge",onClick:e.handleFilteredItems,name:"homePage",className:"iconImage"}),position:"bottom center"}),r.a.createElement("p",{id:"myTitle"},"Metro Pizza"))))},y=a(418),M=a(415),w=a(413),_=a(414),P=a(416),N=function(e){return r.a.createElement(y.a,{centered:!0,className:"outterCard"},r.a.createElement(E.a,{src:e.img_url,size:"medium",centered:!0,className:"item_card"}),r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,e.name),r.a.createElement(y.a.Meta,null,"$ ",e.price),r.a.createElement(y.a.Description,null,r.a.createElement("strong",null,e.description))),r.a.createElement(y.a.Content,{extra:!0},r.a.createElement(P.a,{trigger:r.a.createElement(z.a,{fluid:!0,color:"teal",onClick:e.handleAddToCart,value:e.itemName},"Add to Cart"),header:'"'.concat(e.name,'" has been added to your cart.'),actions:[{key:"done",content:"Okay",positive:!0,fluid:!0}],style:{textAlign:"center"},size:"small"})))},S=function(e){return r.a.createElement(y.a,{centered:!0,className:"outterCard",id:"cart_list"},r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,e.itemName),r.a.createElement(E.a,{src:e.img_url,size:"tiny",id:"cart_img"}),r.a.createElement(y.a.Meta,null,"$ ",e.price)),r.a.createElement(y.a.Content,{extra:!0},r.a.createElement(z.a,{onClick:e.handleRemoveItem,value:e.index,negative:!0,id:"CartRemoveButton",centered:"true"},"Remove")))},B=a(422),L=a(227),O=a.n(L),j=a(228),A=a.n(j),T=function(e){return r.a.createElement(B.a,{animated:"small fade",id:"RevealContents"},r.a.createElement(B.a.Content,{visible:!0},r.a.createElement(g.a,{content:r.a.createElement("p",null,"Metro Pizza is an application which allows customers to place pizza orders online and send orders to the Administrator site.",r.a.createElement("a",{href:"https://yongliang24.github.io/frontend_admin_metro_pizza/",target:"_blank",rel:"noopener noreferrer"},"Link to Administrator"),". ",r.a.createElement("strong",null,"Note: Metro Pizza is a student's project not a actually restaurant site.")),trigger:r.a.createElement(E.a,{circular:!0,size:"large",src:O.a,className:"iconImage"}),header:"About",position:"top center",hoverable:!0,on:"click"})),r.a.createElement(B.a.Content,{hidden:!0},r.a.createElement(E.a,{circular:!0,size:"large",src:A.a})))},x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={allMenuItems:[],pizzaMenuItems:[],wingMenuItems:[],beverageMenuItems:[],isMenuItem:"",cartListItems:[],totalPrice:0,customerName:"",customerPhone:"",specialInstruction:"",messageHidden:"hidden"},a.filterItems=function(e){return a.state.allMenuItems.filter(function(t){return t.category===e})},a.handleFilteredItems=function(e){switch(e.target.name){case"wingButton":var t=a.filterItems("Wings");a.setState({wingMenuItems:t,isMenuItem:e.target.name}),console.log("check wings:",t),console.log("target.name:",e.target.name);break;case"pizzaButton":var n=a.filterItems("pizza");a.setState({pizzaMenuItems:n,isMenuItem:e.target.name});break;case"beverageButton":var r=a.filterItems("Beverage");a.setState({beverageMenuItems:r,isMenuItem:e.target.name});break;case"cartButton":a.setState({isMenuItem:e.target.name});var l=0;a.state.cartListItems.map(function(e){return l=parseFloat(l)+parseFloat(e.price)}),a.setState({totalPrice:l.toFixed(2),messageHidden:"hidden"});break;case"homePage":a.setState({isMenuItem:e.target.name})}},a.handleAddToCart=function(e){var t=a.state.allMenuItems.find(function(t){return t.id.toString()===e.target.value}),n={name:t.name,price:t.price,img_url:t.img_url,id:t.id},r=a.state.cartListItems.slice();r.push(n),a.setState({cartListItems:r})},a.handleRemoveItem=function(e){a.state.cartListItems.splice(e.target.value,1),a.setState(function(e){return{cartListItems:e.cartListItems}});var t=0;a.state.cartListItems.map(function(e){return t=parseFloat(t)+parseFloat(e.price)}),a.setState({totalPrice:t.toFixed(2)})},a.handleCartInput=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleCartForm=function(e){if(e.preventDefault(),a.state.cartListItems.length>0){var t=(new Date).toLocaleTimeString(),n=e.target.customerName.value,r=e.target.customerPhone.value,l=e.target.specialInstruction.value,i=a.state.totalPrice,m=a.state.cartListItems;fetch("https://backend-metro-pizza.herokuapp.com/api/v1/orders",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({Customer_Name:n,Customer_Phone:r,Special_Instruction:l,Total_Price:i,Order_Time:t,order_lists:m})}).catch(function(e){console.log("json error:",e)}),a.setState({cartListItems:[],customerName:"",customerPhone:"",specialInstruction:"",totalPrice:0,messageHidden:"visible"})}else alert("Sorry the cart is empty.")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://backend-metro-pizza.herokuapp.com/api/v1/menu_items").then(function(e){return e.json()}).then(function(t){e.setState({allMenuItems:t})}).catch(function(e){console.log("json error:",e)})}},{key:"render",value:function(){var e=this;return"wingButton"===this.state.isMenuItem?r.a.createElement("div",null,r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),"  ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a.Group,null,this.state.wingMenuItems.map(function(t){return r.a.createElement(N,{key:t.id,name:t.name,price:t.price,img_url:t.img_url,description:t.description,handleAddToCart:e.handleAddToCart,itemName:t.id})}))," "):"beverageButton"===this.state.isMenuItem?r.a.createElement("div",null,r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),"  ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a.Group,null,this.state.beverageMenuItems.map(function(t){return r.a.createElement(N,{key:t.id,name:t.name,price:t.price,img_url:t.img_url,description:t.description,handleAddToCart:e.handleAddToCart,itemName:t.id})})),"  "):"pizzaButton"===this.state.isMenuItem?r.a.createElement("div",null,r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),"  ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a.Group,null,this.state.pizzaMenuItems.map(function(t){return r.a.createElement(N,{key:t.id,name:t.name,price:t.price,img_url:t.img_url,description:t.description,handleAddToCart:e.handleAddToCart,itemName:t.id})})),"  "):"cartButton"===this.state.isMenuItem?r.a.createElement("div",{id:"cartDiv"},r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),"  ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a.Group,{centered:!0,itemsPerRow:2},this.state.cartListItems.map(function(t,a){return r.a.createElement(S,{key:a,itemName:t.name,price:t.price,img_url:t.img_url,handleRemoveItem:e.handleRemoveItem,index:a})})),r.a.createElement(y.a.Group,{centered:!0,itemsPerRow:1,className:"form_order"},r.a.createElement(M.a,{onSubmit:this.handleCartForm},r.a.createElement(M.a.Group,{widths:"equal"},r.a.createElement(M.a.Field,{control:w.a,label:r.a.createElement("strong",null,"Name"),placeholder:"Name",required:!0,onChange:this.handleCartInput,value:this.state.customerName,name:"customerName"}),r.a.createElement(M.a.Field,{control:w.a,label:r.a.createElement("strong",null,"Phone #"),placeholder:"Phone Number",type:"number",required:!0,onChange:this.handleCartInput,name:"customerPhone",value:this.state.customerPhone})),r.a.createElement(M.a.Field,{control:_.a,label:r.a.createElement("strong",null,"Special Instruction"),name:"specialInstruction",value:this.state.specialInstruction,onChange:this.handleCartInput}),r.a.createElement("strong",null,"Total: $",this.state.totalPrice),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(P.a,{trigger:r.a.createElement(M.a.Field,{control:z.a,content:"Place Order",primary:!0}),header:"Order Completed",content:"We have received your order. It will be ready for pickup in 15 to 30 minutes. Thank You.",actions:[{key:"done",content:"Okay",positive:!0,fluid:!0}],style:{textAlign:"center"},size:"small"}),r.a.createElement("br",null),r.a.createElement("hr",null)))):"homePage"===this.state.isMenuItem?r.a.createElement("div",{className:"mainPageDiv"},r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{handleFilteredItems:this.handleFilteredItems})):r.a.createElement("div",{className:"mainPageDiv"},r.a.createElement(k,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement(h,{handleFilteredItems:this.handleFilteredItems,itemCount:this.state.cartListItems.length}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{handleFilteredItems:this.handleFilteredItems}),r.a.createElement("p",{id:"mainParagraph"},"Click on the tray above to start!"))}}]),t}(n.Component),R=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null))}}]),t}(n.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(401);var G=a(231),H=a(105),W={allMenuItems:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;switch((arguments.length>1?arguments[1]:void 0).type){case"showWings":return{allMenuItems:e.allMenuItems+1};default:return e}},q=Object(H.b)($);i.a.render(r.a.createElement(G.a,{store:q},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[241,1,2]]]);
//# sourceMappingURL=main.aaa458ae.chunk.js.map