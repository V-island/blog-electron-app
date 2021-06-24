// 工具菜单
<template>
  <app-layout-sider collapsed>
    <div class="logo">
      <img src="~assets/logo.png" alt="">
    </div>
    <app-menu class="main" theme="dark" mode="inline">
      <app-menu-item key="bookmarks">
        <app-icon type="align-left" />
        <span>书签列表</span>
      </app-menu-item>
      <app-menu-item key="add">
        <app-icon type="plus" />
        <span>添加书签</span>
      </app-menu-item>
    </app-menu>
    <app-menu class="footer" theme="dark" mode="inline">
      <app-menu-item key="control">
        <app-icon type="control" />
        <span>nav 3</span>
      </app-menu-item>
      <app-menu-item key="question">
        <app-icon type="question-circle" />
        <span>nav 3</span>
      </app-menu-item>
      <app-menu-item key="logout">
        <app-icon type="logout" />
        <span>nav 3</span>
      </app-menu-item>
    </app-menu>
  </app-layout-sider>
</template>



<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.ant-menu{
  color: @md-white;
  background-color: @md-grey-900;

  .anticon{
    font-size: 20px !important;
  }
}
.logo{
  padding: 15px;
  height: 80px;
  >img{
    width: 100%;
    height: 100%;
  }
}
.main{
  height: ~'calc(100vh - 80px - 150px)';
}
.footer{
  height: 150px;
}
</style>