<template>
    <div>
        <div class='sub-header'>
            <div class='back'></div>
            <div class='title'>个人中心</div>
            <div class="right-btn hide">保存</div>
        </div>
        <div class='user-info-wrap'>
            <div class='head'>
                <img src="../../../assets/images/user/my/default-head.png" alt="" />
            </div>
            <div class='nickname'>昵称</div>
            <div class='points'>我的积分：10</div>
        </div>
        <div class='order-name-wrap'>
            <div class='order-name'>全部订单</div>
            <div class='show-order' >查看全部订单 &gt;</div>
        </div>
        <div class='order-status-wrap'>
            <div class='item'>
                <div class='icon wait'></div>
                <div class='text'>待支付</div>
            </div>
            <div class='item'>
                <div class='icon take'></div>
                <div class='text'>待收货</div>
            </div>
            <div class='item'>
                <div class='icon comment'></div>
                <div class='text'>待评价</div>
            </div>
        </div>
        <div class="menu-list-wrap">
            <ul @click="goPage('/profile')">
                <li>个人资料</li>
                <li></li>
            </ul>
            <ul @click="goPage('/address')">
                <li>收货地址</li>
                <li></li>
            </ul>
            <ul>
                <li>绑定手机</li>
                <li></li>
            </ul>
            <ul>
                <li>修改密码</li>
                <li></li>
            </ul>
            <ul>
                <li>我的收藏</li>
                <li></li>
            </ul>
            <div class='btn' @click="goPage('/login')">登录/注册</div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            document.title=this.$route.meta.title
        },
        methods:{
            goPage(url){
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>
    .sub-header{width:100%;height:1rem;background-color:#FFFFFF;display: flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;border-bottom: 1px solid #EFEFEF;position: fixed;z-index: 10;left:0;top:0;}
    .sub-header .back{width:0.8rem;height:0.8rem;background-image:url("../../../assets/images/home/goods/back.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .sub-header .title{width:79%;height:auto;font-size:0.32rem;text-align: center;}
    .sub-header .right-btn{width:auto;height:auto;font-size:0.32rem;}

    .user-info-wrap{width:100%;height:2.8rem;background-image:url("../../../assets/images/user/my/mybg.png");background-size:100%;background-repeat:no-repeat;background-position: top;margin-top:1.02rem;position: relative;z-index:1;}
    .user-info-wrap .head{width:1.2rem;height:1.2rem;position: absolute;z-index:1;left:5%;bottom:15%;}
    .user-info-wrap .head img{width:100%;height:100%;border-radius: 100%;}
    .user-info-wrap .nickname{width:auto;height:auto;white-space: nowrap;position:absolute;z-index:1;left:27%;bottom:35%;font-size:0.24rem;color:#FFFFFF;}
    .user-info-wrap .points{width:auto;height:auto;white-space: nowrap;position:absolute;z-index:1;left:27%;bottom:20%;font-size:0.24rem;color:#FFFFFF;}

    .order-name-wrap{width:100%;height:0.8rem;background-color:#FFFFFF;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;align-items: center;-webkit-align-items: center;overflow:hidden;margin-bottom:1px;}
    .order-name-wrap .order-name{font-size:0.28rem;margin-left:3%;}
    .order-name-wrap .show-order{font-size:0.24rem;margin-right:3%;}

    .order-status-wrap{width:80%;height:1.4rem;background-color:#FFFFFF;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;align-items: center;-webkit-align-items:center;padding-left:10%;padding-right:10%;}
    .order-status-wrap .item{width:1rem;height:auto;}
    .order-status-wrap .item .icon{width:0.5rem;height:0.5rem;margin:0 auto;}
    .order-status-wrap .item .icon.wait{background-image:url("../../../assets/images/user/my/pay.png");background-size:100%;background-repeat:no-repeat;background-position: center;}
    .order-status-wrap .item .icon.take{background-image:url("../../../assets/images/user/my/shouhuo.png");background-size:100%;background-repeat:no-repeat;background-position: center;}
    .order-status-wrap .item .icon.comment{background-image:url("../../../assets/images/user/my/comment.png");background-size:100%;background-repeat:no-repeat;background-position: center;}
    .order-status-wrap .item .text{width:100%;font-size:0.24rem;text-align:center;}

    .menu-list-wrap{width:100%;height:7rem;background-color:#FFFFFF;margin-top:0.3rem;}
    .menu-list-wrap ul{width:87%;height:0.8rem;border-bottom:1px solid #EFEFEF;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;align-items: center;-webkit-align-items: center;padding-left:10%;padding-right:3%;}
    .menu-list-wrap ul li:nth-child(1){font-size:0.32rem;}
    .menu-list-wrap ul li:nth-child(2){width:0.4rem;height:0.4rem;background-image: url("../../../assets/images/common/right_arrow.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .menu-list-wrap .btn{width:70%;height:0.8rem;margin:0 auto;background-color:#E51B19;border-radius: 5px;font-size:0.32rem;color:#FFFFFF;text-align:center;line-height:0.8rem;margin-top:0.4rem;}

</style>
