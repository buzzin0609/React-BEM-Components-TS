import BaseComponent from "./BaseComponent";
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
	tag: 'img',
	element: 'img'
};

export default function Image(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};

