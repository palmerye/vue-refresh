<template>
    <div>
        <router-view></router-view>
        <tabbar>
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
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
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
	position: absolute;
	left: -50%;
	top: -50px;
	margin-left: -50%;
}
</style>
