import BaseComponent from './BaseComponent';
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
    tag: 'h2',
    element: 'title'
};

export default function Title(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};
