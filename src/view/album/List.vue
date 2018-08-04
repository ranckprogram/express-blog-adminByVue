<template>
  <div class="Album">
    Album
    <Card>
      <div slot="title">
        <Row style="height: 36px">
          <Col span="24">
          <div class="fr">
            <Input v-model="search.word" placeholder="Enter something..." style="width: 300px"/>
            <Button type="primary">Primary</Button>
          </div>
          </Col>
        </Row>
      </div>
      <Table border :columns="columns" :data="list" class="table-space"></Table>
      <Page :total="total" size="small" show-elevator show-sizer />
    </Card>
  </div>
</template>
<script>
import albumApi from '@/api/album'

export default {
  data () {
    return {
      total: 0,
      search: {
        limit: 10,
        page: 1,
        word: ''
      },
      columns: [
        {
          title: '相册名',
          key: 'album_name'
        },
        {
          title: '相册描述',
          key: 'age'
        },
        {
          title: '喜欢人数',
          key: 'like'
        },
        {
          title: '操作',
          key: 'action',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Edit')
            ])
          }
        }
      ],
      list: [{}]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      console.dir(11)
      albumApi.getAlbumList(this.search).then(res => {
        console.dir(res)
      }, err => {
        console.dir(err)
      })
    }
  }
}
</script>
