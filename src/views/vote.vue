<template>
    <div>
        <x-header :left-options="{showBack: false}"><p @click="publishVote">发布</p></x-header>

        <group>
            <x-input title="标题" v-model="title"></x-input>
            <x-input title="描述" v-model="description"></x-input>
        </group>
        <divider>请添加投票选项</divider>
        <group>
            <x-input :title="'选项' + [index+1]" v-model="voteOption[index]" v-for="(item, index) in voteList"></x-input>
        </group>
        <div class="vote_btn">
            <x-button type="default" mini plain class="btn_add" @click.native="add_op">添加选项</x-button>
            <x-button type="warn" mini plain class="btn_del" @click.native="del_op">删除选项</x-button>
        </div>
        <div>
            <divider>请选择投票所属分类</divider>
            <checker v-model="type_sel" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in typeList" :key="index">{{item.value}}</checker-item>
            </checker>
        </div>
        <div>
            <divider>请选择投票有效期</divider>
            <checker v-model="endTime_sel" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in endTimeList" :key="index">{{item.value}}</checker-item>
            </checker>
        </div>
        <div>
            <divider>图片上传</divider>
            <div>
                <input type="file" @change="onFileChange">
                <img :src="images[0]" style="width: 100%">
            </div>
        </div>
    </div>
</template>
<script>
import { Group, XInput, XButton, Cell, Checker, CheckerItem, Divider, XHeader } from 'vux'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            title: '',
            description: '',
            voteList: ['', ''],
            voteOption: [],
            newTodo: '',
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
            type_sel: {key: '1', value: '娱乐'},
            endTimeList: [{
                key: '1',
                value: '1天'
            }, {
                key: '2',
                value: '7天'
            }, {
                key: '3',
                value: '30天'
            }],
            endTime_sel: {key: '1', value: '1天'},
            images: [],
            imageOnload: {},
            imgfiles: ''
        }
    },
    components: {
        Group,
        XInput,
        XButton,
        Cell,
        Checker,
        CheckerItem,
        Divider,
        XHeader
    },
    computed: {
        ...mapState({
            // testData: 'testDataGet'
        })
    },
    mounted () {
        // this.$store.dispatch('gettestData')
    },
    methods: {
        publishVote () {
            console.log(this.title)
            console.log(this.description)
            console.log(this.voteOption.join(','))
            console.log(this.type_sel.key)
            console.log(Number(this.endTime_sel.key))
            console.log(this.imgfiles)
            this.$store.dispatch('publishVote', {
                title: this.title,
                vote_describe: this.description,
                type_id: this.type_sel.key,
                option: this.voteOption.join(','),
                endTime: Number(this.endTime_sel.key),
                file: this.imgfiles
            }).then(result => {
                this.$router.push({name: 'home'})
            })
        },
        add_op () {
            this.voteList.push(this.newTodo)
        },
        del_op () {
            this.voteList.pop()
            this.voteOption.pop()
        },
        onFileChange (e) {
            var files = e.target.files || e.dataTransfer.files
            if (!files.length) return
            // this.imgfiles = files
            this.createImage(files)
        },
        createImage (file) {
            var vm = this
            var reader = null
            var leng = file.length
            for (var i = 0; i < leng; i++) {
                reader = new window.FileReader()
                reader.readAsDataURL(file[i])
                reader.onload = function (e) {
                    vm.images.push(e.target.result)
                    vm.imgfiles = vm.images[0]
                    // console.log(vm.images[0])
                }
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
}
.demo1-item-selected {
    border: 1px solid green;
}
.vote_btn {
    height: 60px;
    width: 100%;
    position: relative;
    .btn_add {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .btn_del {
        margin: 0;
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>