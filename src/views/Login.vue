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
    methods: {
        submit(formName) {
            this.$refs[formName].validate((result) => {
                if (result) {
                    this.token = 'success'
                    this.$store.commit('user/SET_USER_INFO', {
                        user: this.form.userName,
                        token: 'success'
                    })
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