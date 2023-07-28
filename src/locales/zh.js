export default {
  login: {
    page: {
      title: '管理员登录'
    },
    placeholder: {
      username: '管理员账户',
      password: '管理员密码'
    },
    message: {
      username_required: '管理员账户不允许为空',
      password_required: '管理员密码不允许为空',
      password_min_length: '管理员密码长度应大于6'
    },
    button: {
      login: '登录'
    }
  },
  navbar: {
    tooltip: {
      locale: '语言',
      full_screen: '全屏',
      size_select: '布局大小',
      notice: '通知中心'
    },
    menu: {
      home: '首页',
      github: 'Github',
      gitee: 'Gitee',
      password: '密码修改',
      logout: '退出'
    }
  },
  app: {
    menu: {
      dashboard: '首页',
      user: '用户管理',
      user_user: '会员管理',
      user_address: '收货地址',
      user_collect: '会员收藏',
      user_footprint: '会员足迹',
      user_history: '搜索历史',
      user_feedback: '意见反馈',
      mall: '商场管理',
      mall_region: '行政区域',
      mall_brand: '品牌制造商',
      mall_category: '商品类目',
      mall_order: '订单管理',
      mall_aftersale: '售后管理',
      mall_issue: '通用问题',
      mall_keyword: '关键词',
      goods: '商品管理',
      goods_list: '商品列表',
      goods_create: '商品上架',
      goods_edit: '商品编辑',
      goods_comment: '商品评论',
      promotion: '推广管理',
      promotion_ad: '广告管理',
      promotion_coupon: '优惠券管理',
      promotion_coupon_detail: '优惠券详情',
      promotion_topic: '专题管理',
      promotion_topic_create: '专题创建',
      promotion_topic_edit: '专题编辑',
      promotion_groupon_rule: '团购规则',
      promotion_groupon_activity: '团购活动',
      sys: '系统管理',
      sys_admin: '管理员',
      sys_notice: '通知管理',
      sys_log: '操作日志',
      sys_role: '角色管理',
      sys_os: '对象存储',
      config: '配置管理',
      config_mall: '商场配置',
      config_express: '运费配置',
      config_order: '订单配置',
      config_wx: '小程序配置',
      stat: '统计报表',
      stat_user: '用户统计',
      stat_order: '订单统计',
      stat_goods: '商品统计',
      external_link: '外链',
      external_link_tencent_cos: '腾讯云存储',
      external_link_tencent_sms: '腾讯云短信',
      external_link_weixin_pay: '微信支付',
      external_link_weixin_mpkf: '小程序客服',
      external_link_alibaba_oss: '阿里云存储',
      external_link_qiniu_kodo: '七牛云存储',
      external_link_kdniao_api: '快递鸟'
    },
    button: {
      add: '+ 增加',
      batch_delete: '批量删除',
      cancel: '取消',
      confirm: '确定',
      create: '添加',
      delete: '删除',
      detail: '详情',
      download: '导出',
      edit: '编辑',
      permission: '授权',
      reply: '回复',
      search: '查找',
      settings: '设置',
      view: '查看'
    }
  },
  user_user: {
    table: {
      id: '用户ID',
      nickname: '用户昵称',
      avatar: '用户头像',
      mobile: '手机号码',
      gender: '性别',
      birthday: '生日',
      user_level: '用户等级',
      status: '状态',
      actions: '操作'
    },
    form_title: '用户编辑',
    form: {
      username: '用户名',
      nickname: '用户昵称',
      mobile: '用户手机',
      gender: '用户性别',
      user_level: '用户等级',
      status: '状态'
    }
  },
  user_address: {
    table: {
      id: '地址ID',
      user_id: '用户ID',
      name: '收货人名称',
      tel: '手机号码',
      address_region: '区域地址',
      address_detail: '区域地址',
      is_default: '默认'
    }
  },
  user_collect: {
    table: {
      id: '收藏ID',
      user_id: '用户ID',
      value_id: '商品ID',
      add_time: '添加时间'
    }
  },
  user_footprint: {
    table: {
      id: '足迹ID',
      user_id: '用户ID',
      goods_id: '商品ID',
      add_time: '添加时间'
    }
  },
  user_history: {
    table: {
      id: '搜索ID',
      user_id: '用户ID',
      keyword: '关键字',
      add_time: '添加时间'
    }
  },
  user_feedback: {
    table: {
      id: '反馈ID',
      username: '用户名',
      mobile: '手机号码',
      feed_type: '反馈类型',
      content: '反馈内容',
      pic_urls: '反馈图片',
      add_time: '时间'
    }
  },
  mall_region: {
    table: {
      name: '区域名称',
      type: '区域类型',
      code: '区域编码'
    }
  },
  mall_brand: {
    table: {
      id: '品牌商ID',
      name: '品牌商名称',
      pic_url: '品牌商图片',
      desc: '介绍',
      floor_price: '底价',
      actions: '操作'
    },
    form: {
      name: '品牌商名称',
      simple_desc: '介绍',
      pic_url: '品牌商图片',
      floor_price: '底价'
    }
  },
  mall_category: {
    table: {
      id: '类目ID',
      name: '类目名',
      icon_url: '类目图标',
      pic_url: '类目图片',
      keywords: '关键字',
      desc: '简介',
      level: '级别',
      actions: '操作'
    },
    form: {
      name: '类目名称',
      keywords: '关键字',
      level: '级别',
      pid: '父类目',
      icon_url: '类目图标',
      pic_url: '类目图片',
      desc: '类目简介'
    },
    value: {
      level_L1: '一级类目',
      level_L2: '二级类目'
    }
  },
  mall_order: {
    table: {
      order_sn: '订单编号',
      avatar: '用户头像',
      user_name: '下单用户',
      add_time: '下单时间',
      order_status: '订单状态',
      order_price: '订单金额',
      actual_price: '实付金额',
      pay_time: '支付时间',
      consignee: '收货人',
      mobile: '收货电话',
      ship_sn: '物流单号',
      ship_channel: '物流渠道',
      actions: '操作'
    }
  },
  mall_aftersale: {
    table: {
      aftersale_sn: '售后编号',
      order_id: '订单ID',
      user_id: '用户ID',
      type: '售后类型',
      reason: '退款原因',
      amount: '退款价格',
      add_time: '申请时间',
      actions: '操作'
    }
  },
  mall_issue: {
    table: {
      id: '问题ID',
      question: '问题内容',
      answer: '问题回复',
      actions: '操作'
    },
    form: {
      question: '问题',
      answer: '回复'
    }
  },
  mall_keyword: {
    table: {
      id: '关键词ID',
      keyword: '关键词',
      url: '跳转链接',
      is_hot: '是否推荐',
      is_default: '是否默认',
      actions: '操作'
    },
    form: {
      keyword: '关键词',
      url: '跳转链接',
      is_hot: '是否推荐',
      is_default: '是否默认'
    },
    placeholder: {
      is_hot: '请选择',
      is_default: '请选择'
    },
    value: {
      is_hot_true: '推荐',
      is_hot_false: '普通',
      is_default_true: '默认',
      is_default_false: '非默认'
    }
  }
}
