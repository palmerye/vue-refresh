<template>
    <div>
        <x-header :left-options="{backText: ''}">个人中心 <i class="iconfont icon-add add_tag" @click="show_pop = true"></i></x-header>
        <div class="avatarDiv">
            <blur :blur-amount=40 :height=150 :url="AvatarUrl">
                <p class="center"><img :src="AvatarUrl"></p>
            </blur>
        </div>
        <divider>我感兴趣的标签</divider>
        <div class="my_int">
            <span v-for="item in userInfo.data.interested.split(',')">
                <span v-if="item == 1">政治</span>
                <span v-if="item == 2">科技</span>
                <span v-if="item == 3">生活</span>
                <span v-if="item == 4">其他</span>
            </span>
        </div>
        <tab :line-width=2 active-color='#35495e' v-model="index">
            <tab-item class="vux-center" :selected="tabSec === item" v-for="(item, index) in list" @click="tabSec = item" :key="index">{{item}}</tab-item>
        </tab>
        <div class="tab0" v-if="index === 0">
            <div class="vote_item" v-for="item in myjoinVote" @click="$router.push({ name: 'votedetail', params: { id: item.voteEvent.id } })">
                <div>
                    <img :src="'//' + item.voteEvent.photoUrl || null">
                </div>
                <div>
                    <p>{{item.voteEvent.title}}</p>
                    <p>{{item.voteEvent.voteDescribe}}</p>
                </div>
            </div>
        </div>
        <div class="tab1" v-if="index === 1">
            <div class="vote_item" v-for="item in mypublishVote" @click="$router.push({ name: 'votedetail', params: { id: item.voteEvent.id } })">
                <div>
                    <img :src="'//' + item.voteEvent.photoUrl || null">
                </div>
                <div>
                    <p>{{item.voteEvent.title}}</p>
                    <p>{{item.voteEvent.voteDescribe}}</p>
                </div>
            </div>
        </div>
        <popup v-model="show_pop" is-transparent>
            <div>
                <checklist :options="tagList" v-model="sel_tag" @on-change="change"></checklist>
                <x-button type="default" class="add_tag_btn" @click.native="addTag">添加标签</x-button>
                <x-button @click.native="show_pop = false" class="add_tag_btn">取消</x-button>
            </div>
        </popup>        
    </div>
</template>
<script>
import { Tab, TabItem, XHeader, Divider, Swiper, SwiperItem, Popup, XButton, Checklist, Blur } from 'vux'
import { mapState } from 'vuex'
import AvatarUrl from '../assets/imgages/avatar.jpg'

export default {
    data () {
        return {
            show_pop: false,
            tagList: [{
                key: '1',
                value: '政治'
            }, {
                key: '2',
                value: '科技'
            }, {
                key: '3',
                value: '生活'
            }, {
                key: '4',
                value: '其他'
            }],
            sel_tag: [],
            list: ['我参与的投票', '我发起的投票'],
            tabSec: '我参与的投票',
            index: 0,
            vote_cy: [{
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't11',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't12',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't13',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't13',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't13',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't13',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }],
            vote_fq: [{
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't21',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't22',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't23',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't23',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't23',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }, {
                imgurl: 'http://7le.online/1490803823.jpg',
                title: 't23',
                desc: '描述描述描述描述描述描述描述描述',
                id: 1
            }],
            AvatarUrl
        }
    },
    components: {
        Tab,
        TabItem,
        XHeader,
        Divider,
        Swiper,
        SwiperItem,
        Popup,
        XButton,
        Checklist,
        Blur
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
        // userInfo (data) {
        //     this.fl_list = data.data.interested.split(',')
        // },
        show_pop () {
            this.$store.dispatch('getUserInfo')
        }
    }
}
</script>
<style lang='scss' scoped>
.my_int {
    padding: 0 10px;
    span {
        background-color: #35495e;
        color: #fff;
        border-radius: 30px;
        padding: 0 5px;
        margin: 10px;
    }
}
.vote_item {
    display: flex;
    padding: 10px;
    img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
    p:nth-child(2) {
        font-size: 12px;
    }
}
.add_tag {
    font-size: 25px;
    position: absolute;
    right: 5px;
}
.add_tag_btn {
    margin-top: 10px;
    background-color: #fff;
    border: 0;
}
.avatarDiv {
    .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size: 18px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 4px solid #ececec;
        }
    }
}
</style>