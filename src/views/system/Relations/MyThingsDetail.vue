<template>
  <div>
    <my-dialog v-model="dialog.visible" :fullscreen="true" @handle-ok="handleOk" >
      <el-form :inline="true">
        <el-form-item label="事件名称">
          <el-input v-model="dialog.model.brief" placeholder="事件名称" clearable/>
        </el-form-item>
        <el-form-item label="发生时间" class="ctbms-form__el-form-item">
          <el-date-picker
            v-model="dialog.model.date"
            style="width:100%"
            type="date"
            clearable
            value-format="yyyy-MM-dd"
          />
        </el-form-item>
        <el-form-item label="事件描述">
          <el-input
            v-model="dialog.model.desc"
            :autosize="{rows: 3}"
            type="textarea"
            placeholder="事件描述"
            clearable/>
        </el-form-item>

      </el-form>
      <el-divider/>
      <relations :my-thing-id="dialog.model.id"/>
    </my-dialog>
  </div>
</template>
<script>
import uuid from "uuid/v4";
import MyDialog from "@/components/MyDialog.vue";
import Relations from "./Relations.vue";
import { save } from "./api/myThings.js";
export default {
  name: "RelationsDetail",
  props: {
    dialog: {
      type: Object,
      required: true
    }
  },
  components: {
    MyDialog,
    Relations
  },
  data: function() {
    return {
      dict: {
        myThingOptions: []
      }
    };
  },
  mounted() {
    Promise.resolve()
      .then(() => this.getDict());
  },
  methods: {
    /**
     * 获取下拉选项
     */
    getDict: function() {
      // return Promise.all([
      //   list().then(v => {
      //     this.dict.myThingOptions = v;
      //   })
      // ]);
    },
    /**
     * 保存数据
     */
    handleOk: function() {
      if (!this.dialog.model.id) {
        this.dialog.model.id = uuid();
        save(this.dialog.model).then(() => {
          this.dialog.visible = false;
          this.$emit("handle-ok");
        });
      } else {
        save(this.dialog.model, true).then(() => {
          this.dialog.visible = false;
          this.$emit("handle-ok");
        });
      }
    }
  }
};
</script>