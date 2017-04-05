<template>
    <div>
        <x-header :left-options="{backText: ' '}">分类</x-header>
        <grid :rows="2">
	    	<grid-item :label="i.name" v-for="i in classify_list" :link="{ name: 'classify', params: { id: i.id } }" class="sec_class">
                <i class="iconfont icon-game" slot="icon" v-if="i.id == 1"></i>
                <i class="iconfont icon-edit_light" slot="icon" v-if="i.id == 2"></i>
                <i class="iconfont icon-recordlight" slot="icon" v-if="i.id == 3"></i>
                <i class="iconfont icon-global_light" slot="icon" v-if="i.id == 4"></i>
                <i class="iconfont icon-junshi" slot="icon" v-if="i.id == 5"></i>
	        	<i class="iconfont icon-cascades" slot="icon" v-if="i.id == 6"></i>
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
                name: '娱乐',
                id: 1
            }, {
                name: '学习',
                id: 2
            }, {
                name: '影视',
                id: 3
            }, {
                name: '社会',
                id: 4
            }, {
                name: '军事',
                id: 5
            }, {
                name: '其他',
                id: 6
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