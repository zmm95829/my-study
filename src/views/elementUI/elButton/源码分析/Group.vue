<template>
  <div class="zmm-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZmmButtonGroup",
  data: function() {
    return {

    };
  }
};
</script>
<style scoped>
.zmm-button-group {
  display: inline-block;
  vertical-align: middle;
}
.zmm-button-group .zmm-button:not(:last-child) {
  margin-right: -1px;
}
.zmm-button-group .zmm-button {
  float: left;
  position: relative;
}
.zmm-button-group .zmm-button {
  border-radius: 0;
}
.zmm-button-group .zmm-button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.zmm-button-group .zmm-button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>