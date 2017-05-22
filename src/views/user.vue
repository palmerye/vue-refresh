<template>
    <div>
        <divider>我的收藏</divider>
        <div class="video-list">
            <div v-for="item in items" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.id }}" class="title" tag="p">{{item.title}}</router-link>
                <img :src="item.imgUrl">
            </div>
        </div>
    </div>
</template>
<script>
import { Divider } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            show_pop: false,
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
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                }
            ]
        }
    },
    components: {
        Divider
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo,
            myjoinVote: state => state.vote.myjoinVoteinfo,
            mypublishVote: state => state.vote.mypublishVoteinfo
        })
    },
    mounted () {
        this.$store.dispatch('getUserInfo')
        this.$store.dispatch('myjoinVote')
        this.$store.dispatch('mypublishVote')
    },
    methods: {
        change (val) {
        },
        addTag () {
            this.$store.dispatch('addTag', {
                interested: this.sel_tag.toString()
            })
            .then(result => {
                this.show_pop = false
            })
        }
    },
    watch: {
        show_pop () {
            this.$store.dispatch('getUserInfo')
        }
    }
}
</script>
<style lang='scss' scoped>
.video-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .video-item {
        width: 220px;
        padding: 15px;
        p {
            text-align: center;
        }
        img {
            width: 100%;
        }
    }
}
</style>