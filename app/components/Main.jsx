var React = require("react");

var Navigation = require("Navigation");
var Footer = require("Footer");

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div>
                {props.children}
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

module.exports = Main;
