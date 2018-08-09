import React from 'react';
import BaseComponent, {BaseProps} from "./BaseComponent";

const defaultProps = {
	element: 'picture',
	sources: []
};

export default function Picture(props: BaseProps) {
	return (
		<BaseComponent {...defaultProps} {...props}>
            {
                props.sources && props.sources.map(
                    (source: any) => <source key={source.src} media={source.media} srcSet={source.src} />
                ) || React.Fragment
            }
            <img src={props.src} alt={props.alt} />
		</BaseComponent>
	)
};