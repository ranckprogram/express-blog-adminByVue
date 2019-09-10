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
      value: '',
      mark: '',
      columns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
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
              }, '删除')
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
          return h('div', [
            h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入新分类名字'
              },
              on: {
                input: (val) => {
                  this.value = val
                }
              }
            }),
            h('Input', {
              props: {
                value: this.mark,
                autofocus: true,
                placeholder: '请输入新分类标识'
              },
              on: {
                input: (val) => {
                  this.mark = val
                }
              }
            })
          ])
        },
        onOk: () => {
          let params = new FormData()
          params.append('name', this.value)
          params.append('type', this.mark)
          articleApi.addCategory(params).then(res => {
            this.$Message.info('Clicked ok')
          }, err => {
            this.$Message.error(err)
          })
        },
        onCancel: () => {
          this.$Message.info('取消')
        }
      })
    },
    handleSave () {},
    handleDel (id) {
      console.log(id)
      articleApi.delCategory(id).then(res => {
        this.$Message.info('删除成功')
        this.getList()
      }, err => {
        this.$Message.error(err)
      })
    }
  }
}
</script>
