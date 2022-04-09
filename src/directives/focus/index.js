import Vue from "vue";

Vue.directive("get-directive-value", {
  inserted(el) {
    el.focus();
  },
});
