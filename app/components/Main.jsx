var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;

// A parent can always update child's prop
// A state is something that a component can change
// A prop is something a component cant change
