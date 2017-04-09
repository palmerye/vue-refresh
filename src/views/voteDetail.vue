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
                    <span v-if="!votedetail.data.isend">进行中</span>
                    <span v-else>已结束</span>
                </div>
                <p class="tag" v-if="votedetail.data.typeId == 1">分类标签：娱乐</p>
                <p class="tag" v-if="votedetail.data.typeId == 2">分类标签：学习</p>
                <p class="tag" v-if="votedetail.data.typeId == 3">分类标签：影视</p>
                <p class="tag" v-if="votedetail.data.typeId == 4">分类标签：社会</p>
                <p class="tag" v-if="votedetail.data.typeId == 5">分类标签：军事</p>
                <p class="tag" v-if="votedetail.data.typeId == 6">分类标签：其他</p>
            </div>
        </div>
        <divider>参与投票</divider>
        <div class="vote_todo">
            <checker v-model="type_sel" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item.name" v-for="item in votedetail.data.voteOptionList" :key="item.id">{{item.name}}</checker-item>
            </checker>
            <x-button type="default" plain @click.native="voteFuck" class="btn_vote">点击投票</x-button>
        </div>
        <!-- <divider>投票结果</divider>
        <div class="vote_result">
            <div v-for="item in votedetail.data.voteOptionList">
                <p>{{item.name}}: {{item.num}}人</p>
                <x-progress :percent="item.num" :show-cancel="false"></x-progress>
                <br>
            </div>
        </div> -->
        <div class="mycharts">
            <div id="mycharts"></div>
        </div>
    </div>
</template>
<script>
import { XHeader, Divider, Checker, CheckerItem, XButton, XProgress } from 'vux'
import { mapState } from 'vuex'
import echarts from 'echarts'

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
                value: '娱乐'
            }, {
                key: '2',
                value: '学习'
            }, {
                key: '3',
                value: '影视'
            }, {
                key: '4',
                value: '社会'
            }, {
                key: '5',
                value: '军事'
            }, {
                key: '6',
                value: '其他'
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
        setTimeout(() => {
            let realArr = this.votedetail.data.voteOptionList
            console.log(realArr, 'ii')
            let optionArr = []
            for (let i = realArr.length - 1; i >= 0; i--) {
                console.log(realArr[i])
                optionArr.push({
                    value: realArr[i].num + 1,
                    name: realArr[i].name
                })
            }
            let mycharts = echarts.init(document.getElementById('mycharts'))
            let option = {
                right: '20%',
                bottom: '20%',
                title: {
                    text: '投票结果',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#666'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: optionArr.sort(function (a, b) { return a.value - b.value }),
                        roseType: 'angle',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(0, 0, 0, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(0, 0, 0, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#ccc' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'blue' // 100% 处的颜色
                                }], false),
                                shadowBlur: 300,
                                shadowColor: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200
                        }
                    }
                ]
            }
            // let realArr = this.$store.state.vote.votedetail.data.voteOptionList
            // let optionArr = option.series[0].data
            // for (let i = realArr.length - 1; i >= 0; i--) {
            //     console.log(realArr[i])
            //     optionArr.push({
            //         value: realArr[i].num + 1,
            //         name: realArr[i].name
            //     })
            // }
            // optionArr.sort(function (a, b) { return a.value - b.value })
            console.log(option)
            mycharts.setOption(option)
        }, 1000)
    },
    methods: {
        voteFuck () {
            // console.log(this.type_sel)
            this.$store.dispatch('postVode', {
                event_id: this.$route.params.id,
                option: this.type_sel
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
.mycharts {
    #mycharts {
        margin: 0 auto;
        width: 300px;
        height: 300px;
    }
}
</style>