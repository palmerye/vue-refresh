<template>
    <div>
        <divider>我的收藏</divider>
        <div class="video-list">
            <div v-for="item in allCollectVideo" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.video.vid }}" class="title" tag="p">{{item.video.name}}</router-link>
                <img :src="item.video.photoUrl">
                <x-button type="warn" mini plain class="delete" @click.native="del_col(item.video.vid)">删除收藏视频</x-button>
            </div>
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
            allCollectVideo: state => state.video.allCollectVideo
        })
    },
    mounted () {
        this.$store.dispatch('getallCollectVideo')
    },
    methods: {
        del_col (id) {
            this.$store.dispatch('deleteCollectVideo', id)
            .then(result => {
                setTimeout(() => {
                    this.$store.dispatch('getallCollectVideo')
                }, 500)
                this.allCollectVideo = this.$store.state.video.allCollectVideo
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