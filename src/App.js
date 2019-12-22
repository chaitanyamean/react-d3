import React, {Component} from 'react';
import './App.css';
import ChartWrapper from './ChartWrapper';
import ProgressArc from './ProgressArc';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {percentComplete: 0.3};
      this.togglePercent = this.togglePercent.bind(this);
    }
   togglePercent() {
     const percentage = this.state.percentComplete === 0.7 ? 0.3 : 0.7;
     this.setState({percentComplete: percentage});
   }
   render() {
    console.log(this.state.percentComplete);  
    return (
      <ProgressArc
      percentComplete={this.state.percentComplete}
          
      />
    );
    }
  }

export default App;
