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
  Pagination,
  Steps,
  Avatar,
  Badge,
  Card,
  Empty,
  List,
  Popover,
  Popconfirm,
  Form,
  FormModel,
  AutoComplete,
  Cascader,
  Input,
  InputNumber,
  Checkbox,
  DatePicker,
  TimePicker,
  Radio,
  Select,
  Switch,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
  Table,
  Tabs,
  Timeline,
  Tooltip,
  message,
  notification,
  Modal,
  Divider,
  Alert,
  Drawer,
  Spin,
  Tag,
  BackTop,
  Result,
  Skeleton,
  Statistic,
  Progress,
 } from 'ant-design-vue';

const AntDesignVue = {}
AntDesignVue.install = function (Vue) {
  // LocaleProvider 国际化
  Vue.component('tbb-config-provider', ConfigProvider);

  // General
  Vue.component('tbb-button', Button);
  Vue.component('tbb-icon', Icon);

  // Layout 布局
  Vue.component('tbb-layout', Layout);
  Vue.component('tbb-layout-header', Layout.Header);
  Vue.component('tbb-layout-sider', Layout.Sider);
  Vue.component('tbb-layout-content', Layout.Content);
  Vue.component('tbb-layout-footer', Layout.Footer);

  // Grid 栅格
  Vue.component('tbb-row', Row);
  Vue.component('tbb-col', Col);

  // Space 间距
  Vue.component('tbb-space', Space);
  // Divider 分割线
  Vue.component('tbb-divider', Divider);

  // Breadcrumb 面包屑
  Vue.component('tbb-breadcrumb', Breadcrumb);

  // 导航菜单
  Vue.component('tbb-menu', Menu);
  Vue.component('tbb-menu-item', Menu.Item);
  Vue.component('tbb-sub-menu', Menu.SubMenu);
  Vue.component('tbb-menu-divider', Menu.Divider);
  // Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);

  // 下拉菜单
  Vue.component('tbb-dropdown', Dropdown);

  // PageHeader 页头
  Vue.component('tbb-page-header', PageHeader);

  //Descriptions 描述
  Vue.component('tbb-descriptions', Descriptions);
  Vue.component('tbb-descriptions-item', Descriptions.Item);

  //BackTop 回到顶部
  Vue.component('tbb-back-top', BackTop);

  // Pagination 分页
  Vue.component('tbb-pagination', Pagination);

  // Steps 步骤条
  Vue.component('tbb-steps', Steps);
  Vue.component('tbb-step', Steps.Step);

  //Spin 加载
  Vue.component('tbb-spin', Spin);

  //Tag 标签
  Vue.component('tbb-tag', Tag);

  // Avatar 头像
  Vue.component('tbb-avatar', Avatar);

  // Badge 徽标数
  Vue.component('tbb-badge', Badge);

  // Card 卡片
  Vue.component('tbb-card', Card);
  Vue.component('tbb-card-meta', Card.Meta);
  // Vue.component('tbb-card-grid', Card.Grid);

  // Empty 空状态
  Vue.component('tbb-empty', Empty);

  // List 列表
  Vue.component('tbb-list', List);
  Vue.component('tbb-list-item', List.Item);
  Vue.component('tbb-list-item-meta', List.Item.Meta);

  // Popover 气泡卡片
  Vue.component('tbb-popover', Popover);
  Vue.component('tbb-popconfirm', Popconfirm);

  // Form 表单
  Vue.component('tbb-form', Form);
  Vue.component('tbb-form-item', Form.Item);
  Vue.component('tbb-form-model', FormModel);
  Vue.component('tbb-form-model-item', FormModel.Item);

  // AutoComplete 自动完成
  Vue.component('tbb-auto-complete', AutoComplete);
  // Vue.component('tbb-auto-complete-option', AutoComplete.Option);
  // Vue.component('tbb-auto-complete-opt-group', AutoComplete.OptGroup);
  // Cascader 级联选择
  Vue.component('tbb-cascader', Cascader);
  // Checkbox 多选框
  Vue.component('tbb-checkbox', Checkbox);
  Vue.component('tbb-checkbox-group', Checkbox.Group);
  // DatePicker 日期选择框
  Vue.component('tbb-date-picker', DatePicker);
  Vue.component('tbb-range-picker', DatePicker.RangePicker);
  Vue.component('tbb-month-picker', DatePicker.MonthPicker);
  Vue.component('tbb-week-picker', DatePicker.WeekPicker);
  // TimePicker 时间选择框
  Vue.component('tbb-time-picker', TimePicker);
  // Input 输入框
  Vue.component('tbb-input', Input);
  Vue.component('tbb-input-group', Input.Group);
  Vue.component('tbb-input-search', Input.Search);
  Vue.component('tbb-textarea', Input.TextArea);
  Vue.component('tbb-input-password', Input.Password);
  Vue.component('tbb-input-number', InputNumber);
  // Radio 单选框
  Vue.component('tbb-radio', Radio);
  Vue.component('tbb-radio-group', Radio.Group);
  Vue.component('tbb-radio-button', Radio.Button);
  // Select 选择器
  Vue.component('tbb-select', Select);
  Vue.component('tbb-select-option', Select.Option);
  Vue.component('tbb-select-opt-group', Select.OptGroup);
  // Switch 开关
  Vue.component('tbb-switch', Switch);
  // Transfer 穿梭框
  Vue.component('tbb-transfer', Transfer);
  // TreeSelect 树型选择
  Vue.component('tbb-tree-select', TreeSelect);
  Vue.component('tbb-tree-select-node', TreeSelect.TreeNode);
  // Tooltip 提示
  Vue.component('tbb-tooltip', Tooltip);
  // Upload 上传
  Vue.component('tbb-upload', Upload);
  Vue.component('tbb-upload-dragger', Upload.Dragger);

  // Table 表格
  Vue.component('tbb-table', Table);

  // Tabs 标签页
  Vue.component('tbb-tabs', Tabs);
  Vue.component('tbb-tab-pane', Tabs.TabPane);

  // Timeline 时间轴
  Vue.component('tbb-timeline', Timeline);
  Vue.component('tbb-timeline-item', Timeline.Item);

  // Tree 树形控件
  Vue.component('tbb-tree', Tree);
  Vue.component('tbb-tree-node', Tree.TreeNode);

  // Alert 警告提示
  Vue.component('tbb-alert', Alert);
  
  // Drawer 抽屉
  Vue.component('tbb-drawer', Drawer);
  // Modal 对话框
  Vue.component('tbb-modal', Modal);
  Vue.use(Modal);
  
  // Result 结果
  Vue.component('tbb-result', Result);
  // Skeleton 骨架屏 /加载占位图
  Vue.component('tbb-skeleton', Skeleton);
  
  // Statistic 数字统计
  Vue.component('tbb-statistic', Statistic);


  // Progress 进度条
  Vue.component('tbb-progress', Progress);
  

  Vue.prototype.$message = message;
  Vue.prototype.$notification = notification;
  Vue.prototype.$info = Modal.info;
  Vue.prototype.$success = Modal.success;
  Vue.prototype.$error = Modal.error;
  Vue.prototype.$warning = Modal.warning;
  Vue.prototype.$confirm = Modal.confirm;
  // Vue.prototype.$destroyAll = Modal.destroyAll;
}

export default AntDesignVue