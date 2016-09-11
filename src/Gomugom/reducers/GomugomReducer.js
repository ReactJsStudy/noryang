import CONST from '../../App/constants';

const GomugomReducer = {
    [CONST.GOMUGOM_Increase]: (state, { amount }) => (
        { number: state.number + amount }
    ),
    [CONST.GOMUGOM_Decrease]: (state, { amount }) => (
        { number: state.number - amount }
    )
};

export default (state = {number: 1}, action) =>
	GomugomReducer[action.type]
    ? GomugomReducer[action.type](state, action)
    : state;
