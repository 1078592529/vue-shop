import { getAddressData, delAddressData } from "../../../api/address";
export default {
  namespaced: true,
  state: {
    address: [],
  },
  mutations: {
    ["SET_ADDRESS"](state, payload) {
      state.address = payload.address;
    },
    ["DEL_ADDRESS"](state, payload) {
      state.address.splice(payload.index, 1);
    },
  },
  actions: {
    //获取收货地址
    getAddress(conText, payload) {
      getAddressData(conText.rootState.user.uid).then((res) => {
        //console.log(res);
        if (res.code == 200) {
          conText.commit("SET_ADDRESS", { address: res.data });
        }
      });
    },
    //删除收货地址
    delAddress(conText, payload) {
      delAddressData({ uid: conText.rootState.user.uid, ...payload }).then(
        (res) => {
          //console.log(res);
          if (res.code === 200) {
            conText.commit("DEL_ADDRESS", { index: payload.index });
          }
        }
      );
    },
  },
};
