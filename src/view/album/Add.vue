<template>
  <div class="AlbumDetail">
    <Card>
      <div slot="title">
        <div>
          <Button type="primary" @click="handleSave" class="fr">Save</Button>
          <div class="clear"></div>
        </div>
        <Form :label-width="80">
          <FormItem label="名称">
            <Input v-model="dataForm.name" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="描述">
            <Input v-model="dataForm.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="喜欢数量">
            <span>{{dataForm.like}}</span>
          </FormItem>
        </Form>
      </div>
      <Upload action="/v1/upload" :on-success="handleUpload">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
      <Table :columns="columns" :data="srcList"></Table>
    </Card>
  </div>
</template>
<script>
import albumApi from '@/api/album'

export default {
  data () {
    return {
      columns: [
        {
          title: '预览图',
          key: 'pic',
          render: (h, params) => {
            return h('img', {
              attrs: {
                src: params.row.path,
                width: '300px'
              }
            })
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.handleDeletePicture(params.row.id)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      formItem: '',
      dataForm: {
        name: '',
        describe: '',
        fileIdList: []
      },
      srcList: []
    }
  },
  computed: {
    isAdd () {
      return this.$route.name === 'AlbumAdd'
    },
    isEdit () {
      return this.$route.name === 'AlbumEdit'
    }
  },
  created () {
    if (this.isEdit) {
      this.getDetail()
    }
  },
  methods: {
    handleSave () {
      // 怎么发出两次请求呢？add=>temp
      var params = new URLSearchParams()
      for (var attr in this.dataForm) {
        params.append(attr, this.dataForm[attr])
      }
      if (this.$route.name === 'AlbumEdit') {
        const id = this.$route.params.id
        albumApi.updateAlbum(id, params).then(res => {
          this.$Message.success(res.data.data.message)
          this.$router.push({name: 'AlbumDetail'})
        }, err => {
          this.$Message.error(err)
        })
      } else {
        albumApi.createAlbum(params).then(res => {
          this.$Message.success(res.data.data.message)
          this.$router.push({name: 'AlbumDetail'})
        }, err => {
          this.$Message.error(err)
        })
      }
    },
    getDetail () {
      const id = this.$route.params.id
      albumApi.getAlbumById(id).then(res => {
        this.dataForm = res.data.data
        this.dataForm.fileIdList = []
        this.srcList = res.data.data.srcList
      }, err => {
        this.$Message.error(err)
      })
    },
    handleDeletePicture (id) {
      console.dir(id)
    },
    handleUpload (response, file, fileList) {
      this.dataForm.fileIdList.push(response.data.id)
      this.srcList.push({
        id: response.data.id,
        path: response.data.fullPath
      })
    }
  }
}
</script>
