var React = require('react');
var ReactSlider = require('react-slider'); // see https://github.com/mpowaga/react-slider

// Wrap the slider, so that we can render the handles (and values) however we want...
var RangeSlider = React.createClass({
  getInitialState: function () {
    return {value: this.props.defaultValue};
  },

  onChange: function (value) {
    this.setState({value: value});
  },

  render: function() {
    return (
      <div className="range-slider">
        <div className="row">
          <ReactSlider {... (this.props)} value={this.state.value} onChange={this.onChange} />
        </div>
        <div className="row">
          <div className="pull-left">
            <span>{this.state.value[0]}</span>
          </div>
          <div className="pull-right">
            <span>{this.state.value[1]}</span>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <RangeSlider
    defaultValue={[1995, 2015]}
    min={1995}
    max={2015}
    minDistance={1}
    withBars
    pearling
  />,
  document.getElementById('container')
);
