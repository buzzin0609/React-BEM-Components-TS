import BaseComponent from './BaseComponent';
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
    tag: 'a',
    element: 'link'
};

export default function Link(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};