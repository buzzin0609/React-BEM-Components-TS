
import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent, {withBaseProps} from './BaseComponent';


const defaultProps = {
    element: 'wrapper'
};

export default class Wrapper extends BaseComponent {
}

Wrapper.defaultProps = withBaseProps(defaultProps);