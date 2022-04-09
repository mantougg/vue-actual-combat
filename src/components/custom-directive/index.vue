<template>
  <div v-get-directive-value.a.b="msg"></div>
</template>

<script>
export default {
  name: "get-directive-value",
  data() {
    return {
      msg: "my Message",
    };
  },
};
</script>

<style></style>
