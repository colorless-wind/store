(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-take-foods-take-foods"],{"189b":function(t,e,n){"use strict";n.r(e);var a=n("3414"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},2908:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"ListCell",props:{arrow:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},lineLeft:{type:Boolean,default:!1},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},last:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#5A5B5C"},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},"2a10":function(t,e,n){"use strict";n.r(e);var a=n("2908"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"2ab5":function(t,e,n){"use strict";var a=n("6e48"),o=n.n(a);o.a},3414:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("5530")),i=a(n("bd8b")),c=n("26cb"),f={components:{listCell:i.default},data:function(){return{}},computed:(0,o.default)({},(0,c.mapState)(["order"])),onLoad:function(){},methods:{orders:function(){this.$store.getters.isLogin?uni.navigateTo({url:"/pages/orders/orders"}):uni.navigateTo({url:"/pages/login/login"})},menu:function(){uni.switchTab({url:"/pages/menu/menu"})}}};e.default=f},"59a2":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={listCell:n("bd8b").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[Object.keys(t.order).length?[a("v-uni-view",{staticClass:"order-box"},[a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"section"},[a("list-cell",{attrs:{hover:!1}},[a("v-uni-view",{staticClass:"w-100 d-flex align-items-center"},[a("v-uni-view",{staticClass:"d-flex flex-column w-60"},[a("v-uni-view",{staticClass:"w-100 font-size-lg text-color-base text-truncate"},[t._v("阿鑫小店")])],1),a("v-uni-view",{staticClass:"d-flex justify-content-end align-items-center w-40"},[a("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx","margin-right":"30rpx"},attrs:{src:"/static/images/order/mobile.png"}})],1)],1)],1),a("list-cell",{attrs:{hover:!1,padding:"50rpx 30rpx"}},[a("v-uni-view",{staticClass:"w-100 d-flex flex-column"},[1==t.order.typeCate?a("v-uni-view",{staticClass:"d-flex align-items-center just-content-center"},[a("v-uni-view",{staticClass:"sort-num"},[t._v(t._s(t.order.sort_num))])],1):t._e(),a("v-uni-view",{staticClass:"w-100 d-flex flex-column position-relative mt-30",staticStyle:{"margin-bottom":"-40rpx"}},t._l(t.order.goods,(function(e,n){return a("v-uni-view",{key:n,staticClass:"w-100 d-flex align-items-center mb-40"},[a("v-uni-view",{staticClass:"d-flex flex-column w-60 overflow-hidden"},[a("v-uni-view",{staticClass:"font-size-lg text-color-base mb-10 text-truncate"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"font-size-sm text-color-assist text-truncate"},[t._v(t._s(e.property))])],1),a("v-uni-view",{staticClass:"d-flex w-40 align-items-center justify-content-between pl-30"},[a("v-uni-view",{staticClass:"font-size-base text-color-base"},[t._v("x"+t._s(e.number))]),a("v-uni-view",{staticClass:"font-size-base text-color-base font-weight-bold"},[t._v("￥"+t._s(e.price))])],1)],1)})),1)],1)],1)],1),a("v-uni-view",{staticClass:"section"},[a("list-cell",{attrs:{hover:!1,padding:"50rpx 30rpx"}},[a("v-uni-view",{staticClass:"w-100 d-flex flex-column"},[a("v-uni-view",{staticClass:"pay-cell"},[a("v-uni-view",[t._v("金额总计")]),a("v-uni-view",{staticClass:"font-weight-bold"},[t._v("￥"+t._s(t.order.amount))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"section"},[a("list-cell",{attrs:{hover:!1,padding:"50rpx 30rpx"}},[a("v-uni-view",{staticClass:"w-100 d-flex flex-column"},[a("v-uni-view",{staticClass:"pay-cell"},[a("v-uni-view",[t._v("下单时间")]),a("v-uni-view",{staticClass:"font-weight-bold"},[t._v(t._s(t.$util.formatDateTime(t.order.created_at)))])],1),a("v-uni-view",{staticClass:"pay-cell"},[a("v-uni-view",[t._v("订单号")]),a("v-uni-view",{staticClass:"font-weight-bold"},[t._v(t._s(t.order.order_no))])],1)],1)],1)],1),a("list-cell",{attrs:{hover:!1,padding:"50rpx 30rpx 20rpx",last:!0}},[a("v-uni-view",{staticClass:"w-100 d-flex flex-column"},[a("v-uni-view",{staticClass:"pay-cell"},[a("v-uni-view",[t._v("取单号")]),a("v-uni-view",{staticClass:"font-weight-bold"},[t._v(t._s(t.order.sort_num))])],1),a("v-uni-view",{staticClass:"pay-cell"},[a("v-uni-view",[t._v("备注")]),a("v-uni-view",{staticClass:"font-weight-bold"},[t._v(t._s(t.order.postscript))])],1),a("v-uni-view",{staticClass:"pay-cell just-content-center",staticStyle:{"justify-content":"center"}},[a("v-uni-image",{staticStyle:{width:"300rpx",height:"300rpx"},attrs:{src:n("5ef6"),mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"pay-cell just-content-center",staticStyle:{"justify-content":"center"}},[a("v-uni-view",{staticClass:"font-size-sm  text-color-assist",staticStyle:{"padding-bottom":"40rpx"}},[t._v("长按图片识别，加我为朋友付款")])],1),a("v-uni-view",{staticClass:"pay-cell just-content-center",staticStyle:{"justify-content":"center"}},[a("v-uni-button",{staticClass:"drink-btn",attrs:{type:"primary",size:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu.apply(void 0,arguments)}}},[t._v("继续点单")])],1)],1)],1)],1)],1)]:a("v-uni-view",{staticClass:"d-flex w-100 h-100 flex-column just-content-center align-items-center"},[a("v-uni-image",{staticClass:"drinks-img",attrs:{src:"/static/images/loading.gif"}}),a("v-uni-view",{staticClass:"tips d-flex flex-column align-items-center font-size-base text-color-assist"},[a("v-uni-view",[t._v("您还没有点单")]),a("v-uni-view",[t._v("快去犒劳一下自己吧~")])],1),a("v-uni-button",{staticClass:"drink-btn",attrs:{type:"primary",size:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menu.apply(void 0,arguments)}}},[t._v("去点餐")]),a("v-uni-view",{staticClass:"font-size-sm text-color-primary",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.orders.apply(void 0,arguments)}}},[t._v("查看历史订单")])],1)],2)},i=[]},"5ef6":function(t,e,n){t.exports=n.p+"static/img/wx.4b8e9c2e.png"},"6e48":function(t,e,n){var a=n("ed4c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("2e4b9043",a,!0,{sourceMap:!1,shadowMode:!1})},"79f4":function(t,e,n){"use strict";var a=n("e45f"),o=n.n(a);o.a},8350:function(t,e,n){"use strict";n.r(e);var a=n("59a2"),o=n("189b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("2ab5");var c,f=n("f0c5"),s=Object(f["a"])(o["default"],a["b"],a["c"],!1,null,"27aad4bf",null,!1,a["a"],c);e["default"]=s.exports},"987d4":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-4f962fb9]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-4f962fb9]:before{content:"\\e667"}.iconshoucangfill[data-v-4f962fb9]:before{content:"\\e6c9"}.iconjifen[data-v-4f962fb9]:before{content:"\\e642"}.iconradio-button-off[data-v-4f962fb9]:before{content:"\\e688"}.iconradio-button-on[data-v-4f962fb9]:before{content:"\\e689"}.iconhelp[data-v-4f962fb9]:before{content:"\\e752"}.iconwxpay[data-v-4f962fb9]:before{content:"\\e611"}.iconbalance[data-v-4f962fb9]:before{content:"\\e619"}.iconadd-select[data-v-4f962fb9]:before{content:"\\e7b0"}.iconsami-select[data-v-4f962fb9]:before{content:"\\e7b1"}.iconmap[data-v-4f962fb9]:before{content:"\\e758"}.iconsuccess[data-v-4f962fb9]:before{content:"\\e767"}.iconsuccess-fill[data-v-4f962fb9]:before{content:"\\e78d"}.iconiconset0136[data-v-4f962fb9]:before{content:"\\e623"}.iconzan[data-v-4f962fb9]:before{content:"\\e640"}.iconjifenqiandao[data-v-4f962fb9]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-4f962fb9]:before{content:"\\e606"}.icondaohang[data-v-4f962fb9]:before{content:"\\e641"}.iconwodelianxikefu[data-v-4f962fb9]:before{content:"\\e671"}.iconwodexinyuan[data-v-4f962fb9]:before{content:"\\e675"}.iconphone[data-v-4f962fb9]:before{content:"\\e6dd"}.icondingdan[data-v-4f962fb9]:before{content:"\\e645"}.iconliwu[data-v-4f962fb9]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-4f962fb9]:before{content:"\\e60d"}.iconyinpin[data-v-4f962fb9]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-4f962fb9]:before{content:"\\e685"}.iconico[data-v-4f962fb9]:before{content:"\\e646"}.iconwode[data-v-4f962fb9]:before{content:"\\e616"}.icongengduofuwu[data-v-4f962fb9]:before{content:"\\e607"}.iconqucan[data-v-4f962fb9]:before{content:"\\e625"}.iconyou[data-v-4f962fb9]:before{content:"\\e618"}.iconshouhuodizhi[data-v-4f962fb9]:before{content:"\\e666"}.iconshangcheng[data-v-4f962fb9]:before{content:"\\e63b"}.iconadd[data-v-4f962fb9]:before{content:"\\e742"}.iconarrow-right[data-v-4f962fb9]:before{content:"\\e743"}.iconarrow-lift[data-v-4f962fb9]:before{content:"\\e744"}.iconarrow-up[data-v-4f962fb9]:before{content:"\\e745"}.iconclose[data-v-4f962fb9]:before{content:"\\e747"}.iconleftbutton[data-v-4f962fb9]:before{content:"\\e755"}.iconreduce[data-v-4f962fb9]:before{content:"\\e75e"}.iconseleted[data-v-4f962fb9]:before{content:"\\e763"}.iconRightbutton[data-v-4f962fb9]:before{content:"\\e765"}.iconleftbutton-fill[data-v-4f962fb9]:before{content:"\\e782"}.iconRightbutton-fill[data-v-4f962fb9]:before{content:"\\e78a"}.iconarrow-down[data-v-4f962fb9]:before{content:"\\e7b2"}.iconaixin1[data-v-4f962fb9]:before{content:"\\e63c"}.tui-list-cell[data-v-4f962fb9]{position:relative;width:100%;box-sizing:border-box;overflow:hidden;display:flex;align-items:center}.tui-radius[data-v-4f962fb9]{border-radius:%?12?%;overflow:hidden}.tui-cell-hover[data-v-4f962fb9]{background:#f7f7f9!important}.tui-list-cell[data-v-4f962fb9]::after{content:"";position:absolute;border-bottom:%?2?% solid #eee;-webkit-transform:scaleY(.8);transform:scaleY(.8);bottom:0;right:0;left:0}.tui-line-left[data-v-4f962fb9]::after{left:%?30?%!important}.tui-line-right[data-v-4f962fb9]::after{right:%?30?%!important}.tui-cell-last[data-v-4f962fb9]::after{border-bottom:0!important}.arrow[data-v-4f962fb9]{width:%?50?%;height:%?50?%;position:relative;margin-right:%?-10?%;flex-shrink:0}',""]),t.exports=e},bd8b:function(t,e,n){"use strict";n.r(e);var a=n("da5b"),o=n("2a10");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("79f4");var c,f=n("f0c5"),s=Object(f["a"])(o["default"],a["b"],a["c"],!1,null,"4f962fb9",null,!1,a["a"],c);e["default"]=s.exports},da5b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tui-cell-class tui-list-cell",class:{"tui-cell-arrow":t.arrow,"tui-cell-last":t.last,"tui-line-left":t.lineLeft,"tui-line-right":t.lineRight,"tui-radius":t.radius},style:{background:t.bgcolor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default"),t.arrow?n("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/navigator-1.png"}}):t._e()],2)},i=[]},e45f:function(t,e,n){var a=n("987d4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("10c19f8c",a,!0,{sourceMap:!1,shadowMode:!1})},ed4c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-27aad4bf]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-27aad4bf]:before{content:"\\e667"}.iconshoucangfill[data-v-27aad4bf]:before{content:"\\e6c9"}.iconjifen[data-v-27aad4bf]:before{content:"\\e642"}.iconradio-button-off[data-v-27aad4bf]:before{content:"\\e688"}.iconradio-button-on[data-v-27aad4bf]:before{content:"\\e689"}.iconhelp[data-v-27aad4bf]:before{content:"\\e752"}.iconwxpay[data-v-27aad4bf]:before{content:"\\e611"}.iconbalance[data-v-27aad4bf]:before{content:"\\e619"}.iconadd-select[data-v-27aad4bf]:before{content:"\\e7b0"}.iconsami-select[data-v-27aad4bf]:before{content:"\\e7b1"}.iconmap[data-v-27aad4bf]:before{content:"\\e758"}.iconsuccess[data-v-27aad4bf]:before{content:"\\e767"}.iconsuccess-fill[data-v-27aad4bf]:before{content:"\\e78d"}.iconiconset0136[data-v-27aad4bf]:before{content:"\\e623"}.iconzan[data-v-27aad4bf]:before{content:"\\e640"}.iconjifenqiandao[data-v-27aad4bf]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-27aad4bf]:before{content:"\\e606"}.icondaohang[data-v-27aad4bf]:before{content:"\\e641"}.iconwodelianxikefu[data-v-27aad4bf]:before{content:"\\e671"}.iconwodexinyuan[data-v-27aad4bf]:before{content:"\\e675"}.iconphone[data-v-27aad4bf]:before{content:"\\e6dd"}.icondingdan[data-v-27aad4bf]:before{content:"\\e645"}.iconliwu[data-v-27aad4bf]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-27aad4bf]:before{content:"\\e60d"}.iconyinpin[data-v-27aad4bf]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-27aad4bf]:before{content:"\\e685"}.iconico[data-v-27aad4bf]:before{content:"\\e646"}.iconwode[data-v-27aad4bf]:before{content:"\\e616"}.icongengduofuwu[data-v-27aad4bf]:before{content:"\\e607"}.iconqucan[data-v-27aad4bf]:before{content:"\\e625"}.iconyou[data-v-27aad4bf]:before{content:"\\e618"}.iconshouhuodizhi[data-v-27aad4bf]:before{content:"\\e666"}.iconshangcheng[data-v-27aad4bf]:before{content:"\\e63b"}.iconadd[data-v-27aad4bf]:before{content:"\\e742"}.iconarrow-right[data-v-27aad4bf]:before{content:"\\e743"}.iconarrow-lift[data-v-27aad4bf]:before{content:"\\e744"}.iconarrow-up[data-v-27aad4bf]:before{content:"\\e745"}.iconclose[data-v-27aad4bf]:before{content:"\\e747"}.iconleftbutton[data-v-27aad4bf]:before{content:"\\e755"}.iconreduce[data-v-27aad4bf]:before{content:"\\e75e"}.iconseleted[data-v-27aad4bf]:before{content:"\\e763"}.iconRightbutton[data-v-27aad4bf]:before{content:"\\e765"}.iconleftbutton-fill[data-v-27aad4bf]:before{content:"\\e782"}.iconRightbutton-fill[data-v-27aad4bf]:before{content:"\\e78a"}.iconarrow-down[data-v-27aad4bf]:before{content:"\\e7b2"}.iconaixin1[data-v-27aad4bf]:before{content:"\\e63c"}uni-page-body[data-v-27aad4bf]{min-height:100%;background-color:#f1f8fa}.order-box[data-v-27aad4bf]{padding:%?20?%;margin-bottom:%?100?%}.drinks-img[data-v-27aad4bf]{width:%?260?%;height:%?260?%}.tips[data-v-27aad4bf]{margin:%?60?% 0 %?80?%;line-height:%?48?%}.drink-btn[data-v-27aad4bf]{width:%?320?%;border-radius:50rem!important;margin-bottom:%?40?%;font-size:%?28?%;line-height:3}.section[data-v-27aad4bf]{position:relative}.section[data-v-27aad4bf]::before{content:"";position:absolute;background-color:#f1f8fa;width:%?30?%;height:%?30?%;bottom:%?-15?%;z-index:10;border-radius:100%;left:%?-15?%}.section[data-v-27aad4bf]::after{content:"";position:absolute;background-color:#f1f8fa;width:%?30?%;height:%?30?%;bottom:%?-15?%;z-index:10;border-radius:100%;right:%?-15?%}.pay-cell[data-v-27aad4bf]{width:100%;display:flex;align-items:center;justify-content:space-between;font-size:%?28?%;color:#5a5b5c;margin-bottom:%?40?%}.pay-cell[data-v-27aad4bf]:nth-last-child(1){margin-bottom:0}.sort-num[data-v-27aad4bf]{font-size:%?64?%;font-weight:700;color:#5a5b5c;line-height:2}.steps__img-column[data-v-27aad4bf]{display:flex;margin:%?30?% 0}.steps__img-column .steps__img-column-item[data-v-27aad4bf]{flex:1;display:flex;align-items:center;justify-content:center}.steps__img-column .steps__img-column-item uni-image[data-v-27aad4bf]{width:%?80?%;height:%?80?%}.steps__text-column[data-v-27aad4bf]{display:flex;margin-bottom:%?40?%}.steps__text-column .steps__text-column-item[data-v-27aad4bf]{flex:1;display:inline-flex;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#919293}.steps__text-column .steps__text-column-item.active[data-v-27aad4bf]{color:#5a5b5c;font-weight:700}.steps__text-column .steps__text-column-item.active .steps__column-item-line[data-v-27aad4bf]{background-color:#5a5b5c}.steps__text-column .steps__text-column-item .steps__column-item-line[data-v-27aad4bf]{flex:1;height:%?2?%;background-color:#919293;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.steps__text-column .steps__text-column-item .steps__text-column-item-text[data-v-27aad4bf]{margin:0 8px}body.?%PAGE?%[data-v-27aad4bf]{background-color:#f1f8fa}',""]),t.exports=e}}]);