<template>
    <div>
        <divider>视频详情</divider>
        <div class="videoDetail">
            <h2 class="title">{{title}}</h2>
            <video :src="videoUrl" class="video"></video>
            <x-button plain>收藏</x-button>
        </div>
    </div>
</template>
<script>
import { Divider, XButton } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            show_pop: false,
            title: '视频标题呀',
            videoUrl: 'http://ohce3yxd6.bkt.clouddn.com/media/cat.mp4'
        }
    },
    components: {
        Divider,
        XButton
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
.videoDetail {
    max-width: 600px;
    margin: 0 auto;
    .title {
        text-align: center;
    }
    .video {
        display: block;
        width: 100%;
        margin: 10px auto;
    }
}
</style>