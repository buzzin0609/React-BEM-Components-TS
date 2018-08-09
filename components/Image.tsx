import BaseComponent, {BaseProps} from "./BaseComponent";
import * as React from "react";

const defaultProps = {
	tag: 'img',
	element: 'img'
};

export default function Image(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};

