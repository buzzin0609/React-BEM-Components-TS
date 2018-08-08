import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'button',
    element: 'btn'
};

export default class Button extends BaseComponent {
}

 Button.defaultProps = withBaseProps(defaultProps);