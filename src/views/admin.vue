<template>
    <div>
        <divider>用户列表</divider>
        <div class="user-list">
            <div v-for="item in itemsUser" class="user-item">
                <p>{{item.username}}<x-button type="warn" mini plain class="delete" @click.native="del_op">删除用户</x-button></p>
            </div>
            <divider>添加用户</divider>
            <group>
                <x-input title="用户名" v-model="username"></x-input>
                <x-input title="密码" v-model="password"></x-input>
            </group>
            <group>
                <x-input :title="'选项' + [index+1]" v-model="voteOption[index]" v-for="(item, index) in voteList"></x-input>
            </group>
            <div class="vote_btn">
                <x-button type="default" mini plain class="btn_add" @click.native="add_op">添加选项</x-button>
            </div>
        </div>
        <divider>视频列表</divider>
        <div class="video-list">
            <div v-for="item in items" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.id }}" class="title" tag="p">{{item.title}}</router-link>
                <img :src="item.imgUrl">
            </div>
        </div>
        <divider>上传视频</divider>
    </div>
</template>
<script>
import { Divider, Group, XInput, XButton } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            show_pop: false,
            items: [
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                },
                {
                    title: '视频标题',
                    id: 1,
                    imgUrl: 'http://www.runoob.com/images/pulpit.jpg'
                }
            ],
            itemsUser: [
                {
                    username: '啊三',
                    password: '123456',
                    id: 1
                },
                {
                    username: '啊三',
                    password: '123456',
                    id: 2
                },
                {
                    username: '啊三',
                    password: '123456',
                    id: 3
                },
                {
                    username: '啊三',
                    password: '123456',
                    id: 4
                }
            ]
        }
    },
    components: {
        Divider,
        Group,
        XInput,
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
.user-list {
    .user-item {
        position: relative;
        border-bottom: 1px solid #e1e1e1;
        line-height: 40px;
        .delete {
            position: absolute;
            right: 0;
            top: 5px;
        }
    }
}
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