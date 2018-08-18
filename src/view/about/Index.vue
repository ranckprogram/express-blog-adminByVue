<template>
  <div class="about">
    <Form :model="about" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="about.name" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="摘要">
        <Input v-model="about.summary" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="头像" style="height:auto">
        <UploadFile @success="handleUploadAvatarSuccess"></UploadFile>
      </FormItem>
      <FormItem label="微信" style="height:auto">
        <UploadFile @success="handleUploadWeixinSuccess"></UploadFile>
      </FormItem>
      <FormItem label="内容" style="height: auto">
        <quill-editor v-model="about.content"
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
import UploadFile from '@/components/UploadFile'
export default {
  components: {
    UploadFile
  },
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
      aboutApi.updateAbout(params).then(_ => {
        this.$Message.success('保存成功')
      }, err => {
        this.$Message.error(err)
      })
    },
    handleUploadAvatarSuccess (file) {
      this.about.avatar_id = file.data.id
    },
    handleUploadWeixinSuccess (file) {
      this.about.follow_id = file.data.id
    }
  }
}
</script>
