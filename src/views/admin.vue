<template>
    <div class="admin-div">
        <divider>用户列表</divider>
        <div class="user-list">
            <div v-for="item in allUser" class="user-item">
                <p><span>用户名： {{item.username}}</span><x-button type="warn" mini plain class="delete" @click.native="del_op(item.uid)">删除用户</x-button></p>
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
            <div v-for="item in allVideo" class="video-item">
                <router-link :to="{ name: 'videodetail', params: { id: item.vid }}" class="title" tag="p">{{item.name}}</router-link>
                <img :src="item.photoUrl">
                <x-button type="warn" mini plain class="delete" @click.native="del_video(item.vid)">删除视频</x-button>
            </div>
        </div>
        <divider>上传视频</divider>
        <div>
            <group>
                <x-input title="视频名称" v-model="videoname"></x-input>
            </group>
            <input id="myUploader" type="file" multiple="multiple" name="file"/>
            <x-button type="default" mini plain class="" @click.native="uploader">上传视频</x-button>
        </div>
    </div>
</template>
<script>
import { Divider, Group, XInput, XButton } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            username: '',
            password: '',
            videoname: '',
            newParams: {
                name: '',
                file: {}
            }
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
            allVideo: state => state.video.allVideo
        })
    },
    mounted () {
        this.$store.dispatch('getAllUser')
        this.$store.dispatch('getallVideo', '')
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
        del_video (id) {
            this.$store.dispatch('deleteVideo', id)
            .then(result => {
                setTimeout(() => {
                    this.$store.dispatch('getallVideo', '')
                }, 500)
                this.allVideo = this.$store.state.video.allVideo
            })
        },
        uploader () {
            var zipFormData = new window.FormData()
            var oFiles = document.querySelector('#myUploader').files
            zipFormData.append('name', this.videoname)
            zipFormData.append('file', oFiles[0])
            console.log(zipFormData, '上传参数')
            console.log(oFiles[0], '上传参数')
            this.$store.dispatch('uploadVideo', zipFormData)
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
.admin-div {
    margin-top: 50px;
}
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