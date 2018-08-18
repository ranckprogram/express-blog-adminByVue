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
export default {
  data () {
    return {
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
              }, '查看'),
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
  methods: {
    handleAdd () {},
    handleSave () {},
    handleDel (id) {}
  }
}
</script>
