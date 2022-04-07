<template>
  <div>
    <input-number v-model="value" :max="10" :min="0"></input-number>
  </div>
</template>

<script>
import InputNumber from "../../components/input-number/index.vue";
export default {
  name: "my-page-input-number",
  components: {
    InputNumber,
  },
  data() {
    return {
      value: 5,
    };
  },
};
</script>

<style></style>
