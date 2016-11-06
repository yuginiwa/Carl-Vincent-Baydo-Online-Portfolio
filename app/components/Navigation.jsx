var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="column small-center medium-3">
          <IndexLink to="/" activeClassName="active-link">Carl Vincent Baydo</IndexLink>
        </div>
        <div className="column small-center medium-3">
          <Link to="/contact" activeClassName="active-link">Contact Me</Link>
        </div>
        <div className="column small-center medium-3">
          <a href="#" activeClassName="active-link">Blog</a>
        </div>
        <div className="column small-center medium-3">
          <Link to="/social" activeClassName="active-link">Social Accounts</Link>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
