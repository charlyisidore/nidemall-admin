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
      title: '用户管理',
      children: {
        user: {
          title: '会员管理'
        },
        address: {
          title: '收货地址'
        },
        collect: {
          title: '会员收藏'
        },
        footprint: {
          title: '会员足迹'
        },
        history: {
          title: '搜索历史'
        },
        feedback: {
          title: '意见反馈'
        }
      }
    }
  },
  message: {
    hello: '你好世界'
  }
}
