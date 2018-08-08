import BaseComponent, { withBaseProps } from './BaseComponent';

const defaultProps = {
    tag: 'h2',
    element: 'title'
};

export default class Title extends BaseComponent {
}

Title.defaultProps = withBaseProps(defaultProps);