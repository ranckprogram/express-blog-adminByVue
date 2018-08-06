<template>
  <div class="Album">
    <Card>
      <div slot="title">
        <Row style="height: 36px">
          <Col span="24">
          <div class="fr">
            <Input v-model="search.keywords" placeholder="Enter something..." style="width: 300px"/>
            <Button type="primary" @click="handleSearch">Search</Button>
          </div>
          </Col>
        </Row>
      </div>
      <Table border :columns="columns" :data="list" class="table-space"></Table>
      <Page :total="total" size="small" show-elevator show-sizer @on-change="handlePageChange" @on-page-size-change="handleLimitChange"/>
      <router-view></router-view>
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
        keywords: ''
      },
      columns: [
        {
          title: '相册名',
          key: 'name'
        },
        {
          title: '相册描述',
          key: 'describe'
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
                },
                on: {
                  click: () => {
                    this.handleView(params.row.id)
                  }
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
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      albumApi.getAlbumList(this.search).then(res => {
        this.list = res.data.data
        this.total = res.data.meta.total
      }, err => {
        this.$Message.error(err)
      })
    },
    handleSearch () {
      this.getList()
    },
    handlePageChange (page) {
      this.search.page = page
      this.getList()
    },
    handleLimitChange (limit) {
      this.search.limit = limit
      this.getList()
    },
    handleView (id) {
      console.dir(id)
      this.$router.push({name: 'AlbumDetail', params: {id: id}})
    }
  }
}
</script>
