var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="column medium-3">
          <IndexLink to="/">Carl Vincent Baydo</IndexLink>
        </div>
        <div className="column medium-3">
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="column medium-3">
          <Link to="/">Blog</Link>
        </div>
        <div className="column medium-3">
          <Link to="/social">Social Accounts</Link>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
