import BaseComponent from './BaseComponent';
import * as React from "react";
import {BaseProps} from "./BaseProps";

const defaultProps = {
    element: 'wrapper'
};

export default function Wrapper(props?: BaseProps) {
    return (<BaseComponent element={'wrapper'} {...defaultProps } {...props} />);
};
