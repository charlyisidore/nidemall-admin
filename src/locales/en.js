// https://element.eleme.cn/#/en-US/component/i18n
import el from 'element-ui/lib/locale/lang/en'

export default {
  ...el,
  lang: 'English',
  app: {
    menu: {
      dashboard: 'Dashboard',
      user: 'Users',
      user_user: 'Users',
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
      goods: 'Goods',
      goods_list: 'List goods',
      goods_create: 'Add goods',
      goods_edit: 'Edit goods',
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
      stat_goods: 'Goods stats',
      external_link: 'External links',
      external_link_tencent_cos: 'Tencent cloud storage',
      external_link_tencent_sms: 'Tencent cloud SMS',
      external_link_weixin_pay: 'WeChat Pay',
      external_link_weixin_mpkf: 'WeChat mini-program',
      external_link_alibaba_oss: 'Ali cloud storage',
      external_link_qiniu_kodo: 'Qiniu cloud storage',
      external_link_kdniao_api: 'Kdniao API',
      profile_password: 'Change password',
      profile_notice: 'Notifications'
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
    },
    message: {
      list_loading: 'Loading...'
    }
  },
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
  dashboard: {
    section: {
      user_total: 'Users',
      goods_total: 'Goods',
      product_total: 'Products',
      order_total: 'Orders'
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
    },
    placeholder: {
      filter_username: 'Username',
      filter_user_id: 'User ID',
      filter_mobile: 'Mobile',
      gender: 'Please choose',
      user_level: 'Please choose',
      status: 'Please choose'
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
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_name: 'Name'
    }
  },
  user_collect: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      value_id: 'Item ID',
      add_time: 'Time added'
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_value_id: 'Item ID'
    }
  },
  user_footprint: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      goods_id: 'Goods ID',
      add_time: 'Time added'
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_goods_id: 'Goods ID'
    }
  },
  user_history: {
    table: {
      id: 'ID',
      user_id: 'User ID',
      keyword: 'Keyword',
      add_time: 'Time added'
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_keyword: 'Keyword'
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
    },
    placeholder: {
      filter_username: 'Username',
      filter_id: 'Feedback ID'
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
    },
    placeholder: {
      filter_id: 'ID',
      filter_name: 'Name'
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
    },
    placeholder: {
      filter_nickname: 'Nickname',
      filter_consignee: 'Consignee',
      filter_order_sn: 'Order SN',
      filter_time_start: 'From date',
      filter_time_end: 'To date',
      filter_order_status: 'Status',
      ship_channel: 'Please choose'
    }
  },
  mall_aftersale: {
    section: {
      all: 'All',
      uncheck: 'Awaiting approval',
      unrefund: 'To refund'
    },
    table: {
      aftersale_sn: 'Aftersale SN',
      order_id: 'Order ID',
      user_id: 'User ID',
      type: 'Type',
      reason: 'Reason',
      amount: 'Amount',
      add_time: 'Time added',
      actions: 'Actions'
    },
    placeholder: {
      filter_aftersale_sn: 'Aftersale SN',
      filter_order_id: 'Order ID'
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
    },
    placeholder: {
      filter_question: 'Question',
      answer: 'Content'
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
      filter_keyword: 'Keyword',
      filter_url: 'URL',
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
    },
    placeholder: {
      filter_goods_id: 'Goods ID',
      filter_goods_sn: 'Goods SN',
      filter_name: 'Goods name'
    }
  },
  goods_edit: {
    section: {
      goods: 'Goods',
      specifications: 'Specifications',
      products: 'Products',
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
    placeholder: {
      unit: '件 / 个 / 盒'
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
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_value_id: 'Item ID'
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
    },
    placeholder: {
      filter_name: 'Name',
      filter_content: 'Content',
      position: 'Please choose',
      enabled: 'Please choose'
    },
    help: {
      url: 'Only jpg/png files can be uploaded and do not exceed 1024kb'
    }
  },
  promotion_coupon: {
    text: {
      days: 'days',
      to_time: 'to',
      units: 'units'
    },
    table: {
      id: 'ID',
      name: 'Name',
      desc: 'Description',
      tag: 'Tag',
      min: 'Min spend',
      discount: 'Discount',
      limit: 'Limit/user',
      goods_type: 'Goods type',
      type: 'Coupon type',
      total: 'Quantity',
      status: 'Status',
      actions: 'Actions',
      category_name: 'Name',
      category_actions: 'Actions',
      goods_name: 'Name',
      goods_sn: 'Goods SN',
      goods_actions: 'Actions'
    },
    form: {
      name: 'Name',
      desc: 'Description',
      tag: 'Tag',
      min: 'Min spend',
      discount: 'Discount',
      limit: 'Limit/user',
      type: 'Coupon type',
      total: 'Quantity',
      time_type: 'Validity period',
      goods_type: 'Goods type'
    },
    value: {
      time_type_0: 'Relative time',
      time_type_1: 'Absolute time',
      goods_type_0: 'All',
      goods_type_1: 'By category',
      goods_type_2: 'By goods'
    },
    placeholder: {
      filter_name: 'Name',
      filter_type: 'Coupon type',
      filter_status: 'Status',
      start_time: 'Select date',
      end_time: 'Select date',
      category: 'Select category',
      goods: 'Goods name / Goods ID'
    }
  },
  promotion_coupon_detail: {
    table: {
      name: 'Name',
      desc: 'Description',
      tag: 'Tag',
      type: 'Coupon type',
      min: 'Min spend',
      discount: 'Discount',
      limit: 'Limit/user',
      status: 'Status',
      goods_type: 'Goods type',
      time_scope: 'Validity period',
      code: 'Code',
      total: 'Quantity',
      id: 'ID',
      user_id: 'User ID',
      add_time: 'Time added',
      use_status: 'Use status',
      order_id: 'Order ID',
      used_time: 'Time used'
    },
    placeholder: {
      filter_user_id: 'User ID',
      filter_status: 'Status'
    }
  },
  promotion_topic: {
    table: {
      title: 'Title',
      subtitle: 'Subtitle',
      pic_url: 'Picture',
      content: 'Content',
      price: 'Price',
      read_count: 'Read count',
      actions: 'Actions'
    },
    placeholder: {
      filter_title: 'Title',
      filter_subtitle: 'Subtitle',
      filter_sort: 'Sort by'
    }
  },
  promotion_topic_edit: {
    dialog: {
      add_goods: 'Add goods'
    },
    table: {
      goods_id: 'ID',
      goods_pic_url: 'Picture',
      goods_name: 'Name',
      goods_brief: 'Description',
      goods_actions: 'Actions',
      search_goods_id: 'ID',
      search_goods_pic_url: 'Picture',
      search_goods_name: 'Name'
    },
    form: {
      title: 'Title',
      subtitle: 'Subtitle',
      pic_url: 'Picture',
      content: 'Content',
      price: 'Price',
      read_count: 'Read count',
      goods: 'Goods'
    },
    placeholder: {
      search_goods_sn: 'Goods SN',
      search_name: 'Name'
    },
    button: {
      goods_create: 'Add'
    }
  },
  promotion_groupon_rule: {
    table: {
      id: 'ID',
      goods_id: 'Goods ID',
      goods_name: 'Goods name',
      pic_url: 'Picture',
      discount: 'Discount',
      discount_member: 'Min buy quantity',
      status: 'Status',
      expire_time: 'Expire time',
      actions: 'Actions'
    },
    form: {
      goods_id: 'Goods ID',
      discount: 'Discount',
      discount_member: 'Min buy quantity',
      expire_time: 'Expire time'
    },
    placeholder: {
      filter_goods_id: 'Goods ID',
      expire_time: 'Select date'
    }
  },
  promotion_groupon_activity: {
    table: {
      order_id: 'Order ID',
      user_id: 'User ID',
      groupon_order_id: 'Order ID',
      groupon_user_id: 'User ID',
      subgroupons_length: 'Number used',
      rules_discount: 'Discount',
      rules_discount_member: 'Min buy quantity',
      groupon_share_url: 'Picture',
      rules_add_time: 'Time added',
      rules_expire_time: 'Expire time'
    },
    placeholder: {
      filter_groupon_rule_id: 'Rule ID'
    }
  },
  sys_admin: {
    table: {
      id: 'ID',
      username: 'Username',
      avatar: 'Avatar',
      role_ids: 'Roles',
      actions: 'Actions'
    },
    form: {
      username: 'Username',
      password: 'Password',
      avatar: 'Avatar',
      role_ids: 'Roles'
    },
    placeholder: {
      filter_username: 'Username',
      role_ids: 'Please choose'
    }
  },
  sys_notice: {
    table: {
      title: 'Title',
      content: 'Content',
      add_time: 'Time added',
      admin_id: 'Admin ID',
      actions: 'Actions'
    },
    form: {
      title: 'Title',
      content: 'Content'
    },
    placeholder: {
      filter_title: 'Title',
      filter_content: 'Content'
    }
  },
  sys_log: {
    table: {
      admin: 'Admin',
      ip: 'IP address',
      add_time: 'Time added',
      type: 'Type',
      action: 'Action',
      status: 'Status',
      result: 'Result',
      comment: 'Comment'
    },
    placeholder: {
      filter_name: 'Admin'
    }
  },
  sys_role: {
    table: {
      name: 'Name',
      desc: 'Description',
      actions: 'Actions'
    },
    form: {
      name: 'Name',
      desc: 'Description'
    },
    placeholder: {
      filter_name: 'Name'
    }
  },
  sys_os: {
    table: {
      key: 'Key',
      name: 'Name',
      type: 'Type',
      size: 'size',
      url: 'Picture',
      url_link: 'Link',
      actions: 'Actions'
    },
    form: {
      name: 'Name'
    },
    placeholder: {
      filter_key: 'Key',
      filter_name: 'Name'
    },
    button: {
      upload: 'Upload'
    }
  },
  config_mall: {
    form: {
      mall_name: 'Name',
      mall_address: 'Address',
      mall_coordinates: 'Coordinates',
      mall_phone: 'Phone',
      mall_qq: 'QQ'
    },
    placeholder: {
      mall_longitude: 'Longitude',
      mall_latitude: 'Latitude'
    }
  },
  config_express: {
    form: {
      freight_min: 'Min spend for free delivery',
      freight_value: 'Delivery fee'
    }
  },
  config_order: {
    form: {
      unpaid: 'Timeout after order creation',
      unconfirm: 'Overdue after shipment',
      comment: 'Overdue after confirming receipt'
    },
    help: {
      unpaid: 'The order is automatically canceled if the user does not pay',
      unconfirm: 'No confirmation of receipt, then the order is automatically confirmed for receipt',
      comment: 'If the product is not evaluated, it will be disqualified'
    }
  },
  config_wx: {
    section: {
      home: 'Home',
      other: 'Other'
    },
    form: {
      index_new: 'Number of new goods shown',
      index_hot: 'Number of hot goods shown',
      index_brand: 'Number of brands shown',
      index_topic: 'Number of topics shown',
      catlog_list: 'Number of categories shown',
      catlog_goods: 'Number of goods shown',
      share: 'Product sharing function'
    }
  },
  profile_notice: {
    section: {
      unread: 'Unread',
      read: 'Read',
      all: 'All'
    },
    table: {
      notice_title: 'Title',
      add_time: 'Time added',
      read_time: 'Time read',
      actions: 'Actions'
    },
    placeholder: {
      filter_title: 'Title'
    },
    button: {
      batch_read: 'Batch read',
      read: 'Read'
    }
  }
}
