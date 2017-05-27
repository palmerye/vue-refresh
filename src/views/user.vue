<template>
    <div>
        <divider>我的收藏</divider>
        <div class="video-list">
            <div v-for="item in allCollectVideo" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.video.vid }}" class="title" tag="p">{{item.video.name}}</router-link>
                <img :src="item.video.photoUrl">
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
        }
    },
    components: {
        Divider
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