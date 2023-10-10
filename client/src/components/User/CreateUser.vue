<template>
  <div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
      <p>ชื่อ: <input type="text" v-model="user.name"></p>
      <p>นามสกุล: <input type="text" v-model="user.lastname"></p>
      <p>email: <input type="text" v-model="user.email"></p>
      <p>password: <input type="text" v-model="user.password"></p>
      <p><button type="submit">create user</button></p>
    </form>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active"
      }
    };
  },
  methods: {
    async createUser(){
      try{
        await UsersService.post(this.user)
        this.$router.push('/users')
      }catch(err){
        console.log(err)
      }
    }
  }
};
</script>

<style></style>
