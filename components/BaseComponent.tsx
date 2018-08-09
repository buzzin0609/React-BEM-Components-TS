import React, { PureComponent } from 'react';
import BaseElement from './BaseElement';
import {baseDefaultProps, BaseProps} from "./BaseProps";

const safeProps = [
    'src', 'alt', 'onClick', 'onBlur', 'onSubmit', 'style'
];

export default class BaseComponent extends PureComponent<BaseProps> {
    static defaultProps = baseDefaultProps;

    get className() {

        const {
            block,
            element,
            modifier,
            modifiers,
            extraClasses
        } = this.props;

        return `${block ? `${block}__${element}` : ''} ${element} ${[modifier, ...modifiers].map(modifier => `${element}--${modifier}`).join(' ')} ${extraClasses}`.trim();
    }

    get attributes() {
		return Object.keys(this.props.attributes)
			.reduce(
				(acc, attr: string) => ({
					...acc,
					[`data-${attr}`.replace('data-data-', 'data-')]: this.props.attributes[attr]
				}), {}
			);
    }

    render() {
        return (
            <BaseElement
                tag={this.props.tag}
                id={this.props.id}
                className={this.className}
                {...safeProps.reduce(
                    (acc, prop) => ({
                        ...acc,
                        [prop]: this.props[prop]
                    }), {}
                )}
                {...this.attributes}
            >
                {this.props.children}
            </BaseElement>
        )
    }

}