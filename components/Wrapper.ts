import BaseComponent, {withBaseProps} from './BaseComponent';

const defaultProps = {
    element: 'wrapper'
};

export default class Wrapper extends BaseComponent {
    static defaultProps = withBaseProps(defaultProps);
}
