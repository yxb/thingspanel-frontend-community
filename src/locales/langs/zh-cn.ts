import { productLocaleZhCn } from '@/views/product/locales/zh-CN';
import { pzh_cn } from '@/locales/langs/页面国际化文件';
import { czh_cn } from './你新增的路由相关的国际化';

const local: App.I18n.Schema = {
  custom: pzh_cn,
  default: '',
  title: 'ThingsPanel',
  system: {
    title: 'System Name: {name}'
  },
  common: {
    deleteThePlan: '确定删除计划吗',
    cancelThePlan: '确定取消计划吗',
    planTheDevice: '确定将计划下发给设备吗',
    checkDevice: '请勾选设备',
    editSpace: '编辑空间',
    locationInfoAdded: '只能添加一个位置信息',
    section: '第',
    leastOneChart: '至少选择一个图表',
    accompaniedIndicators: '个图表没有配任何指标',
    copyingFailed: '复制文本失败',
    copiedClipboard: '文本已复制到剪贴板',
    dataSources: '个数据源',
    maxSelect: '最多选择',
    chart: '图表',
    selectCardFirst: '请先选一个卡片',
    componentsAddedYet: '暂未添加组件',
    templateDeleted: '已删除当前模板',
    normal: '正常',
    lowAlarm: '低级报警',
    intermediateAlarm: '中级报警',
    highAlarm: '高级报警',
    allStatus: '所有状态',
    enterAlarmDesc: '请输入告警描述',
    alarmRules: '告警规则',
    alarmHistory: '告警历史',
    sceneLinkageInfo: '请确认是否删除该数据？',
    chooseNotificationMethod: '请选择通知方式',
    notificationGroupDesc: '请输入通知组描述',
    editNotificationGroup: '修改通知组',
    createNotificationGroup: '创建通知组',
    editSuccess: '编辑成功',
    editFail: '编辑成功',
    times1: '1次',
    times2: '2次',
    times3: '3次',
    times4: '4次',
    times5: '5次',
    times6: '6次',
    times7: '7次',
    times8: '8次',
    times9: '9次',
    times10: '10次',
    minutes3: '3分钟',
    minutes4: '4分钟',
    minutes6: '6分钟',
    minutes7: '7分钟',
    minutes8: '8分钟',
    minutes9: '9分钟',
    enterTriggeringDuration: '请输入触发持续时间',
    enterNumberTriggering: '请输入触发重复次数',
    enterAlarmLevel: '请输入告警级别',
    enterAlarmName: '请输入告警名称',
    nodata: '暂无数据',
    halfYear: '最近半年',
    lastYears1: '最近1年',
    lastDays90: '最近90天',
    lastDays60: '最近60天',
    lastDays30: '最近30天',
    lastDays15: '最近15天',
    lastDays7: '最近7天',
    lastDays3: '最近3天',
    lastHours24: '最近24小时',
    lastHours12: '最近12小时',
    lastHours6: '最近6小时',
    lastHours3: '最近3小时',
    lastHours1: '最近1小时',
    last_30m: '最近30分钟',
    last_15m: '最近15分钟',
    last_5m: '最近5分钟',
    custom: '自定义',
    average: '平均数',
    months1: '1个月',
    days7: '7天',
    hours6: '6小时',
    hours3: '3小时',
    minute2: '2分钟',
    minute1: '1分钟',
    seconds30: '30秒',
    notAggre: '不聚合',
    rangeMustSelected: '当时间为自定义时， 必须选择时间范围',
    alreadyScatterPlot: '已经是散点图了',
    switchScatterPlots: '切换散点图',
    alreadyToChart: '已经是柱状图了',
    switchBarChart: '切换柱状图',
    alreadyCurveChart: '已经是曲线图了',
    switchLineChart: '切换折线图',
    deleteDeviceConfig: '请确认是否删除该设备配置？',
    addExtendedInfo: '添加扩展信息',
    editExtendedInfo: '编辑扩展信息',
    extensionInfoDeleted: '已删除当前扩展信息',
    enterName: '请输入名称',
    devicesSetting: '设备设置',
    protocolConfig: '协议配置',
    associatedDevices: '关联设备',
    propertiesAndFunctions: '属性与功能',
    dataProces: '数据处理',
    deleteProcessing: '请确认是否删除该数据处理？',
    timeConditions: '时间条件',
    deviceConditions: '设备条件',
    timeFrame: '时间范围',
    repeat: '重复',
    single: '单次',
    interfaceStatus: '接口状态',
    contentToCopied: '请输入要复制的内容',
    browserNotSupport: '您的浏览器不支持 ',
    formatFile: '图片格式文件!',
    pleaseUploadit: '文件格式不正确, 请上传',
    days1: '1天',
    hours1: '1小时',
    minutes30: '30分钟',
    minutes10: '10分钟',
    minutes5: '5分钟',
    includeList: '包含在列表内',
    between: '介于',
    lessOrEqual: '小于等于',
    greaterOrEqual: '大于等于',
    under: '小于',
    pass: '大于',
    unequal: '不等于',
    equal: '等于',
    sunset: '日落',
    sunrise: '日出',
    monthly: '每月',
    weekly: '每周',
    everyDay: '每天',
    everyHour: '每小时',
    weather: '天气',
    deviceConfigName: '请输入设备配置名称',
    deviceAccessType: '请选择设备接入类型',
    deviceConnectionMethod: '请选择设备连接方式',
    activateSceneInfo: '请确认是否激活该场景信息？',
    activationPrompt: '激活提示',
    deleteSceneInfo: '请确认是否删除该场景信息？',
    deletePrompt: '删除提示',
    addArea: '添加区域',
    addSpace: '添加空间',
    sending: '发送中...',
    base: '基础',
    saveSceneInfo: '请确认是否保存该场景信息？',
    addFail: '添加失败',
    belongingSpace: '请选择所属空间',
    as: '如',
    param: '参数',
    singleClassDevice: '单类设备',
    singleDevice: '单个设备',
    triggerService: '触发服务',
    triggerAlarm: '触发告警',
    activateScene: '激活场景',
    operateDevice: '操作设备',
    stopFail: '停用失败',
    stopSuccess: '停用成功',
    startSuccess: '启动成功',
    startFail: '启动失败',
    deleteFail: '删除失败',
    test: '测试',
    low: '低',
    middle: '中',
    high: '高',
    Ignored: '已忽略',
    toIgnore: '忽略',
    maintenance: '维护',
    untreated: '未处理',
    handled: '已处理',
    alarm_time: '告警时间',
    alarm_level: '级别',
    processor_name: '处理人',
    spaceName: '请输入空间名称',
    userStatus: '请选择用户状态',
    requestTime: '请求耗时',
    requestMethod: '请求方法',
    requestPath: '请求路径',
    manageDevices: '管理设备',
    screenNameNull: '大屏名称不能为空',
    addScreen: '新建大屏',
    editScreen: '编辑大屏',
    editNameAndDesc: '编辑名称和描述',
    visualEditing: '可视化编辑',
    withinOneYear: '日期范围不能超过一个年',
    withinOneMonth: '日期范围不能超过一个月',
    time: '时间',
    complete: '完成',
    action: '操作',
    input: '请输入',
    select: '请选择',
    remark: '备注',
    add: '新增',
    save: '保存',
    addSuccess: '添加成功',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    check: '勾选',
    columnSetting: '列设置',
    confirm: '确认',
    delete: '删除',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    edit: '编辑',
    index: '序号',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    tip: '提示',
    update: '更新',
    refreshTable: '刷新表格',
    changeTableColumns: '表格列设置',
    updateSuccess: '更新成功',
    userCenter: '个人中心',
    export: '导出',
    description: '描述',
    yesOrNo: {
      yes: '是',
      no: '否'
    },
    debug: '调试',
    send: '发送',
    creationTime: '创建时间'
  },
  theme: {
    themeSchema: {
      title: '主题模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟随系统'
    },
    layoutMode: {
      title: '布局模式',
      vertical: '左侧菜单模式',
      'vertical-mix': '左侧菜单混合模式',
      horizontal: '顶部菜单模式',
      'horizontal-mix': '顶部菜单混合模式'
    },
    themeColor: {
      title: '主题颜色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '错误色',
      followPrimary: '跟随主色'
    },
    scrollMode: {
      title: '滚动模式',
      wrapper: '外层滚动',
      content: '主体滚动'
    },
    page: {
      animate: '页面切换动画',
      mode: {
        title: '页面切换动画类型',
        'fade-slide': '滑动',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '缩放消退',
        'zoom-fade': '渐变',
        'zoom-out': '闪现',
        none: '无'
      }
    },
    fixedHeaderAndTab: '固定头部和标签栏',
    header: {
      height: '头部高度',
      breadcrumb: {
        visible: '显示面包屑',
        showIcon: '显示面包屑图标'
      }
    },
    tab: {
      visible: '显示标签栏',
      cache: '缓存标签页',
      height: '标签栏高度',
      mode: {
        title: '标签栏风格',
        chrome: '谷歌风格',
        button: '按钮风格'
      }
    },
    sider: {
      inverted: '深色侧边栏',
      width: '侧边栏宽度',
      collapsedWidth: '侧边栏折叠宽度',
      mixWidth: '混合布局侧边栏宽度',
      mixCollapsedWidth: '混合布局侧边栏折叠宽度',
      mixChildMenuWidth: '混合布局子菜单宽度'
    },
    footer: {
      visible: '显示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    themeDrawerTitle: '主题配置',
    pageFunTitle: '页面功能',
    configOperation: {
      copySuccess: '复制成功',
      copyConfig: '复制配置',
      copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    visualization_kanban: '看板',
    home: '首页',
    'user-center': '个人中心',
    about: '关于',
    function: '系统功能',
    function_tab: '标签页',
    'function_multi-tab': '多标签页',
    'function_hide-child': '隐藏子菜单',
    'function_hide-child_one': '隐藏子菜单',
    'function_hide-child_two': '菜单二',
    'function_hide-child_three': '菜单三',
    manage: '系统管理新',
    manage_user: '用户管理新',
    'manage_user-detail': '用户详情新',
    manage_role: '角色管理新',
    manage_menu: '菜单管理新',
    'multi-menu': '多级菜单',
    'multi-menu_first': '菜单一',
    'multi-menu_first_child': '菜单一子菜单',
    'multi-menu_second': '菜单二',
    'multi-menu_second_child': '菜单二子菜单',
    'multi-menu_second_child_home': '菜单二子菜单首页',
    exception: '异常页',
    exception_403: '403',
    exception_404: '404',
    exception_500: '500',
    component: '组件示例',
    component_button: '按钮',
    component_card: '卡片',
    component_table: '表格',
    ...czh_cn,
    device_template: '功能模板',
    'personal-center': '个人中心',
    'edit-area': '编辑空间/区域',
    'new-area': '添加空间/区域'
  },
  page: {
    product: productLocaleZhCn,
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        imageCodePlaceholder: '请输入图片验证码'
      },
      register: {
        title: '注册账号',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》'
      },
      resetPwd: {
        title: '重置密码'
      },
      bindWeChat: {
        title: '绑定微信'
      }
    },
    about: {
      title: '关于',
      introduction: `Soybean Admin 是一个优雅且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia 和 UnoCSS。它内置了丰富的主题配置和组件，代码规范严谨，实现了$t('custom.device_details.automate')的文件路由系统。此外，它还采用了基于 ApiFox 的在线Mock数据方案。Soybean Admin 为您提供了一站式的后台管理解决方案，无需额外配置，开箱即用。同样是一个快速学习前沿技术的最佳实践。`,
      projectInfo: {
        title: '项目信息',
        version: '版本',
        latestBuildTime: '最新构建时间',
        githubLink: 'Github 地址',
        previewLink: '预览地址'
      },
      prdDep: '生产依赖',
      devDep: '开发依赖'
    },
    home: {
      greeting: '早安，{userName}, 今天又是充满活力的一天!',
      weatherDesc: '今日多云转晴，20℃ - 25℃!',
      projectCount: '项目数',
      todo: '待办',
      message: '消息',
      downloadCount: '下载量',
      registerCount: '注册量',
      schedule: '作息安排',
      study: '学习',
      work: '工作',
      rest: '休息',
      entertainment: '娱乐',
      visitCount: '访问量',
      turnover: '成交额',
      dealCount: '成交量',
      projectNews: {
        title: '项目动态',
        moreNews: '更多动态',
        desc1: 'Soybean 在2021年5月28日创建了开源项目 soybean-admin!',
        desc2: 'Yanbowe 向 soybean-admin 提交了一个bug，多标签栏不会自适应。',
        desc3: 'Soybean 准备为 soybean-admin 的发布做充分的准备工作!',
        desc4: 'Soybean 正在忙于为soybean-admin写项目说明文档！',
        desc5: 'Soybean 刚才把工作台页面随便写了一些，凑合能看了！'
      },
      creativity: '创意'
    },
    function: {
      tab: {
        tabOperate: {
          title: '标签页操作',
          addTab: '添加标签页',
          addTabDesc: '跳转到关于页面',
          closeTab: '关闭标签页',
          closeCurrentTab: '关闭当前标签页',
          closeAboutTab: '关闭"关于"标签页',
          addMultiTab: '添加多标签页',
          addMultiTabDesc1: '跳转到多标签页页面',
          addMultiTabDesc2: '跳转到多标签页页面(带有查询参数)'
        },
        tabTitle: {
          title: '标签页标题',
          changeTitle: '修改标题',
          change: '修改',
          resetTitle: '重置标题',
          reset: '重置'
        }
      },
      multiTab: {
        routeParam: '路由参数',
        backTab: '返回 function_tab'
      }
    },
    manage: {
      common: {
        status: {
          enable: '启用',
          disable: '禁用'
        }
      },
      role: {
        title: '角色列表',
        roleName: '角色名称',
        roleCode: '角色编码',
        roleStatus: '角色状态',
        roleDesc: '角色描述',
        form: {
          roleName: '请输入角色名称',
          roleCode: '请输入角色编码',
          roleStatus: '请选择角色状态',
          roleDesc: '请输入角色描述'
        },
        addRole: '新增角色',
        editRole: '编辑角色',
        editPermission: '编辑权限'
      },
      user: {
        title: '用户列表',
        userName: '姓名',
        userGender: '性别',
        nickName: '昵称',
        userPhone: '手机号',
        accountStatus: '账户状态',
        remark: '备注',
        userEmail: '邮箱',
        userStatus: '租户状态',
        userStatus2: '用户状态',
        userRole: '租户角色',
        userRole2: '用户角色',
        password: '密码',
        confirmPwd: '确认密码',
        enter: '进入',
        form: {
          userName: '请输入姓名',
          userGender: '请选择性别',
          nickName: '请输入昵称',
          userPhone: '请输入手机号',
          userEmail: '请输入邮箱',
          userStatus: '请选择租户状态',
          userRole: '请选择租户角色',
          userRole2: '请选择用户角色'
        },
        addUser: '新增用户',
        editUser: '编辑用户',
        gender: {
          male: '男',
          female: '女'
        },
        status: {
          freeze: '冻结',
          normal: '正常'
        }
      },
      menu: {
        title: '菜单管理',
        id: 'ID',
        parentId: '父级菜单ID',
        authority: '权限',
        menuType: '菜单类型',
        menuName: '菜单名称',
        componentType: '组件类型',
        routeName: '路由名称',
        routePath: '路由路径',
        page: '页面组件',
        layout: '布局',
        i18nKey: '国际化key',
        icon: '图标',
        localIcon: '本地图标',
        iconTypeTitle: '图标类型',
        order: '排序',
        keepAlive: '缓存路由',
        href: '外链',
        hideInMenu: '隐藏菜单',
        activeMenu: '高亮的菜单',
        multiTab: '支持多页签',
        fixedIndexInTab: '固定在页签中的序号',
        button: '按钮',
        buttonCode: '按钮编码',
        buttonDesc: '按钮描述',
        menuStatus: '菜单状态',
        form: {
          parent: '父级菜单',
          title: '标题',
          multilingual: '标题（多语言）',
          name: '名称',
          path: '访问路径',
          route_path: '组件路径',
          componentType: '组件类型',
          icon: '图标',
          order: '排序',
          type: '类型',
          authority: '权限',
          menuType: '请选择菜单类型',
          menuName: '请输入菜单名称',
          routeName: '请输入路由名称',
          routePath: '请输入路由路径',
          page: '请选择页面组件',
          layout: '请选择布局组件',
          i18nKey: '请输入国际化key',
          localIcon: '请选择本地图标',
          keepAlive: '请选择是否缓存路由',
          href: '请输入外链',
          hideInMenu: '请选择是否隐藏菜单',
          activeMenu: '请输入高亮的菜单的路由名称',
          multiTab: '请选择是否支持多标签',
          fixedInTab: '请选择是否固定在页签中',
          fixedIndexInTab: '请输入固定在页签中的序号',
          button: '请选择是否按钮',
          buttonCode: '请输入按钮编码',
          buttonDesc: '请输入按钮描述',
          menuStatus: '请选择菜单状态'
        },
        addMenu: '新增菜单',
        editMenu: '编辑菜单',
        addChildMenu: '新增子菜单',
        type: {
          directory: '目录',
          menu: '菜单'
        },
        iconType: {
          iconify: 'iconify图标',
          local: '本地图标'
        }
      },
      setting: {
        themeSetting: {
          title: '主题设置',
          form: {
            systemTitle: '系统标题',
            homeAndBackendLogo: '首页和后台 logo',
            loadingPageLogo: '加载页面 logo',
            websiteLogo: '站标 logo',
            background: '背景图片'
          },
          changeLogo: '更换 logo'
        },
        dataClearSetting: {
          title: '数据清理设置',
          form: {
            cleanupType: '清理类型',
            retentionDays: '保留天数',
            lastCleanupTime: '上次清理时间',
            lastCleanupDataTime: '上次清理数据时间节点',
            enabled: '是否启用'
          },
          type: {
            equipmentData: '设备数据',
            operationLog: '操作日志'
          }
        }
      },
      notification: {
        enableDisableService: '开启/关闭服务',
        email: {
          title: '邮箱',
          form: {
            sendMailServer: '发送邮件服务器',
            sendPort: '发送端口',
            senderMail: '发送人邮件',
            authorizationCodeOrPassword: '授权码/密码',
            ssl: '开启SSL',
            inbox: '收件箱',
            message: '消息内容'
          }
        },
        shortMessage: {
          title: '短信'
        }
      }
    },
    irrigation: {
      name: '灌溉计划',
      duration: '时长',
      hour: '小时',
      minute: '分钟',
      irrigationDuration: '灌溉时长',
      capacity: '容量',
      areaOrSpace: '空间/区域',
      diviceName: '设备名称',
      controlType: '控制类型',
      planStatus: '计划状态',
      distribute: '下发',
      log: '日志',
      addIrrigationPlan: '新建灌溉计划',
      time: {
        device: '设备',
        name: '定时灌溉',
        planName: '计划名称',
        repeatTime: '重复时间',
        orderCode: '指令编号',
        irrigationTime: '灌溉时间点',
        doorOpeing: '阀门开度',
        week: {
          monday: '周一',
          tuesday: '周二',
          wednesday: '周三',
          thursday: '周四',
          friday: '周五',
          saturday: '周六',
          sunday: '周日'
        },
        log: {
          name: '日志',
          commandIssuanceTime: '指令下发时间',
          instructionContent: '指令内容',
          result: '结果',
          detail: '详情'
        }
      },
      group: {
        name: '群灌计划',
        controlModel: '控制模式',
        startTime: '启动时间',
        runDetail: '执行详情',
        deviceName: '设备名称',
        orderNumber: '指令编号',
        addGroupPlane: '新建群灌计划',
        planName: '计划名称',
        deviceType: '设备类型',
        addDevice: '添加设备',
        duration: ' 灌溉时长',
        singleControl: '单次控制',
        loopControl: '循环控制',
        cycleNumber: '循环次数',
        intervalDuration: '间隔时长',
        clickToAdd: '点击添加',
        choosedDevice: '已选设备',
        chooseDevices: '选择群灌设备',
        deviceCode: '设备编码',
        log: {
          planDetail: '(计划名称) 计划日志',
          runTime: '执行时间',
          runResult: '执行结果',
          detail: '详情'
        },
        detail: {
          commandIssuanceTime: '指令下发时间',
          spaceOrArea: '空间/区域',
          orderContent: '指令内容',
          result: '结果',
          detail: '详情'
        }
      },
      rotation: {
        addRotationPlane: '新建轮灌计划',
        name: '轮灌计划',
        waterPumpEquipment: '水泵设备',
        waterPumpDoorOpening: '水泵阀门开度',
        waterPumpPressure: '水泵压力',
        rotationDuration: '轮灌时长',
        addRotationDevice: '添加灌溉设备',
        valveStatus: '阀门状态',
        pressure: '压力',
        chooseDevice: '选择设备'
      }
    },
    apply: {
      service: {
        form: {
          serviceName: '服务名称',
          deviceType: '设备类型',
          protocolType: '协议类型',
          accessAddress: '接入地址',
          httpAddress: 'HTTP服务地址',
          subTopicPrefix: '插件订阅主题前缀',
          additionalInfo: '链接参数'
        }
      }
    }
  },
  form: {
    required: '不能为空',
    userName: {
      required: '请输入用户名',
      invalid: '用户名格式不正确'
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确'
    },
    manycheck: {
      required: '输入的值与密码不一致',
      invalid: ''
    },
    pwd: {
      required: '请输入密码',
      invalid: '6 ~ 18个字符，由字母、数字、下划线组成'
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确'
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确'
    }
  },
  dropdown: {
    closeCurrent: '关闭',
    closeOther: '关闭其它',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeAll: '关闭所有'
  },
  icon: {
    themeConfig: '主题配置',
    themeSchema: '主题模式',
    lang: '切换语言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新页面',
    collapse: '折叠菜单',
    expand: '展开菜单',
    pin: '固定',
    unpin: '取消固定'
  },
  dashboard_panel: {
    addKanBan: '新建看板',
    editKanban: '编辑看板',
    cardName: {
      date: {
        january: '1月',
        february: '2月',
        march: '3月',
        april: '4月',
        may: '5月',
        june: '6月',
        july: '7月',
        august: '8月',
        september: '9月',
        october: '10月',
        november: '11月',
        december: '12月'
      },
      week: {
        mon: '周一',
        tue: '周二',
        wed: '周三',
        thur: '周四',
        fri: '周五',
        sat: '周六',
        sun: '周日'
      },
      bugNum: '告警总数',
      deviceNum: '设备总数',
      userNum: '用户总数',
      regionNum: '区域总数',
      tenantNumLine: '租户总数（折线图）',
      deviceNumPie: '设备总数（饼图）',
      weatherOverview: '天气概况',
      irrigationArea: '浇灌区域',
      weatherStation: '气象站',
      tenant: '租户',
      onLine: '在线',
      offline: '离线',
      onlineRate: '在线率',
      yesterdayAdd: '昨日新增',
      lastMonthAdd: '上月新增',
      thisMonth: '本月新增',
      active: '已激活',
      notActive: '未激活',
      activationRate: '激活率',
      sevenDayWeather: '最近五天气概况',
      spaceNum: '空间总数',
      areaName: '区域名称',
      corn: '玉米',
      SprinklerIrrigationDitchIrrigation: '喷灌沟灌',
      irrigationTypes: '灌溉类型',
      hectare: '公顷',
      regionalArea: '区域面积',
      sandyLoamSoil: '沙壤土',
      soil: '土壤类型',
      soilMoisture: '土壤湿度',
      temperature: '土壤温度',
      Conductivity: '导电率',
      potassiumContent: '含钾量',
      phosphorusContent: '含磷量',
      nitrogenContent: '含氮量',
      weatherStationData: '气象站数据',
      historyData: '历史数据',
      windSpeed: '风速',
      windDirection: '风向',
      humidity: '湿度',
      pressure: '气压',
      rainfall: '雨量',
      instrumentPanel: '仪表盘',
      videoPlayer: '视频播放器'
    }
  },
  device_template: {
    templateInfo: '模板信息',
    editTemplateInfo: '修改模板信息',
    addDeviceInfo: '添加设备的基本信息',
    modelDefinition: '模型定义',
    deviceParameterDescribe: '根据系统提供的模型来配置参数以及设备类型',
    webChartConfiguration: 'Web图表配置',
    bindTheCorrespondingChart: '绑定相对应的图表',
    appChartConfiguration: 'App图表配置',
    editAppDetailsPage: '编辑该设备功能模板的App详情页',
    release: '发布',
    releaseAppStore: '发布到应用商店',
    enterTemplateName: '请输入模板名称',
    templateName: '模板名称',
    templateTage: '模板标签',
    authorName: '作者名称',
    enterAuthorName: '请输入作者名称',
    templateVersion: '模板版本',
    entertemplateVersion: '请输入模板版本',
    illustrate: '说明',
    enterIllustrate: '请输入说明',
    selectCover: '选择封面',
    nextStep: '下一步',
    back: '上一步',
    cancellation: '取消',
    confirm: '确定',
    addTage: '添加标签',
    add: '新增',
    telemetry: '遥测',
    attributes: '属性',
    events: '事件',
    command: '命令',
    addAndEditTelemetry: '新增/编辑遥测',
    addAndEditAttributes: '新增/编辑属性',
    addAndEditEvents: '新增/编辑事件',
    addAndEditCommand: '新增/编辑命令',
    table_header: {
      eventContent: '事件内容',
      dataName: '数据名称',
      dataIdentifier: '数据标识符',
      readAndWriteSign: '读写标志',
      dataType: '数据类型',
      unit: '单位',
      pleaseEnterTheUnit: '请输入单位',
      PleaseEnterADescription: '请输入描述',
      description: '描述',
      eventReportingTime: '事件上报时间',
      attributeName: '属性名称',
      updateTime: '更新时间',
      attributeValue: '属性',
      attributeIdentifier: '属性标识符',
      eventName: '事件名称',
      eventIdentifier: '事件标识符',
      eventParameters: '事件参数',
      commandName: '命令名称',
      commandIdentifier: '命令标识符',
      commandParameters: '命令参数',
      pleaseEnterADataName: '请输入数据名称',
      pleaseEnterTheDataIdentifier: '请输入数据标识符',
      pleaseEnterTheDataType: '请输入数据类型',
      pleaseEnterTheAttributeName: '请输入属性名称',
      pleaseEnterTheAttributeIdentifier: '请输入属性标识符',
      pleaseEnterTheAttributeType: '请输入属性类型',
      attributeType: '属性类型',
      addEditParameters: '新增/编辑参数',
      parameterName: '参数名称',
      PleaseEnterTheParameterName: '请输入参数名称',
      ParameterIdentifier: '参数标识符',
      PleaseEnterTheParameterIdentifier: '请输入参数标识符',
      ParameterType: '参数类型',
      PleaseSelectParameterType: '请选择参数类型',
      singleControlTask: '单次控制任务',
      addParameters: '添加参数',
      commandDescription: '命令描述',
      pleaseEnterACommandDescription: '请输入命令描述',
      pleaseEnterTheCommandName: '请输入命令名称',
      pleaseEnterTheCommandIdentifier: '请输入命令标识符',
      PleaseEnterTheCommandType: '请输入命令类型',
      eventDescription: '事件描述',
      PleaseEventDescription: '请输入事件描述',
      singleControlTaskl: '单次控制任务',
      PleaseEventName: '请输入事件名称',
      PleaseEeventIdentifier: '请输入事件标识符',
      setEnum: '设置枚举项',
      addEnum: '添加枚举项',
      enumDataType: '枚举数据类型',
      enumDataValue: '枚举值',
      enumDescription: '枚举描述'
    }
  },
  generate: {
    customCommand: '自定义命令',
    addCustomCommand: '新增自定义命令',
    btnname: '按钮名称',
    sceneLinkageName: '关联场景联动名称',
    alarmConfugName: '告警配置名称',
    alarmDevices: '告警设备列表',
    alarmReason: '告警原因',
    alarmStatus: '告警状态',
    enterSceneDesc: '请输入场景描述',
    selectRuleStatus: '请选择规则状态',
    by: '为',
    clickDelete: '点击了删除',
    suspend: '暂停',
    startup: '启动',
    addExecutionAction: '请添加执行动作',
    addExecutionConditions: '请添加执行条件',
    sceneLinkDesc: '请输入场景联动描述',
    runstate: '运行状态',
    gatewayDevice: '网关设备',
    alarmConfig: '告警配置',
    alarmInfo: '告警信息',
    alarmHistory: '告警历史',
    notificationGroup: '已删除当前通知组',
    spaceLocation: '请设置空间位置',
    spaceOrArea: '请选择一个空间或者区域',
    editRule: '编辑规则',
    addRule: '添加规则',
    annotation: '注释',
    fieldName: '字段名',
    selectStatus: '请选择状态',
    sqlInput: '请输入SQL',
    dataInterval: '请输入推送数据间隔',
    appKey: '请输入appKey',
    supportFlag: '请选择接口支持标志',
    IPwhitelist: '请输入IP白名单',
    signatureMethod: '请选择签名方式',
    ruleName: '请输入规则名称',
    cropWaterDemand: '作物需水量',
    soilParam: '土壤参数',
    commandIssuanceTime: '命令下发时间',
    issueCommand: '下发命令',
    commandConetnt: '命令内容',
    selectSubDevices: '请选择子设备',
    unbind: '不绑定',
    setSubDevices: '设置子设备',
    errorMessage: '错误信息',
    returnSuccess: '返回成功',
    returnFail: '返回失败',
    sendingSuccess: '发送成功',
    sendingFail: '发送失败',
    code: '代码',
    name: '姓名',
    greeting: '你好',
    orIf: '或者如果',
    'add-group': '新增一个组',
    'delete-group': '删除组',
    'delete-condition': '删除一个条件',
    'add-condition': '新增一个条件',
    'please-select': '请选择',
    'please-select-expiration-time': '请选择过期时间',
    'expiration-time': '过期时间',
    'please-select-date': '请选择日期',
    'please-select-period': '请选择周期',
    'not-executed': '未执行',
    'please-select-day-hour-minute': '请选择日时分',
    value: '取值',
    'max-value': '最大值',
    'min-value': '最小值',
    'save-scene-configuration': '保存场景配置',
    'add-execution-action': '新增执行动作',
    'delete-execution-action': '删除执行动作',
    'separated-by-commas': '多个英文逗号隔开',
    'create-alarm': '创建告警',
    trigger: '触发',
    activate: '激活',
    delete: '删除',
    'add-row': '新增一行',
    search: '搜索',
    'delete-operation': '删除一个操作',
    enter: '请输入',
    'add-operation': '新增一个操作',
    group: '分组',
    and: '且',
    save: '保存',
    cancel: '取消',
    'condition-trigger': '(满足以下任意一组条件即可触发)',
    'location-details': '位置详情',
    'irrigation-type': '灌溉类型',
    'soil-type': '土壤类型',
    'planting-crops': '种植作物',
    rise: '升',
    'required-water-supply-for-crops': '作物所需供水量',
    hectare: '公顷',
    'area-size': '区域面积',
    'area-image': '区域图片',
    'set-range': '设置范围',
    'map-range': '地图范围',
    'location-information': '位置信息',
    'set-location': '设置位置',
    'area-location': '区域位置',
    'configuration-entry': '您可以移入右侧配置区进入配置，也可以确认后稍后配置',
    'area-name': '区域名称',
    'cancel-loading': '取消加载',
    'start-loading': '开始加载',
    confirm: '确认',
    action: '动作:',
    'enter-description': '请输入描述',
    'loading-button': '按钮有加载状态。',
    loading: '加载中',
    'online-status': '在线情况',
    description: '描述:',
    'enter-scene-name': '请输入场景名称',
    'online-rate': '在线率100%',
    'associated-space': '所属空间',
    'expand-configuration': '移入展开配置',
    'enter-keyword': '请输入关键字...',
    'total-devices': '设备总数',
    'terminal-count': '终端数量',
    'device-overview': '设备总览',
    'save-scene-linkage': '保存场景联动',
    button: '按钮',
    then: '那么:',
    'edit-location': '编辑位置',
    'space-location': '空间位置',
    'space-name': '空间名称',
    if: '如果:',
    'add-space-area': '添加空间/区域',
    'edit-current-space-area': '编辑当前空间/区域',
    'enter-scene-linkage-name': '请输入场景联动名称',
    'expand-card': '移入展开卡片',
    'manually-add-device': '手动添加设备',
    reset: '重置',
    'telemetry-history-data': '遥测历史数据',
    'execution-failed': '执行失败',
    'execution-successful': '执行成功',
    all: '全部',
    'execution-status': '执行状态',
    'execution-description': '执行说明',
    'execution-time': '执行时间',
    'display-title': '显示标题',
    'order-number': '序号',
    'search-space-or-area': '搜索空间或区域',
    title: '标题',
    send: '发送',
    debug: '调试',
    normal: '正常',
    'select-execution-status': '请选择执行状态',
    alarm: '告警',
    'copy-commands-to-local': '可复制以上命令到本地电脑模拟上报数据',
    'offline-status': '离线',
    mqtt: '模拟使用MQTT客户端上报数据',
    'debug-run-result': '调试运行结果',
    'alarm-content': '告警内容:',
    details: '详情',
    'report-data': '上报数据',
    'simulate-input': '模拟输入',
    'batch-ignore': '批量忽略',
    log: '日志',
    'batch-process': '批量处理',
    'enable-status': '是否启用',
    attribute: '属性',
    'issue-attribute': '下发属性',
    'simulate-report-data': '模拟上报数据',
    'device-type': '设备类型',
    'issue-control': '下发控制',
    'parse-script': '解析脚本',
    'device-description': '设备描述',
    'device-code': '设备编码',
    device: '设备',
    'device-name': '设备名称',
    sha256hmac: '签名：使用 SHA-256 哈希函数和 HMAC 生成',
    'select-processing-type': '请选择处理类型',
    'select-device': '请选择设备',
    'device-management': '设备管理',
    'processing-type': '处理类型',
    'device-number': '设备编号',
    secret: 'Secret',
    'enter-title': '请输入标题',
    key: 'key',
    'select-notification-group': '请选择通知组',
    'alarm-level': '告警级别',
    'payload-url': 'Payload URL*',
    'notification-group': '通知组',
    'modify-device-info': '修改设备信息',
    'trigger-duration': '触发持续时间',
    'multiple-email-phone-using-comma': '多个邮箱/手机号使用英文逗号隔开',
    'device-count': '设备数据个数:',
    'add-alarm': '新增告警',
    editAlarm: '编辑告警',
    'set-email-phone': '设置收件邮箱/接收手机号',
    edit: '编辑',
    'trigger-repeat-count': '触发重复次数',
    'enter-default-value': '请输入默认值',
    'default-value': '默认值',
    'select-type': '请选择类型',
    'add-new': '新增',
    'alarm-description': '告警描述',
    add: '添加',
    crop: '作物',
    type: '类型',
    'set-member-notification-method': '设置成员通知方式',
    'enter-device-name': '请输入设备名称',
    'alarm-name': '告警名称',
    'alarm-status': '告警状态',
    'signature-method': '签名方式',
    'is-homepage': '是否首页',
    'notification-method': '通知方式',
    'space-management': '空间管理',
    'connection-info': '连接信息',
    'rule-name': '规则名称',
    'enter-dashboard-name': '请输入看板名称',
    'dashboard-name': '看板名称',
    'notification-group-description': '通知组描述',
    configuration: '配置',
    'enter-tag-name': '请输入标签名称',
    'notification-group-name': '通知组名称',
    'data-source-name': '数据源名称',
    'add-data-processing': '新增数据处理',
    'enter-large-screen-name': '请输入大屏名称',
    'large-screen-name': '大屏名称',
    sql2: 'SQL编写辅助',
    'enter-sub-device-address': '请输入子设备地址',
    'sub-device-address-setting': '子设备地址设置',
    'add-extension-info': '+添加扩展信息',
    'rule-engine': '规则引擎',
    'device-group': '设备分组',
    operation: '操作',
    'api-support-flag': '接口支持标志',
    'modification-time': '修改时间',
    system: '系统',
    'creation-time': '创建时间',
    'group-name': '分组名称',
    'device-firmware': '设备固件:',
    'scene-description': '场景描述',
    'form-configuration': '表单配置',
    'scene-name': '场景名称',
    ip: '多个ip用竖线分割',
    view: '查看',
    ip2: 'IP白名单',
    'data-source-type': '数据源类型',
    creativity: '创意',
    'data-parsing': '数据解析',
    '+add-scene-linkage': '+新增场景联动',
    'add-device': '添加设备',
    'select-authentication-type': '请选择认证类型',
    'add-sub-device': '添加子设备',
    'parent-group': '父分组',
    'gateway-sub-device': '网关子设备',
    'device-configuration': '设备配置：',
    gateway: '网关',
    'quick-operation': '快捷操作',
    'direct-connected-device': '直连设备',
    'authentication-type': '认证类型',
    publish: '发布',
    'create-access-rule': '创建接入规则',
    'platform-connect-device': '平台连接设备',
    'device-access-type': '设备接入类型',
    'device-connect-platform': '设备连接平台',
    '+add-device': '+添加设备',
    'select-protocol-service': '请选择选择协议/服务',
    '+add-scene': '+新增场景',
    'device-connection-method': '设备连接方式',
    first: '首',
    'more-dynamics': '更多动态',
    issue: '下发',
    'select-device-function-template': '选择设备功能模板',
    'through-protocol-access': '通过协议接入',
    credential: '凭证',
    dynamic: '动态',
    'role-description': '角色描述',
    'device-configuration-name': '设备配置名称',
    'repeat-new-password': '重复新密码',
    recipient: '接收人',
    'confirm-delete-dashboard': '确认删除看板。',
    'access-method-service': '接入方式/服务',
    'or-enter-here': '或在此输入',
    'hour-24': '！默认查询最近24小时的数据',
    'select-permission': '选择权限',
    export: '导出',
    'max-9': '建议：有几条数据改几条（按序号），最多9条',
    'more-tech-stack': '更多技术栈',
    'new-password': ' 新 密 码 ',
    'role-name': '角色名称',
    query: '查询',
    switch: '开关',
    'number-of-devices': '个设备。',
    'project-main-tech-stack': '项目主要技术栈',
    refresh: '刷新',
    'command-identifier': '命令标识符',
    status: '状态',
    selected: '已选择',
    'remember-last-path': '记住上次路径',
    table: '表格',
    'old-password': ' 原 密 码 ',
    'notification-type': '通知类型',
    'search-by-name': '按名称搜索',
    'confirm-password': '确认密码',
    username: '用户名',
    'change-password': '修改密码',
    'notification-record': '通知记录',
    'add-chart': '添加图表',
    'create-large-screen': '新建大屏',
    timeline: '时间线',
    password: '密码',
    'system-log': '系统日志',
    'no-data': '空数据',
    'message-total': '消息总数',
    'create-dashboard': '新建看板',
    'has-data': '有数据',
    email: '邮箱',
    'add-component': '添加组件',
    'enter-template-name': '请输入模板名称',
    'extension-info': '扩展信息',
    'next-step': '下一步',
    'add-device-function-template': '添加设备功能模板',
    'email-address': '电子邮箱',
    demo: '插件demo地址：',
    'device-location': '设备位置',
    'super-admin': '超管',
    'account-type': '账户类型',
    'vue3-doc-url': 'vue3版文档地址：',
    'select-theme': '请选择主题',
    'not-found-create': '没有找到？去创建',
    'previous-step': '上一步',
    'last-name': ' 姓 名',
    'select-user': '选择用户',
    'color-theme': '配色主题：',
    'copy-json': '复制json',
    'enter-config-name': '请输入配置名称',
    'enter-key': '请输入key',
    close: '关闭：',
    'bind-device-function-template': '绑定设备功能模板',
    open: '开启：',
    copy: '复制',
    'basic-info': '基本信息',
    'set-default-device-open-status': '设置设备默认的开启状态',
    'copy-one-type-one-secret-device-password': '复制一型一密设备的密码',
    'search-icon': '搜索图标',
    'allow-device-auto-create': '允许设备自动创建',
    'personal-space': '个人空间',
    'table-column-setting': '表格列设置',
    'configure-auto-create-device': '配置自动创建设备',
    'card-content': '卡片内容',
    'temperature-alert-above-28': '温度大于28度报警',
    'view-key': '查看密钥',
    'click-to-select-icon': '点击选择图标',
    'privacy-policy': '《隐私权政策》',
    'delete-device-configuration': '删除设备配置',
    'custom-icon-example': '自定义图标示例',
    'user-agreement': '《用户协议》',
    'card-segment-example': '卡片分段示例',
    'print-picture': '打印图片',
    'markdown-plugin': 'markdown插件',
    'weather-forecast': '今日多云转晴，20℃ - 25℃！',
    'auto-create-device-via-one-type-one-secret': '通过一型一密动态获取证书创建设备',
    'auto-create-device': '自动创建设备',
    'print-table': '打印表格',
    'i-have-read-and-accept': '我已经仔细阅读并接受',
    color: '颜色',
    'video-player-plugin': '视频播放器插件',
    'text-button': '文本按钮',
    print: '打印',
    'icon-selector': 'Icon图标选择器',
    'enter-content-to-copy': '请输入要复制的内容吧',
    'extra-large-card': '超大卡片',
    'icon-example': 'Icon组件示例',
    'large-card': '大卡片',
    'rich-text-plugin': '富文本插件',
    'text-copy': '文本复制',
    'medium-card': '中卡片',
    dashboard: 'Dashboard',
    'map-plugin': '地图插件',
    'small-card': '小卡片',
    'alarm-center': '告警中心',
    age: '年龄',
    size: '尺寸',
    card: '卡片',
    user: '用户',
    'basic-card': '基础卡片',
    'basic-usage': '基本用法',
    'mumble-jumble': '打撒都是',
    'migrate-dashboard-to-visualization': '看板迁移至可视化',
    'route-management': '路由管理',
    preview: '预览',
    'final-result': '处理结果',
    'enter-read-write': '请输入读写标志',
    'choose-protocol-or-Service': '选择协议/服务',
    or: '或',
    enterSceneName: '请输入场景名称',
    labelName: '名称:',
    requestHeader: '请求头',
    format: '格式',
    fieldValue: '值',
    fieldKey: '键',
    addAlarm: '新增告警',
    addAlarmRule: '新增告警规则',
    heartbeatFunctionInfo:
      '当配置模板里启用心跳判断功能，手动修改无效；当前配置模板启用超时时间，在超时的情况下手动修改无效。',
    manualOnlineStatusEdit: '手动修改在线状态',
    deviceCode: '设备编码:',
    enterReadWriteFlag: '请输入读写标志',
    heartbeatThreshold: '>0代表启用心跳判断，系统仅按照遥测数据的上报作为设备的心跳判断在线离线状态',
    heartbeatIntervalSeconds: '心跳判断（秒）',
    timeoutThreshold:
      '>0代表启用超时功能，用来判断设备是否异常在线。当设备在该时间内未上报遥测数据，平台会认为该设备已离线',
    timeoutMinutes: '超时时间（分钟）',
    phoneNumber: '手机号码',
    location: '定位',
    latitude: '纬度',
    longitude: '经度',
    pluginDemoUrl: '插件demo地址：',
    vue3DocumentationUrl: 'vue3版文档地址：',
    deviceAccessType: '设备接入类型：',
    swiperPlugin: 'Swiper插件',
    onlineDeviceConfig: '设备在线配置',
    svgIconCustomization: '通过SvgIcon组件动态渲染, 菜单通过meta的localIcon属性渲染自定义图标',
    createDeviceConfig: '+创建设备配置',
    summaryOfLastMonth: '上月总结',
    salesOfCurrentMonth: '本月销售',
    customIconExample: '自定义图标示例',
    printImage: '打印图片',
    earningsOfCurrentMonth: '本月收入',
    videoPlayerPlugin: '视频播放器插件',
    copyText: '复制',
    printText: '打印',
    iconSelector: 'Icon图标选择器',
    enterTextToCopy: '请输入要复制的内容吧',
    richTextPlugin: '富文本插件',
    textCopy: '文本复制',
    mapPlugin: '地图插件',
    iconComponentExample: 'Icon组件示例',
    randomText: '打撒都是',
    firstElement: '一',
    secondElement: '二',
    thirdElement: '三',
    individual: '个',
    'alarm-info': '告警详情',
    timeRangeWarning: '单个条件组内不能只有时间范围的条件',
    timeTypeWarning: '时间类型的条件无法触发告警',
    controlCommands: '控制命令'
  },
  kanban: {
    'add-cards': '添加卡片'
  }
};

export default local;
