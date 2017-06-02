<template>
    <div>
        <search :auto-fixed="false" v-model="searchText" @on-change="onChange" class="searchFixed" style="position: fixed"></search>
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
    margin: 50px auto;
    .video-item {
        width: 220px;
        padding: 15px;
        margin: 20px;
        border-bottom: 1px solid #e1e1e1;
        box-shadow: 0 5px 10px 5px #e1e1e1;
        .title {
            text-align: center;
            cursor: pointer;
            &:hover {
                opacity: 0.6;
            }
        }
        img {
            width: 100%;
        }
    }
}
.searchFixed {
    position: fixed;
    top: 50px;
    left: 0;
}
@media screen and (min-width: 450px) {
    .searchFixed {
        
    }
}
</style>