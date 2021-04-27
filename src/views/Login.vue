<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="login-form">
            <el-form-item label="账号" props="userName">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" props="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="cancel">取消</el-button>
                <el-button type="primary" @click="submit('form')">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import actions from '../qiankunConfig/globalState'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                userName: '',
                password: ''
            },
            token: '',
            rules: {
                userName: {required: true, message: '账号不能为空', trigger: blur},
                password: {required: true, message: '密码不能为空', trigger: blur}
            }
        }
    },
    mounted() {
        actions.onGlobalStateChange((state, prevState) => {
            // state: 变更后的状态; prevState: 变更前的状态
            console.log("主应用观察者：token 改变前的值为 ", prevState.token)
            console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token)
    })
    },
    methods: {
        submit(formName) {
            this.$refs[formName].validate((result) => {
                if (result) {
                    this.token = 'success'
                    this.$store.commit('user/SET_USER_INFO', {
                        user: this.form.userName,
                        token: 'success'
                    })
                    actions.setGlobalState({
                        user: this.form.userName,
                        token: 'success'
                    })
                    this.$router.push("/portal/aaa/about")
                }
            })
        },
        cancel() {

        }
    }
}
</script>

<style lang="scss" scoped>
    .login-form {
        border: 1px solid blue;
        max-width: 50%;
        margin: 120px auto;
        padding: 40px;
    }
</style>