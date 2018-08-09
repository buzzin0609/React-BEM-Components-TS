import React, { PureComponent } from 'react';
import BaseElement from './BaseElement';

export interface BaseProps {
    [index: string]: any;
    tag?: string;
    block?: string;
    element: string;
    modifier?: string;
    modifiers?: string[];
    extraClasses?: string;
    id?: string;
    attributes?: any;
    src?: string;
    alt?: string;
    href?: string;
    sources?: string[];
}

const defaultProps = {
    tag: 'div',
    block: '',
    modifier: 'default',
    modifiers: [],
    extraClasses: '',
    attributes: {}
};

const safeProps = [
    'src', 'alt', 'onClick', 'onBlur', 'onSubmit'
];

export default class BaseComponent extends PureComponent<BaseProps> {
    static defaultProps = defaultProps;

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
            // @ts-ignore
            <BaseElement
                // @ts-ignore
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

 export function withBaseProps(newProps: any, propType = 'defaultProps'): any {
     return {
        // @ts-ignore
         ...BaseComponent[propType],
         ...newProps
     };
 }