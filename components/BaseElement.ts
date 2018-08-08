import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BaseElement extends PureComponent {
    props: any;
    render() {
        return React.createElement(this.props.tag, this.props, this.props.children);
    }
}