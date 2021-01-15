export default {
  state: {
    users: []
  },
  getters: {
    users(state) {
      return state.users
    }
  },
  actions: {
    fetchUsers(ctx) {
      let storagedUsers = window.localStorage.getItem('users')
      let users = []
      // window.localStorage.clear()

      if (storagedUsers) {
        users = JSON.parse(storagedUsers)
      }
      ctx.commit('updateUsers', users)
    },
    storeUsers({ getters }) {
      const serializedUsers = JSON.stringify(getters.users)
      window.localStorage.setItem('users', serializedUsers)
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
    addUser(state, newUser) {   
      if (newUser.chiefId) {
        const chiefIndex = state.users.findIndex(user => user.id == newUser.chiefId)
        state.users[chiefIndex].subordinates.push(newUser)
      } else {
        state.users.push(newUser)
      }
    }
  }
}