<template>
    <div class="content_all">
        <p class="header">
            <router-link to="/" tag="span">Home</router-link>
            <span @click="toJump()">个人中心</span>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapState } from 'vuex'

export default {
    components: {
        Tabbar,
        TabbarItem
    },
    computed: {
        ...mapState({
            // authlock: state => state.user.authlock
        })
    },
    mounted () {
        this.$store.dispatch('getallVideo', '')
    },
    watch: {
        // authlock (val) {
        //     if (val) {
        //         // this.$router.push({name: 'user'})
        //     }
        // }
    },
    methods: {
        toJump () {
            console.log(this.$store.state.user.authlock)
            if (this.$store.state.user.authlock) {
                console.log('已经登录')
                if (this.$store.state.user.userInfo.type) {
                    this.$router.push({name: 'admin'})
                } else {
                    this.$router.push({name: 'user'})
                }
            } else {
                console.log('未登录')
                this.$router.push({name: 'login'})
            }
        }
    }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
    background: linear-gradient(to right, #c8f2e6 3%, #fff 0);
    background-size: 30px 100%;
}
.iconHome_1 {
	font-size: 30px !important;
}
.iconHome_2 {
	font-size: 70px !important;
	text-shadow: 0px 0px 3px #666;
	position: absolute;
	left: -50%;
	top: -40px;
	margin-left: -50%;
}
.content_all {
	padding: 30px;
}
.header {
    z-index: 888;
    display: flex;
    justify-content: space-between;
    color: #666;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff url("assets/imgages/bg-fuck.png") no-repeat fixed top;
    background-size: cover;
    span {
        margin: 10px 30px;
        color: #fff;
        box-shadow: 0 2px 2px #e1e1e1;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 3px;
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
    }
}
@media screen and (min-width: 450px) {
    .content_all {
        max-width: 1000px;
        margin: 0 auto;
    }
    .header {
        top: 0;
        bottom: auto;
    }
}
</style>
