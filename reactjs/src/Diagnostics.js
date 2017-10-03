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
                <br/>Custom environment variable 1 : {process.env.REACT_APP_VAR_1}
                <br/>Custom environment variable 2 :  {process.env.REACT_APP_VAR_2}
            </div>
        );
    }
}

export default Diagnostics;
