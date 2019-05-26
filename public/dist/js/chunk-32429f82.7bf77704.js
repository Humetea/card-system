(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-32429f82","chunk-02391ad8"],{"017e":function(t,e,n){},"0394":function(t,e,n){"use strict";var r=n("017e"),i=n.n(r);i.a},"074a":function(t,e,n){"use strict";var r=n("d33b"),i=n.n(r);i.a},1045:function(t,e,n){"use strict";function r(t){return Object(u.a)({url:"order/stat",method:"post",data:t})}function i(t){return Object(u.a)({url:"order",method:"post",data:t})}function o(t,e){return Object(u.a)({url:"order/remark",method:"post",data:{id:t,remark:e}})}function a(t){return Object(u.a)({url:"order/ship",method:"post",data:{id:t}})}function s(t){return Object(u.a)({url:"order/notify",method:"post",data:{id:t}})}function l(t,e){return Object(u.a)({url:"order/freeze",method:"post",data:{ids:t,reason:e}})}function d(t){return Object(u.a)({url:"order/unfreeze",method:"post",data:{ids:t}})}function c(t,e){return Object(u.a)({url:"order/set_paid",method:"post",data:{id:t,trade_no:e}})}var u,p;n.d(e,"a",function(){return p}),n.d(e,"h",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"f",function(){return c}),u=n("41bb"),p={UN_PAY:{id:0,name:"未支付",type:"info"},PAID:{id:1,name:"待发货",type:"primary"},SUCCESS:{id:2,name:"已成功",type:"success"},FROZEN:{id:3,name:"已冻结",type:"danger"},REFUND:{id:4,name:"已退款",type:"warning"},get:function(t){for(var e in this)if(this.hasOwnProperty(e)&&this[e].id===t)return this[e];return{id:t,type:"danger",name:"未知状态"}}}},"126b":function(t,e,n){"use strict";var r,i,o,a,s,l;n.r(e),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"order-info-container",attrs:{title:t.title,visible:t.orderVisible},on:{"update:visible":function(e){t.orderVisible=e}}},[t.orderInfo?n("div",{staticClass:"order-info-table"},[n("table",{attrs:{border:"0",cellspacing:"0"}},[n("tbody",[n("tr",[n("td",{staticStyle:{"white-space":"nowrap","text-align":"right",width:"80px"}},[t._v("　订单号")]),n("td",{staticStyle:{"white-space":"nowrap","min-width":"160px"}},[t._v(t._s(t.orderInfo.order_no))]),n("td",{staticStyle:{"white-space":"nowrap","text-align":"right",width:"80px"}},[t._v("付款方式")]),n("td",{staticStyle:{"white-space":"nowrap","min-width":"90px"}},[t._v("\n          "+t._s(t.orderInfo.pay?t.orderInfo.pay.name:"未知#"+t.orderInfo.pay_id)+"\n          "),t.orderInfo.status>t.ORDER_STATUS.UN_PAY.id?n("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#409EFF"},attrs:{onclick:"bus.$emit('"+t.from+":show:pay')"}},[t._v("查看")]):t._e()])]),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("付款时间")]),n("td",[t._v(t._s(t.orderInfo.paid_at))]),n("td",{staticStyle:{"text-align":"right"}},[t._v("提交金额")]),n("td",[t._v(t._s(t._f("moneyFilter")(t.orderInfo.paid))+"元")])]),n("tr",[t.isApiOrder?t._e():n("td",{staticStyle:{"text-align":"right"}},[t._v("联系方式")]),t.isApiOrder?t._e():n("td",{staticStyle:{"max-width":"280px","word-wrap":"break-word","line-height":"1"}},[t._v(t._s(t.orderInfo.email))]),t.isApiOrder?n("td",{staticStyle:{"text-align":"right"}},[t._v("通知状态")]):t._e(),t.isApiOrder?n("td",{staticStyle:{"max-width":"280px","word-wrap":"break-word","line-height":"1"}},[n("span",{class:"el-tag el-tag--"+(t.isNotified(t.orderInfo)?"success":"warning")},[t._v("\n            "+t._s(t.isNotified(t.orderInfo)?"已通知":"通知失败")+"\n          ")]),t._v("  \n          "),t.isNotified(t.orderInfo)?t._e():n("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#409EFF"},attrs:{onclick:"bus.$emit('"+t.from+":send:notify')"}},[t._v("重发通知")])]):t._e(),n("td",{staticStyle:{"text-align":"right"}},[t._v("商户分成")]),n("td",[t._v(t._s(t._f("moneyFilter")(t.orderInfo.income))+"元")])]),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("订单状态")]),n("td",[n("span",{class:"el-tag el-tag--"+t.ORDER_STATUS.get(t.orderInfo.status).type},[t._v("\n            "+t._s(t.ORDER_STATUS.get(t.orderInfo.status).name)+"\n          ")]),t._v(" \n          "),t.isApiOrder?t._e():n("div",{staticStyle:{display:"inline"}},[n("span",{class:t.isShipped(t.orderInfo)?"green-text":"amber-text"},[t._v("\n              "+t._s(t.isShipped(t.orderInfo)?"(已发货)":"(未发货)")+"\n            ")]),t.isShipped(t.orderInfo)||t.orderInfo.status===t.ORDER_STATUS.UN_PAY.id?t._e():n("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#409EFF"},attrs:{onclick:"bus.$emit('"+t.from+":send:card')"}},[t._v("发货")]),t.isShipped(t.orderInfo)?n("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#409EFF"},attrs:{onclick:"bus.$emit('"+t.from+":show:card')"}},[t._v("查看")]):t._e()])]),n("td",{staticStyle:{"text-align":"right"}},[t._v("购买IP")]),n("td",[t._v(t._s(t.orderInfo.ip))])]),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("商户备注")]),n("td",{staticStyle:{"max-width":"280px","word-wrap":"break-word","line-height":"1.4"}},[t._v(t._s(t.orderInfo.remark))]),n("td",{staticStyle:{"text-align":"right"}},[t._v("详细信息")]),n("td",{staticStyle:{"max-width":"280px","word-wrap":"break-word","line-height":"1"}},[t.orderInfo.status===t.ORDER_STATUS.FROZEN.id?n("span",[t._v("\n            冻结原因: "+t._s(t.orderInfo.frozen_reason||"无")+"\n          ")]):t._e()])])])])]):t._e()])},i=[],n("7f7f"),o=n("1045"),a={props:{from:{default:"order"}},data:function(){return{loading:!1,ORDER_STATUS:o.a,orderVisible:!1,orderInfo:null,cardInfo:null,isApiOrder:!1,title:"订单信息"}},mounted:function(){var t=this;this._on_show_card=function(){if(t.orderInfo){var e=t.orderInfo.card_orders.map(function(t){return t.card?t.card.card:"未知卡密#"+t.card_id}).join("<br>");t.$msgbox({title:"订单卡密信息",message:e,dangerouslyUseHTMLString:!0})}},window.bus.$on(this.from+":show:card",this._on_show_card),this._on_show_pay=function(){var e,n;t.orderInfo&&(n="支付方式: "+(e=t.orderInfo.pay?t.orderInfo.pay.name:"支付方式#"+t.orderInfo.pay_id)+"<br>支付时间: "+t.orderInfo.paid_at+"<br>"+e+"单号(流水号): "+t.orderInfo.pay_trade_no,t.$msgbox({title:"支付信息",message:n,dangerouslyUseHTMLString:!0}))},window.bus.$on(this.from+":show:pay",this._on_show_pay),this._on_send_card=function(){t.orderInfo&&t.$confirm("当前订单状态为<"+o.a.get(t.orderInfo.status).name+">, 是否确认发货?").then(function(){t.loading=!0,Object(o.g)(t.orderInfo.id).then(function(e){t.loading=!1,Object.assign(t.orderInfo,e.data),t.$notify({title:"发货成功",message:"当前订单已发货成功",type:"success",duration:3e3})}).catch(function(){t.loading=!1})})},window.bus.$on(this.from+":send:card",this._on_send_card),this._on_send_notify=function(){t.orderInfo&&(t.loading=!0,Object(o.e)(t.orderInfo.id).then(function(e){t.loading=!1,Object.assign(t.orderInfo.api_info,e.data.api_info),t.$msgbox({title:"重发结果",message:e.data.notify_html,dangerouslyUseHTMLString:!1})}).catch(function(){t.loading=!1}))},window.bus.$on(this.from+":send:notify",this._on_send_notify)},beforeDestroy:function(){window.bus.$off(this.from+":show:card",this._on_show_card),window.bus.$off(this.from+":show:pay",this._on_show_pay),window.bus.$off(this.from+":send:card",this._on_send_card),window.bus.$off(this.from+":send:notify",this._on_send_notify)},methods:{showOrder:function(t){this.orderInfo=t,this.isApiOrder=-1001===t.product_id,this.title=this.isApiOrder?"订单信息(API订单)":"订单信息(卡密订单)",this.orderVisible=!0},isShipped:function(t){return t.status===o.a.SUCCESS.id||t.card_orders&&t.card_orders.length},isNotified:function(t){return t.api_info&&"success"===t.api_info.notify_ret}}},n("0394"),s=n("2877"),l=Object(s.a)(a,r,i,!1,null,null,null),e.default=l.exports},"386d":function(t,e,n){"use strict";var r=n("cb7c"),i=n("83a1"),o=n("5f1b");n("214f")("search",1,function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):RegExp(n)[e](r+"")},function(t){var e,s,l,d,c=a(n,t,this);return c.done?c.value:(s=this+"",l=(e=r(t)).lastIndex,i(l,0)||(e.lastIndex=0),d=o(e,s),i(e.lastIndex,l)||(e.lastIndex=l),null===d?-1:d.index)}]})},"6af2":function(t,e,n){"use strict";var r,i,o,a,s,l,d,c,u,p,f,h,_;n.r(e),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",class:{"app-container":!t.userInfo}},[n("el-col",{staticClass:"no-bottom-form",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[n("el-form",{staticClass:"list-pre-table",attrs:{inline:!0}},[t.onlyProfit?t._e():n("el-form-item",{staticClass:"mobile-full-width"},[n("el-select",{staticClass:"mobile-full-width",attrs:{size:"small","popper-class":"el-select-group-less-padding","no-data-text":"无分类数据"},on:{change:t.changeCategory},model:{value:t.where.category_id,callback:function(e){t.$set(t.where,"category_id",e)},expression:"where.category_id"}},[n("el-option-group",{attrs:{label:"API订单"}},[n("el-option",{attrs:{label:"API订单",value:t.API_ORDER_ID}})],1),n("el-option-group",{attrs:{label:"卡密订单"}},[n("el-option",{attrs:{label:"卡密订单",value:-1}}),t._l(t.categories,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2)],1),0<t.where.category_id?n("el-select",{staticClass:"mobile-full-width",attrs:{size:"small"},on:{change:t.getList},model:{value:t.where.product_id,callback:function(e){t.$set(t.where,"product_id",e)},expression:"where.product_id"}},[n("el-option",{attrs:{label:"全部",value:-1}}),t._l(t.products,function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})],2):t._e()],1),n("el-form-item",{staticClass:"mobile-full-width"},[n("el-input",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.search.value,callback:function(e){t.$set(t.search,"value",e)},expression:"search.value"}},[n("el-select",{staticStyle:{width:"90px"},attrs:{slot:"prepend",placeholder:"搜索类型",value:"",size:"small"},slot:"prepend",model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},[n("el-option",{attrs:{label:"订单号",value:"order_no"}}),n("el-option",{attrs:{label:"支付渠道单号",value:"pay_trade_no"}}),t.isApiOrder?n("el-option",{attrs:{label:"商户订单号(API)",value:"api_out_no"}}):t._e(),t.isApiOrder?n("el-option",{attrs:{label:"附加信息(API)",value:"api_info"}}):t._e(),"admin"===t._project?n("el-option",{attrs:{label:"商户ID",value:"user_id"}}):t._e(),t.isApiOrder||t.onlyProfit?t._e():n("el-option",{attrs:{label:"买家联系方式",value:"email"}})],1)],1)],1),t.recentDay?t._e():n("el-form-item",{staticClass:"mobile-full-width"},[n("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right",placeholder:"日期范围","picker-options":t.pickerOptions},model:{value:t.date_range,callback:function(e){t.date_range=e},expression:"date_range"}})],1),n("el-form-item",{staticClass:"fix-height"},[n("el-button",{attrs:{size:"small"},on:{click:t.handleSearch}},[t._v("搜索")])],1),n("div",{staticClass:"mobile-full-width"}),t.onlyProfit?t._e():n("el-form-item",{staticClass:"fix-height"},[n("el-switch",{attrs:{"inactive-text":"未支付订单","active-value":1,"inactive-value":0},on:{change:t.handleShowUnPay},model:{value:t.where.showUnPay,callback:function(e){t.$set(t.where,"showUnPay",e)},expression:"where.showUnPay"}})],1),t.onlyProfit||t.isApiOrder?t._e():n("el-form-item",{staticClass:"fix-height"},[n("el-switch",{attrs:{"inactive-text":"待发货订单","active-value":1,"inactive-value":0},on:{change:t.handleShowUnSend},model:{value:t.where.showUnSend,callback:function(e){t.$set(t.where,"showUnSend",e)},expression:"where.showUnSend"}})],1)],1)],1),t.destroyForLoad?t._e():n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list-table",attrs:{data:t.list.data,stripe:"",border:""},on:{"filter-change":t.handleFilterChange,"selection-change":function(e){return t.checkedIds=e.map(function(t){return t.id}).join(",")}}},["admin"===t._project?n("el-table-column",{attrs:{type:"selection",width:"40"}}):t._e(),"admin"!==t._project||t.userInfo?t._e():n("el-table-column",{attrs:{prop:"user_id",label:"商户ID",width:"70"}}),n("el-table-column",{attrs:{prop:"order_no",label:"订单号(点击查看)",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"line-btn",on:{click:function(n){return t.showOrder(e.row)}}},[t._v(t._s(e.row.order_no))])]}}],null,!1,1266714438)}),t.onlyProfit?t._e():n("el-table-column",{attrs:{prop:"status",label:"状态",width:"80","column-key":"status",filters:t.statusFilter,"filtered-value":t.statusFilterValue,"filter-placement":"bottom"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.ORDER_STATUS.get(e.row.status).type,"close-transition":""}},[t._v("\n          "+t._s(t.ORDER_STATUS.get(e.row.status).name)+"\n        ")])]}}],null,!1,1530591733)}),t.isApiOrder?n("el-table-column",{attrs:{prop:"api_out_no",label:"通知",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"line-btn",on:{click:function(n){return t.showOrder(e.row)}}},[n("el-tag",{attrs:{type:e.row.api_info&&"success"===e.row.api_info.notify_ret?"success":"warning","close-transition":""}},[t._v("\n            "+t._s(e.row.api_info&&e.row.api_info.notify_ret||"未通知")+"\n          ")])],1)]}}],null,!1,2372748283)}):t._e(),n("el-table-column",{attrs:{prop:"paid_at",label:"支付时间",width:"160"}}),t.isApiOrder?n("el-table-column",{attrs:{prop:"api_out_no",label:"商户订单号",width:"170","show-overflow-tooltip":""}}):t._e(),t.isApiOrder||t.onlyProfit?t._e():n("el-table-column",{attrs:{prop:"product",label:"商品名称","min-width":"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"red-text"},[t._v(t._s(e.row.count))]),t._v(" x \n        "),n("span",[t._v(t._s(e.row.product?e.row.product.name:"未知#"+e.row.product_id))])]}}],null,!1,1611139758)}),t.isApiOrder||t.onlyProfit?t._e():n("el-table-column",{attrs:{prop:"product",label:"卡密",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"line-btn",staticStyle:{color:"#409eff"},on:{click:function(n){return t.showCards(e.row)}}},[t._v("\n          "+t._s(e.row.card_orders&&e.row.card_orders.length?e.row.card_orders.length+"张":"无")+"\n        ")])]}}],null,!1,3522189028)}),n("el-table-column",{attrs:{prop:"product",label:"支付方式","min-width":"80","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pay?e.row.pay.name:"未知#"+e.row.pay_id)+"\n      ")]}}],null,!1,1455219052)}),t.onlyProfit?n("el-table-column",{attrs:{prop:"cost",label:"成本","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("moneyFilter")(e.row.cost))+"\n      ")]}}],null,!1,117871487)}):t._e(),t.onlyProfit&&!t.isApiOrder?n("el-table-column",{attrs:{prop:"paid",label:"售价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("moneyFilter")(e.row.paid))+"\n      ")]}}],null,!1,264046024)}):t._e(),t.onlyProfit?t._e():n("el-table-column",{attrs:{prop:"paid",label:"金额","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[0<e.row.discount?n("el-tooltip",{attrs:{effect:"dark",placement:"top-start",content:"商品原价："+(e.row.price/100).toFixed(2)+"　优惠金额："+(e.row.discount/100).toFixed(2)}},[n("span",[t._v(t._s(t._f("moneyFilter")(e.row.paid)))])]):n("span",[t._v("\n             "+t._s(t._f("moneyFilter")(e.row.paid))+"\n        ")])]}}],null,!1,1709306754)}),"merchant"===t._project||t.userInfo?n("el-table-column",{attrs:{prop:"income",label:"分成","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{effect:"dark",placement:"top-start",content:"手续费: "+(e.row.fee/100).toFixed(2)}},[n("span",[t._v(t._s(t._f("moneyFilter")(e.row.income)))])])]}}],null,!1,3409110604)}):n("el-table-column",{attrs:{prop:"fee-system_fee",label:"平台分成","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{effect:"dark",placement:"top-start",content:"通道手续费: "+(e.row.system_fee/100).toFixed(2)}},[n("span",[t._v(t._s(t._f("moneyFilter")(e.row.fee-e.row.system_fee)))])])]}}],null,!1,3121495338)}),t.onlyProfit?n("el-table-column",{attrs:{prop:"profit",label:"利润","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("moneyFilter")(e.row.income-e.row.cost))+"\n      ")]}}],null,!1,1135292368)}):t._e(),t.onlyProfit||t.isApiOrder?t._e():n("el-table-column",{attrs:{prop:"email",label:"买家联系方式","min-width":"160","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.email)+t._s((e.row.email_sent,"")))])]}}],null,!1,2703244150)}),!t.onlyProfit&&t.isApiOrder?n("el-table-column",{attrs:{prop:"api_info.attach",label:"附加","min-width":"160","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"line-btn",on:{click:function(n){return t.showRemark(e.row)}}},[t._v("\n          "+t._s(e.row.api_info?e.row.api_info.attach:"暂无")+"\n        ")])]}}],null,!1,1986497496)}):t._e(),t.onlyProfit?t._e():n("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"line-btn",on:{click:function(n){return t.showRemark(e.row)}}},[t._v(t._s(e.row.remark||"添加"))])]}}],null,!1,1131591075)}),n("el-table-column",{attrs:{label:"操作",width:"admin"===t._project?"80":"50",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"icon-btn",staticStyle:{"font-size":"14px"},on:{click:function(n){return t.showOrder(e.row)}}},[t._v("\n          查看\n        ")]),"admin"===t._project&&e.row.status===t.ORDER_STATUS.SUCCESS.id?n("a",{staticClass:"icon-btn",staticStyle:{"font-size":"14px"},on:{click:function(n){return t.handleFreeze(e.row)}}},[t._v("\n          冻结\n        ")]):t._e(),"admin"===t._project&&e.row.status===t.ORDER_STATUS.FROZEN.id?n("a",{staticClass:"icon-btn",staticStyle:{"font-size":"14px"},on:{click:function(n){return t.handleUnfreeze(e.row)}}},[t._v("\n          解冻\n        ")]):t._e(),"admin"===t._project&&e.row.status===t.ORDER_STATUS.UN_PAY.id?n("a",{staticClass:"icon-btn",staticStyle:{"font-size":"14px"},on:{click:function(n){return t.handleSetPaid(e.row)}}},[t._v("\n          补单\n        ")]):t._e()]}}],null,!1,1794983739)})],1),"admin"===t._project?n("el-col",{staticClass:"list-after-action",staticStyle:{"padding-top":"8px","text-align":"left"},attrs:{span:24}},[n("el-form",{staticClass:"no-bottom-form",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"选中"}},[n("el-button",{attrs:{size:"small"},on:{click:t.checkFreeze}},[t._v("冻结")]),n("el-button",{attrs:{size:"small"},on:{click:t.checkUnfreeze}},[t._v("解冻")])],1)],1)],1):t._e(),n("el-col",{staticClass:"list-after-action",staticStyle:{"padding-top":"12px","text-align":"right"},attrs:{span:24}},[0<t.list.total?n("el-pagination",{staticClass:"pagination",attrs:{"page-size":20,"page-sizes":[10,20,30,40,50,100],total:t.list.total,"current-page":t.list.current_page,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.list,"current_page",e)},"update:current-page":function(e){return t.$set(t.list,"current_page",e)},"current-change":t.onChangePage,"size-change":t.onChangePageSize}}):t._e()],1),t.onlyProfit?n("el-col",{staticClass:"list-after-action",staticStyle:{"padding-top":"12px"},attrs:{span:24}},[n("el-card",{staticClass:"my-card"},[n("div",{staticStyle:{"font-size":"14px"}},[t._v("\n        总收入: "+t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(parseInt(t.list.profit_sum.income))))+"，\n        总利润： "+t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(parseInt(t.list.profit_sum.profit))))+"\n      ")])])],1):t._e(),n("order-info",{ref:"orderInfo",attrs:{from:"order"}})],1)},i=[],n("386d"),n("7f7f"),o=n("7618"),a=n("323e"),s=n.n(a),l=n("1045"),d=n("5d16"),c=n("51d1"),u=n("126b"),f={props:{userInfo:{type:Object,default:null},recentDay:{default:!(p=-1001)},onlyProfit:{default:!1},_project:{default:"admin_free"}},components:{orderInfo:u.default},data:function(){return{isMobile:this.$store.state.app.isMobile,loading:!1,ORDER_STATUS:l.a,API_ORDER_ID:p,search:{type:"order_no",value:""},date_range:"",where:{category_id:-1,product_id:-1,showUnPay:0,showUnSend:0},categories:[{id:-2,name:"加载中"}],products:[{id:-2,name:"加载中"}],list:{current_page:1,data:[],from:1,last_page:1,next_page_url:null,per_page:20,prev_page_url:null,to:0,total:0,profit_sum:{income:0,profit:0}},checkedIds:"",statusFilter:function(){var t,e=[];for(t in l.a)l.a.hasOwnProperty(t)&&"object"===Object(o.a)(l.a[t])&&e.push({text:l.a[t].name,value:l.a[t].id,type:l.a[t].type});return e}(),statusFilterValue:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},destroyForLoad:!1,isApiOrder:!1}},watch:{loading:function(t,e){t?e||s.a.isStarted()||s.a.start():s.a.done()},isApiOrder:function(){var t=this;this.destroyForLoad=!0,this.$nextTick(function(){t.destroyForLoad=!1})}},mounted:function(){"api"===this.$route.query.type&&(this.where.category_id=p,this.isApiOrder=!0),"admin"===this._project?(this.categories=[],this._loadOrders()):this.getCategories()},methods:{getCategories:function(){var t,e=this;this.loading=!0,t={search:"simple",val:"list"},this.userInfo&&(t.user_id=this.userInfo.id),Object(d.d)(t).then(function(t){e.categories=t.data,e._loadOrders()})},_loadOrders:function(){"paid"===this.$route.query.status?(this.where.showUnSend=1,this.handleShowUnSend(1)):"un_pay"===this.$route.query.status?(this.where.showUnPay=1,this.handleShowUnPay(1)):this.handleShowWithoutUnpay()},changeCategory:function(t){this.isApiOrder?(t!==p&&(this.isApiOrder=!1),this.getList()):t===p?(this.isApiOrder=!0,this.getList()):this.getProducts(t)},getProducts:function(t){var e,n=this;this.getList(),this.where.product_id=-1,this.products=[],e={search:"simple",val:t},this.userInfo&&(e.user_id=this.userInfo.id),Object(c.f)(e).then(function(t){n.products=t.data})},getList:function(){var t=this;this.loading=!0,this.where.current_page=this.list.current_page,this.where.per_page=this.list.per_page,this.where.recent=this.recentDay,this.where.profit=this.onlyProfit?1:0,this.userInfo&&(this.where.user_id=this.userInfo.id),Object(l.d)(this.where).then(function(e){t.list=e.data,t.loading=!1})},handleSearch:function(){var t={search:this.search.type,val:this.search.value};this.date_range&&this.date_range[0]&&this.date_range[1]?(t.start_at=this.date_range[0].format("yyyy-MM-dd"),t.end_at=this.date_range[1].format("yyyy-MM-dd")):(t.start_at=null,t.end_at=null),Object.assign(this.where,t),this.getList()},handleShowUnPay:function(t){t?(this.where.showUnSend=0,this.statusFilterValue.splice(0,this.statusFilterValue.length),this.statusFilterValue.push(l.a.UN_PAY.id)):this.handleShowWithoutUnpay(),this.where.status=this.statusFilterValue.join(","),this.handleSearch()},handleShowUnSend:function(t){t?(this.where.showUnPay=0,this.statusFilterValue.splice(0,this.statusFilterValue.length),this.statusFilterValue.push(l.a.PAID.id)):this.handleShowWithoutUnpay(),this.where.status=this.statusFilterValue.join(","),this.handleSearch()},handleShowWithoutUnpay:function(){var t;(t=this.statusFilterValue).splice.apply(t,[0,this.statusFilterValue.length].concat([l.a.FROZEN.id,l.a.SUCCESS.id,l.a.PAID.id,l.a.REFUND.id])),this.where.status="",this.handleSearch()},handleFilterChange:function(t){var e={};t.status?e.status=t.status.join(","):e.status=null,Object.assign(this.where,e),this.getList()},onChangePage:function(){this.getList()},onChangePageSize:function(t){this.list.per_page=t,this.getList()},showCards:function(t){t.card_orders&&t.card_orders.length&&this.$msgbox({title:"卡密详情",message:t.card_orders.map(function(t){return t.card?t.card.card:"未知卡密#"+t.card_id}).join("<br>"),dangerouslyUseHTMLString:!0})},showRemark:function(t){var e=this;this.$prompt("可以在这里修改备注","提示",{confirmButtonText:"保存",cancelButtonText:"取消",inputValue:t.remark,inputPattern:/^[\s\S]{0,100}$/,inputErrorMessage:"备注需100字符以内",inputType:"textarea"}).then(function(n){var r=n.value;e.loading=!0,Object(l.b)(t.id,r).then(function(){e.loading=!1,t.remark=r}).catch(function(){e.loading=!1})})},showOrder:function(t){this.$refs.orderInfo.showOrder(t)},handleFreeze:function(t){var e=this;this.$prompt("冻结订单 ".concat(t.order_no," ? <br>请输入与冻结原因"),"提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"保存",cancelButtonText:"取消",inputValue:t.frozen_reason,inputPattern:/^[\s\S]{2,100}$/,inputErrorMessage:"冻结原因需2-100字符以内",inputType:"textarea"}).then(function(n){var r=n.value;e.loading=!0,Object(l.c)(t.id,r).then(function(n){return e.loading=!1,1!==n.data[0]?e.$msgbox({title:"操作失败",message:"只能冻结已成功订单",type:"error"}):1!==n.data[1]?e.$msgbox({title:"操作失败",message:"冻结订单失败, 内部错误",type:"error"}):(e.$notify({title:"操作完成",message:t.order_no+" 已冻结",type:"info"}),void(t.status=l.a.FROZEN.id))}).catch(function(){e.loading=!1})})},handleUnfreeze:function(t){var e=this;this.$confirm("解冻订单 "+t.order_no+" ? ","提示",{type:"warning"}).then(function(){e.loading=!0,Object(l.i)(t.id).then(function(n){return e.loading=!1,1!==n.data[0]?e.$msgbox({title:"操作失败",message:"只能解冻已冻结订单",type:"error"}):1!==n.data[1]?e.$msgbox({title:"操作失败",message:"解冻订单失败, 内部错误",type:"error"}):(e.$notify({title:"操作完成",message:t.order_no+" 已解冻",type:"success"}),void(t.status=n.data[2]))}).catch(function(){e.loading=!1})})},checkFreeze:function(){var t=this;this.checkedIds.length&&this.$prompt("批量冻结选中订单? (只冻结交易成功订单) <br>请输入与冻结原因","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\s\S]{2,100}$/,inputErrorMessage:"冻结原因需2-100字符以内",inputType:"textarea"}).then(function(e){var n=e.value;t.loading=!0,Object(l.c)(t.checkedIds,n).then(function(e){t.$notify({title:"操作完成",message:"总订单: ".concat(e.data[0]," 笔，冻结成功 ").concat(e.data[1]," 笔"),type:"info"}),t.getList()}).catch(function(){t.loading=!1})})},checkUnfreeze:function(){var t=this;this.checkedIds.length&&this.$confirm("批量解冻选中订单? (只处理已冻结订单)","提示",{type:"warning"}).then(function(){Object(l.i)(t.checkedIds).then(function(e){t.$notify({title:"操作完成",message:"总订单: ".concat(e.data[0]," 笔，解冻成功 ").concat(e.data[1]," 笔"),type:"success"}),t.getList()}).catch(function(){t.loading=!1})})},handleSetPaid:function(t){var e=this,n=t.pay?t.pay.name:"支付方式#"+t.pay_id;this.$prompt("请仔细确认已经收到款项，<br>确认将订单 ".concat(t.order_no," 设置为已付款并发货? <br>请输入").concat(n,"内单号(流水号)"),"提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\s\S]{2,100}$/,inputErrorMessage:"单号需2-100字符以内",inputType:"text"}).then(function(n){var r=n.value;e.loading=!0,Object(l.f)(t.id,r).then(function(n){var r=n.data;if(e.loading=!1,Object.assign(t,r.order),0!==r.code)return e.$msgbox({title:"操作失败",message:r.msg,type:"error"});e.$notify({title:"操作完成",message:t.order_no+" 已补单成功",type:"success"})}).catch(function(){e.loading=!1})})}}},n("074a"),h=n("2877"),_=Object(h.a)(f,r,i,!1,null,null,null),e.default=_.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},d33b:function(t,e,n){}}]);