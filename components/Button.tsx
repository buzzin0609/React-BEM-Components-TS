import BaseComponent from './BaseComponent';
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
    tag: 'button',
    element: 'btn'
};

export default function Button(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};


