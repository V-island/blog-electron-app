// 工具菜单
<template>
  <app-layout-sider collapsed>
    <div class="logo" />
    <app-menu theme="dark" mode="inline">
      <app-menu-item key="1">
        <app-icon type="align-left" />
        <span>nav 1</span>
      </app-menu-item>
      <app-menu-item key="2">
        <app-icon type="plus" />
        <span>nav 2</span>
      </app-menu-item>
    </app-menu>
    <app-menu theme="dark" mode="inline">
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
</style>