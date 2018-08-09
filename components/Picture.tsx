import React from 'react';
import BaseComponent, {withBaseProps} from "./BaseComponent";

const defaultProps = {
	element: 'picture',
	sources: []
};

export default class Picture extends BaseComponent {
	static defaultProps = withBaseProps(defaultProps);

	render() {
		return (
			<picture className={this.className} {...this.attributes}>
				{
					this.props.sources && this.props.sources.map(
						(source: any) => <source key={source.src} media={source.media} srcSet={source.src} />
					) || React.Fragment
				}
				<img src={this.props.src} alt={this.props.alt} />
			</picture>
		);
	}
}
