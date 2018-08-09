import BaseComponent from './BaseComponent';
import {BaseProps} from "./BaseComponent";
import * as React from "react";

const defaultProps = {
    element: 'wrapper'
};

export default function Wrapper(props?: BaseProps) {
    return (<BaseComponent element={'wrapper'} {...defaultProps } {...props} />);
};
