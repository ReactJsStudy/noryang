import React from 'react';
import PlayGround from './PlayGround';

export default class ArusantimoMain extends React.Component {
  componentDidMount() {
    console.log('sdsd');
  }
  render() {
    return (
      <div className="arusantimo">
        <PlayGround/>
      </div>
    );
  }
}
