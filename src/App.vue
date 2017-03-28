<template>
    <div>
        <router-view></router-view>
        <tabbar>
		    <tabbar-item link='/'>
		    	<span slot="label">首页</span>
		    </tabbar-item>
		    <tabbar-item link='/test'>
				<span slot="label">投票</span>
		    </tabbar-item>
		    <tabbar-item link='/hello'>
				<span slot="label">个人</span>
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

</style>
