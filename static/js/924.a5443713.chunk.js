"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[924],{9924:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var o=t(6907),a=t(9434),r=t(2186),c=t(2639),i=t(4942),l=t(9439),s=t(1694),d=t.n(s),u=t(7462),p=t(1413),f=t(4925),m=t(5179),b=t(2791),v=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],h=(0,b.forwardRef)((function(e,n){var t,o=e.prefixCls,a=void 0===o?"rc-checkbox":o,r=e.className,c=e.style,s=e.checked,h=e.disabled,g=e.defaultChecked,x=void 0!==g&&g,y=e.type,Z=void 0===y?"checkbox":y,C=e.title,k=e.onChange,w=(0,f.Z)(e,v),S=(0,b.useRef)(null),j=(0,m.Z)(x,{value:s}),O=(0,l.Z)(j,2),E=O[0],I=O[1];(0,b.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=S.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=S.current)||void 0===e||e.blur()},input:S.current}}));var N=d()(a,r,(t={},(0,i.Z)(t,"".concat(a,"-checked"),E),(0,i.Z)(t,"".concat(a,"-disabled"),h),t));return b.createElement("span",{className:N,title:C,style:c},b.createElement("input",(0,u.Z)({},w,{className:"".concat(a,"-input"),ref:S,onChange:function(n){h||("checked"in e||I(n.target.checked),null===k||void 0===k||k({target:(0,p.Z)((0,p.Z)({},e),{},{type:Z,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:h,checked:!!E,type:Z})),b.createElement("span",{className:"".concat(a,"-inner")}))})),g=h,x=t(1929),y=t(9125),Z=t(1940),C=b.createContext(null),k=t(7521),w=t(9922),S=t(5564),j=function(e){var n,t,o,a,r,c,l,s,d=e.checkboxCls,u="".concat(d,"-wrapper");return[(o={},(0,i.Z)(o,"".concat(d,"-group"),Object.assign(Object.assign({},(0,k.Wf)(e)),(0,i.Z)({display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS},"> ".concat(e.antCls,"-row"),{flex:1}))),(0,i.Z)(o,u,Object.assign(Object.assign({},(0,k.Wf)(e)),(n={display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"}},(0,i.Z)(n,"& + ".concat(u),{marginInlineStart:0}),(0,i.Z)(n,"&".concat(u,"-in-form-item"),{'input[type="checkbox"]':{width:14,height:14}}),n))),(0,i.Z)(o,d,Object.assign(Object.assign({},(0,k.Wf)(e)),(t={position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center"},(0,i.Z)(t,"".concat(d,"-input"),(0,i.Z)({position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0},"&:focus-visible + ".concat(d,"-inner"),Object.assign({},(0,k.oN)(e)))),(0,i.Z)(t,"".concat(d,"-inner"),{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),(0,i.Z)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),o),(r={},(0,i.Z)(r,"\n        ".concat(u,":not(").concat(u,"-disabled),\n        ").concat(d,":not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{borderColor:e.colorPrimary})),(0,i.Z)(r,"".concat(u,":not(").concat(u,"-disabled)"),(a={},(0,i.Z)(a,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled) ").concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,i.Z)(a,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled):after"),{borderColor:e.colorPrimaryHover}),a)),r),(c={},(0,i.Z)(c,"".concat(d,"-checked"),(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}})),(0,i.Z)(c,"\n        ".concat(u,"-checked:not(").concat(u,"-disabled),\n        ").concat(d,"-checked:not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"})),c),(0,i.Z)({},d,{"&-indeterminate":(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(s={},(0,i.Z)(s,"".concat(u,"-disabled"),{cursor:"not-allowed"}),(0,i.Z)(s,"".concat(d,"-disabled"),(l={},(0,i.Z)(l,"&, ".concat(d,"-input"),{cursor:"not-allowed",pointerEvents:"none"}),(0,i.Z)(l,"".concat(d,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),(0,i.Z)(l,"&:after",{display:"none"}),(0,i.Z)(l,"& + span",{color:e.colorTextDisabled}),(0,i.Z)(l,"&".concat(d,"-indeterminate ").concat(d,"-inner::after"),{background:e.colorTextDisabled}),l)),s)]};function O(e,n){var t=(0,w.TS)(n,{checkboxCls:".".concat(e),checkboxSize:n.controlInteractiveSize});return[j(t)]}var E=(0,S.Z)("Checkbox",(function(e,n){return[O(n.prefixCls,e)]})),I=t(117),N=t(417),P=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},z=function(e,n){var t,o,a=e.prefixCls,r=e.className,c=e.rootClassName,s=e.children,u=e.indeterminate,p=void 0!==u&&u,f=e.style,m=e.onMouseEnter,v=e.onMouseLeave,h=e.skipGroup,k=void 0!==h&&h,w=e.disabled,S=P(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),j=b.useContext(x.E_),O=j.getPrefixCls,z=j.direction,M=j.checkbox,B=b.useContext(C),V=b.useContext(Z.aM).isFormItemInput,R=b.useContext(y.Z),D=null!==(o=(null===B||void 0===B?void 0:B.disabled)||w)&&void 0!==o?o:R,_=b.useRef(S.value);b.useEffect((function(){null===B||void 0===B||B.registerValue(S.value)}),[]),b.useEffect((function(){if(!k)return S.value!==_.current&&(null===B||void 0===B||B.cancelValue(_.current),null===B||void 0===B||B.registerValue(S.value),_.current=S.value),function(){return null===B||void 0===B?void 0:B.cancelValue(S.value)}}),[S.value]);var H=O("checkbox",a),T=E(H),L=(0,l.Z)(T,2),W=L[0],G=L[1],F=Object.assign({},S);B&&!k&&(F.onChange=function(){S.onChange&&S.onChange.apply(S,arguments),B.toggleOption&&B.toggleOption({label:s,value:S.value})},F.name=B.name,F.checked=B.value.includes(S.value));var X=d()("".concat(H,"-wrapper"),(t={},(0,i.Z)(t,"".concat(H,"-rtl"),"rtl"===z),(0,i.Z)(t,"".concat(H,"-wrapper-checked"),F.checked),(0,i.Z)(t,"".concat(H,"-wrapper-disabled"),D),(0,i.Z)(t,"".concat(H,"-wrapper-in-form-item"),V),t),null===M||void 0===M?void 0:M.className,r,c,G),q=d()((0,i.Z)({},"".concat(H,"-indeterminate"),p),N.A,G),A=p?"mixed":void 0;return W(b.createElement(I.Z,{component:"Checkbox",disabled:D},b.createElement("label",{className:X,style:Object.assign(Object.assign({},null===M||void 0===M?void 0:M.style),f),onMouseEnter:m,onMouseLeave:v},b.createElement(g,Object.assign({"aria-checked":A},F,{prefixCls:H,className:q,disabled:D,ref:n})),void 0!==s&&b.createElement("span",null,s))))};var M=b.forwardRef(z),B=t(3433),V=t(1818),R=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},D=function(e,n){var t=e.defaultValue,o=e.children,a=e.options,r=void 0===a?[]:a,c=e.prefixCls,s=e.className,u=e.rootClassName,p=e.style,f=e.onChange,m=R(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),v=b.useContext(x.E_),h=v.getPrefixCls,g=v.direction,y=b.useState(m.value||t||[]),Z=(0,l.Z)(y,2),k=Z[0],w=Z[1],S=b.useState([]),j=(0,l.Z)(S,2),O=j[0],I=j[1];b.useEffect((function(){"value"in m&&w(m.value||[])}),[m.value]);var N=b.useMemo((function(){return r.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))}),[r]),P=h("checkbox",c),z="".concat(P,"-group"),D=E(P),_=(0,l.Z)(D,2),H=_[0],T=_[1],L=(0,V.Z)(m,["value","disabled"]),W=r.length?N.map((function(e){return b.createElement(M,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:k.includes(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style,title:e.title},e.label)})):o,G={toggleOption:function(e){var n=k.indexOf(e.value),t=(0,B.Z)(k);-1===n?t.push(e.value):t.splice(n,1),"value"in m||w(t),null===f||void 0===f||f(t.filter((function(e){return O.includes(e)})).sort((function(e,n){return N.findIndex((function(n){return n.value===e}))-N.findIndex((function(e){return e.value===n}))})))},value:k,disabled:m.disabled,name:m.name,registerValue:function(e){I((function(n){return[].concat((0,B.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},F=d()(z,(0,i.Z)({},"".concat(z,"-rtl"),"rtl"===g),s,u,T);return H(b.createElement("div",Object.assign({className:F,style:p},L,{ref:n}),b.createElement(C.Provider,{value:G},W)))},_=b.forwardRef(D),H=b.memo(_),T=M;T.Group=H,T.__ANT_CHECKBOX=!0;var L=T,W=t(7309),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},F=t(4291),X=function(e,n){return b.createElement(F.Z,(0,u.Z)({},e,{ref:n,icon:G}))};var q=b.forwardRef(X),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},K=function(e,n){return b.createElement(F.Z,(0,u.Z)({},e,{ref:n,icon:A}))};var J=b.forwardRef(K),Q=t(8724),U=t(184),Y=function(){var e=(0,a.I0)();return(0,U.jsxs)(r.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!1},onFinish:function(n){e((0,Q.Ib)(n))},children:[(0,U.jsx)(r.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,U.jsx)(c.Z,{prefix:(0,U.jsx)(q,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,U.jsx)(r.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,U.jsx)(c.Z,{prefix:(0,U.jsx)(J,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,U.jsx)(r.Z.Item,{children:(0,U.jsx)(r.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,U.jsx)(L,{children:"Remember me"})})}),(0,U.jsx)(r.Z.Item,{children:(0,U.jsx)(W.ZP,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})};function $(){return(0,U.jsx)(o.B6,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(o.ql,{children:(0,U.jsx)("title",{children:"Login"})}),(0,U.jsx)(Y,{})]})})}}}]);
//# sourceMappingURL=924.a5443713.chunk.js.map