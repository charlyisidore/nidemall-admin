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
      title: 'Users',
      children: {
        user: {
          title: 'Members'
        },
        address: {
          title: 'Addresses'
        },
        collect: {
          title: 'Favorites'
        },
        footprint: {
          title: 'Footprints'
        },
        history: {
          title: 'Search history'
        },
        feedback: {
          title: 'Feedbacks'
        }
      }
    },
    mall: {
      title: 'Mall',
      children: {
        region: {
          title: 'Regions'
        },
        brand: {
          title: 'Brands'
        },
        category: {
          title: 'Categories'
        },
        order: {
          title: 'Orders'
        },
        aftersale: {
          title: 'After-sales'
        },
        issue: {
          title: 'Issues'
        },
        keyword: {
          title: 'Keywords'
        }
      }
    }
  },
  message: {
    hello: 'hello world'
  }
}
