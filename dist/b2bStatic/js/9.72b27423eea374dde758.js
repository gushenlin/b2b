webpackJsonp([9],{"3+br":function(t,o,e){"use strict";function n(t){e("uzeg")}Object.defineProperty(o,"__esModule",{value:!0});var i=e("A1D8"),d=e("vh99"),A=e("VU/8"),s=n,a=A(i.a,d.a,!1,s,"data-v-2502369e",null);o.default=a.exports},A1D8:function(t,o,e){"use strict";var n=e("2hMI");o.a={data:function(){return{showGoodslist:1,showErrotip:!1,numGoods:1,goodsPropertyId:"",goodsPropertyIdPack:"",price:0,pricePack:0,quantitySpec:"",quantityPack:"",detail:"",afterSales:"",bigImg:"",goodsPropertyPackId:"",goodsId:this.queryBom("goodsId"),orderId:"",quantity:0,dectogray:!0,addtogray:!1,data:{goodsDetailList:[],goodsSpecList:[],goodsSpecListPack:[],propertyIds:[],carTypeList:[],coverList:[]}}},created:function(){1==this.quantity&&(this.addtogray=!0),this.$cookies.set("goodsId",this.goodsId),this.goodsDetailData()},methods:{closeErrotip:function(){this.showErrotip=!1},goodsDetailData:function(){var t=this;Object(n.p)({goodsId:this.$route.query.goodsId}).then(function(o){if(0===o.code){if(t.data.goodsDetailList=o.data,o.data.propertyInfo&&0!==o.data.propertyInfo.length)if(1===o.data.propertyInfo.length)"规格"===o.data.propertyInfo[0].propertyName?(t.goodsPropertyId=o.data.propertyInfo[0].pList[0].goodsPropertyId,t.data.goodsSpecList=o.data.propertyInfo[0].pList,t.price=o.data.propertyInfo[0].pList[0].price,t.quantity=o.data.propertyInfo[0].pList[0].quantity,t.$cookies.set("propertyIdsSpec",o.data.propertyInfo[0].pList[0].goodsPropertyId)):"包装"===o.data.propertyInfo[0].propertyName&&(t.goodsPropertyPackId=o.data.propertyInfo[1].pList[0].goodsPropertyId,t.data.goodsSpecListPack=o.data.propertyInfo[1].pList,t.pricePack=o.data.propertyInfo[1].pList[0].price,t.quantity=o.data.propertyInfo[1].pList[0].quantity,o.data.propertyInfo[1].pList[0].quantity,t.$cookies.set("propertyIdsPack",o.data.propertyInfo[1].pList[0].goodsPropertyId));else{t.data.goodsSpecList=o.data.propertyInfo[0].pList,t.data.goodsSpecListPack=o.data.propertyInfo[1].pList,t.goodsPropertyId=o.data.propertyInfo[0].pList[0].goodsPropertyId,t.goodsPropertyPackId=o.data.propertyInfo[1].pList[0].goodsPropertyId,t.price=o.data.propertyInfo[0].pList[0].price,t.pricePack=o.data.propertyInfo[1].pList[0].price;var e=o.data.propertyInfo[0].pList[0].quantity,n=o.data.propertyInfo[1].pList[0].quantity;t.quantity=e<=n?e:n,t.$cookies.set("propertyIdsSpec",o.data.propertyInfo[0].pList[0].goodsPropertyId),t.$cookies.set("propertyIdsPack",o.data.propertyInfo[1].pList[0].goodsPropertyId)}else t.$cookies.set("propertyIdsSpec",""),t.$cookies.set("propertyIdsPack","");t.detail=o.data.detail,t.afterSales=o.data.afterSales,t.data.carTypeList=o.data.carTypeList,t.data.coverList=o.data.coverList,t.bigImg=o.data.coverList[0],t.$cookies.set("goodsName",o.data.name)}})},decGoods:function(){this.numGoods--},addGoods:function(){this.numGoods++},selectSpec:function(t,o,e){this.goodsPropertyId=t,this.price=o,this.quantity=e,this.$cookies.set("propertyIdsSpec",t)},selectSpecPack:function(t,o,e){this.goodsPropertyPackId=t,this.pricePack=o,this.quantity=e,this.$cookies.set("propertyIdsPack",t)},addCartData:function(){var t=this;if(!1===this.$store.state.userInfo)return this.$router.push("/user/login");var o=this.$cookies.set("propertyIdsSpec")+","+this.$cookies.set("propertyIdsPack")||"";0==this.quantity?alert("库存不足"):Object(n.a)({goodsId:this.queryBom("goodsId"),propertyIds:o,quantity:this.numGoods}).then(function(o){0===o.code&&t.$router.push("cart")})},goBuy:function(){var t=this;if(!1===this.$store.state.userInfo)return this.$router.push("/user/login");var o=this.$cookies.set("propertyIdsSpec")+","+this.$cookies.set("propertyIdsPack")||"";0==this.quantity?alert("库存不足"):Object(n.u)({goodsId:this.queryBom("goodsId"),propertyIds:o,quantity:this.numGoods}).then(function(o){0===o.code&&(t.orderId=o.data.orderId,window.open(o.data.url+"?orderId="+o.data.orderId))})},queryBom:function(t){var o=window.location.search.match(new RegExp("(\\?|&)"+t+"=([^&]*)(&|$)"));return o?decodeURIComponent(o[2]):""}},computed:{testReg:function(){return/^[0-9\.\-]*$/}},watch:{numGoods:function(t,o){this.dectogray=!1,this.addtogray=!1,!this.testReg.test(this.numGoods)||this.numGoods<0||this.numGoods>this.quantity?this.numGoods=o:0==this.numGoods&&(this.numGoods=1),this.$cookies.set("numGoods",this.numGoods),1==this.numGoods?this.dectogray=!0:this.numGoods==this.quantity&&(this.addtogray=!0)}},components:{}}},IKgk:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE3OEJBMjBERUVGNDExRTdBRTEwOUEwRTdDMkNGQjEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE3OEJBMjBFRUVGNDExRTdBRTEwOUEwRTdDMkNGQjEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTc4QkEyMEJFRUY0MTFFN0FFMTA5QTBFN0MyQ0ZCMTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTc4QkEyMENFRUY0MTFFN0FFMTA5QTBFN0MyQ0ZCMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4t4VBYAAAA6UlEQVR42mJ8xiC0jYGB4RMQRzCQBuYAsQ4TkPgLxOFAvJgEzX1AnAzErCADfKGaY4B4LpGaC4F4ExAbs0AF44D4NxAnATEbEMcS0LwZiP1BAixIkslQzSCX/ILycWn2gwmyoCmKhWoGuYQV6jKcmrEZgOwSkGEPgPgzLs24DGBA0lwL5c8A4kxsCpnwhPYnJPYXXIpYCIT2dKgXyoBYCEvAYjUAOcCyoGIiuKKYhZiowhfFLERoxhbFcJfADOgloBmbS34CcQrIgAVAHE+EZnSXgAyTZQRm5+NAxncgdiIxO28EZWeAAAMAYbE6LNDi4zIAAAAASUVORK5CYII="},qKl4:function(t,o,e){o=t.exports=e("FZ+f")(!0),o.push([t.i,'.m-content[data-v-2502369e]{width:1200px;margin:0 auto}.m-content .goodsdetil[data-v-2502369e]{margin-top:50px;border:1px solid #fbfbfb}.m-content .goodsdetil .goods-top[data-v-2502369e]{overflow:hidden}.m-content .goodsdetil .goods-top .f-left[data-v-2502369e]{float:left;width:380px}.m-content .goodsdetil .goods-top .f-left .showbig[data-v-2502369e]{width:380px;height:380px;border:1px solid #fbfbfb;text-align:center}.m-content .goodsdetil .goods-top .f-left .showbig[data-v-2502369e]:after{content:"";display:inline-block;height:100%;vertical-align:middle}.m-content .goodsdetil .goods-top .f-left .showbig img[data-v-2502369e]{width:380px;height:380px;vertical-align:middle}.m-content .goodsdetil .goods-top .f-left .showsmall[data-v-2502369e]{overflow:hidden;margin-top:54px}.m-content .goodsdetil .goods-top .f-left .showsmall li[data-v-2502369e]{float:left;width:77px;height:82px;border:1px solid #fbfbfb;margin-right:20px;cursor:pointer}.m-content .goodsdetil .goods-top .f-left .showsmall li img[data-v-2502369e]{width:100%;height:100%}.m-content .goodsdetil .goods-top .f-left .showsmall .active[data-v-2502369e]{border:1px solid #009dee}.m-content .goodsdetil .goods-top .f-right[data-v-2502369e]{float:left;width:750px;padding:16px 0 0 68px;position:relative}.m-content .goodsdetil .goods-top .f-right .erro-box[data-v-2502369e]{position:absolute;top:104px;left:44px;width:416px;height:202px;border:1px solid #e60012;background:#fff}.m-content .goodsdetil .goods-top .f-right .erro-box .close[data-v-2502369e]{position:absolute;top:10px;right:16px;width:16px;height:16px;background:url('+e("IKgk")+") top no-repeat;cursor:pointer}.m-content .goodsdetil .goods-top .f-right .erro-box .select h4[data-v-2502369e]{height:36px;line-height:36px;background:#faf1f2;font-size:14px;color:#666;padding-left:16px}.m-content .goodsdetil .goods-top .f-right .erro-box .select .spec[data-v-2502369e]{margin-top:30px;margin-left:16px}.m-content .goodsdetil .goods-top .f-right .erro-box .select .numbox[data-v-2502369e]{margin-left:16px}.m-content .goodsdetil .goods-top .f-right .tit[data-v-2502369e]{font-size:20px;color:#333;padding-bottom:50px}.m-content .goodsdetil .goods-top .f-right .price[data-v-2502369e]{font-size:16px;color:#666;margin-bottom:40px}.m-content .goodsdetil .goods-top .f-right .price span[data-v-2502369e]{display:inline-block;vertical-align:top;height:36px;line-height:36px;margin-right:54px}.m-content .goodsdetil .goods-top .f-right .price .num[data-v-2502369e]{font-size:16px;color:#e60012;clear:both;overflow:hidden}.m-content .goodsdetil .goods-top .f-right .price .num em[data-v-2502369e]{font-size:36px}.m-content .goodsdetil .goods-top .f-right .spec[data-v-2502369e]{font-size:16px;color:#666;margin-bottom:40px;overflow:hidden}.m-content .goodsdetil .goods-top .f-right .spec span[data-v-2502369e]{float:left;display:inline-block;vertical-align:top;height:36px;line-height:36px;margin-right:54px}.m-content .goodsdetil .goods-top .f-right .spec ul[data-v-2502369e]{float:left}.m-content .goodsdetil .goods-top .f-right .spec ul li[data-v-2502369e]{width:124px;height:36px;line-height:36px;float:left;border:1px solid #fbfbfb;font-size:14px;color:#666;text-align:center;margin-right:24px;cursor:pointer}.m-content .goodsdetil .goods-top .f-right .spec ul .active[data-v-2502369e]{border:1px solid #e60012;color:#e60012}.m-content .goodsdetil .goods-top .f-right .spec .goodsProperty[data-v-2502369e]{margin-bottom:40px}.m-content .goodsdetil .goods-top .f-right .numbox[data-v-2502369e]{line-height:32px;font-size:16px;color:#333;clear:both;overflow:hidden}.m-content .goodsdetil .goods-top .f-right .numbox span[data-v-2502369e]{float:left;margin-right:54px;font-size:16px;color:#666}.m-content .goodsdetil .goods-top .f-right .numbox .dec[data-v-2502369e]{width:45px;height:32px;line-height:32px;float:left;text-align:center;border:1px solid #fbfbfb;font-size:25px;cursor:pointer}.m-content .goodsdetil .goods-top .f-right .numbox .dec .gray[data-v-2502369e]{color:#666}.m-content .goodsdetil .goods-top .f-right .numbox input[data-v-2502369e]{width:52px;height:32px;float:left;text-align:center;border:1px solid #fbfbfb;border-left:none;border-right:none}.m-content .goodsdetil .goods-top .f-right .numbox .add[data-v-2502369e]{width:45px;height:32px;line-height:32px;float:left;text-align:center;font-size:25px;border:1px solid #fbfbfb;cursor:pointer}.m-content .goodsdetil .goods-top .f-right .numbox .gray[data-v-2502369e]{color:#999}.m-content .goodsdetil .goods-top .f-right .numbox .stock[data-v-2502369e]{float:left;font-size:14px}.m-content .goodsdetil .goods-top .f-right .btn[data-v-2502369e]{clear:both;overflow:hidden;margin-top:60px}.m-content .goodsdetil .goods-top .f-right .btn li[data-v-2502369e]{float:left;width:224px;height:50px;line-height:50px;text-align:center;cursor:pointer}.m-content .goodsdetil .goods-top .f-right .btn .btn-buy[data-v-2502369e]{font-size:16px;color:#fff;background:#009dee;margin-right:30px}.m-content .goodsdetil .goods-top .f-right .btn .btn-join[data-v-2502369e]{width:222px;height:48px;color:#009dee;border:1px solid #009dee}.m-content .goodsdetil .goods-bottom[data-v-2502369e]{clear:both;overflow:hidden;margin-top:50px}.m-content .goodsdetil .goods-bottom .goods-nav[data-v-2502369e]{overflow:hidden}.m-content .goodsdetil .goods-bottom .goods-nav li[data-v-2502369e]{float:left;width:147px;height:55px;line-height:55px;text-align:center;border:1px solid #fbfbfb;border-bottom:none;font-size:16px;color:#666;cursor:pointer}.m-content .goodsdetil .goods-bottom .goods-nav .middle[data-v-2502369e]{border-left:none;border-right:none}.m-content .goodsdetil .goods-bottom .goods-nav .activite[data-v-2502369e]{background:#009dee;color:#fff}.m-content .goodsdetil .goods-bottom .goodsintro[data-v-2502369e],.m-content .goodsdetil .goods-bottom .match[data-v-2502369e],.m-content .goodsdetil .goods-bottom .service[data-v-2502369e]{height:500px;border:1px solid #fbfbfb;padding:20px;margin-bottom:100px}.m-content .goodsdetil .goods-bottom .match[data-v-2502369e]{padding:0}.m-content .goodsdetil .goods-bottom .match li[data-v-2502369e]{width:25%;height:50px;line-height:50px;float:left;text-align:center;border-bottom:1px solid #fbfbfb;border-right:1px solid #fbfbfb}.m-content .goodsdetil .goods-bottom .match li[data-v-2502369e]:nth-child(4n){border-right:none}","",{version:3,sources:["D:/b2b/zy_b2b_web/src/views/shop/productdetail.vue"],names:[],mappings:"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",file:"productdetail.vue",sourcesContent:['\n.m-content[data-v-2502369e] {\n  width: 1200px;\n  margin: 0 auto;\n}\n.m-content .goodsdetil[data-v-2502369e] {\n    margin-top: 50px;\n    border: 1px solid #fbfbfb;\n}\n.m-content .goodsdetil .goods-top[data-v-2502369e] {\n      overflow: hidden;\n}\n.m-content .goodsdetil .goods-top .f-left[data-v-2502369e] {\n        float: left;\n        width: 380px;\n}\n.m-content .goodsdetil .goods-top .f-left .showbig[data-v-2502369e] {\n          width: 380px;\n          height: 380px;\n          border: 1px solid #fbfbfb;\n          text-align: center;\n}\n.m-content .goodsdetil .goods-top .f-left .showbig[data-v-2502369e]:after {\n            content: "";\n            display: inline-block;\n            height: 100%;\n            vertical-align: middle;\n}\n.m-content .goodsdetil .goods-top .f-left .showbig img[data-v-2502369e] {\n            width: 380px;\n            height: 380px;\n            vertical-align: middle;\n}\n.m-content .goodsdetil .goods-top .f-left .showsmall[data-v-2502369e] {\n          overflow: hidden;\n          margin-top: 54px;\n}\n.m-content .goodsdetil .goods-top .f-left .showsmall li[data-v-2502369e] {\n            float: left;\n            width: 77px;\n            height: 82px;\n            border: 1px solid #fbfbfb;\n            margin-right: 20px;\n            cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-left .showsmall li img[data-v-2502369e] {\n              width: 100%;\n              height: 100%;\n}\n.m-content .goodsdetil .goods-top .f-left .showsmall .active[data-v-2502369e] {\n            border: 1px solid #009dee;\n}\n.m-content .goodsdetil .goods-top .f-right[data-v-2502369e] {\n        float: left;\n        width: 750px;\n        padding: 16px 0 0 68px;\n        position: relative;\n}\n.m-content .goodsdetil .goods-top .f-right .erro-box[data-v-2502369e] {\n          position: absolute;\n          top: 104px;\n          left: 44px;\n          width: 416px;\n          height: 202px;\n          border: 1px solid #e60012;\n          background: #fff;\n}\n.m-content .goodsdetil .goods-top .f-right .erro-box .close[data-v-2502369e] {\n            position: absolute;\n            top: 10px;\n            right: 16px;\n            width: 16px;\n            height: 16px;\n            background: url(../home/img/cart-close.png) center top no-repeat;\n            cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-right .erro-box .select h4[data-v-2502369e] {\n            height: 36px;\n            line-height: 36px;\n            background: #faf1f2;\n            font-size: 14px;\n            color: #666;\n            padding-left: 16px;\n}\n.m-content .goodsdetil .goods-top .f-right .erro-box .select .spec[data-v-2502369e] {\n            margin-top: 30px;\n            margin-left: 16px;\n}\n.m-content .goodsdetil .goods-top .f-right .erro-box .select .numbox[data-v-2502369e] {\n            margin-left: 16px;\n}\n.m-content .goodsdetil .goods-top .f-right .tit[data-v-2502369e] {\n          font-size: 20px;\n          color: #333;\n          padding-bottom: 50px;\n}\n.m-content .goodsdetil .goods-top .f-right .price[data-v-2502369e] {\n          font-size: 16px;\n          color: #666;\n          margin-bottom: 40px;\n}\n.m-content .goodsdetil .goods-top .f-right .price span[data-v-2502369e] {\n            display: inline-block;\n            vertical-align: top;\n            height: 36px;\n            line-height: 36px;\n            margin-right: 54px;\n}\n.m-content .goodsdetil .goods-top .f-right .price .num[data-v-2502369e] {\n            font-size: 16px;\n            color: #e60012;\n            clear: both;\n            overflow: hidden;\n}\n.m-content .goodsdetil .goods-top .f-right .price .num em[data-v-2502369e] {\n              font-size: 36px;\n}\n.m-content .goodsdetil .goods-top .f-right .spec[data-v-2502369e] {\n          font-size: 16px;\n          color: #666;\n          margin-bottom: 40px;\n          overflow: hidden;\n}\n.m-content .goodsdetil .goods-top .f-right .spec span[data-v-2502369e] {\n            float: left;\n            display: inline-block;\n            vertical-align: top;\n            height: 36px;\n            line-height: 36px;\n            margin-right: 54px;\n}\n.m-content .goodsdetil .goods-top .f-right .spec ul[data-v-2502369e] {\n            float: left;\n}\n.m-content .goodsdetil .goods-top .f-right .spec ul li[data-v-2502369e] {\n              width: 124px;\n              height: 36px;\n              line-height: 36px;\n              float: left;\n              border: 1px solid #fbfbfb;\n              font-size: 14px;\n              color: #666;\n              text-align: center;\n              margin-right: 24px;\n              cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-right .spec ul .active[data-v-2502369e] {\n              border: 1px solid #e60012;\n              color: #e60012;\n}\n.m-content .goodsdetil .goods-top .f-right .spec .goodsProperty[data-v-2502369e] {\n            margin-bottom: 40px;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox[data-v-2502369e] {\n          line-height: 32px;\n          font-size: 16px;\n          color: #333;\n          clear: both;\n          overflow: hidden;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox span[data-v-2502369e] {\n            float: left;\n            margin-right: 54px;\n            font-size: 16px;\n            color: #666;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox .dec[data-v-2502369e] {\n            width: 45px;\n            height: 32px;\n            line-height: 32px;\n            float: left;\n            text-align: center;\n            border: 1px solid #fbfbfb;\n            font-size: 25px;\n            cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox .dec .gray[data-v-2502369e] {\n              color: #666;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox input[data-v-2502369e] {\n            width: 52px;\n            height: 32px;\n            float: left;\n            text-align: center;\n            border: 1px solid #fbfbfb;\n            border-left: none;\n            border-right: none;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox .add[data-v-2502369e] {\n            width: 45px;\n            height: 32px;\n            line-height: 32px;\n            float: left;\n            text-align: center;\n            font-size: 25px;\n            border: 1px solid #fbfbfb;\n            cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox .gray[data-v-2502369e] {\n            color: #999;\n}\n.m-content .goodsdetil .goods-top .f-right .numbox .stock[data-v-2502369e] {\n            float: left;\n            font-size: 14px;\n}\n.m-content .goodsdetil .goods-top .f-right .btn[data-v-2502369e] {\n          clear: both;\n          overflow: hidden;\n          margin-top: 60px;\n}\n.m-content .goodsdetil .goods-top .f-right .btn li[data-v-2502369e] {\n            float: left;\n            width: 224px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            cursor: pointer;\n}\n.m-content .goodsdetil .goods-top .f-right .btn .btn-buy[data-v-2502369e] {\n            font-size: 16px;\n            color: #fff;\n            background: #009dee;\n            margin-right: 30px;\n}\n.m-content .goodsdetil .goods-top .f-right .btn .btn-join[data-v-2502369e] {\n            width: 222px;\n            height: 48px;\n            color: #009dee;\n            border: 1px solid #009dee;\n}\n.m-content .goodsdetil .goods-bottom[data-v-2502369e] {\n      clear: both;\n      overflow: hidden;\n      margin-top: 50px;\n}\n.m-content .goodsdetil .goods-bottom .goods-nav[data-v-2502369e] {\n        overflow: hidden;\n}\n.m-content .goodsdetil .goods-bottom .goods-nav li[data-v-2502369e] {\n          float: left;\n          width: 147px;\n          height: 55px;\n          line-height: 55px;\n          text-align: center;\n          border: 1px solid #fbfbfb;\n          border-bottom: none;\n          font-size: 16px;\n          color: #666;\n          cursor: pointer;\n}\n.m-content .goodsdetil .goods-bottom .goods-nav .middle[data-v-2502369e] {\n          border-left: none;\n          border-right: none;\n}\n.m-content .goodsdetil .goods-bottom .goods-nav .activite[data-v-2502369e] {\n          background: #009dee;\n          color: #fff;\n}\n.m-content .goodsdetil .goods-bottom .goodsintro[data-v-2502369e],\n      .m-content .goodsdetil .goods-bottom .match[data-v-2502369e],\n      .m-content .goodsdetil .goods-bottom .service[data-v-2502369e] {\n        height: 500px;\n        border: 1px solid #fbfbfb;\n        padding: 20px;\n        margin-bottom: 100px;\n}\n.m-content .goodsdetil .goods-bottom .match[data-v-2502369e] {\n        padding: 0;\n}\n.m-content .goodsdetil .goods-bottom .match li[data-v-2502369e] {\n          width: 25%;\n          height: 50px;\n          line-height: 50px;\n          float: left;\n          text-align: center;\n          border-bottom: 1px solid #fbfbfb;\n          border-right: 1px solid #fbfbfb;\n}\n.m-content .goodsdetil .goods-bottom .match li[data-v-2502369e]:nth-child(4n) {\n            border-right: none;\n}\n'],sourceRoot:""}])},uzeg:function(t,o,e){var n=e("qKl4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("3f80d66f",n,!0)},vh99:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"m-content"},[e("div",{staticClass:"goodsdetil"},[e("div",{staticClass:"goods-top"},[e("div",{staticClass:"f-left"},[e("div",{staticClass:"showbig"},[e("img",{attrs:{src:t.bigImg}})]),t._v(" "),e("ul",{staticClass:"showsmall"},t._l(t.data.coverList,function(o){return e("li",{class:{active:t.bigImg==o},on:{click:function(e){t.bigImg=o}}},[e("img",{attrs:{src:o}})])}))]),t._v(" "),e("div",{staticClass:"f-right"},[e("p",{staticClass:"tit"},[t._v(t._s(t.data.goodsDetailList.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("价格")]),t._v(" "),e("span",{staticClass:"num"},[t._v("￥\n            "),e("em",[t._v(t._s(t.price+t.pricePack))])])]),t._v(" "),e("div",{staticClass:"spec"},[e("div",{staticStyle:{overflow:"hidden"}},[e("span",[t._v("规格")]),t._v(" "),t.data.goodsSpecList&&0!==t.data.goodsSpecList.length?e("ul",{staticClass:"goodsProperty"},t._l(t.data.goodsSpecList,function(o){return e("li",{key:o.goodsPropertyId,class:{active:t.goodsPropertyId==o.goodsPropertyId},on:{click:function(e){t.selectSpec(o.goodsPropertyId,o.price,o.quantity)}}},[t._v("\n                "+t._s(o.name)+"\n              ")])})):e("ul",[e("li",{staticStyle:{"text-align":"left","padding-left":"20px"}},[t._v("--")])])]),t._v(" "),e("div",[e("span",[t._v("包装")]),t._v(" "),t.data.goodsSpecListPack&&0!==t.data.goodsSpecListPack.length?e("ul",t._l(t.data.goodsSpecListPack,function(o){return e("li",{key:o.goodsPropertyId,class:{active:t.goodsPropertyPackId==o.goodsPropertyId},on:{click:function(e){t.selectSpecPack(o.goodsPropertyId,o.price,o.quantity)}}},[t._v("\n                "+t._s(o.name)+"\n              ")])})):e("ul",[e("li",{staticStyle:{"text-align":"left","padding-left":"20px"}},[t._v("--")])])])]),t._v(" "),e("div",{staticClass:"numbox"},[e("span",[t._v("数量")]),t._v(" "),e("div",{staticClass:"dec",class:{gray:t.dectogray},on:{click:t.decGoods}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.numGoods,expression:"numGoods"}],attrs:{type:"text"},domProps:{value:t.numGoods},on:{input:function(o){o.target.composing||(t.numGoods=o.target.value)}}}),t._v(" "),e("div",{staticClass:"add",class:{gray:t.addtogray},on:{click:t.addGoods}},[t._v("+")]),t._v(" "),e("span",{staticClass:"stock"},[t._v("（库存："+t._s(t.quantity)+"）")])]),t._v(" "),e("ul",{staticClass:"btn"},[e("li",{staticClass:"btn-buy",on:{click:t.goBuy}},[t._v("立即购买")]),t._v(" "),e("li",{staticClass:"btn-join",on:{click:t.addCartData}},[t._v("加入购物车")])])])]),t._v(" "),e("div",{staticClass:"goods-bottom"},[e("ul",{staticClass:"goods-nav"},[e("li",{class:{activite:1===t.showGoodslist},on:{click:function(o){t.showGoodslist=1}}},[t._v("商品详情")]),t._v(" "),e("li",{staticClass:"middle",class:{activite:2===t.showGoodslist},on:{click:function(o){t.showGoodslist=2}}},[t._v("适用车型")]),t._v(" "),e("li",{class:{activite:3===t.showGoodslist},on:{click:function(o){t.showGoodslist=3}}},[t._v("售后服务")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.showGoodslist,expression:"showGoodslist === 1"}],staticClass:"goodsintro",domProps:{innerHTML:t._s(t.detail)}},[t._v(t._s(t.detail))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.showGoodslist,expression:"showGoodslist === 2"}],staticClass:"match"},[e("ul",t._l(t.data.carTypeList,function(o){return e("li",{key:o.carTypeId},[t._v("\n            "+t._s(o.brand)+" "+t._s(o.series)+" "+t._s(o.year)+" "+t._s(o.cartype)+"\n          ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:3===t.showGoodslist,expression:"showGoodslist === 3"}],staticClass:"service"},[t._v(t._s(t.afterSales))])])])])},i=[],d={render:n,staticRenderFns:i};o.a=d}});
//# sourceMappingURL=9.72b27423eea374dde758.js.map