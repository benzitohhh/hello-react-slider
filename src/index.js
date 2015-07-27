var React = require('react');
var ReactSlider = require('react-slider'); // see https://github.com/mpowaga/react-slider

// Wrap the slider, so that we can render the handles (and values) however we want...
var MySlider = React.createClass({
  getInitialState: function () {
    return {value: this.props.defaultValue};
  },

  onChange: function (value) {
    this.setState({value: value});
  },

  render: function() {
    // For now, add values on the handles
    // In future... perhaps show values at ends of slider (as per airbnb)?
    var handles = this.state.value.map(function(val, i) {
      return <div key={i}>{val}</div>;
    });
    return (
      <ReactSlider {... (this.props)} value={this.state.value} onChange={this.onChange} >
        {handles}
      </ReactSlider>
    );
  }
});

React.render(
  <MySlider
    defaultValue={[1997, 2013]}
    min={1995}
    max={2015}
    minDistance={1}
    withBars
    pearling
  />,
  document.getElementById('container')
);
