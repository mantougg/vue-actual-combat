<template>
  <tabs v-model="activeKey">
    <tabs-pane label="标签1" name="1">标签1的内容</tabs-pane>
    <tabs-pane label="标签2" name="2">标签2的内容</tabs-pane>
    <tabs-pane label="标签3" name="3">标签3的内容</tabs-pane>
  </tabs>
</template>

<script>
import tabsPane from "../../components/tabs/tabs-pane.vue";
import tabs from "../../components/tabs/tabs.vue";
export default {
  name: "my-page-tabs-component",
  components: { tabsPane, tabs },
  data() {
    return {
      activeKey: "1",
    };
  },
};
</script>

<style></style>
