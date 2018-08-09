import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'h2',
    element: 'title'
};

export default class Title extends BaseComponent {
    static defaultProps = withBaseProps(defaultProps);
}
