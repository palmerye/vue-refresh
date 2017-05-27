<template>
    <div>
        <divider>视频详情</divider>
        <div class="videoDetail">
            <h2 class="title">{{detailVideo.name}}</h2>
            <video :src="detailVideo.videoUrl" class="video" controls="controls" autoplay></video>
            <x-button plain @click.native="collect(detailVideo.vid)">收藏</x-button>
        </div>
    </div>
</template>
<script>
import { Divider, XButton } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
        }
    },
    components: {
        Divider,
        XButton
    },
    computed: {
        ...mapState({
            authlock: state => state.user.authlock,
            detailVideo: state => state.video.detailVideo
        })
    },
    mounted () {
        this.$store.dispatch('getDetailVideo', this.$route.params.id)
    },
    methods: {
        collect (id) {
            if (this.authlock) {
                console.log('已经登录')
                this.$store.dispatch('toCollectVideo', this.$route.params.id)
            } else {
                console.log('未登录')
                this.$router.push({name: 'login'})
            }
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