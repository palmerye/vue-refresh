<template>
    <div>
        <x-header :left-options="{backText: ''}">
            <span @click="show_sec = true">{{tag_sec}} <i class="iconfont icon-triangledownfill"></i></span>
            <router-link class="fl_entry" to='classifyhome'>分类</router-link>
        </x-header>
        <!-- <div class="vote-list" v-for="item in lists" v-link="{ name: 'votedetail', params: { id: item.id } }"> -->
        <div class="vote-list" v-for="item in lists" @click="$router.push({ name: 'votedetail', params: { id: item.id } })">
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
        <actionsheet v-model="show_sec" :menus="menus1" @on-click-menu="click"></actionsheet>
    </div>
</template>
<script>
import { XHeader, Actionsheet } from 'vux'
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
        XHeader,
        Actionsheet
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