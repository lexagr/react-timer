import React, {Component} from 'react';

class Button extends Component {
    render(){
        return (<button onClick={() => this.props.action()}>{this.props.text}</button>);
    }
}

export default Button;
