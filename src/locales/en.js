export default {
  login: {
    title: 'Admin login',
    form: {
      username: {
        placeholder: 'Admin account',
        message_required: 'Username is required'
      },
      password: {
        placeholder: 'Admin password',
        message_required: 'Password is required',
        message_min_length: 'Password should contain at least 6 characters'
      },
      login: {
        label: 'Login'
      }
    }
  },
  navbar: {
    locale_changer: {
      tooltip: 'Language'
    },
    full_screen: {
      tooltip: 'Full screen'
    },
    size_select: {
      tooltip: 'Select size'
    },
    notice: {
      tooltip: 'Notifications'
    },
    avatar_dropdown: {
      home: 'Home',
      github: 'Github',
      change_password: 'Change password',
      logout: 'Logout'
    }
  },
  sidebar: {
    dashboard: {
      title: 'Dashboard'
    },
    user: {
      title: 'Users'
    },
    user_user: {
      title: 'Customers'
    },
    user_address: {
      title: 'Addresses'
    },
    user_collect: {
      title: 'Favorites'
    },
    user_footprint: {
      title: 'Footprints'
    },
    user_history: {
      title: 'Search history'
    },
    user_feedback: {
      title: 'Feedbacks'
    },
    mall: {
      title: 'Mall'
    },
    mall_region: {
      title: 'Regions'
    },
    mall_brand: {
      title: 'Brands'
    },
    mall_category: {
      title: 'Categories'
    },
    mall_order: {
      title: 'Orders'
    },
    mall_aftersale: {
      title: 'After-sales'
    },
    mall_issue: {
      title: 'Issues'
    },
    mall_keyword: {
      title: 'Keywords'
    },
    goods: {
      title: 'Products'
    },
    goods_list: {
      title: 'List products'
    },
    goods_create: {
      title: 'Add product'
    },
    goods_edit: {
      title: 'Edit product'
    },
    goods_comment: {
      title: 'Comments'
    },
    promotion: {
      title: 'Promotions'
    },
    promotion_ad: {
      title: 'Ads'
    },
    promotion_coupon: {
      title: 'Coupons'
    },
    promotion_coupon_detail: {
      title: 'Coupon details'
    },
    promotion_topic: {
      title: 'Topics'
    },
    promotion_topic_create: {
      title: 'Create topic'
    },
    promotion_topic_edit: {
      title: 'Edit topic'
    },
    promotion_groupon_rule: {
      title: 'Groupon rules'
    },
    promotion_groupon_activity: {
      title: 'Groupon activity'
    },
    sys: {
      title: 'System'
    },
    sys_admin: {
      title: 'Admins'
    },
    sys_notice: {
      title: 'Notifications'
    },
    sys_log: {
      title: 'Logs'
    },
    sys_role: {
      title: 'Roles'
    },
    sys_os: {
      title: 'Storage'
    },
    config: {
      title: 'Configuration'
    },
    config_mall: {
      title: 'Mall config'
    },
    config_express: {
      title: 'Freight config'
    },
    config_order: {
      title: 'Order config'
    },
    config_wx: {
      title: 'Mini-program config'
    },
    stat: {
      title: 'Statistics'
    },
    stat_user: {
      title: 'User stats'
    },
    stat_order: {
      title: 'Order stats'
    },
    stat_goods: {
      title: 'Product stats'
    },
    external_link: {
      title: 'External links'
    },
    external_link_tencent_cos: {
      title: 'Tencent cloud storage'
    },
    external_link_tencent_sms: {
      title: 'Tencent cloud SMS'
    },
    external_link_weixin_pay: {
      title: 'WeChat Pay'
    },
    external_link_weixin_mpkf: {
      title: 'WeChat mini-program'
    },
    external_link_alibaba_oss: {
      title: 'Ali cloud storage'
    },
    external_link_qiniu_kodo: {
      title: 'Qiniu cloud storage'
    },
    external_link_kdniao_api: {
      title: 'Kdniao API'
    }
  },
  button: {
    add: {
      label: '+ Add'
    },
    batch_delete: {
      label: 'Batch delete'
    },
    cancel: {
      label: 'Cancel'
    },
    confirm: {
      label: 'Confirm'
    },
    create: {
      label: 'Create'
    },
    delete: {
      label: 'Delete'
    },
    details: {
      label: 'Details'
    },
    download: {
      label: 'Download'
    },
    edit: {
      label: 'Edit'
    },
    permission: {
      label: 'Permissions'
    },
    reply: {
      label: 'Reply'
    },
    search: {
      label: 'Search'
    },
    settings: {
      label: 'Settings'
    },
    view: {
      label: 'View'
    }
  },
  user_user: {
    table: {
      id: {
        label: 'ID'
      },
      nickname: {
        label: 'Nickname'
      },
      avatar: {
        label: 'Avatar'
      },
      mobile: {
        label: 'Mobile'
      },
      gender: {
        label: 'Gender'
      },
      birthday: {
        label: 'Birthday'
      },
      user_level: {
        label: 'Level'
      },
      status: {
        label: 'Status'
      },
      actions: {
        label: 'Actions'
      }
    },
    form_title: 'Edit user',
    form: {
      username: {
        label: 'Username'
      },
      nickname: {
        label: 'Nickname'
      },
      mobile: {
        label: 'Mobile'
      },
      gender: {
        label: 'Gender'
      },
      user_level: {
        label: 'Level'
      },
      status: {
        label: 'Status'
      }
    }
  },
  user_address: {
    table: {
      id: {
        label: 'ID'
      },
      user_id: {
        label: 'User ID'
      },
      name: {
        label: 'Name'
      },
      tel: {
        label: 'Mobile'
      },
      address_region: {
        label: 'Region'
      },
      address_detail: {
        label: 'Detail'
      },
      is_default: {
        label: 'Default'
      }
    }
  },
  user_collect: {
    table: {
      id: {
        label: 'ID'
      },
      user_id: {
        label: 'User ID'
      },
      value_id: {
        label: 'Item ID'
      },
      add_time: {
        label: 'Time added'
      }
    }
  },
  user_footprint: {
    table: {
      id: {
        label: 'ID'
      },
      user_id: {
        label: 'User ID'
      },
      goods_id: {
        label: 'Product ID'
      },
      add_time: {
        label: 'Time added'
      }
    }
  },
  user_history: {
    table: {
      id: {
        label: 'ID'
      },
      user_id: {
        label: 'User ID'
      },
      keyword: {
        label: 'Keyword'
      },
      add_time: {
        label: 'Time added'
      }
    }
  },
  user_feedback: {
    table: {
      id: {
        label: 'ID'
      },
      username: {
        label: 'Username'
      },
      mobile: {
        label: 'Mobile'
      },
      feed_type: {
        label: 'Type'
      },
      content: {
        label: 'Content'
      },
      pic_urls: {
        label: 'Pictures'
      },
      add_time: {
        label: 'Time added'
      }
    }
  },
  mall_region: {
    table: {
      name: {
        label: 'Name'
      },
      type: {
        label: 'Type'
      },
      code: {
        label: 'Code'
      }
    }
  },
  mall_brand: {
    table: {
      id: {
        label: 'ID'
      },
      name: {
        label: 'Name'
      },
      pic_url: {
        label: 'Picture'
      },
      desc: {
        label: 'Description'
      },
      floor_price: {
        label: 'Floor price'
      },
      actions: {
        label: 'Actions'
      }
    },
    form: {
      name: {
        label: 'Name'
      },
      simple_desc: {
        label: 'Description'
      },
      pic_url: {
        label: 'Picture'
      },
      floor_price: {
        label: 'Floor price'
      }
    }
  },
  mall_category: {
    table: {
      id: {
        label: 'ID'
      },
      name: {
        label: 'Name'
      },
      icon_url: {
        label: 'Icon'
      },
      pic_url: {
        label: 'Picture'
      },
      keywords: {
        label: 'Keywords'
      },
      desc: {
        label: 'Description'
      },
      level: {
        label: 'Level'
      },
      actions: {
        label: 'Actions'
      }
    },
    form: {
      name: {
        label: 'Name'
      },
      keywords: {
        label: 'Keywords'
      },
      level: {
        label: 'Level',
        value: {
          L1: 'Level 1',
          L2: 'Level 2'
        }
      },
      pid: {
        label: 'Parent'
      },
      icon_url: {
        label: 'Icon'
      },
      pic_url: {
        label: 'Picture'
      },
      desc: {
        label: 'Description'
      }
    }
  },
  mall_order: {
    table: {
      order_sn: {
        label: 'Order SN'
      },
      avatar: {
        label: 'Avatar'
      },
      user_name: {
        label: 'User name'
      },
      add_time: {
        label: 'Time added'
      },
      order_status: {
        label: 'Status'
      },
      order_price: {
        label: 'Order price'
      },
      actual_price: {
        label: 'Actual price'
      },
      pay_time: {
        label: 'Time paid'
      },
      consignee: {
        label: 'Consignee'
      },
      mobile: {
        label: 'Mobile'
      },
      ship_sn: {
        label: 'Ship SN'
      },
      ship_channel: {
        label: 'Ship channel'
      },
      actions: {
        label: 'Actions'
      }
    }
  }
}
