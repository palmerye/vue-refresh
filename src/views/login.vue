<template>
    <div class="login-div">
        <group>
            <x-input placeholder="输入用户名..." v-model="params.username">
                <i slot="label" class="iconfont icon-people"></i>
            </x-input>
            <x-input placeholder="输入密码..." type="password" v-model="params.password">
                <i slot="label" class="iconfont icon-people"></i>
            </x-input>
        </group>
        <x-button plain type="primary" class="login_btn" @click.native="login">登录</x-button>
    </div>
</template>
<script>
import { Group, XInput, XHeader, XButton } from 'vux'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            params: {
                username: '',
                password: ''
            }
        }
    },
    components: {
        Group,
        XInput,
        XHeader,
        XButton
    },
    computed: {
        ...mapGetters({
            // testData: 'testDataGet'
        })
    },
    mounted () {
        // this.$store.dispatch('gettestData')
    },
    methods: {
        login () {
            this.$store.dispatch('login', this.params)
            // .then(result => {
            //     // this.$router.push({name: 'user'})
            //     console.log('succ')
            // })
            // .catch(erro => {
            //     console.log(erro, 'errrr')
            // })
        }
    }
}
</script>
<style lang='scss' scoped>
.login-div {
    z-index: 999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 100px 50px;
    background: #fff url("../assets/imgages/bg-login.jpg") no-repeat top;
    background-size:100% 100%; 
}
.login_btn {
    margin: 20px auto;
    border-radius: 0;
    border-color: #35495e;
    color: #35495e;
}
.toregister {
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
    a {
        color: #333;
    }
}
</style>