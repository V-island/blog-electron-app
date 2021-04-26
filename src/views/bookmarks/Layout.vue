<template>
<app-layout class="wrapper">
  <tool-menu class="menu"></tool-menu>
  <app-layout>
    <marks-sort class="sider"></marks-sort>
    <app-layout>
      <app-layout-content class="content">Content</app-layout-content>
    </app-layout>
  </app-layout>
</app-layout>
</template>

<script>
import ToolMenu from './ToolMenu.vue';
import MarksSort from './MarksSort.vue';

export default {
  components: {
    ToolMenu,
    MarksSort
  }
};
</script>

<style lang="less" scoped>
.wrapper{
  min-height: 100vh !important;
  transition: margin-left 0.2s;
}
.menu{
  color: @md-white;
  background-color: @md-grey-900;
}
.sider{
  color: @md-grey-900;
  background-color: @md-grey-100;
}
.content{
  color: @md-blue-grey-900;
  background-color: @md-white;
}
</style>
