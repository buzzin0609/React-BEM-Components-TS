import React, { PureComponent } from 'react';
import {baseDefaultProps, BaseProps} from "./BaseProps";

export default class BaseElement extends PureComponent<BaseProps> {
    render() {
        const {
            tag,
            ...props
        } = this.props;
        return React.createElement(tag || baseDefaultProps.tag, props, this.props.children);
    }
}