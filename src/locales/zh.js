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
      details: '详情',
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
      id: {
        label: '用户ID'
      },
      nickname: {
        label: '用户昵称'
      },
      avatar: {
        label: '用户头像'
      },
      mobile: {
        label: '手机号码'
      },
      gender: {
        label: '性别'
      },
      birthday: {
        label: '生日'
      },
      user_level: {
        label: '用户等级'
      },
      status: {
        label: '状态'
      },
      actions: {
        label: '操作'
      }
    },
    form_title: '用户编辑',
    form: {
      username: {
        label: '用户名'
      },
      nickname: {
        label: '用户昵称'
      },
      mobile: {
        label: '用户手机'
      },
      gender: {
        label: '用户性别'
      },
      user_level: {
        label: '用户等级'
      },
      status: {
        label: '状态'
      }
    }
  },
  user_address: {
    table: {
      id: {
        label: '地址ID'
      },
      user_id: {
        label: '用户ID'
      },
      name: {
        label: '收货人名称'
      },
      tel: {
        label: '手机号码'
      },
      address_region: {
        label: '区域地址'
      },
      address_detail: {
        label: '区域地址'
      },
      is_default: {
        label: '默认'
      }
    }
  },
  user_collect: {
    table: {
      id: {
        label: '收藏ID'
      },
      user_id: {
        label: '用户ID'
      },
      value_id: {
        label: '商品ID'
      },
      add_time: {
        label: '添加时间'
      }
    }
  },
  user_footprint: {
    table: {
      id: {
        label: '足迹ID'
      },
      user_id: {
        label: '用户ID'
      },
      goods_id: {
        label: '商品ID'
      },
      add_time: {
        label: '添加时间'
      }
    }
  },
  user_history: {
    table: {
      id: {
        label: '搜索ID'
      },
      user_id: {
        label: '用户ID'
      },
      keyword: {
        label: '关键字'
      },
      add_time: {
        label: '添加时间'
      }
    }
  },
  user_feedback: {
    table: {
      id: {
        label: '反馈ID'
      },
      username: {
        label: '用户名'
      },
      mobile: {
        label: '手机号码'
      },
      feed_type: {
        label: '反馈类型'
      },
      content: {
        label: '反馈内容'
      },
      pic_urls: {
        label: '反馈图片'
      },
      add_time: {
        label: '时间'
      }
    }
  },
  mall_region: {
    table: {
      name: {
        label: '区域名称'
      },
      type: {
        label: '区域类型'
      },
      code: {
        label: '区域编码'
      }
    }
  },
  mall_brand: {
    table: {
      id: {
        label: '品牌商ID'
      },
      name: {
        label: '品牌商名称'
      },
      pic_url: {
        label: '品牌商图片'
      },
      desc: {
        label: '介绍'
      },
      floor_price: {
        label: '底价'
      },
      actions: {
        label: '操作'
      }
    },
    form: {
      name: {
        label: '品牌商名称'
      },
      simple_desc: {
        label: '介绍'
      },
      pic_url: {
        label: '品牌商图片'
      },
      floor_price: {
        label: '底价'
      }
    }
  },
  mall_category: {
    table: {
      id: {
        label: '类目ID'
      },
      name: {
        label: '类目名'
      },
      icon_url: {
        label: '类目图标'
      },
      pic_url: {
        label: '类目图片'
      },
      keywords: {
        label: '关键字'
      },
      desc: {
        label: '简介'
      },
      level: {
        label: '级别'
      },
      actions: {
        label: '操作'
      }
    },
    form: {
      name: {
        label: '类目名称'
      },
      keywords: {
        label: '关键字'
      },
      level: {
        label: '级别',
        value: {
          L1: '一级类目',
          L2: '二级类目'
        }
      },
      pid: {
        label: '父类目'
      },
      icon_url: {
        label: '类目图标'
      },
      pic_url: {
        label: '类目图片'
      },
      desc: {
        label: '类目简介'
      }
    }
  },
  mall_order: {
    table: {
      order_sn: {
        label: '订单编号'
      },
      avatar: {
        label: '用户头像'
      },
      user_name: {
        label: '下单用户'
      },
      add_time: {
        label: '下单时间'
      },
      order_status: {
        label: '订单状态'
      },
      order_price: {
        label: '订单金额'
      },
      actual_price: {
        label: '实付金额'
      },
      pay_time: {
        label: '支付时间'
      },
      consignee: {
        label: '收货人'
      },
      mobile: {
        label: '收货电话'
      },
      ship_sn: {
        label: '物流单号'
      },
      ship_channel: {
        label: '物流渠道'
      },
      actions: {
        label: '操作'
      }
    }
  },
  mall_aftersale: {
    table: {
      aftersale_sn: {
        label: '售后编号'
      },
      order_id: {
        label: '订单ID'
      },
      user_id: {
        label: '用户ID'
      },
      type: {
        label: '售后类型'
      },
      reason: {
        label: '退款原因'
      },
      amount: {
        label: '退款价格'
      },
      add_time: {
        label: '申请时间'
      },
      actions: {
        label: '操作'
      }
    }
  },
  mall_issue: {
    table: {
      id: {
        label: '问题ID'
      },
      question: {
        label: '问题内容'
      },
      answer: {
        label: '问题回复'
      },
      actions: {
        label: '操作'
      }
    },
    form: {
      question: {
        label: '问题'
      },
      answer: {
        label: '回复'
      }
    }
  },
  mall_keyword: {
    table: {
      id: {
        label: '关键词ID'
      },
      keyword: {
        label: '关键词'
      },
      url: {
        label: '跳转链接'
      },
      is_hot: {
        label: '是否推荐'
      },
      is_default: {
        label: '是否默认'
      },
      actions: {
        label: '操作'
      }
    },
    form: {
      keyword: {
        label: '关键词'
      },
      url: {
        label: '跳转链接'
      },
      is_hot: {
        label: '是否推荐',
        placeholder: '请选择',
        value: {
          true: '推荐',
          false: '普通'
        }
      },
      is_default: {
        label: '是否默认',
        placeholder: '请选择',
        value: {
          true: '默认',
          false: '非默认'
        }
      }
    }
  }
}
