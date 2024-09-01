<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button type="primary">你好</Button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
