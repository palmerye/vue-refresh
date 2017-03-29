<template>
    <div>
        <x-header :left-options="{showBack: false}">注册</x-header>
        <group>
            <x-input placeholder="输入用户名...">
                <i slot="label" class="iconfont icon-people"></i>
            </x-input>
            <x-input placeholder="输入密码..." type="password">
                <i slot="label" class="iconfont icon-people"></i>
            </x-input>
        </group>
        <div class="toregister">
            <router-link to="login">已注册?点这里登录</router-link>
        </div>
    </div>
</template>
<script>
import { Group, XInput, XHeader } from 'vux'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            // tettt: '11'
        }
    },
    components: {
        Group,
        XInput,
        XHeader
    },
    computed: {
        ...mapGetters({
            testData: 'testDataGet'
        })
    },
    mounted () {
        this.$store.dispatch('gettestData')
    },
    methods: {
    }
}
</script>
<style lang='scss' scoped>
.toregister {
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
    a {
        color: #333;
    }
}
</style>