(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"base_url":"https://pixabay.com/api/","key":"23189460-aa79835af7cd31cf0c37fbc18","per_page":12}')},29:function(e,t,a){},3:function(e,t,a){e.exports={Searchbar:"styles_Searchbar__MZQM7",SearchForm:"styles_SearchForm__1UtAm",SearchForm__button:"styles_SearchForm__button__3mzZE",SearchForm__buttonLabel:"styles_SearchForm__buttonLabel__1wo7B",SearchForm__input:"styles_SearchForm__input__37bpK",ImageGallery:"styles_ImageGallery__2VuoT",ImageGalleryItem:"styles_ImageGalleryItem__1XQjo",ImageGalleryItem__image:"styles_ImageGalleryItem__image__3RMIn","ImageGalleryItem-image":"styles_ImageGalleryItem-image__11jwm",Overlay:"styles_Overlay__3VHVn",Modal:"styles_Modal__1k8UN",Button:"styles_Button__2BlLB",text:"styles_text__2THab",loading:"styles_loading__3zoc0"}},30:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(22),c=a.n(s),o=(a(29),a(5)),i=a(6),l=a(8),u=a(7),h=(a(30),a(3)),m=a.n(h),g=a(0),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={find:""},e.handleChangeInput=function(t){e.setState({find:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.find.trim()?(e.props.onSubmit(e.state.find),e.setState({find:""})):alert("Please type searchihg query")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.find;return Object(g.jsx)("header",{className:m.a.Searchbar,children:Object(g.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:m.a.SearchForm__button,children:Object(g.jsx)("span",{className:m.a.SearchForm__buttonLabel,children:"Search"})}),Object(g.jsx)("input",{className:m.a.SearchForm__input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeInput})]})})}}]),a}(n.Component),b=a(13),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.imgArray.map((function(t){return Object(g.jsx)("li",{className:m.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t.webformatURL,alt:t.tags,className:m.a.ImageGalleryItem__image,onClick:e.props.onGalleryImageClick})},t.id)}))}}]),a}(n.Component),y=a(23),_=a.n(y),f=a(11),j=function(){function e(){Object(o.a)(this,e),this.searchQuery="",this.page=1,this.base_url=f.base_url,this.key=f.key,this.per_page=f.per_page}return Object(i.a)(e,[{key:"resetPage",value:function(){this.page=1}},{key:"pages",get:function(){return this.page},set:function(e){this.page+=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"searchImages",value:function(){var e="".concat(this.base_url,"?image_type=photo&orientation=horizontal&q=").concat(this.searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.per_page,"&key=").concat(this.key);return _.a.get(e).then((function(e){return e.data}))}}]),e}(),O=a(24),v=a.n(O),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleEscape=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleClose=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:m.a.Overlay,onClick:this.handleClose,children:Object(g.jsx)("div",{className:m.a.Modal,children:Object(g.jsx)("img",{src:this.props.bigImg.largeImageURL,alt:this.props.bigImg.tags})})})}}]),a}(n.Component),S=new j,k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imgArray:[],page:1,status:"idle",showModal:!1,bigImg:null},e.handleClick=function(){S.pages=1,S.searchImages().then((function(t){e.setState((function(e){return{imgArray:[].concat(Object(b.a)(e.imgArray),Object(b.a)(t.hits)),page:S.pages,status:"success"}})),e.props.scroll()})).catch((function(t){e.setState({status:"error"})}))},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.onGalleryImageClick=function(t){t.preventDefault();var a=t.target.src;e.setState({bigImg:e.state.imgArray.find((function(e){return e.webformatURL===a}))}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchImg!==this.props.searchImg&&(this.setState({status:"pending"}),S.resetPage(),S.query=this.props.searchImg,S.searchImages().then((function(e){e.hits.length>0?a.setState({imgArray:e.hits,page:S.pages,status:"success"}):a.setState({status:"error"})})).catch((function(e){a.setState({status:"error"})})))}},{key:"render",value:function(){var e=this.state,t=e.imgArray,a=e.showModal,n=e.status,r=e.bigImg;return"idle"===n?Object(g.jsx)("p",{className:m.a.text,children:"Hello! Type some searching query"}):"pending"===n?Object(g.jsx)(v.a,{type:"Circles",className:m.a.loading,color:"#00BFFF",height:100,width:100,timeout:7e3}):"success"===n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:m.a.ImageGallery,children:Object(g.jsx)(d,{imgArray:t,onGalleryImageClick:this.onGalleryImageClick})}),Object(g.jsx)("button",{type:"button",onClick:this.handleClick,className:m.a.Button,children:"Load more"}),a&&Object(g.jsx)(I,{toggleModal:this.toggleModal,bigImg:r})]}):"error"===n?Object(g.jsx)("p",{className:m.a.text,children:"Ooops! Something went wrong"}):void 0}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchImg:""},e.onSubmit=function(t){e.setState({searchImg:t})},e}return Object(i.a)(a,[{key:"onPageScroll",value:function(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(p,{onSubmit:this.onSubmit}),Object(g.jsx)(k,{searchImg:this.state.searchImg,scroll:this.onPageScroll})]})}}]),a}(n.Component),w=x;c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.dae2459a.chunk.js.map