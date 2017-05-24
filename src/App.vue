<template>
    <div class="content_all">
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
        this.$store.dispatch('getallVideo')
    },
    watch: {
        // authlock (val) {
        //     if (val) {
        //         // this.$router.push({name: 'user'})
        //     }
        // }
    }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';

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
@media screen and (min-width: 450px) {
    .content_all {
        max-width: 1000px;
        margin: 0 auto;
    }
}
</style>
