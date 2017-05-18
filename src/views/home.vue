<template>
    <div>
        <search></search>
    </div>
</template>
<script>
import { Group, Search } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            tag_sec: '热门',
            show_sec: false,
            menus1: {
                '热门': '热门',
                '我感兴趣的': '我感兴趣的'
            },
            lists: []
        }
    },
    components: {
        Group,
        Search
    },
    computed: {
        ...mapState({
            hotVoteinfo: state => state.vote.hotVoteinfo,
            interestVoteinfo: state => state.vote.interestVoteinfo
        })
    },
    mounted () {
        this.$store.dispatch('gethotVote')
        setTimeout(() => {
            this.lists = this.hotVoteinfo
        }, 1000)
        // this.$store.dispatch('getinterestVote')
    },
    methods: {
        click (key) {
            this.tag_sec = key
            if (key === '热门') {
                this.$store.dispatch('gethotVote')
                this.lists = this.hotVoteinfo
                console.log(this.$store.state.vote.hotVoteinfo)
                console.log(this.lists)
            } else {
                this.$store.dispatch('getinterestVote')
                this.lists = this.interestVoteinfo
                console.log(this.interestVoteinfo)
                console.log(this.lists)
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.fl_entry {
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: #fff;
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