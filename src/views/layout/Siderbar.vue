<template>
  <div class="siderbar">
    <el-button type="primary" size="mini" @click="handleCollapse">显示/隐藏</el-button>
    <el-menu
      router
      :default-active="$route.path"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-item :menus="menus"/>
    </el-menu>
  </div>
</template>
<script>
import router from "@/router/index";
import MenuItem from "./siderbar/MenuItem";
export default {
  name: "Siderbar",
  components: {
    MenuItem
  },
  data: function() {
    return {
      isCollapse: false
    };
  },
  computed: {
    menus: function() {
      return router.options.routes;
    }
  },
  mounted() {
    console.log("router", router);
  },
  methods: {
    handleOpen: function(key, keyPath) {
      console.log("handleOpen", key + keyPath);
    },
    handleClose: function(key, keyPath) {
      console.log("handleClose", key + keyPath);
    },
    handleCollapse: function() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style scoped>
.siderbar {
  position: fixed;
  top: 0;
  height: 100%;
  width: 200px;
  background-color: skyblue;
}
</style>