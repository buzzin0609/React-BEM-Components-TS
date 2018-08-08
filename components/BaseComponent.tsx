import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BaseElement from './BaseElement';

const propTypes = {
    tag: PropTypes.string,
    block: PropTypes.string,
    element: PropTypes.string.isRequired,
    modifier: PropTypes.string,
    modifiers: PropTypes.arrayOf(PropTypes.string),
    extraClasses: PropTypes.string,
    id: PropTypes.string,
    attributes: PropTypes.object
};

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

export default class BaseComponent extends PureComponent {
    props: any;
    static propTypes: { tag: any; block: any; element: any; modifier: any; modifiers: any; extraClasses: any; id: any; attributes: any; };
    static defaultProps: { tag: string; block: string; modifier: string; modifiers: any[]; extraClasses: string; attributes: {}; };

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
				(acc, attr) => ({
					...acc,
					[`data-${attr}`.replace('data-data-', 'data-')]: this.props.attributes[attr]
				}), {}
			);
    }

    render() {
        return (
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

 BaseComponent.propTypes = propTypes;
 BaseComponent.defaultProps = defaultProps;

 export function withBaseProps(newProps, propType = 'defaultProps') {
     return {
         ...BaseComponent[propType],
         ...newProps
     };
 }