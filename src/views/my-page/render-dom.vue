<template>
  <div>
    <render-function @valueChange="valueChange" :list="list">
      <p>这是作为一个slot</p>
    </render-function>
    <smart-item :data="data"></smart-item>
    <button @click="change('img')">切换为图片组件</button>
    <button @click="change('video')">切换为视频组件</button>
    <button @click="change('text')">切换为文本组件</button>
  </div>
</template>

<script>
import RenderFunction from "../../components/render-function/index.vue";
import SmartItem from "../../components/render-smart-item/index.vue";

export default {
  name: "render-dom",
  components: { RenderFunction, SmartItem },
  data() {
    return {
      data: {},
      list: [
        "《Vue.js实战》",
        "《JavaScript高级程序设计》",
        "《JavaScript语言精粹》",
      ],
    };
  },
  methods: {
    valueChange(val) {
      this.list.push(val);
    },
    change(type) {
      if (type === "img") {
        this.data = {
          type: "img",
          url: "https://raw.githubusercontent.com/iview/iview/master/assets/logo.png",
        };
      } else if (type === "video") {
        this.data = {
          type: "video",
          url: "http://vjs.zencdn.net/v/oceans.mp4",
        };
      } else if (type === "text") {
        this.data = {
          type: "text",
          content: "这是一段纯文本",
        };
      }
    },
  },
  created: {},
};
</script>

<style></style>
