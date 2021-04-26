import {
  ConfigProvider,
  Icon,
  Button,
  Layout,
  Row,
  Col,
  Space,
  Breadcrumb,
  Menu,
  Dropdown,
  PageHeader,
  Descriptions,
  Card,
  Empty,
  List,
  // message,
  // notification,
  // Modal,
  Divider,
  // Drawer,
  BackTop,
 } from 'ant-design-vue';

const AntDesignVue = {}
AntDesignVue.install = function (Vue) {
  // LocaleProvider 国际化
  Vue.component('app-config-provider', ConfigProvider);

  // General
  Vue.component('app-button', Button);
  Vue.component('app-icon', Icon);

  // Layout 布局
  Vue.component('app-layout', Layout);
  Vue.component('app-layout-header', Layout.Header);
  Vue.component('app-layout-sider', Layout.Sider);
  Vue.component('app-layout-content', Layout.Content);
  Vue.component('app-layout-footer', Layout.Footer);

  // Grid 栅格
  Vue.component('app-row', Row);
  Vue.component('app-col', Col);

  // Space 间距
  Vue.component('app-space', Space);
  // Divider 分割线
  Vue.component('app-divider', Divider);

  // Breadcrumb 面包屑
  Vue.component('app-breadcrumb', Breadcrumb);

  // 导航菜单
  Vue.component('app-menu', Menu);
  Vue.component('app-menu-item', Menu.Item);
  Vue.component('app-sub-menu', Menu.SubMenu);
  Vue.component('app-menu-divider', Menu.Divider);

  // 下拉菜单
  Vue.component('app-dropdown', Dropdown);

  // PageHeader 页头
  Vue.component('app-page-header', PageHeader);

  //Descriptions 描述
  Vue.component('app-descriptions', Descriptions);
  Vue.component('app-descriptions-item', Descriptions.Item);

  //BackTop 回到顶部
  Vue.component('app-back-top', BackTop);

  // Card 卡片
  Vue.component('app-card', Card);
  Vue.component('app-card-meta', Card.Meta);

  // Empty 空状态
  Vue.component('app-empty', Empty);

  // List 列表
  Vue.component('app-list', List);
  Vue.component('app-list-item', List.Item);
  Vue.component('app-list-item-meta', List.Item.Meta);
  
  // // Drawer 抽屉
  // Vue.component('app-drawer', Drawer);
  // // Modal 对话框
  // Vue.component('app-modal', Modal);
  // Vue.use(Modal);
  

  // Vue.prototype.$message = message;
  // Vue.prototype.$notification = notification;
  // Vue.prototype.$info = Modal.info;
  // Vue.prototype.$success = Modal.success;
  // Vue.prototype.$error = Modal.error;
  // Vue.prototype.$warning = Modal.warning;
  // Vue.prototype.$confirm = Modal.confirm;
  // Vue.prototype.$destroyAll = Modal.destroyAll;
}

export default AntDesignVue