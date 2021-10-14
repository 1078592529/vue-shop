import Vue from "vue";
import { getHotKeywordData, getSearchData } from "../../../api/search";

export default {
  namespaced: true,
  state: {
    historyKeywords: localStorage["historyKeywords"]
      ? JSON.parse(localStorage["historyKeywords"])
      : [],
    hotKeywords: [],
    priceData: {
      isHide: false,
      items: [
        {
          price1: 1,
          price2: 50,
          active: false,
        },
        {
          price1: 51,
          price2: 99,
          active: false,
        },
        {
          price1: 100,
          price2: 300,
          active: false,
        },
        {
          price1: 301,
          price2: 1000,
          active: false,
        },
        {
          price1: 1001,
          price2: 4000,
          active: false,
        },
        {
          price1: 4001,
          price2: 9999,
          active: false,
        },
      ],
    },
    minPrice: "",
    maxPrice: "",
    attrs: [
      {
        title: "颜色",
        isHide: false,
        param: [
          {
            title: "黑色",
            active: false,
          },
          {
            title: "白色",
            active: false,
          },
          {
            title: "红色",
            active: false,
          },
        ],
      },
      {
        title: "尺码",
        isHide: false,
        param: [
          {
            title: "36",
            active: false,
          },
          {
            title: "37",
            active: false,
          },
          {
            title: "38",
            active: false,
          },
        ],
      },
    ],
    searchData: [],
    cid: "",
  },
  mutations: {
    //设置历史记录关键词
    ["SET_KEYWORDS"](state, payload) {
      state.historyKeywords = payload.historyKeywords;
      localStorage["historyKeywords"] = JSON.stringify(state.historyKeywords);
      //console.log(state.historyKeywords)
    },
    //清除搜索历史记录
    ["CLEAR_KEYWORDS"](state, payload) {
      state.historyKeywords = [];
      localStorage.removeItem("historyKeywords");
    },
    //设置热门关键词
    ["SET_HOTKEYWORD"](state, payload) {
      state.hotKeywords = payload.hotKeywords;
    },
    //隐藏价格
    ["HIDE_PRICE"](state, payload) {
      state.priceData.isHide = !state.priceData.isHide;
    },
    //选择价格
    ["SELECT_PRICE"](state, payload) {
      if (state.priceData.items.length > 0) {
        for (let i = 0; i < state.priceData.items.length; i++) {
          if (i != payload.index) {
            if (state.priceData.items[i].active) {
              state.priceData.items[i].active = false;
              break;
            }
          }
        }
        state.priceData.items[payload.index].active = !state.priceData.items[
          payload.index
        ].active;
        Vue.set(
          state.priceData.items,
          payload.index,
          state.priceData.items[payload.index]
        );
        state.minPrice = state.priceData.items[payload.index].active
          ? state.priceData.items[payload.index].price1
          : "";
        state.maxPrice = state.priceData.items[payload.index].active
          ? state.priceData.items[payload.index].price2
          : "";
      }
    },
    //设置最小价格
    ["SET_MINPRICE"](state, payload) {
      state.minPrice = payload.minPrice;
      state.minPrice = state.minPrice.replace(/[^\d|\.]/g, "");
      console.log(state.minPrice);
    },
    //设置最大价格
    ["SET_MAXPRICE"](state, payload) {
      state.maxPrice = payload.maxPrice;
      state.maxPrice = state.maxPrice.replace(/[^\d|\.]/g, "");
      //console.log(state.minPrice)
    },
    //显示隐藏商品属性
    ["HIDE_ATTR"](state, payload) {
      state.attrs[payload.index].isHide = !state.attrs[payload.index].isHide;
      Vue.set(state.attrs, payload.index, state.attrs[payload.index]);
    },
    //选择商品属性
    ["SELECT_ATTR"](state, payload) {
      state.attrs[payload.index].param[payload.index2].active = !state.attrs[
        payload.index
      ].param[payload.index2].active;
      Vue.set(
        state.attrs[payload.index].param,
        payload.index2,
        state.attrs[payload.index].param[payload.index2]
      );
    },
    //设置搜索结果
    ["SET_SEARCH_DATA"](state, payload) {
      state.searchData = payload.searchData;
    },
    //增加分页数据
    ["SET_SEARCH_DATA_PAGE"](state, payload) {
      if (payload.searchData.length > 0) {
        for (let i = 0; i < payload.searchData.length; i++) {
          state.searchData.push(payload.searchData[i]);
        }
      }
    },
    //设置商品分类
    ["SET_CID"](state, payload) {
      state.cid = payload.cid;
    },
  },
  actions: {
    //获取热门关键词
    getHotKeyword(conText, payload) {
      getHotKeywordData().then((res) => {
        // console.log(res);
        if (res.code === 200) {
          conText.commit("SET_HOTKEYWORD", {
            hotKeywords: res.data,
          });
        }
      });
    },
    //选择分类
    selectClassify(conText, payload) {
      //console.log(conText);
      if (conText.rootState.goods.classifys.length > 0) {
        for (let i = 0; i < conText.rootState.goods.classifys.length; i++) {
          if (i != payload.index) {
            if (conText.rootState.goods.classifys[i].active) {
              conText.rootState.goods.classifys[i].active = false;
              break;
            }
          }
        }
        conText.rootState.goods.classifys[payload.index].active = !conText
          .rootState.goods.classifys[payload.index].active;
        Vue.set(
          conText.rootState.goods.classifys,
          payload.index,
          conText.rootState.goods.classifys[payload.index]
        );
        conText.commit("SET_CID", {
          cid: conText.rootState.goods.classifys[payload.index].cid,
        });
      }
    },
    //获取商品搜索结果
    getSearch(conText, payload) {
      getSearchData(payload).then((res) => {
        //console.log(res);
        if (res.code === 200) {
          conText.commit("SET_SEARCH_DATA", { searchData: res.data });
          if (payload.success) {
            payload.success(res);
          }
        } else {
          conText.commit("SET_SEARCH_DATA", { searchData: [] });
        }
      });
    },

    getSearchPage(conText, payload) {
      getSearchData(payload).then((res) => {
        //console.log(res);
        if (res.code === 200) {
          conText.commit("SET_SEARCH_DATA_PAGE", { searchData: res.data });
        }
      });
    },
  },
};
