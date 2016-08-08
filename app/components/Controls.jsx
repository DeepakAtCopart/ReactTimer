var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus:  React.PropTypes.string.isRequired
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      // arrow function, its job is to return proper
      // button depending upon the value of countdown status
      if (countdownStatus === 'started'){
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow"></button>
      </div>
    )
  }
});

module.exports = Controls;
