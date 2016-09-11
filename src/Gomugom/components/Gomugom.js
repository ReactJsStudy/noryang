import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import GomugomActions from '../actions/GomugomActions';

const mapStateToProps = state => ({
    number: state.gomugom.number
});
const mapDispatchToProps = dispatch => ({
    increase: i => dispatch(GomugomActions.increase(i)),
    decrease: i => dispatch(GomugomActions.decrease(i))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Gomugom extends React.Component {
    render () {
        const {
            number,
            increase,
            decrease
        } = this.props;
        return (
            <div className="gom">
                <p>Some state changes: {number}</p>
                <button onClick={() => decrease(1)}>-</button>
                <button onClick={() => increase(1)}>+</button>
            </div>
        );
    }
}
