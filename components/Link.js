
import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent, { withBaseProps } from './BaseComponent';

const propTypes = {
    href: PropTypes.string.isRequired
};

const defaultProps = {
    tag: 'a',
    element: 'link'
};

export default class Link extends BaseComponent {
}

 Link.propTypes = withBaseProps(propTypes, 'propTypes');
 Link.defaultProps = withBaseProps(defaultProps);