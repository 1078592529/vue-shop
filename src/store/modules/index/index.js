import { getNavsData, getSwiperData, getGoodsData, getRecomGoodsData } from "../../../api/index";

export default {
  namespaced: true,
  state: {
    navs: [],
    swipers: [],
    goods: [],
    recomGoods: []
  },
  mutations: {
    ["SET_NAVS"](state, payload) {
      state.navs = payload.navs;
      // console.log(state.navs);
    },
    ["SET_SWIPERS"](state, payload) {
      state.swipers = payload.swipers;
      // console.log(state.swipers)
    },
    ["SET_GOODS"](state, payload) {
      state.goods = payload.goods;
    },
    ["SET_RECOMGOODS"](state, payload) {
      state.recomGoods = payload.recomGoods;
    }
  },
  actions: {
    getNavs(conText, payload) {
      getNavsData().then((res) => {
        // console.log(res);
        if (res.code === 200) {
          conText.commit("SET_NAVS", { navs: res.data });
          if (payload.success) {
            payload.success();
          }
        }
      });
    },
    getSwiper(conText, payload) {
      getSwiperData().then(res => {
        //console.log(res);
        // console.log(payload);
        if (res.code == 200) {
          conText.commit("SET_SWIPERS", { swipers: res.data });
          if (payload.success) {
            payload.success();
          }
        }
      });
    },
    getGoods(conText, payload) {
      getGoodsData().then(res => {
        //console.log(res)
        if (res.code == 200) {
          conText.commit("SET_GOODS", { goods: res.data });
          if (payload.success) {
            payload.success();
          }
        }
      });
    },
    getRecomGoods(conText, payload) {
      getRecomGoodsData().then(res => {
        if (res.code == 200) {
          //console.log(res);
          if (res.code == 200) {
            conText.commit("SET_RECOMGOODS", { recomGoods: res.data });
            if (payload.success) {
              payload.success();
            }
          }
        }
      }
      )
    }
  },
};
