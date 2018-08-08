import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BaseComponent, {withBaseProps} from "./BaseComponent";

const propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string
};

const defaultProps = {
	tag: 'img',
	element: 'img'
};

export default class Image extends BaseComponent {
}

Image.propTypes = withBaseProps(propTypes, 'propTypes');
Image.defaultProps = withBaseProps(defaultProps);

