<template>
  <div class="about">
    <Form :model="about" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="about.name" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="摘要">
        <Input v-model="about.summary" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="头像">
        <Input v-model="about.avatar" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="微信">
        <Input v-model="about.follow" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="内容" style="height: auto">
        <quill-editor model="about.content"
                      :options="editorOption">
        </quill-editor>
      </FormItem>
    </Form>
    <div>
      <div class="clear"></div>
      <Button type="primary" class="fr" @click="handleSave">保存</Button>
    </div>
  </div>
</template>
<script>
import aboutApi from '@/api/about'
export default {
  data () {
    return {
      about: {
        content: ''
      },
      editorOption: {
        // some quill options
      }
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      aboutApi.getAbout().then(res => {
        this.about = res.data.data
      }, err => {
        this.$Message.error(err)
      })
    },
    handleSave () {
      var params = new URLSearchParams()
      for (var attr in this.about) {
        params.append(attr, this.about[attr])
      }
      aboutApi.updateAbout(params).then(res => {
        this.$Message.success('ok')
      }, err => {
        this.$Message.error(err)
      })
    }
  }
}
</script>
