<template>
  <div class="UploadFile">
    <Upload action="/v1/upload" :on-success="handleUpload">
      <div style="width: 58px;height:58px;line-height: 58px;text-align: center;border: 1px solid #ddd;">
        <Icon type="ios-camera" size="20"></Icon>
      </div>
    </Upload>
  </div>
</template>
<script>
/**
 * 文件上传组件，可以考虑封装出双向绑定的效果
 * */
export default {
  data () {
    return {}
  },
  methods: {
    handleUpload (file) {
      this.$emit('success', file)
    }
  }
}
</script>
