<template>
  <div>IndexedDB</div>
</template>
<script>
export default {
  name: "IndexedDB",
  data: function() {
    return {};
  },
  mounted() {
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    if (!indexedDB) {
      alert("你的浏览器不支持IndexedDB");
    }
  }
};
</script>