<template>
    <div>
        <x-header>投票详情</x-header>
        <div class="content">
            <img :src="'//' + votedetail.data.photoUrl">
            <div class="detail">
                <p class="title">{{votedetail.data.title}}</p>
                <p class="desc">{{votedetail.data.voteDescribe}}</p>
                <div class="state">
                    <span>PV:{{votedetail.data.pv}}</span>
                    <span v-if="votedetail.data.isend">进行中</span>
                    <span v-else>已结束</span>
                </div>
                <p class="tag" v-if="votedetail.data.typeId == 1">分类标签：政治</p>
                <p class="tag" v-if="votedetail.data.typeId == 2">分类标签：科技</p>
                <p class="tag" v-if="votedetail.data.typeId == 3">分类标签：生活</p>
                <p class="tag" v-if="votedetail.data.typeId == 4">分类标签：其他</p>
            </div>
        </div>
        <divider>参与投票</divider>
        <div class="vote_todo">
            <checker v-model="type_sel" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in typeList" :key="index">{{item.value}}</checker-item>
            </checker>
            <x-button type="default" plain @click.native="voteFuck" class="btn_vote">点击投票</x-button>
        </div>
        <divider>投票结果</divider>
        <div class="vote_result">
            <!-- <div v-for="item in votedetail.data.voteOptionList">{{item.name}}: {{item.num}}人</div> -->
            <div v-for="item in votedetail.data.voteOptionList">
                <p>{{item.name}}: {{item.num}}人</p>
                <x-progress :percent="item.num" :show-cancel="false"></x-progress>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import { XHeader, Divider, Checker, CheckerItem, XButton, XProgress } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            detail: {
                id: 1,
                title: '又一天过去了',
                desc: '清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！清明快乐！',
                isend: 0,
                pv: 388,
                typeid: 1,
                imgurl: 'http://7le.online/1490803823.jpg'
            },
            typeList: [{
                key: '1',
                value: '分类1'
            }, {
                key: '2',
                value: '分类2'
            }, {
                key: '3',
                value: '分类3'
            }, {
                key: '4',
                value: '分类4'
            }],
            type_sel: ''
        }
    },
    components: {
        XHeader,
        Divider,
        Checker,
        CheckerItem,
        XButton,
        XProgress
    },
    computed: {
        ...mapState({
            votedetail: state => state.vote.votedetail
        })
    },
    mounted () {
        this.$store.dispatch('voteDetail', this.$route.params.id)
    },
    methods: {
        voteFuck () {
            this.$store.dispatch('postVode', {
                event_id: this.$route.params.id,
                option: this.type_sel.key
            }).then(result => {
            })
        }
    }
}
</script>
<style lang='scss' scoped>
.content {
    padding: 10px;
    img {
        width: 100%;
    }
    .detail {
        .title {
            text-align: center;
            font-size: 18px;
        }
        .desc {
            font-size: 12px;
        }
        .state {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            margin: 10px 0px;
        }
        .tag {
            font-size: 12px;
        }
    }
}
.demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
}
.demo1-item-selected {
    border: 1px solid green;
}
.btn_vote {
    margin: 10px 0;
}
.vote_result {
    padding: 20px;
}
</style>