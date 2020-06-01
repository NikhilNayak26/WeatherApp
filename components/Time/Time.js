import React from 'react';

class Time extends React.Component {
  state = {
    curTime: null,
}
componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
    return (
      <div className="Time">
        <p>Current Time : {this.state.curTime}</p>
      </div>
    );
  }
}

export default Time;









