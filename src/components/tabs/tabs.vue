<template>
  <div id="tabs">
    <div class="tabs-bar">
      <!-- 标签页标题，v-for -->
      <div
        v-for="(item, index) in navList"
        :key="item"
        :class="tabCls(item)"
        @click="handleChange(index)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="tabs-content">
      <!-- slot是嵌套的pane -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      navList: [],
      currentValue: this.value,
    };
  },
  props: {
    value: { type: [String, Number] },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue() {
      //在当前选中的tab 发生变化时，更新pane的显示状态
      this.updateStatus();
    },
  },
  methods: {
    getTabs() {
      return this.$children.filter((item) => {
        return item.$options.name === "tabs-pane";
      });
    },
    tabCls(item) {
      return [
        "tabs-tab",
        {
          // 给当前选中的tab加一个class
          "tabs-tab-active": item.name === this.currentValue,
        },
      ];
    },
    // 点击 tab 标题时触发
    handleChange(index) {
      let nav = this.navList[index];
      let name = nav.name;
      // 改变当前选中的tab ，并触发下面的watch
      this.currentValue = name;
      // 更新value，父级组件v-model
      this.$emit("input", name);
      // 触发一个自定义事件，供父级使用
      this.$emit("on-click", name);
    },
    updateNav() {
      this.navList = [];
      // 设置对this的引用，在function回调里，this指向的并不是Vue实例
      let self = this;
      self.getTabs().forEach((pane, index) => {
        self.navList.push({
          label: pane.label,
          name: pane.name || index,
        });
        // 如果没有给pane设置name，默认设置他的索引
        if (!pane.name) {
          pane.name = index;
        }
        // 设置当前选中的tab索引
        if (index === 0 && !self.currentValue) {
          self.currentValue = pane.name || index;
        }
      });
      self.updateStatus();
    },
    updateStatus() {
      let self = this;
      let tabs = self.getTabs();
      tabs.forEach((tab) => {
        return (tab.show = tab.name === this.currentValue);
      });
    },
  },
};
</script>

<style></style>
