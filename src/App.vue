<template>
  <div id="app">
    <siderbar/>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Siderbar } from "@/views/layout/index.js";
export default {
  name: "App",
  components: {
    Siderbar
  }
};
</script>

<style>
.main {
  margin-left: 200px;
  padding: 10px;
}
</style>
