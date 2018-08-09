import BaseComponent from './BaseComponent';
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
    tag: 'p',
    element: 'text'
};

export default function Text(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};