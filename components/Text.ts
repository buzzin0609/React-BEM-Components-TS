import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'p',
    element: 'text'
};

export default class Text extends BaseComponent {
    static defaultProps = withBaseProps(defaultProps);
}
