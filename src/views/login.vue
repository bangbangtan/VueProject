<template>
  <div class="login">
    <div class="loginBox demo-avatar">
        <Avatar src="../../static/img/1.jpg" style="height:150px;width:150px;border-radius:50%;margin-top:-95px;margin-left:120px"></Avatar>
      <el-form ref="form" label-position="left" :model="form" label-width="80px" style="margin:10px 50px 0px 50px">
        <el-form-item label="用户名" size="small">
          <el-input placeholder="请输入用户名" v-model="form.name">
            <template slot="prepend"><i class="el-icon-user-solid"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item label="密  码" size="small">
          <el-input placeholder="请输入密码" v-model="form.password">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <span style="margin-left:30px;cursor:pointer;color:#606266" @click="ForgetPassword">忘记密码 ？</span>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" :loading="loading" style="margin-left:50px; width:300px" @click="submit">登录
        </el-button>
      </div>
    </div>
    <el-dialog title="找回密码" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" label-position="left" :model="form" label-width="80px">
        <el-form-item label="用户名" size="small">
          {{form.name}}
          <!-- <el-input placeholder="请输入用户名" v-model="form.name">
              </el-input> -->
        </el-form-item>
        <el-form-item label="手机号" size="small">
          <el-input placeholder="请输入手机号" v-model="form.CellNumber">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" size="small">
          <slide-verify :l="42" :r="10" :w="310" :h="155" slider-text="向右滑动" @success="onSuccess" @fail="onFail"
            @refresh="onRefresh"></slide-verify>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          name: '',
          password: '',
          CellNumber: ''
        },
        loading: false,
        checked: false,
        dialogVisible: false,
        msg: '',
      }
    },
    created() {
      let account = this.getCookie("name")
    },
    methods: {
      submit() {
        this.loading = true
        setInterval(() => {
          this.loading = false
        }, 1000)
        if (this.form.name === '' || this.form.password === '') {
          return   this.$message.error('用户名或密码不可为空');
        } else {
          // //判断复选框是否被勾选 勾选则调用配置cookie方法
          if (this.checked == true) {
            //传入账号名，密码，和保存天数3个参数
            this.setCookie(this.form.name, this.form.password, 7);
            this.$message({
                message: '已记住密码',
                type: 'success'
              },
              this.$router.push('/VueSplitpane')
              )
          } else if(window.document.cookie.length > 0){
            this.setCookie(this.form.name, this.form.password, 7);
            this.$router.push('/VueSplitpane')
          }else {
            this.clearCookie()
            this.$router.push('/VueSplitpane')
          }
        }
      },
      setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
         //字符串拼接cookie
        window.document.cookie = "this.form.name=" + c_name + ";path=/;expires=" + exdate.toLocaleString()
        window.document.cookie = "this.form.password=" + c_pwd + ";path=/;expires=" + exdate.toLocaleString()
      },
      getCookie(key) {
        if (window.document.cookie.length > 0) {
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == 'this.form.name') {
              this.form.name = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == 'this.form.password') {
              this.form.password = arr2[1];
            }
          }
        }
      },
      clearCookie() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      },
      ForgetPassword() {
        console.log(2233232)
        this.dialogVisible = true
      },
      onSuccess() {
        this.msg = 'login success'
      },
      onFail() {
        this.msg = ''
      },
      onRefresh() {
        this.msg = ''
      }
    }
  }

</script>
<style>
  .login {
    height: 100%;
    width: 100%;
    background: #2D3B4C;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginBox {
    width: 400px;
    height: 300px;
  }

  .login .el-checkbox,
  .el-checkbox-button__inner {
    color: #606266;
    font-weight: 400 !important;
  }

  .login .el-input-group__append,
  .el-input-group__prepend {
    background-color: #F5F7FA;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    padding: 0 9px !important;
  }

</style>
