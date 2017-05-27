<template>
    <div>
        <search :auto-fixed="false" v-model="searchText" @on-change="onChange"></search>
        <div class="video-list">
            <div v-for="item in allVideo" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.vid }}" class="title" tag="p">{{item.name}}</router-link>
                <img :src="item.photoUrl">
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
            searchText: ''
        }
    },
    components: {
        Group,
        Search
    },
    computed: {
        ...mapState({
            allVideo: state => state.video.allVideo
        })
    },
    mounted () {
        // this.$store.dispatch('getallVideo')
        // setTimeout(() => {
        //     this.lists = this.hotVoteinfo
        // }, 1000)
        // this.$store.dispatch('getinterestVote')
    },
    methods: {
        onChange (text) {
            this.$store.dispatch('getallVideo', text)
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