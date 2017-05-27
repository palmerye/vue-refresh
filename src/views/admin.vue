<template>
    <div>
        <divider>用户列表</divider>
        <div class="user-list">
            <div v-for="item in allUser" class="user-item">
                <p><span>用户名： {{item.username}}</span><span>密码： {{item.password}}</span><x-button type="warn" mini plain class="delete" @click.native="del_op(item.uid)">删除用户</x-button></p>
            </div>
            <divider>添加用户</divider>
            <group>
                <x-input title="用户名" v-model="username"></x-input>
                <x-input title="密码" v-model="password"></x-input>
            </group>
            <div class="vote_btn">
                <x-button type="default" mini plain class="btn_add" @click.native="add_op">添加用户</x-button>
            </div>
        </div>
        <divider>视频列表</divider>
        <div class="video-list">
            <div v-for="item in allCollectVideo" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.video.vid }}" class="title" tag="p">{{item.video.name}}</router-link>
                <img :src="item.video.photoUrl">
                <x-button type="warn" mini plain class="delete" @click.native="del_col(item.video.vid)">删除收藏视频</x-button>
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
            username: '',
            password: ''
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
            allUser: state => state.user.allUser,
            allCollectVideo: state => state.video.allCollectVideo
        })
    },
    mounted () {
        this.$store.dispatch('getAllUser')
        this.$store.dispatch('getallCollectVideo')
    },
    methods: {
        add_op () {
            this.$store.dispatch('register', {
                username: this.username,
                password: this.password
            })
            .then(result => {
                setTimeout(() => {
                    this.$store.dispatch('getAllUser')
                }, 500)
                this.allUser = this.$store.state.user.allUser
            })
        },
        del_op (id) {
            this.$store.dispatch('deleteUser', id)
            .then(result => {
                setTimeout(() => {
                    this.$store.dispatch('getAllUser')
                }, 500)
                this.allUser = this.$store.state.user.allUser
            })
        },
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
        // show_pop () {
        //     this.$store.dispatch('getUserInfo')
        // }
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