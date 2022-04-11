<script>
export default {
  name: "render-function",
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      value: "qwer",
    };
  },
  render(h) {
    const self = this;
    let nodes = [];
    for (var i = 0; i < this.list.length; i++) {
      nodes.push(h("p", this.list[i]));
    }
    nodes.push(
      h("input", {
        domProps: { value: this.value },
        on: {
          input(event) {
            self.value = event.target.value;
          },
        },
      })
    );
    nodes.push(h("br"));
    nodes.push(
      h("input", {
        attrs: {
          placeholder: "输入内容，按回车键发送",
        },
        style: {
          width: "200px",
        },
        on: {
          keyup: function (event) {
            // 如果不是回车键，不发送数据
            if (event.keyCode !== 13) return;
            //添加输入的内容到聊天列表
            self.$emit("valueChange", event.target.value);
            // 发送后，清空输入框
            event.target.value = "";
          },
        },
      })
    );
    // nodes.push(h("slot")); // 不好使
    if (self.$slots.default === undefined) {
      nodes.push(h("div", "没有要显示的slot"));
    } else if (self.$slots.default !== undefined) {
      nodes.push(h("div", self.$slots.default));
    }
    if (this.list.length) {
      nodes.push(
        h(
          "ul",
          this.list.map(function (item) {
            // map()方法是快速改变数组结构，返回了一个新数组，
            // 如果你不熟悉数组的这种链式操作（map 常和filter、sort等方法一起使用，因为它们返回的都是新数组）.
            return h("li", item);
          })
        )
      );
    } else {
      nodes.push(h("p", "列表为空"));
    }
    return h("div", nodes);
  },
};
</script>

<style></style>
