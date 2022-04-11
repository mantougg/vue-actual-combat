<template>
  <div id="app">
    <div id="nav">
      <!-- Vue Router 可以在不重新加载页面的情况下更改 URL -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/menu">Menu</router-link>
    </div>
    <!-- router-view 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。 -->
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  /* background: aquamarine; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  height: 18px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
