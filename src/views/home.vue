<template>
    <div>
        <search @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>
        <div class="video-list">
            <div v-for="item in items" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.id }}" class="title" tag="p">{{item.title}}</router-link>
                <img :src="item.imgUrl">
            </div>
        </div>
    </div>
</template>
<script>
import { Group, Search } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            items: [
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 2,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 3,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 3,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                }
            ]
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
.video-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    .video-item {
        width: 220px;
        padding: 15px;
        margin: 5px;
        border-bottom: 1px solid #e1e1e1;
        .title {
            text-align: center;
        }
        img {
            width: 100%;
        }
    }
}
</style>