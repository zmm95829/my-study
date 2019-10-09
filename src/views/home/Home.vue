<template>
  <div>
    <router-link :to="{ name: 'Pupeteer' }">pupeteer</router-link>
    <router-link :to="{ name: 'SimpleTemplate' }">SimpleTemplate</router-link>
    <router-link :to="{ name: 'Tool' }">Tool</router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {};
  }
};
</script>
