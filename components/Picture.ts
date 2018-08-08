import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent, {withBaseProps} from "./BaseComponent";

const propTypes = {
	sources: PropTypes.arrayOf(PropTypes.object),
	src: PropTypes.string,
	alt: PropTypes.string
};

const defaultProps = {
	element: 'picture',
	sources: []
};

export default class Picture extends BaseComponent {
	render() {
		return (
			<picture className={this.className} {...this.attributes}>
				{
					this.props.sources.map(
						source => <source key={source.src} media={source.media} srcSet={source.src} />
					)
				}
				<img src={this.props.src} alt={this.props.alt} />
			</picture>
		);
	}
}

Picture.propTypes = withBaseProps(propTypes, 'propTypes');
Picture.defaultProps = withBaseProps(defaultProps);

