
export default {
  namespace: 'list',
  state: {

    list: [
      {
        listIndex: '0',
        val: '五杀个香蕉麻辣棒',
        isok: true,
      }
    ],

    historys: [{
      historyIndex: '1',
      operation: '添加',
      content: '五杀个香蕉麻辣棒',
      goback: [{
        listIndex: '0',
        val: '五杀个香蕉麻辣棒',
        isok: true,
      }]
    }],

  },

  reducers: {
    add(state, { payload }) {
      state.list.push(payload);
      state.historys.unshift({
        historyIndex: state.historys.length + 1,
        operation: '添加',
        content: payload.val,
        goback: state.list
      })

      return {
        list: [...state.list],
        historys: state.historys,
      }
    },

    remove(state, { payload }) {
      state.historys.unshift({
        historyIndex: state.historys.length + 1,
        operation: '删除',
        content: state.list[payload].val,
        goback: state.list
      })
      state.list.splice(payload, 1);

      return {
        list: [...state.list],
        historys: state.historys,
      }
    },

    toggle(state, { payload }) {

      const list = state.list.map((item, index) => {
        return index === payload ? { ...item, isok: !item.isok } : item
      });

      if (state.list[payload].isok) {
        state.historys.unshift({
          historyIndex: state.historys.length + 1,
          operation: '取消选中',
          content: state.list[payload].val,
          goback: list
        })
      } else {
        state.historys.unshift({
          historyIndex: state.historys.length + 1,
          operation: '确认选中',
          content: state.list[payload].val,
          goback: list
        })
      };
      return {
        list: list,
        historys: state.historys,
      }
    },

    goBack(state, { payload }) {
      return {
        ...state,
        list: state.historys[payload].goback
      }
    }
  
  }
};
