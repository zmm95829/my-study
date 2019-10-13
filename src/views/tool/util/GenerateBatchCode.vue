<template>
  <section>
    <h6>
      <span>说明：excel的第一行代表模板中要替换的位置</span>
    </h6>
    <el-input v-model="template" type="textarea" :autosize="{minRows: 3}" placeholder="请输入代码模板" />
    <el-upload :show-file-list="false" :before-upload="beforeUpLoad" action>
      <el-button type="primary" size="mini">导入</el-button>
    </el-upload>
    <el-input
      v-model="model"
      type="textarea"
      :autosize="{minRows: 3}"
      placeholder="生成的代码"
      readonly
    />
  </section>
</template>
<script>
import XLSX from "xlsx";
export default {
  name: "GenerateBatchCode",
  data: function() {
    return {
      template: "",
      model: ""
    };
  },
  methods: {
    /**
     * 导入数据
     */
    beforeUpLoad(file) {
      const _this = this;
      _this.loading = true;
      return _this.readExcel(file).then(result => {
        _this.model = result;
      }).catch(e => {
        console.error("导入失败！" + e);
        this.$alert("导入失败！" + (e.message || e), "提示", { type: "error" });
      })
        .then(() => {
          _this.loading = false;
          return Promise.reject(new Error("不继续执行了"));
        });
    },
    /**
     * 解析excel
     */
    readExcel(file) {
      const _this = this;
      if (!/\.(xlsx)$/.test(file.name.toLowerCase())) {
        return Promise.reject(new Error("上传格式不正确，请上传xlsx格式的文件！"));
      }
      return new Promise(function(resolve, reject) { // 返回Promise对象
        const reader = new FileReader();
        reader.onload = (e) => { // 异步执行
          try {
            // 以二进制流方式读取得到整份excel表格对象
            let data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });
            // 第一行是要替代的位置
            const replaceArr = data[0];
            data = data.slice(1);
            if (data.length < 1) {
              reject("上传的文件中没有数据！");
            } else {
              const pushItems = [];
              data.forEach(v => {
                let item = _this.template;
                replaceArr.forEach((vv, index) => {
                  item = item.replace(new RegExp(vv, "g"), v[index]);
                });
                pushItems.push(item);
              });
              resolve(pushItems.join("\n"));
            }
          } catch (e) {
            reject(e.message);
          }
        };
        reader.readAsBinaryString(file);
      });
    }
  }
};
</script>
