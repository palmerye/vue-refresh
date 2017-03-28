<template>
    <div>
        <p>{{testData.tab}}11</p>
        <group>
            <cell title="title" value="value"></cell>
        </group>
    </div>
</template>
<script>
import { Group, Cell } from 'vux'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            // tettt: '11'
        }
    },
    components: {
        Group,
        Cell
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

</style>