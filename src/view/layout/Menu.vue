<template>
  <div class="Menu">
    <!--<Layout>-->
      <!--<Sider>-->
        <!--<Menu :theme="theme" active-name="Index" @on-select="handleSelect">-->
          <!--<MenuItem name="Index">-->
            <!--<Icon type="ios-paper"/>-->
            <!--管理中心-->
          <!--</MenuItem>-->
          <!--<MenuItem name="ArticleType">-->
            <!--<Icon type="ios-paper"/>-->
            <!--日志类型-->
          <!--</MenuItem>-->
          <!--<MenuItem name="Article">-->
            <!--<Icon type="ios-paper"/>-->
            <!--日志管理-->
          <!--</MenuItem>-->
          <!--<MenuItem name="Album">-->
            <!--<Icon type="ios-paper"/>-->
            <!--相册管理-->
          <!--</MenuItem>-->
          <!--<MenuItem name="About">-->
            <!--<Icon type="ios-paper"/>-->
            <!--关于我-->
          <!--</MenuItem>-->
        <!--</Menu>-->
      <!--</Sider>-->
      <!--<Layout>-->
        <!--<Header>Header</Header>-->
        <!--<Content>-->
          <!--<router-view/>-->
        <!--</Content>-->
        <!--<Footer>Footer</Footer>-->
      <!--</Layout>-->
    <!--</Layout>-->
    <div class="fl">
      <Menu :theme="theme" active-name="Index" @on-select="handleSelect">
        <MenuItem name="Index">
          <Icon type="ios-paper"/>
          管理中心
        </MenuItem>
        <MenuItem name="ArticleType">
          <Icon type="ios-paper"/>
          日志类型
        </MenuItem>
        <MenuItem name="Article">
          <Icon type="ios-paper"/>
          日志管理
        </MenuItem>
        <MenuItem name="Album">
          <Icon type="ios-paper"/>
          相册管理
        </MenuItem>
        <MenuItem name="About">
          <Icon type="ios-paper"/>
          关于我
        </MenuItem>
      </Menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme: 'dark' // 这里的menu列表我在考虑用路由生成
    }
  },
  created () {
  },
  methods: {
    handleSelect (item) {
      this.$router.push({name: item})
    }
  }
}
</script>

<style scoped>
  .content {
    margin-left: 240px;
    padding: 20px;
  }
</style>
