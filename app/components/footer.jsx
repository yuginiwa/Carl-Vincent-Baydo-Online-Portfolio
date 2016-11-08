var React = require("react");

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="row small-centered">
        <div className="social-icons">
          <a href="https://web.facebook.com/daiske.baydo" target="_blank"><i className="ion-social-facebook"></i></a>
          <a href="https://twitter.com/yuginiwa" target="_blank"><i className="ion-social-twitter"></i></a>
          <a href="https://plus.google.com/u/0/113843193590386309590" target="_blank"><i className="ion-social-googleplus"></i></a>
          <a href="#" target="_blank"><i className="ion-social-skype"></i></a>
          <a href="https://www.linkedin.com/profile/view?id=AAMAABFF3R0BfnRh_JiFBldyaYXuVfovPk10jtI&trk=hp-identity-name" target="_blank"><i className="ion-social-linkedin"></i></a>
          <a href="#" ><i className="ion-social-youtube"></i></a>
        </div>
           <p>Copyright &copy; by Carl Vincent Baydo || 2016</p>
      </footer>
    );
  }
});

module.exports = Footer;
