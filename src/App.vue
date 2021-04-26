<template>
  <app-config-provider :locale="locale">
    <router-view></router-view>
  </app-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
// import moment from "moment";
// import "moment/locale/zh-cn";

// moment.locale("zh-cn");

export default {
  name: 'app',
  data: function () {
    return {
      locale: zh_CN,
    };
  },
}
</script>

<style>
</style>
