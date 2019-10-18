<template>
  <div>
    <el-button v-if="btn.title" :icon="btn.icon" :type="btn.type || 'primary'" @click="dialogVisible = true">{{ btn.title }}</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :title="title"
      :center="center"
      :width="width"
      :fullscreen="fullscreen"
      :show-close="showClose"
      :before-close="handleClose"
      :close-on-click-modal="closeOnClickModal"
    >
      <slot />
      <span slot="footer" class="dialog-footer">
        <slot name="footer" />
        <el-button v-if="showFooter" @click="handleCancel">取 消</el-button>
        <el-button v-if="showFooter" type="primary" @click="handleOk">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "MyDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    // 标题和底部是否居中
    center: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "1000px"
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    // 点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    btn: {
      type: Object,
      default: () => {
        return {
          title: ""
        };
      }
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    dialogVisible: function(val) {
      if (this.value !== val) {
        this.$emit("input", this.dialogVisible);
      }
    },
    value: function(val) {
      if (this.dialogVisible !== val) {
        this.dialogVisible = val;
      }
    }
  },
  methods: {
    handleCancel: function() {
      this.$emit("handle-cancel");
      this.dialogVisible = false;
    },
    handleOk: function() {
      this.$emit("handle-ok");
      this.dialogVisible = false;
    },
    /**
     * 关闭时触发
     */
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => { });
    }
  }
};
</script>