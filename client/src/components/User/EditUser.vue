<template>
  <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
      <p>ชื่อ: <input type="text" v-model="user.name" /></p>
      <p>นามสกุล: <input type="text" v-model="user.lastname" /></p>
      <p>email: <input type="text" v-model="user.email" /></p>
      <p>password: <input type="text" v-model="user.password" /></p>
      <p><button type="submit">edit user</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ user.name }}</p>
      <p>lastname: {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>
      <p></p>
    </div>
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
    async editUser() {
      try {
        console.log(this.user)
        await UsersService.put(this.user)
        this.$router.push("/users")
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
};
</script>

<style></style>
