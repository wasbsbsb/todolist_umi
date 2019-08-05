export default {
    namespace: 'global',
    state: {
        list: '',
    },
    reducers: {
        setList(state, { payload: val }) {
            return {
                ...state,
                list: val
            }
        },
    }
};
