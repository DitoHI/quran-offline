(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(t,e,n){"use strict";var r=n(9),o=n(24),c=n(30),l=n(122),d=n(61),h=n(18),f=n(62).f,m=n(81).f,v=n(17).f,_=n(219).trim,x=r.Number,y=x,w=x.prototype,S="Number"==c(n(80)(w)),k="trim"in String.prototype,A=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,h=l.length;i<h;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(S?h(function(){w.valueOf.call(n)}):"Number"!=c(n))?l(new y(A(e)),n,x):A(e)};for(var I,C=n(14)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)o(y,I=C[N])&&!o(x,I)&&v(x,I,m(y,I));x.prototype=w,w.constructor=x,n(19)(r,"Number",x)}},190:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b851d264",content,!0,{sourceMap:!1})},191:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0a5692ee",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("74a446f5",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2a152f35",content,!0,{sourceMap:!1})},219:function(t,e,n){var r=n(13),o=n(28),c=n(18),l=n(220),d="["+l+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),h=o[t]=d?e(v):l[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},v=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},220:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},221:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(template,style,t,e,n,r,o,c){const component=("function"==typeof t?t.options:t)||{};return component.__file="md-share.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,n&&(component.functional=!0)),component._scopeId=e,component}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-share-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"}})])])},staticRenderFns:[]},0,{name:"md-share-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Share Icon";return{iconTitle:t}}},e,!1)}()},222:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(template,style,t,e,n,r,o,c){const component=("function"==typeof t?t.options:t)||{};return component.__file="md-bookmark.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,n&&(component.functional=!0)),component._scopeId=e,component}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-bookmark-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"}})])])},staticRenderFns:[]},0,{name:"md-bookmark-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Bookmark Icon";return{iconTitle:t}}},e,!1)}()},223:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(template,style,t,e,n,r,o,c){const component=("function"==typeof t?t.options:t)||{};return component.__file="md-volume-high.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,n&&(component.functional=!0)),component._scopeId=e,component}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-volume-high-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"}})])])},staticRenderFns:[]},0,{name:"md-volume-high-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Volume High Icon";return{iconTitle:t}}},e,!1)}()},224:function(t,e,n){"use strict";var r=n(190);n.n(r).a},225:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".verse[data-v-5c446a2c] {\n  text-align: left;\n}\n.verse__header[data-v-5c446a2c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.verse__header--right[data-v-5c446a2c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n.verse__header_icon[data-v-5c446a2c] {\n      padding: 0 .5em;\n      position: relative;\n}\n.verse__arabic[data-v-5c446a2c] {\n    font-size: 2rem;\n    width: 100%;\n    float: right;\n    text-align: right;\n    margin-top: .25em;\n}\n.verse__translation[data-v-5c446a2c] {\n    font-size: 1rem;\n    width: 100%;\n    font-style: italic;\n    margin-top: 1.5em;\n}\n.verse__tafsir[data-v-5c446a2c] {\n    font-size: 1rem;\n    width: 100%;\n    margin-top: 1.5em;\n}\n.verse__bold[data-v-5c446a2c] {\n    font-weight: bold;\n    margin-top: 1.5em;\n    line-height: 1.5;\n}\n.verse__small[data-v-5c446a2c] {\n    font-size: 0.8rem;\n    margin-top: 1.5em;\n    font-style: italic;\n}\n.tooltip[data-v-5c446a2c] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  background-color: #1a1a1a;\n  color: #41b883;\n  text-align: center;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -50px;\n}\n.tooltip ul[data-v-5c446a2c] {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.tooltip ul li[data-v-5c446a2c] {\n      padding: 15px 25px;\n      border-bottom: 1px solid #41b883;\n}\n.tooltip ul li[data-v-5c446a2c]:last-child {\n        border-bottom: 0;\n}\n.tooltip.show[data-v-5c446a2c] {\n  visibility: visible;\n  opacity: 1;\n}\n.tooltip[data-v-5c446a2c] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  background-color: #1a1a1a;\n  color: #41b883;\n  text-align: center;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -50px;\n}\n.tooltip ul[data-v-5c446a2c] {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.tooltip ul li[data-v-5c446a2c] {\n      padding: 15px 25px;\n      border-bottom: 1px solid #41b883;\n}\n.tooltip ul li[data-v-5c446a2c]:last-child {\n        border-bottom: 0;\n}\n.tooltip.show[data-v-5c446a2c] {\n  visibility: visible;\n  opacity: 1;\n}\n",""])},226:function(t,e,n){"use strict";var r=n(191);n.n(r).a},227:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".surah-header[data-v-1b27cc0d] {\n  width: 90%;\n  margin: 1em auto;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.surah-header_index[data-v-1b27cc0d] {\n    background-color: #52e0a1;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100px;\n    padding: .25em .5em;\n}\n.surah-header_content[data-v-1b27cc0d] {\n    background-color: #000;\n    color: #52e0a1;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: right;\n    height: 100px;\n    padding: .25em .5em;\n}\n.surah-header_content small[data-v-1b27cc0d] {\n      font-size: 1rem;\n}\n",""])},228:function(t,e,n){"use strict";var r=n(29),o=n(13),c=n(46),l=n(118),d=n(119),h=n(45),f=n(229),m=n(120);o(o.S+o.F*!n(121)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,v,_=c(t),x="function"==typeof this?this:Array,y=arguments.length,w=y>1?arguments[1]:void 0,S=void 0!==w,k=0,A=m(_);if(S&&(w=r(w,y>2?arguments[2]:void 0,2)),null==A||x==Array&&d(A))for(n=new x(e=h(_.length));e>k;k++)f(n,k,S?w(_[k],k):_[k]);else for(v=A.call(_),n=new x;!(o=v.next()).done;k++)f(n,k,S?l(v,w,[o.value,k],!0):o.value);return n.length=k,n}})},229:function(t,e,n){"use strict";var r=n(17),o=n(44);t.exports=function(object,t,e){t in object?r.f(object,t,o(0,e)):object[t]=e}},230:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(template,style,t,e,n,r,o,c){const component=("function"==typeof t?t.options:t)||{};return component.__file="md-arrow-forward.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,n&&(component.functional=!0)),component._scopeId=e,component}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-arrow-forward-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"}})])])},staticRenderFns:[]},0,{name:"md-arrow-forward-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Arrow Forward Icon";return{iconTitle:t}}},e,!1)}()},231:function(t,e,n){"use strict";var r=n(192);n.n(r).a},232:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,'.surah_nav[data-v-0cab0261] {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  margin: 0;\n  height: 60px;\n  text-align: center;\n  width: 100%;\n}\n.surah_nav_item[data-v-0cab0261] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.surah_nav_title[data-v-0cab0261] {\n    font-size: 2rem;\n}\n.surah_nav_prev[data-v-0cab0261], .surah_nav_next[data-v-0cab0261] {\n    text-decoration: none;\n}\n.surah_nav_prev span[data-v-0cab0261], .surah_nav_next span[data-v-0cab0261] {\n      padding: 0 .25em;\n      font-size: 2rem;\n}\n.select[data-v-0cab0261] {\n  -webkit-appearance: none;\n  padding: .5em 1.5rem .5em .5rem;\n  outline: none;\n  border: none;\n  background-color: #fff;\n  font-size: 1rem;\n  border-radius: 4px;\n  margin-left: .5em;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");\n  background-position: right 7px center;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 480px) {\n.text-nav[data-v-0cab0261] {\n    display: none;\n}\n}\n',""])},233:function(t,e,n){"use strict";var r=n(193);n.n(r).a},234:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".detail__content[data-v-39049e08] {\n  width: 90%;\n  margin: 0 auto;\n  padding-bottom: 5em;\n}\n",""])},235:function(t,e,n){"use strict";n.r(e);n(26),n(178);var r=n(5),o=(n(1),n(2),n(3),n(10)),c=n(221),l=n.n(c),d=n(222),h=n.n(d),f=n(223),m=n.n(f),v=n(11),_={availableAudio:[{id:"kemenag",text:"Kemenag"}],getAudioFromKemenag:function(t,e){var n=Object(v.d)(t),r=Object(v.d)(e);return"https://quran.kemenag.go.id/api/source/s01/".concat(n).concat(r,".mp3")}},x={name:"VerseCard",components:{MdShareIcon:l.a,MdBookmarkIcon:h.a,MdVolumeHighIcon:m.a},props:{verseArray:{type:[Object,Array],default:function(){return{}}},translations:{type:Object,default:function(){return{}}},tafsir:{type:Object,default:function(){return{}}},surahId:{type:Number,default:0}},data:function(){return{audios:_.availableAudio,clickedAudioIcon:1e6,timeout:null}},computed:Object(r.a)({},Object(o.d)(["surahFavorite","isSupportWebShare","settingShowTranslation","settingShowTafsir"])),methods:Object(r.a)({},Object(o.b)(["setLastReadVerse","showNotification","shareViaWebshare"]),{onClickAudioIcon:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.clickedAudioIcon=t,this.timeout=setTimeout(function(){e.clickedAudioIcon=1e6},5e3)},onClickAudioItem:function(t,e){if("kemenag"===t.id){var n=_.getAudioFromKemenag(this.surahId,e);window.location.href=n}},getTranslation:function(t){return this.translations.id.text[t]},getTafsir:function(t){return this.tafsir.id.kemenag.text[t]},doSetLastReadVerse:function(data){this.setLastReadVerse(data),this.showNotification({title:"Pesan Sukses",message:"Ayat telah ditambahkan ke terakhir dibaca."})},shareVerse:function(t,e){var data={title:"QS ".concat(this.surahId,":").concat(e),text:"".concat(t,"\n\n        ").concat(this.getTranslation(e)," (QS ").concat(this.surahId,":").concat(e,")"),url:"https://quran-offline.netlify.com/".concat(this.surahId,"#verse-").concat(e)};this.shareViaWebshare(data)}})},y=(n(224),n(12)),w=Object(y.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verse__root"},t._l(t.verseArray,function(e,r){return n("div",{key:r,staticClass:"verse block_content has-shadow",attrs:{id:"verse-"+r}},[n("div",{staticClass:"verse__header"},[n("div",{staticClass:"verse__index tag_index"},[t._v("\n        "+t._s(Number(r))+"\n      ")]),t._v(" "),n("div",{staticClass:"verse__header--right"},[n("div",{staticClass:"verse__header_icon",on:{click:function(e){t.onClickAudioIcon(Number(r))}}},[n("MdVolumeHighIcon",{attrs:{w:"2em",h:"2em"}}),t._v(" "),n("div",{staticClass:"tooltip",class:{show:Number(t.clickedAudioIcon)===Number(r)}},t._l(t.audios,function(audio){return n("ul",{key:audio.id},[n("li",{on:{click:function(e){t.onClickAudioItem(audio,Number(r))}}},[t._v("\n                "+t._s(audio.text)+"\n              ")])])}),0)],1),t._v(" "),n("div",{staticClass:"verse__header_icon",on:{click:function(e){t.doSetLastReadVerse({surah:t.surahId,verse:Number(r)})}}},[n("MdBookmarkIcon",{attrs:{w:"2em",h:"2em"}})],1),t._v(" "),t.isSupportWebShare?n("div",{staticClass:"verse__header_icon",on:{click:function(n){t.shareVerse(e,Number(r))}}},[n("MdShareIcon",{attrs:{w:"2em",h:"2em"}})],1):t._e()])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"verse__arabic font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e)+"\n      ")])]),t._v(" "),t.settingShowTranslation?n("div",{staticClass:"divider clearfix"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"verse__translation"},[t._v("\n        "+t._s(t.getTranslation(r))+"\n      ")])]):t._e(),t._v(" "),t.settingShowTafsir?n("div",{staticClass:"divider clearfix"},[t._m(1,!0),t._v(" "),n("div",{staticClass:"verse__tafsir"},[t._v("\n        "+t._s(t.getTafsir(r))+"\n      ")]),t._v(" "),t._m(2,!0)]):t._e()])}),0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"verse__bold"},[e("b",[this._v("Terjemah:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"verse__bold"},[e("b",[this._v("Tafsir dari Kemenag:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"verse__small"},[e("i",[this._v("Sumber: Aplikasi Quran Kementrian Agama Republik Indonesia")])])}],!1,null,"5c446a2c",null).exports,S={name:"SurahHeader",props:{surahNumber:{type:Number,default:0},surahName:{type:String,default:""},surahLatin:{type:String,default:""},surahTranslation:{type:String,default:""}}},k=(n(226),Object(y.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"surah-header"},[n("div",{staticClass:"surah-header_index font-arabic"},[t._v("\n      "+t._s(t.surahNumber)+"\n    ")]),t._v(" "),n("div",{staticClass:"surah-header_content"},[n("div",[t._v(t._s(t.surahName))]),t._v(" "),n("small",[t._v("("+t._s(t.surahLatin)+" - "+t._s(t.surahTranslation)+")")])])])])},[],!1,null,"1b27cc0d",null).exports),A=(n(79),n(228),n(104)),I=n.n(A),C=n(230),N=n.n(C),j={name:"SurahNavigation",components:{MdArrowBackIcon:I.a,MdArrowForwardIcon:N.a},props:{surahId:{type:Number,default:0},surahName:{type:String,default:""},nextSurah:{type:Object,default:function(){return{arabic:""}}},prevSurah:{type:Object,default:function(){return{arabic:""}}},numberAyah:{type:Number,default:0}},data:function(){return{selectedVerse:1}},computed:{isHavePrev:function(){return this.surahId>1},isHaveNext:function(){return this.surahId<114},arrayAyah:function(){return Array.from({length:this.numberAyah},function(t,e){return e+1})}},watch:{selectedVerse:function(t){window.location.href="#verse-".concat(t)}}},T=(n(231),{name:"PageSurahDetail",head:function(){return this.metaHead},components:{VerseCard:w,SurahHeader:k,SurahNavigation:Object(y.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surah_nav"},[n("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+(t.surahId-1)}},[t.isHavePrev?n("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.prevSurah?n("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.prevSurah.arabic)+"\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"surah_nav_item surah_nav_center"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVerse,expression:"selectedVerse"}],staticClass:"select",attrs:{name:"verse-select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedVerse=e.target.multiple?n:n[0]}}},t._l(t.arrayAyah,function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])}),0)]),t._v(" "),n("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+(t.surahId+1)}},[t.nextSurah?n("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.nextSurah.arabic)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?n("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)},[],!1,null,"0cab0261",null).exports},data:function(){return{loading:!0}},computed:Object(r.a)({},Object(o.d)(["settingActiveTheme","surahDetail","allSurahList"]),{metaHead:function(){var title=this.$t("pageTitle.surahDetail",{surahName:this.currentSurah.name_latin,surahNumber:this.surahId});return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},currentSurah:function(){return this.surahDetail},surahId:function(){var t=0;return Object(v.c)(this.$route.params&&this.$route.params.surahid)&&(t=Number(this.$route.params.surahid)),t},isValidSurah:function(){return this.surahId>0&&this.surahId<=114},prevSurah:function(){var t=this;return Object(v.a)(this.allSurahList)&&this.surahId>1?this.allSurahList.find(function(e){return e.index===t.surahId-1}):null},nextSurah:function(){var t=this;return Object(v.a)(this.allSurahList)&&this.surahId<114?this.allSurahList.find(function(e){return e.index===t.surahId+1}):null}}),mounted:function(){this.onMountedDetailPage(this.surahId)},methods:Object(r.a)({},Object(o.c)(["setHeaderTitle"]),Object(o.b)(["fetchAllSurah","fetchSurahById"]),{onMountedDetailPage:function(t){Object(v.a)(this.allSurahList)||this.fetchAllSurah({success:function(){}}),this.fetchSurahById({id:t,success:this.onSuccess})},onSuccess:function(data){this.setHeaderTitle("".concat(this.surahId,": ").concat(data.name_latin)),this.loading=!1}})}),O=(n(233),Object(y.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"detail"},[n("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name}}),t._v(" "),n("div",{staticClass:"detail__content"},[n("VerseCard",{attrs:{"verse-array":t.currentSurah.text,"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir}})],1),t._v(" "),n("SurahNavigation",{attrs:{"surah-id":t.surahId,"surah-name":t.currentSurah.name,"next-surah":t.nextSurah,"prev-surah":t.prevSurah,"number-ayah":Number(t.currentSurah.number_of_ayah)}})],1)])},[],!1,null,"39049e08",null));e.default=O.exports}}]);