<template>
    <div>
        <x-header>{{classify_tag}}</x-header>
        <div class="vote-list" v-for="item in classifyVoteinfo" @click="$router.push({ name: 'votedetail', params: { id: item.id } })">
            <img :src="'//' + item.photoUrl">
            <div class="content">
                <p>{{item.title}}</p>
                <p>{{item.voteDescribe}}</p>
                <p>
                    <span>PV: {{item.pv}}</span>
                    <span v-if="!item.isEnd">进行中</span>
                    <span v-else>已结束</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            classify_tag: ''
        }
    },
    components: {
        XHeader
    },
    computed: {
        ...mapState({
            classifyVoteinfo: state => state.vote.classifyVoteinfo
        })
    },
    mounted () {
        switch (this.$route.params.id) {
            case 1:
                this.classify_tag = '娱乐'
                break
            case 2:
                this.classify_tag = '学习'
                break
            case 3:
                this.classify_tag = '影视'
                break
            case 4:
                this.classify_tag = '社会'
                break
            case 5:
                this.classify_tag = '军事'
                break
            case 6:
                this.classify_tag = '其他'
                break
        }
        this.$store.dispatch('getclassifyVote', this.$route.params.id)
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
.vote-list {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    img {
        width: 100px;
        height: 80px;
        margin-right: 10px;
    }
    .content {
        p:nth-child(1) {
            font-size: 20px;
        }
        p:nth-child(2) {
            font-size: 12px;
            line-height: 14px;
        }
        p:nth-child(3) {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>