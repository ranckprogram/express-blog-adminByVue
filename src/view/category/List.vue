<template>
  <div class="CategoryList">
    <Card>
      <div slot="title">
        <Row style="height: 36px">
          <Col span="24">
          <div class="fr">
            <Button type="primary" @click="handleAdd">Add</Button>
          </div>
          </Col>
        </Row>
      </div>
      <Table border :columns="columns" :data="list" class="table-space"></Table>
    </Card>

  </div>
</template>
<script>
import articleApi from '@/api/article'
export default {
  data () {
    return {
      columns: [
        {
          title: '类型名',
          key: 'name'
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
                    this.handleDel(params.row.id)
                  }
                }
              }, '编辑')
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
      articleApi.getCategoryList().then(res => {
        this.list = res.data.data
      }, err => {
        this.$Message.error(err)
      })
    },
    handleAdd () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: '请输入新分类名字'
            }
          })
        },
        onOk: () => {
          articleApi.getCategoryList().then(res => {
          })
          this.$Message.info('Clicked ok')
        },
        onCancel: () => {
          this.$Message.info('取消')
        }
      })
    },
    handleSave () {},
    handleDel (id) {}
  }
}
</script>
