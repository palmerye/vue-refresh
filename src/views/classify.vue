<template>
    <div>
        <x-header :left-options="{backText: ' '}">分类</x-header>
        <grid>
	    	<grid-item :label="i.name" v-for="i in classify_list" :link="{ name: 'classify', params: { id: i.id } }" class="sec_class">
	        	<i class="iconfont icon-cascades" slot="icon"></i>
	    	</grid-item>
	    </grid>
    </div>
</template>
<script>
import { XHeader, Grid, GridItem } from 'vux'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            // classify_list: ['分类1', '分类2', '分类3', '分类4']
            classify_list: [{
                name: '政治',
                id: 1
            }, {
                name: '科技',
                id: 2
            }, {
                name: '生活',
                id: 3
            }, {
                name: '其他',
                id: 4
            }]
        }
    },
    components: {
        XHeader,
        Grid,
        GridItem
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

    }
}
</script>
<style lang='scss' scoped>
.iconfont {
    font-size: 20px;
    color: #666;
}
.sec_class {
    text-align: center;
}
</style>