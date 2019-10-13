<template>
  <div>
    <template v-for="(menu, index) in menus">
      <el-menu-item v-if="!menu.children && menu.component" :key="index" :index="path + menu.path">
        <i :class="menu.meta.icon || 'el-icon-menu'"/>
        <span slot="title">{{ menu.meta.title }}</span>
      </el-menu-item>
      <el-menu-item v-if="menu.children && menu.children.length === 1" :key="index" :index="menu.path + '/' + menu.children[0].path">
        <i :class="menu.children[0].meta.icon || 'el-icon-menu'"/>
        <span slot="title">{{ menu.children[0].meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else-if="menu.children" :key="index" :index="index + ''">
        <template slot="title">
          <i :class="menu.meta.icon || 'el-icon-menu'"/>
          <span slot="title">{{ menu.meta.title }}</span>
        </template>
        <menu-item :menus="menu.children" :key="index + ''" :path="menu.path + '/'"/>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menus: {
      type: Array,
      required: true
    },
    path: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {

    };
  },
  mounted() {}
};
</script>