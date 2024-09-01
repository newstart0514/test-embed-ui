<template>
  <div v-shadow id="app">
    <shadow-root>
      <link
        rel="stylesheet"
        href="//unpkg.com/view-design/dist/styles/iview.css"
      />
      <Input type="text" v-model="name" />
      <Button type="primary" @click="handleClick">{{ msg }}</Button>
    </shadow-root>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "hello world",
    };
  },
  watch: {
    name: function (val) {
      this.$store.commit("setName", val);
    },
  },
  methods: {
    handleClick() {
      console.log(this.$store.state.name);
    },
  },
};
</script>

<style scoped></style>
