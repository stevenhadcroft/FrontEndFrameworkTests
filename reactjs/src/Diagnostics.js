import React, { Component } from 'react';

class Diagnostics extends Component {

    render() {

        var diagStyle = {
            position:'fixed',
            left:'0px',
            top:'0px'
        }

        return (
            <div style={diagStyle}>
                <br/>You are running this application in {process.env.NODE_ENV}
                <br/>You are running this application in {process.env.REACT_APP_VAR_1}
                <br/>You are running this application in {process.env.REACT_APP_VAR_2}
            </div>
        );
    }
}

export default Diagnostics;
