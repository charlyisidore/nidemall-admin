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
    },
    button: {
      add: '+ Add',
      batch_delete: 'Batch delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      create: 'Create',
      delete: 'Delete',
      detail: 'Details',
      download: 'Download',
      edit: 'Edit',
      permission: 'Permissions',
      reply: 'Reply',
      search: 'Search',
      settings: 'Settings',
      view: 'View'
    }
  },
  user_user: {
    table: {
      id: 'ID',
      nickname: 'Nickname',
      avatar: 'Avatar',
      mobile: 'Mobile',
      gender: 'Gender',
      birthday: 'Birthday',
      user_level: 'Level',
      status: 'Status',
      actions: 'Actions'
    },
    dialog: {
      edit: 'Edit user'
    },
    form: {
      username: 'Username',
      nickname: 'Nickname',
      mobile: 'Mobile',
      gender: 'Gender',
      user_level: 'Level',
      status: 'Status'
    }
  },
  user_address: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      name: 'Name',
      tel: 'Mobile',
      address_region: 'Region',
      address_detail: 'Detail',
      is_default: 'Default'
    }
  },
  user_collect: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      value_id: 'Item ID',
      add_time: 'Time added'
    }
  },
  user_footprint: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      goods_id: 'Product ID',
      add_time: 'Time added'
    }
  },
  user_history: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      keyword: 'Keyword',
      add_time: 'Time added'
    }
  },
  user_feedback: {
    table: {
      id: 'ID',
      username: 'Username',
      mobile: 'Mobile',
      feed_type: 'Type',
      content: 'Content',
      pic_urls: 'Pictures',
      add_time: 'Time added'
    }
  },
  mall_region: {
    table: {
      name: 'Name',
      type: 'Type',
      code: 'Code'
    }
  },
  mall_brand: {
    table: {
      id: 'ID',
      name: 'Name',
      pic_url: 'Picture',
      desc: 'Description',
      floor_price: 'Floor price',
      actions: 'Actions'
    },
    form: {
      name: 'Name',
      simple_desc: 'Description',
      pic_url: 'Picture',
      floor_price: 'Floor price'
    }
  },
  mall_category: {
    table: {
      id: 'ID',
      name: 'Name',
      icon_url: 'Icon',
      pic_url: 'Picture',
      keywords: 'Keywords',
      desc: 'Description',
      level: 'Level',
      actions: 'Actions'
    },
    form: {
      name: 'Name',
      keywords: 'Keywords',
      level: 'Level',
      pid: 'Parent',
      icon_url: 'Icon',
      pic_url: 'Picture',
      desc: 'Description'
    },
    value: {
      level_L1: 'Level 1',
      level_L2: 'Level 2'
    }
  },
  mall_order: {
    table: {
      order_sn: 'Order SN',
      avatar: 'Avatar',
      user_name: 'User name',
      add_time: 'Time added',
      order_status: 'Status',
      order_price: 'Order price',
      actual_price: 'Actual price',
      pay_time: 'Time paid',
      consignee: 'Consignee',
      mobile: 'Mobile',
      ship_sn: 'Ship SN',
      ship_channel: 'Ship channel',
      actions: 'Actions'
    }
  },
  mall_aftersale: {
    table: {
      aftersale_sn: 'Aftersale SN',
      order_id: 'Order ID',
      user_id: 'User ID',
      type: 'Type',
      reason: 'Reason',
      amount: 'Amount',
      add_time: 'Time added',
      actions: 'Actions'
    }
  },
  mall_issue: {
    table: {
      id: 'ID',
      question: 'Question',
      answer: 'Answer',
      actions: 'Actions'
    },
    form: {
      question: 'Question',
      answer: 'Answer'
    }
  },
  mall_keyword: {
    table: {
      id: 'ID',
      keyword: 'Keyword',
      url: 'URL',
      is_hot: 'Hot',
      is_default: 'Default',
      actions: 'Actions'
    },
    form: {
      keyword: 'Keyword',
      url: 'URL',
      is_hot: 'Hot',
      is_default: 'Default'
    },
    placeholder: {
      is_hot: 'Please choose',
      is_default: 'Please choose'
    },
    value: {
      is_hot_true: 'Hot',
      is_hot_false: 'Ordinary',
      is_default_true: 'Default',
      is_default_false: 'Non default'
    }
  },
  goods_list: {
    table: {
      id: 'ID',
      name: 'Name',
      pic_url: 'Picture',
      share_url: 'Share',
      detail: 'Detail',
      counter_price: 'Counter price',
      retail_price: 'Retail price',
      is_new: 'New',
      is_hot: 'Hot',
      is_on_sale: 'On sale',
      actions: 'Actions',
      goods_sn: 'Goods SN',
      gallery: 'Gallery',
      brief: 'Description',
      unit: 'Unit',
      keywords: 'Keywords',
      category_id: 'Category',
      brand_id: 'Brand'
    }
  },
  goods_edit: {
    section: {
      goods: 'Product',
      specifications: 'Specifications',
      products: 'Product variants',
      attributes: 'Attributes'
    },
    table: {
      specification_name: 'Name',
      specification_value: 'Value',
      specification_pic_url: 'Picture',
      specification_actions: 'Actions',
      product_specifications: 'Specifications',
      product_price: 'Price',
      product_number: 'Quantity',
      product_url: 'Picture',
      product_actions: 'Actions',
      attribute_name: 'Name',
      attribute_value: 'Value',
      attribute_actions: 'Actions'
    },
    form: {
      id: 'ID',
      goods_sn: 'Goods SN',
      name: 'Name',
      counter_price: 'Counter price',
      is_new: 'New',
      is_hot: 'Hot',
      is_on_sale: 'On sale',
      pic_url: 'Picture',
      gallery: 'Gallery',
      unit: 'Unit',
      keywords: 'Keywords',
      category_id: 'Category',
      brand_id: 'Brand',
      brief: 'Description',
      detail: 'Detail',
      specification_name: 'Name',
      specification_value: 'Value',
      specification_pic_url: 'Picture',
      product_specifications: 'Specifications',
      product_price: 'Price',
      product_number: 'Quantity',
      product_url: 'Picture',
      attribute_name: 'Name',
      attribute_value: 'Value'
    },
    value: {
      is_new_true: 'New',
      is_new_false: 'Not new',
      is_hot_true: 'Hot',
      is_hot_false: 'Ordinary',
      is_on_sale_true: 'On sale',
      is_on_sale_false: 'Not on sale',
      multiple_spec_true: 'Multiple',
      multiple_spec_false: 'Single'
    },
    button: {
      publish: 'Publish',
      edit: 'Edit'
    }
  },
  goods_comment: {
    table: {
      user_id: 'User ID',
      value_id: 'Item ID',
      star: 'Rating',
      content: 'Content',
      pic_urls: 'Pictures',
      add_time: 'Time added',
      actions: 'Actions'
    },
    dialog: {
      reply: 'Reply'
    },
    form: {
      content: 'Content'
    }
  },
  promotion_ad: {
    table: {
      id: 'ID',
      name: 'Name',
      content: 'Content',
      url: 'Picture',
      position: 'Position',
      link: 'Link',
      enabled: 'Enabled',
      actions: 'Actions'
    },
    form: {
      name: 'Name',
      content: 'Content',
      url: 'Picture',
      position: 'Position',
      link: 'Link',
      enabled: 'Enabled'
    },
    value: {
      position_1: 'Home',
      enabled_true: 'On',
      enabled_false: 'Off'
    }
  }
}
