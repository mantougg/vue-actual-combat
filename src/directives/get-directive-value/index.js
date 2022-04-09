import Vue from "vue";

Vue.directive("get-directive-value", {
  bind(el, binding, vnode) {
    let keys = [];
    for (const node in vnode) {
      keys.push(node);
    }
    el.innerHTML =
      "<table border='2' align='center' width='750' cellspacing='0'>" +
      "<tr class='directive-td-desc'><td>name:</td><td class='directive-td-value'>" +
      binding.name +
      "</td></tr><tr><td class='directive-td-desc'>value:</td><td class='directive-td-value'>" +
      binding.value +
      "</td></tr><tr><td class='directive-td-desc'>expression:</td><td class='directive-td-value'>" +
      binding.expression +
      "</td></tr><tr><td class='directive-td-desc'>argument:</td><td class='directive-td-value'>" +
      binding.arg +
      "</td></tr><tr><td class='directive-td-desc'>midifiers:</td><td class='directive-td-value'>" +
      JSON.stringify(binding.modifiers) +
      "</td></tr><tr><td class='directive-td-desc'>vnode keys:</td><td class='directive-td-value'>" +
      keys.join(", ") +
      "</td></tr></table>";
  },
});
