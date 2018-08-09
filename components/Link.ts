import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'a',
    element: 'link'
};

export default class Link extends BaseComponent {
    static defaultProps = withBaseProps(defaultProps);
};