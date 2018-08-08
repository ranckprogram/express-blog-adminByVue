<template>
  <div class="AlbumDetail">
    <Card>
      <div slot="title">
        <Button type="primary" @click="handleSave" class="fr">Save</Button>
       <div class="clear"></div>
        <Form :label-width="80">
          <FormItem label="名称">
            <Input v-model="data.name" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="描述">
            <Input v-model="data.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="喜欢数量">
            <span>{{data.like}}</span>
          </FormItem>
        </Form>
      </div>
      <Upload action="/v1/upload">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
      <Table :columns="columns" :data="data.srcList"></Table>
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
                src: params.row.src,
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
      data: []
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
      console.dir('save')
    },
    getDetail () {
      const id = this.$route.params.id
      albumApi.getAlbumById(id).then(res => {
        this.data = res.data.data
      }, err => {
        this.$Message.error(err)
      })
    },
    handleDeletePicture (id) {
      console.dir(id)
    }
  }
}
</script>
