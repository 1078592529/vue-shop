<template>
    <div class="page">
        <div class='sub-header'>
            <div class='back'></div>
            <div class='title'>会员注册</div>
            <div class="right-btn hide">保存</div>
        </div>
        <div class='main'>
            <div class="inputs"><input type="text" placeholder="验证码"  /><div class="vcode-img"><img src="" /></div></div>
            <div class='cellphone-wrap'>
                <div class='cellphone'><input type="tel" placeholder="请输入手机号" /></div>
                <div class='code-btn success'>获取短信验证码</div>
        </div>
        <div class='code-wrap'><input type="text" placeholder="请输入短信验证码"  /></div>
        <div class='password-wrap'>
            <div class='password'><input type="password" placeholder="请输入密码"  /></div>
            <div class='switch-wrap'>

            </div>
        </div>
        <div class='sure-btn'>注册</div>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .sub-header{width:100%;height:1rem;background-color:#FFFFFF;display: flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;border-bottom: 1px solid #EFEFEF;position: fixed;z-index: 10;left:0;top:0;}
    .sub-header .back{width:0.8rem;height:0.8rem;background-image:url("../../../assets/images/home/goods/back.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .sub-header .title{width:79%;height:auto;font-size:0.32rem;text-align: center;}
    .sub-header .right-btn{width:auto;height:auto;font-size:0.32rem;}

    .page{width:100%;height:100vh;background-color: #ffffff;}
    .main{width:100%;padding-top:1.4rem;}
    .cellphone-wrap{width:90%;height:0.84rem;margin:0 auto;display: flex;display: -webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;margin-top:0.4rem;}
    .cellphone-wrap .cellphone{width:62%;height:100%;border:#EFEFEF solid 1px;border-radius: 2px;}
    .cellphone-wrap .cellphone input,.code-wrap input,.password-wrap .password input{width:92%;height:95%;font-size:0.28rem;padding-left:0.2rem;}
    .cellphone-wrap .code-btn{width:35%;height:0.82rem;background:#EAEAEA;color:#717376;border:#EAEAEA solid 1px;border-radius: 2px;font-size:0.28rem;text-align:center;line-height:0.82rem;}
    .cellphone-wrap .code-btn.success{background:#FFFFFF;border:1px solid #EB1625;color:#EB1625}
    .code-wrap{width:90%;height:0.84rem;margin:0 auto;border-radius: 2px;border:#EFEFEF solid 1px;margin-top:0.4rem;}
    .password-wrap{width:90%;height:0.84rem;margin:0 auto;border-radius: 2px;border:#EFEFEF solid 1px;margin-top:0.4rem;display:flex;display: -webkit-flex;}
    .password-wrap .password{width:80%;height:100%;}
    .password-wrap .switch-wrap{width:20%;margin-top:0.1rem;}
    .sure-btn{width:85%;height:0.8rem;margin:0 auto;background:#EB1625;font-size:0.36rem;color:#FFFFFF;line-height:0.8rem;text-align: center;margin-top:0.4rem;border-radius: 4px;}
    .fastreg-wrap{width:85%;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;font-size:0.24rem;margin:0 auto;margin-top:0.3rem;}
    .fastreg-wrap img{width:0.32rem;height:0.32rem;vertical-align: middle;}

    .inputs{width:90%;height:0.84rem;border:#EFEFEF solid 1px;border-radius:2px;background:#FFFFFF;margin:0 auto;line-height:0.84rem;padding-left:0.2rem;font-size:0.28rem;position:relative;box-sizing: border-box;}
    .inputs .vcode-img{width:20%;height:60%;position:absolute;right:0px;top:20%;border-left:1px solid #EFEFEF;text-align:center;}
    .inputs .vcode-img img{width:80%;height:100%;}
    .inputs input{width:80%;height:88%;}
</style>
