import React, { Component } from 'react';

export default class TextDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.passedDownText}
      </div>
    );
  }
}

TextDisplay.propTypes = {
  passedDownText: React.PropTypes.string,
};
