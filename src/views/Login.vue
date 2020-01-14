<template>
  <el-form :model="loginUser">
    <el-form-item label="用户名">
      <el-input type="text" v-model="loginUser.name" placeholder="请输入用户名" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="loginUser.passwd" placeholder="请输入密码" show-password></el-input>
    </el-form-item>
    <el-form-item>
     <el-button type="success">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginUser: {
        name: "",
        passwd: ""
      }
    };
  }
};
</script>

<style>
</style>