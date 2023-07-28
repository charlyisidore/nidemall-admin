export default {
  login: {
    page: {
      title: 'Admin login'
    },
    placeholder: {
      username: 'Admin account',
      password: 'Admin password'
    },
    message: {
      username_required: 'Username is required',
      password_required: 'Password is required',
      password_min_length: 'Password must contain at least 6 characters'
    },
    button: {
      login: 'Login'
    }
  },
  navbar: {
    tooltip: {
      locale: 'Language',
      full_screen: 'Full screen',
      size_select: 'Select size',
      notice: 'Notifications'
    },
    menu: {
      home: 'Home',
      github: 'Github',
      gitee: 'Gitee',
      password: 'Change password',
      logout: 'Logout'
    }
  },
  app: {
    menu: {
      dashboard: 'Dashboard',
      user: 'Users',
      user_user: 'Customers',
      user_address: 'Addresses',
      user_collect: 'Favorites',
      user_footprint: 'Footprints',
      user_history: 'Search history',
      user_feedback: 'Feedbacks',
      mall: 'Mall',
      mall_region: 'Regions',
      mall_brand: 'Brands',
      mall_category: 'Categories',
      mall_order: 'Orders',
      mall_aftersale: 'After-sales',
      mall_issue: 'Issues',
      mall_keyword: 'Keywords',
      goods: 'Products',
      goods_list: 'List products',
      goods_create: 'Add product',
      goods_edit: 'Edit product',
      goods_comment: 'Comments',
      promotion: 'Promotions',
      promotion_ad: 'Ads',
      promotion_coupon: 'Coupons',
      promotion_coupon_detail: 'Coupon details',
      promotion_topic: 'Topics',
      promotion_topic_create: 'Create topic',
      promotion_topic_edit: 'Edit topic',
      promotion_groupon_rule: 'Groupon rules',
      promotion_groupon_activity: 'Groupon activity',
      sys: 'System',
      sys_admin: 'Admins',
      sys_notice: 'Notifications',
      sys_log: 'Logs',
      sys_role: 'Roles',
      sys_os: 'Storage',
      config: 'Configuration',
      config_mall: 'Mall config',
      config_express: 'Freight config',
      config_order: 'Order config',
      config_wx: 'Mini-program config',
      stat: 'Statistics',
      stat_user: 'User stats',
      stat_order: 'Order stats',
      stat_goods: 'Product stats',
      external_link: 'External links',
      external_link_tencent_cos: 'Tencent cloud storage',
      external_link_tencent_sms: 'Tencent cloud SMS',
      external_link_weixin_pay: 'WeChat Pay',
      external_link_weixin_mpkf: 'WeChat mini-program',
      external_link_alibaba_oss: 'Ali cloud storage',
      external_link_qiniu_kodo: 'Qiniu cloud storage',
      external_link_kdniao_api: 'Kdniao API'
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
  },
  mall_aftersale: {
    table: {
      aftersale_sn: {
        label: 'Aftersale SN'
      },
      order_id: {
        label: 'Order ID'
      },
      user_id: {
        label: 'User ID'
      },
      type: {
        label: 'Type'
      },
      reason: {
        label: 'Reason'
      },
      amount: {
        label: 'Amount'
      },
      add_time: {
        label: 'Time added'
      },
      actions: {
        label: 'Actions'
      }
    }
  },
  mall_issue: {
    table: {
      id: {
        label: 'ID'
      },
      question: {
        label: 'Question'
      },
      answer: {
        label: 'Answer'
      },
      actions: {
        label: 'Actions'
      }
    },
    form: {
      question: {
        label: 'Question'
      },
      answer: {
        label: 'Answer'
      }
    }
  },
  mall_keyword: {
    table: {
      id: {
        label: 'ID'
      },
      keyword: {
        label: 'Keyword'
      },
      url: {
        label: 'URL'
      },
      is_hot: {
        label: 'Hot'
      },
      is_default: {
        label: 'Default'
      },
      actions: {
        label: 'Actions'
      }
    },
    form: {
      keyword: {
        label: 'Keyword'
      },
      url: {
        label: 'URL'
      },
      is_hot: {
        label: 'Hot',
        placeholder: 'Please choose',
        value: {
          true: 'Recommended',
          false: 'Common'
        }
      },
      is_default: {
        label: 'Default',
        placeholder: 'Please choose',
        value: {
          true: 'Default',
          false: 'Non default'
        }
      }
    }
  }
}
