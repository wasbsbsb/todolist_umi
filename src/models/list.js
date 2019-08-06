export default {
  namespace: 'list',
  state: {
    list: [
      {
        val: '橘子好吃吃好子橘',
        isok: true,
      }
    ],
  },
  reducers: {
    add(state, { payload }) {
      return {
        list: [...state.list, payload]
      }
    },

    remove(state, { payload }) {
      state.list.splice(payload, 1)
      return {
        list: [...state.list]
      }
    },

    toggle(state, { payload }) {
      const list = state.list.map((r, index) => {
        return index === payload ? { ...r, isok: !r.isok } : r
      })

      return { list }
    }

  }
};
