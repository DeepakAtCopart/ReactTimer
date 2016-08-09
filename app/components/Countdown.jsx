var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentWillReceiveProps: function() {
    // There is legitimate question that how will the props change, as they are suppose not to change
    // Take a look at the totalSeconds property of Clock component, it gets updated every second
    // so tecknically we can listen to a lofe cycle method that watches for that change.
  },
  componentDidUpdate: function(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0}); // since we haven't used break the code will be executed for both stopped and paused
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUpdate: function(nextProps, nextState) {
    // companion to componentDidUpdate, it gets fired before the fact.
    // So, instead of taking previous Props and States it uses next props
    // and next states.

    // we can check just before an update happen(componentDidUpdate) and
    // just after the update happen(componentWillUpdate).
  },
  componentWillUnmount: function(){
    // this method gets automatically fired by react when right
    // before your component will get removed from DOM. Means it
    // is visually removed from the browser

    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentWillMount: function(){
    // this life cycle method will be triggered just before showing
    // which means we dont have any access to the props aor refs the
    // component on the screen, so if you wanna make any change to
    // the input fields or fetch values, we can't do it here.
  },
  componentDidMount: function(){
    // after everything gets rendered on the screen, we will have
    // access to any refs if we have to do any updating.
  },
  startTimer: function(){
    // this will keep calling the below function in a regular interval of 1 second
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0){
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus){
    this.setState({countdownStatus: newStatus});
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
