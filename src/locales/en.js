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
  message: {
    hello: 'hello world'
  }
}
