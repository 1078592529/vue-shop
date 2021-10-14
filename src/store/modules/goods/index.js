import Vue from 'vue';
import {getClassifyData,getGoodsData} from '../../../api/goods';

export default {
    namespaced:true,
    state:{
        classifys:[],
        goods:[],
        attrs:[
            {
                title:"颜色",
                values:[
                    {
                        value:"黑色",
                        active:false
                    },
                     {
                        value:"黑色",
                        active:false
                    },
                    {
                        value:"白色",
                        active:false
                    },
                ]
            },    
            {
                title:"尺码",
                values:[
                    {
                        value:"36",
                        active:false
                    },
                     {
                        value:"37",
                        active:false
                    },
                    {
                        value:"38",
                        active:false
                    },
                ]
            }
        ]
    },
    mutations:{
        ["SET_CLASSIFYS"](state,payload){
            state.classifys=payload.classifys
        },
        ["SELECT_ITEM"](state,payload){
            if(state.classifys.length>0){
                for(let i=0;i<state.classifys.length;i++){
                    if(state.classifys[i].active){
                        state.classifys[i].active=false;
                        break;
                    }
                }
                state.classifys[payload.index].active=true;
                Vue.set(state.classifys,payload.index,state.classifys[payload.index]);
            }
        },
        ["SET_GOODS"](state,payload){
            state.goods=payload.goods;
        },
        ["SELECT_ATTR"](state,payload){
            if(state.attrs.length>0){
                for(let i=0;i<state.attrs[payload.index].values.length;i++){
if(state.attrs[payload.index].values[i].active){
    state.attrs[payload.index].values[i].active=false;
    break
}
                }
                state.attrs[payload.index].values[payload.index2].active=true;
                Vue.set(state.attrs[payload.index].values[payload.index2],payload.index2,state.attrs[payload.index].values[payload.index2])
            }
           
        }
    },
    actions:{
        //左侧分类
        getClassify(conText,payload){
            getClassifyData().then(res=>{
                if(res.code===200){
                    for(let i=0;i<res.data.length;i++){
                        res.data[i].active=false;
                    }
                    conText.commit("SET_CLASSIFYS",{classifys:res.data});
                    if(payload && payload.success){
                        payload.success();
                    }
                }
            })
        },
        //右侧商品
        getGoods(conText,payload) {
            getGoodsData(payload.cid).then(res => {
                if(res.code===200){
                    conText.commit("SET_GOODS",{goods:res.data});
                    if(payload.success){
                        payload.success();
                    }
                }else{
                    conText.commit("SET_GOODS",{goods:[]});
                }
            })
        }

    }
}