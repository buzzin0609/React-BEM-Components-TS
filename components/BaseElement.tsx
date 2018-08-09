import React, { PureComponent } from 'react';
import BaseComponent, {BaseProps} from "./BaseComponent";

export default class BaseElement extends PureComponent<BaseProps> {
    static defaultProps = BaseComponent.defaultProps;

    render() {
        return React.createElement(this.props.tag || BaseComponent.defaultProps.tag, this.props, this.props.children);
    }
}