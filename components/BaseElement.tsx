import React, { PureComponent } from 'react';
import {baseDefaultProps, BaseProps} from "./BaseProps";

export default class BaseElement extends PureComponent<BaseProps> {
    render() {
        return React.createElement(this.props.tag || baseDefaultProps.tag, this.props, this.props.children);
    }
}