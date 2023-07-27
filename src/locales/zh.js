export default {
  login: {
    title: '管理员登录',
    form: {
      username: {
        placeholder: '管理员账户',
        message_required: '管理员账户不允许为空'
      },
      password: {
        placeholder: '管理员密码',
        message_required: '管理员密码不允许为空',
        message_min_length: '管理员密码长度应大于6'
      },
      login: {
        label: '登录'
      }
    }
  },
  navbar: {
    locale_changer: {
      tooltip: '语言'
    },
    full_screen: {
      tooltip: '全屏'
    },
    size_select: {
      tooltip: '布局大小'
    },
    notice: {
      tooltip: '通知中心'
    },
    avatar_dropdown: {
      home: '首页',
      github: 'Github',
      change_password: '密码修改',
      logout: '退出'
    }
  },
  sidebar: {
    dashboard: {
      title: '首页'
    },
    user: {
      title: '用户管理'
    },
    user_user: {
      title: '会员管理'
    },
    user_address: {
      title: '收货地址'
    },
    user_collect: {
      title: '会员收藏'
    },
    user_footprint: {
      title: '会员足迹'
    },
    user_history: {
      title: '搜索历史'
    },
    user_feedback: {
      title: '意见反馈'
    },
    mall: {
      title: '商场管理'
    },
    mall_region: {
      title: '行政区域'
    },
    mall_brand: {
      title: '品牌制造商'
    },
    mall_category: {
      title: '商品类目'
    },
    mall_order: {
      title: '订单管理'
    },
    mall_aftersale: {
      title: '售后管理'
    },
    mall_issue: {
      title: '通用问题'
    },
    mall_keyword: {
      title: '关键词'
    },
    goods: {
      title: '商品管理'
    },
    goods_list: {
      title: '商品列表'
    },
    goods_create: {
      title: '商品上架'
    },
    goods_edit: {
      title: '商品编辑'
    },
    goods_comment: {
      title: '商品评论'
    },
    promotion: {
      title: '推广管理'
    },
    promotion_ad: {
      title: '广告管理'
    },
    promotion_coupon: {
      title: '优惠券管理'
    },
    promotion_coupon_detail: {
      title: '优惠券详情'
    },
    promotion_topic: {
      title: '专题管理'
    },
    promotion_topic_create: {
      title: '专题创建'
    },
    promotion_topic_edit: {
      title: '专题编辑'
    },
    promotion_groupon_rule: {
      title: '团购规则'
    },
    promotion_groupon_activity: {
      title: '团购活动'
    },
    sys: {
      title: '系统管理'
    },
    sys_admin: {
      title: '管理员'
    },
    sys_notice: {
      title: '通知管理'
    },
    sys_log: {
      title: '操作日志'
    },
    sys_role: {
      title: '角色管理'
    },
    sys_os: {
      title: '对象存储'
    },
    config: {
      title: '配置管理'
    },
    config_mall: {
      title: '商场配置'
    },
    config_express: {
      title: '运费配置'
    },
    config_order: {
      title: '订单配置'
    },
    config_wx: {
      title: '小程序配置'
    },
    stat: {
      title: '统计报表'
    },
    stat_user: {
      title: '用户统计'
    },
    stat_order: {
      title: '订单统计'
    },
    stat_goods: {
      title: '商品统计'
    },
    external_link: {
      title: '外链'
    },
    external_link_tencent_cos: {
      title: '腾讯云存储'
    },
    external_link_tencent_sms: {
      title: '腾讯云短信'
    },
    external_link_weixin_pay: {
      title: '微信支付'
    },
    external_link_weixin_mpkf: {
      title: '小程序客服'
    },
    external_link_alibaba_oss: {
      title: '阿里云存储'
    },
    external_link_qiniu_kodo: {
      title: '七牛云存储'
    },
    external_link_kdniao_api: {
      title: '快递鸟'
    }
  },
  button: {
    add: {
      label: '+ 增加'
    },
    batch_delete: {
      label: '批量删除'
    },
    cancel: {
      label: '取消'
    },
    confirm: {
      label: '确定'
    },
    create: {
      label: '添加'
    },
    delete: {
      label: '删除'
    },
    details: {
      label: '详情'
    },
    download: {
      label: '导出'
    },
    edit: {
      label: '编辑'
    },
    permission: {
      label: '授权'
    },
    reply: {
      label: '回复'
    },
    search: {
      label: '查找'
    },
    settings: {
      label: '设置'
    },
    view: {
      label: '查看'
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
  }
}
