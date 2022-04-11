<script>
// 图片组件选项
function getImgItem() {
  return {
    props: ["data"],
    render: function (createElement) {
      return createElement("div", [
        createElement("p", "图片组件"),
        createElement("img", {
          attrs: {
            src: this.data.url,
          },
        }),
      ]);
    },
  };
}
// 视频组件选项
function getVideoItem() {
  return {
    props: ["data"],
    render: function (createElement) {
      return createElement("div", [
        createElement("p", "视频组件"),
        createElement("video", {
          attrs: {
            src: this.data.url,
            controls: "controls",
            autoplay: "autoplay",
          },
        }),
      ]);
    },
  };
}
// 纯文本组件选项
function getTextItem() {
  return {
    props: ["data"],
    render: function (createElement) {
      return createElement("div", [
        createElement("p", "纯文本组件"),
        createElement("p", this.data.text),
      ]);
    },
  };
}
export default {
  name: "smart-item",
  functional: true,
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  render(h, context) {
    function getComponent() {
      let data = context.props.data;
      // 判断 prop: data的type 字段是属于哪种类型的组件
      if (data.type === "img") return getImgItem();
      if (data.type === "video") return getVideoItem();
      return getTextItem();
    }
    return h(
      getComponent(),
      {
        props: {
          //把smart-item的prop: data传给上面智能选择的组件
          data: context.props.data,
        },
      },
      context.children
    );
  },
  methods: {},
};
</script>

<style></style>
