<template>
  <div class="AlbumDetail">
    <Card>
      <div slot="title">
        <Form :label-width="80">
          <FormItem label="名称">
            <span>{{data.name}}</span>
          </FormItem>
          <FormItem label="描述">
            <span>{{data.describe}}</span>
          </FormItem>
          <FormItem label="喜欢数量">
            <span>{{data.like}}</span>
          </FormItem>
        </Form>
      </div>
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
      data: []
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
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
