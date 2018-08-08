import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'button',
    element: 'btn'
};

export default class Button extends BaseComponent {
    static defaultProps: any;
}

 Button.defaultProps = withBaseProps(defaultProps);