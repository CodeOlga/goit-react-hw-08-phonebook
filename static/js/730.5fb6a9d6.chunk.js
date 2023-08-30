"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[730],{7730:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r,a=t(6907),o=t(9439),i=t(2791),l=t(9434),c=t(208),s=t(5218),d=t(6916),u=function(n){return n.contacts.items},p=function(n){return n.filter},f=function(n){return n.contacts.error},x=function(n){return n.contacts.isLoading},h=(0,d.P1)([u,p],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),b=["title","titleId"];function g(){return g=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},g.apply(this,arguments)}function m(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function v(n,e){var t=n.title,a=n.titleId,o=m(n,b);return i.createElement("svg",g({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},o),t?i.createElement("title",{id:a},t):null,r||(r=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8ZM13.506 11.5648C14.4282 10.6577 15 9.39565 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.9542 13 13.4554 13.5451 14.4579 14.2992C14.8992 14.6311 15.5262 14.5425 15.8581 14.1011C16.1901 13.6598 16.1015 13.0328 15.6601 12.7008C15.0431 12.2368 14.3206 11.851 13.506 11.5648ZM19 14.5C19.5523 14.5 20 14.9477 20 15.5V18H22.5C23.0523 18 23.5 18.4477 23.5 19C23.5 19.5523 23.0523 20 22.5 20H20V22.5C20 23.0523 19.5523 23.5 19 23.5C18.4477 23.5 18 23.0523 18 22.5V20H15.5C14.9477 20 14.5 19.5523 14.5 19C14.5 18.4477 14.9477 18 15.5 18H18V15.5C18 14.9477 18.4477 14.5 19 14.5Z"})))}var C,j,y,Z,w,O=i.forwardRef(v),P=(t.p,t(168)),k=t(4034),A=k.ZP.form(C||(C=(0,P.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  padding: 40px;\n  border-radius: 30px;\n  background-color: #e9e9e9;\n  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;\n"]))),L=k.ZP.input(j||(j=(0,P.Z)(["\n  width: 93%;\n  height: 45px;\n  margin: 8px;\n  border-radius: 20px;\n  font-size: 24px;\n  text-align: end;\n  border: 0;\n  outline: 0;\n  padding-right: 10px;\n  background-color: #e9e9e9;\n  box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;\n"]))),S=k.ZP.button(y||(y=(0,P.Z)(["\n  // > svg {\n  //   width: 40px;\n  //   height: 30px;\n  //   fill: #02ba52;\n  // }\n\n  color: #00adb5;\n  border-radius: 50px;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: #e9e9e9;\n  width: 200px;\n  height: 50px;\n  margin: 8px;\n  border: 0;\n  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;\n  cursor: pointer;\n  outline: 0;\n\n  // :hover {\n  //   background-color: #1677ff;\n  //   > svg {\n  //     fill: #fff;\n  //   }\n  }\n"]))),E=k.ZP.label(Z||(Z=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),I=t(184),z=function(){var n=(0,l.I0)(),e=(0,l.v9)(u),t=(0,i.useState)(""),r=(0,o.Z)(t,2),a=r[0],d=r[1],p=(0,i.useState)(""),f=(0,o.Z)(p,2),x=f[0],h=f[1];return(0,I.jsxs)(A,{onSubmit:function(t){t.preventDefault();var r={name:a,number:x};if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))s.ZP.error("".concat(a," is already in contacts!"));else{var o=e.find((function(n){var e=n.number;return r.number.replace(/\D/g,"")===e.replace(/\D/g,"")}));o?s.ZP.error("".concat(x," is already in contacts!")):(n((0,c.uK)(r)),d(""),h(""))}},children:[(0,I.jsxs)(E,{children:["Name",(0,I.jsx)(L,{type:"text",name:"name",value:a,onChange:function(n){d(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,I.jsxs)(E,{children:["Number",(0,I.jsx)(L,{type:"tel",name:"number",value:x,onChange:function(n){h(n.target.value)},pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,I.jsx)(S,{type:"submit",children:(0,I.jsx)(O,{})}),(0,I.jsx)(s.x7,{position:"top-right",toastOptions:{duration:1500,style:{borderRadius:"20px",padding:"16px",color:"#b83b5e"}}})]})},M=t(4664),N=t(2914),R=t(7027),B=t(5820),H=t(3292),q=t(7309),V=t(2639),D=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},F.apply(this,arguments)}function _(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function T(n,e){var t=n.title,r=n.titleId,a=_(n,D);return i.createElement("svg",F({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,w||(w=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5ZM13.506 11.5648C14.4282 10.6578 15 9.39566 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.5647 13 12.8409 13.3499 13.8011 13.8767C14.2853 14.1424 14.8932 13.9652 15.1588 13.481C15.4245 12.9968 15.2473 12.3889 14.7631 12.1233C14.3732 11.9094 13.9535 11.7221 13.506 11.5648ZM15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L19 17.5858L21.2929 15.2929C21.6834 14.9024 22.3166 14.9024 22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L20.4142 19L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L19 20.4142L16.7071 22.7071C16.3166 23.0976 15.6834 23.0976 15.2929 22.7071C14.9024 22.3166 14.9024 21.6834 15.2929 21.2929L17.5858 19L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"})))}var J,K=i.forwardRef(T),Y=(t.p,["title","titleId"]);function $(){return $=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},$.apply(this,arguments)}function G(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function Q(n,e){var t=n.title,r=n.titleId,a=G(n,Y);return i.createElement("svg",$({fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,J||(J=i.createElement("path",{d:"M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"})))}var U,W,X,nn,en,tn=i.forwardRef(Q),rn=(t.p,k.ZP.li(U||(U=(0,P.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: #f5f6f7;\n  padding-left: 10px;\n  border-radius: 7px;\n"])))),an=k.ZP.span(W||(W=(0,P.Z)(["\n  margin-right: 10px;\n"]))),on=k.ZP.a(X||(X=(0,P.Z)(["\n  cursor: pointer;\n  color: #1677ff;\n  :hover {\n    text-decoration: underline;\n  }\n"]))),ln=k.ZP.button(nn||(nn=(0,P.Z)(["\n  @media only screen and (max-width: 600px) {\n    margin-right: 10px;\n  }\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #f50505;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"]))),cn=k.ZP.button(en||(en=(0,P.Z)(["\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #051df5;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 20px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"])));var sn=function(n){var e=n.contact,t=(0,l.I0)(),r=(0,i.useState)(!1),a=(0,o.Z)(r,2),s=a[0],d=a[1],u=(0,i.useState)(e.name),p=(0,o.Z)(u,2),f=p[0],x=p[1],h=(0,i.useState)(e.number),b=(0,o.Z)(h,2),g=b[0],m=b[1],v=function(){t((0,c.GK)(e.id))},C=function(){d(!1)};return(0,I.jsxs)(rn,{children:[(0,I.jsx)(an,{children:e.name}),(0,I.jsx)(on,{href:"tel:".concat(e.number),children:e.number}),(0,I.jsx)(cn,{onClick:function(){d(!0)},children:(0,I.jsx)(tn,{})}),(0,I.jsx)(B.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(n){v(n.target.value),R.ZP.success("Click on Yes")},onCancel:function(n){console.log(n),R.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,I.jsx)(ln,{danger:!0,children:(0,I.jsx)(K,{})})}),(0,I.jsx)(H.Z,{open:s,onCancel:C,footer:[(0,I.jsx)(q.ZP,{onClick:C,children:"Cancel"},"cancel"),(0,I.jsx)(q.ZP,{onClick:function(){d(!1),t((0,c.mP)({id:e.id,name:f,number:g}))},children:"Save"},"save")],children:(0,I.jsxs)("div",{className:"modal-content",children:[(0,I.jsx)("label",{children:"New Name:"}),(0,I.jsx)(V.Z,{type:"text",value:f,onChange:function(n){x(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,I.jsx)("label",{children:"New Number:"}),(0,I.jsx)(V.Z,{type:"text",value:g,onChange:function(n){m(n.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0})]})})]})};var dn,un,pn=function(){var n=(0,l.v9)(h),e=(0,l.v9)(f),t=(0,l.v9)(x),r=(0,l.I0)();return(0,i.useEffect)((function(){r((0,c.yF)())}),[r]),(0,I.jsx)("ul",{children:t&&!e?(0,I.jsx)(N.a,{}):0!==n.length||e?n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,I.jsx)(sn,{contact:{id:e,name:t,number:r}},e)})):(0,I.jsx)(M.Z,{})})},fn=t(9e3),xn=t(6895),hn=(0,k.ZP)(V.Z)(dn||(dn=(0,P.Z)(["\n  width: auto;\n  padding: 5px;\n  border-radius: 6px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #20212447;\n"]))),bn=k.ZP.h3(un||(un=(0,P.Z)(["\n  color: #2e2d2dbc;\n"])));var gn=function(){var n=(0,l.I0)(),e=(0,l.v9)(p);return(0,l.v9)(u).length<1?(0,I.jsx)(bn,{children:"Add your first contact"}):(0,I.jsx)(hn,{type:"text",name:"filter",placeholder:"Search by name",value:e,onChange:function(e){n((0,xn.T)(e.target.value.trim()))},prefix:(0,I.jsx)(fn.Vph,{})})};var mn=function(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(a.B6,{children:[(0,I.jsx)(a.ql,{children:(0,I.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,I.jsx)(z,{}),(0,I.jsx)("h2",{children:"Contacts"}),(0,I.jsx)(gn,{}),(0,I.jsx)(pn,{})]})})}}}]);
//# sourceMappingURL=730.5fb6a9d6.chunk.js.map