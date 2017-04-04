<template>
    <div class="content_all">
        <router-view></router-view>
        <div v-show="authlock">
        	<tabbar style="position: fixed;">
			    <tabbar-item link='/'>
			    	<i slot="icon" class="iconfont icon-home iconHome_1"></i>
			    	<span slot="label">.</span>
			    </tabbar-item>
			    <tabbar-item link='/vote'>
			    	<i slot="icon" class="iconfont icon-roundaddfill iconHome_2"></i>
			    </tabbar-item>
			    <tabbar-item link='/user'>
			    	<i slot="icon" class="iconfont icon-people iconHome_1"></i>
					<span slot="label">.</span>
			    </tabbar-item>
		    </tabbar>
        </div>
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
            authlock: state => state.user.authlock
        })
    },
    mounted () {
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
	padding-bottom: 100px;
}
</style>
