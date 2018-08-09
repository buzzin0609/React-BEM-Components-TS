import BaseComponent, {withBaseProps} from "./BaseComponent";

const defaultProps = {
	tag: 'img',
	element: 'img'
};

export default class Image extends BaseComponent {
	static defaultProps = withBaseProps(defaultProps);
}

