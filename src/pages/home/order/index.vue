<template>
  <div class="page">
    <SubHeader title="确认订单"></SubHeader>
    <div class='main'>
      <div class='address-wrap' @click="$router.push('/address')">
        <div class='persion-info'>
          <span>收货人：张三</span><span>13818273552</span>
        </div>
        <div class='address'>
          <img src="../../../assets/images/home/cart/map.png" alt="收货地址" /><span>北京朝阳</span>
        </div>
        <div v-show="false" class='address-null'>您的收货地址为空,点击添加收货地址</div>
        <div class='arrow'></div>
        <div class='address-border-wrap'>
          <div class='trapezoid style1'></div>
          <div class='trapezoid style2'></div>
          <div class='trapezoid style1'></div>
          <div class='trapezoid style2'></div>
          <div class='trapezoid style1'></div>
          <div class='trapezoid style2'></div>
          <div class='trapezoid style1'></div>
          <div class='trapezoid style2'></div>
          <div class='trapezoid style1'></div>
          <div class='trapezoid style2'></div>
        </div>
      </div>
      <div class='goods-wrap'>
        <div class='goods-list' v-for="(item,index) in newCartData" :key="index">
          <div class='image'><img :src="item.img" alt="" /></div>
          <div class='goods-param'>
            <div class='title'>{{item.title}}</div>
            <div class='attr'>
              <span v-for="(item2,index2) in item.attrs" :key="index2">{{item2.title}}：
                <template v-for="(item3,index3) in item2.param">{{item3.title}}</template>
              </span>
            </div>
            <div class='amount'>x {{item.amount}}</div>
            <div class='price'>￥{{item.price}}</div>
          </div>
        </div>
      </div>
      <ul class='total-wrap'>
        <li>商品总额</li>
        <li>￥{{total}}</li>
      </ul>
      <ul class='total-wrap'>
        <li>运费</li>
        <li>￥{{freight}}</li>
      </ul>
    </div>
    <div class='balance-wrap'>
      <div class='price-wrap'>
        <span>实际金额：</span><span>￥{{total+freight}}</span>
      </div>
      <div class='balance-btn'>提交订单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SubHeader from "../../../components/sub_header";
export default {
  name: "order",
  components: {
    SubHeader,
  },
  computed: {
    ...mapState({
      cartData: (state) => state.cart.cartData,
    }),
    ...mapGetters({
      total: "cart/total",
      freight: "cart/freight",
    }),
    newCartData() {
      if (this.cartData.length > 0) {
        let data = this.cartData.filter((item) => {
          return item.checked;
        });
        return data;
      } else {
        return [];
      }
    },
  },
  created() {
    this.$utils.safeUser(this);
  },
  mounted() {
    document.title = this.$route.meta.title;
  },
  methods: {},
};
</script>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}

.sub-header {
  width: 100%;
  height: 1rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  border-bottom: 1px solid #efefef;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
}

.sub-header .back {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../../../assets/images/home/goods/back.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.sub-header .title {
  width: 79%;
  height: auto;
  font-size: 0.32rem;
  text-align: center;
}

.sub-header .right-btn {
  width: auto;
  height: auto;
  font-size: 0.32rem;
}

.main {
  width: 100%;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
}

.address-wrap {
  width: 100%;
  height: 1.9rem;
  position: relative;
  z-index: 1;
}

.address-wrap .address-border-wrap {
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  display: flex;
  display: -webkit-flex;
}

.address-wrap .address-border-wrap .trapezoid {
  width: 6%;
  margin-left: 1%;
  margin-right: 1%;
}

.address-wrap .address-border-wrap .trapezoid.style1 {
  border-bottom: 0.08rem solid #fdcd4d;
  border-left: 0.08rem solid transparent;
  border-right: 0.08rem solid transparent;
}

.address-wrap .address-border-wrap .trapezoid.style2 {
  border-top: 0.08rem solid #84614d;
  border-left: 0.08rem solid transparent;
  border-right: 0.08rem solid transparent;
}

.address-wrap .persion-info {
  width: auto;
  height: auto;
  position: absolute;
  z-index: 1;
  left: 0.4rem;
  top: 0;
  font-size: 0.28rem;
  font-weight: bold;
}

.address-wrap .persion-info span:nth-child(1) {
  padding-right: 1rem;
}

.address-wrap .address {
  width: auto;
  height: auto;
  position: absolute;
  z-index: 1;
  left: 0.4rem;
  top: 0.9rem;
}

.address-wrap .address img {
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
  margin-right: 0.1rem;
}

.address-wrap .address span {
  font-size: 0.24rem;
}

.address-wrap .arrow {
  width: 0.32rem;
  height: 0.32rem;
  background-image: url("../../../assets/images/common/right_arrow.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  right: 0.2rem;
  top: 0.6rem;
}

.address-wrap .address-null {
  width: auto;
  height: auto;
  font-size: 0.28rem;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  display: table;
  margin-top: 0.5rem;
}

.goods-wrap {
  width: 100%;
  margin-top: 0.4rem;
  overflow: hidden;
}

.goods-wrap .goods-list {
  width: 92%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  margin-bottom: 0.4rem;
}

.goods-wrap .goods-list .image {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
}

.goods-wrap .goods-list .image img {
  width: 100%;
  height: 100%;
}

.goods-wrap .goods-list .goods-param {
  width: 75%;
}

.goods-wrap .goods-list .goods-param .title {
  width: 100%;
  height: 0.4rem;
  overflow: hidden;
  font-size: 0.28rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-wrap .goods-list .attr {
  width: 100%;
  height: 0.4rem;
  font-size: 0.28rem;
  margin-top: 0.1rem;
  color: #868686;
}

.goods-wrap .goods-list .attr span {
  padding-right: 0.3rem;
}

.goods-wrap .goods-list .amount {
  font-size: 0.24rem;
  color: #868686;
  margin-top: 0.1rem;
}

.goods-wrap .goods-list .price {
  font-size: 0.28rem;
  color: #f51d2a;
  margin-top: 0.1rem;
  margin-left: -0.07rem;
}

.total-wrap {
  width: 92%;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 0.32rem;
  margin-bottom: 0.3rem;
}

.total-wrap li:nth-child(1) {
  color: #787878;
}

.total-wrap li:nth-child(2) {
  color: #f51d2a;
}

.balance-wrap {
  width: 100%;
  height: 1rem;
  border-top: 1px solid #efefef;
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
}

.balance-wrap .price-wrap {
  flex: 2;
  -webkit-flex: 2;
  text-align: right;
  line-height: 1rem;
  padding-right: 0.2rem;
  font-size: 0.32rem;
}

.balance-wrap .price-wrap span:nth-child(2) {
  color: #f51d2a;
}

.balance-wrap .balance-btn {
  flex: 1;
  -webkit-flex: 1;
  background-color: #cc0004;
  font-size: 0.32rem;
  color: #ffffff;
  line-height: 1rem;
  text-align: center;
}
</style>