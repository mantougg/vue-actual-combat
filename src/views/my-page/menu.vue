<template>
  <div class="menu">
    <div class="menu-label">
      <router-link to="/menu/input-number">InputNumber</router-link>
      <router-link to="/menu/tabs">Tabs</router-link>
      <router-link to="/menu/custom">custom-directive</router-link>
    </div>
    <div class="menu-value">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
};
</script>

<style>
.menu {
  display: flex;
}
.menu .menu-label {
  width: auto;
  margin-left: 400px
}
.menu .menu-label a {
  display: flex;
  margin: 20px;
}
.menu-value {
  margin-top: 20px;
  margin-left: 200px;
}
</style>
