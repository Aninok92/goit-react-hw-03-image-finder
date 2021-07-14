(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__11ho7",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__37-7s"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__qnha0",Modal:"Modal_Modal__2stIR"}},14:function(e,t,a){e.exports={Container:"Container_Container__MA_pb"}},16:function(e,t,a){e.exports={loaderContainer:"Loader_loaderContainer__34roj"}},17:function(e,t,a){e.exports={Button:"Button_Button__MhWrB"}},18:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1knhH"}},24:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(23),a(24),a(3)),s=a(4),i=a(6),u=a(5),m=a(7),h=a(14),d=a.n(h),p=a(1),g=function(e){var t=e.children;return Object(p.jsx)("div",{className:d.a.Container,children:t})},b=a(2),f=a.n(b),j=a(8),v=a.n(j),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),console.log(e.state.value),e.setState({value:""})):m.b.error("enter something")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:v.a.Searchbar,children:Object(p.jsxs)("form",{className:v.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:v.a.SearchFormButton,children:Object(p.jsx)("span",{className:v.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:v.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleChange})]})})}}]),a}(n.Component);S.defaultProps={onSubmit:function(){return null}},S.propType={onSubmit:f.a.func};var O=S,y=a(13),I=a(11),_=a.n(I),x=function(e){var t=e.webformatURL,a=e.onSelect;return Object(p.jsx)("li",{className:_.a.ImageGalleryItem,onClick:a,children:Object(p.jsx)("img",{src:t,alt:"",className:_.a.ImageGalleryItemImage})})};x.defaultProps={onSelect:function(){return null}};var C=x,k=a(15),w=a.n(k),N=a(16),F=a.n(N),B=function(){return Object(p.jsx)("div",{className:F.a.loaderContainer,children:Object(p.jsx)(w.a,{type:"Oval",color:"#3f51b5",height:50,width:70,timeout:3e3})})},L=a(17),M=a.n(L),G=function(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",onClick:t,className:M.a.Button,children:"Load more"})};G.defaultProps={onClick:function(){return null}},G.propType={onClick:f.a.func};var P=G,D=a(18),E=a.n(D);var U={fetchImage:function(e,t){var a="".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("21721855-87ebe3c583662dfcae4faca3d","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(t){return t.ok?t.json().then((function(e){return e.hits})):Promise.reject(new Error("\u041d\u0435\u0442 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e)))}))}},A="idle",R="pending",T="resolved",q="rejected",H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,error:null,status:A},e.onLoadMore=function(){var t=e.state.page,a=e.props.imageName;e.setState({status:R}),U.fetchImage(a,t).then((function(t){return e.setState((function(e){return{images:[].concat(Object(y.a)(e.images),Object(y.a)(t)),status:T,page:e.page+1}}))})).catch((function(t){return e.setState({error:t,status:q})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName;n!==r&&(this.setState({status:R}),U.fetchImage(r,this.state.page).then((function(e){return a.setState((function(t){return{images:e,status:T,page:t.page+1}}))})).catch((function(e){return a.setState({error:e,status:q})}))),t.images!==this.state.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.status;return console.log(a),"idle"===n?Object(p.jsx)(p.Fragment,{children:" "}):"pending"===n?Object(p.jsx)(B,{}):"resolved"===n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:E.a.ImageGallery,children:a.map((function(t){var a=t.id,n=t.webformatURL,r=t.largeImageURL;return Object(p.jsx)(C,{webformatURL:n,onSelect:function(){return e.props.onSelectImage(r)}},a)}))}),0!==a.length&&Object(p.jsx)(P,{onClick:this.onLoadMore})]}):"rejected"===n?m.b.error("no images for your search"):void 0}}]),a}(n.Component);H.defaultProps={imageName:null,onSelectImage:function(){return null}};var K=a(12),z=a.n(K),J=document.querySelector("#modal-root"),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return console.log(this.props.selectImage),Object(o.createPortal)(Object(p.jsx)("div",{className:z.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:z.a.Modal,children:Object(p.jsx)("img",{src:this.props.selectImage,alt:""})})}),J)}}]),a}(n.Component);W.defaultProps={onClose:function(){return null}},W.propType={onClose:f.a.func};var V=W,X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:null,selectedImage:null},e.handleFormSubmit=function(t){e.setState({imageName:t})},e.handleSelectImage=function(t){return e.setState({selectedImage:t})},e.handleCloseModal=function(){return e.setState({selectedImage:null})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(g,{children:[Object(p.jsx)(O,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(H,{imageName:this.state.imageName,onSelectImage:this.handleSelectImage}),this.state.selectedImage&&Object(p.jsx)(V,{selectImage:this.state.selectedImage,onClose:this.handleCloseModal}),Object(p.jsx)(m.a,{position:"top-right"})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(X,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2G322",SearchForm:"Searchbar_SearchForm__34PIq",SearchFormButton:"Searchbar_SearchFormButton__3V1eh",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3ZMXh",SearchFormInput:"Searchbar_SearchFormInput__73HFz"}}},[[46,1,2]]]);
//# sourceMappingURL=main.842d5595.chunk.js.map