import CONST from '../../App/constants'

export default {
	increase(n) {
        return { type: CONST.GOMUGOM_Increase, amount: n }
    },
    decrease(n) {
        return { type: CONST.GOMUGOM_Decrease, amount: n }
    }
};
