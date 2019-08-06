export default {
  namespace: 'global',
  state: {
    list: [
      {
        val: '是的我是的',
        isok: true,
      }
    ],
  },
  reducers: {
    setList(state, { payload }) {
      return {
        ...state,
        list: payload,
      }
    },
  }
};
