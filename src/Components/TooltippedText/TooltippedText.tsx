import React, { CSSProperties, ReactElement } from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface TooltippedTextProps{
    text: string;
    children: ReactElement;
    tooltipStyle?: CSSProperties;
    placement?: 'auto-start'    |
                'auto'          |
                'auto-end'      |
                'top-start'     |
                'top'           |
                'top-end'       |
                'right-start'   |
                'right'         |
                'right-end'     |
                'bottom-end'    |
                'bottom'        |
                'bottom-start'  |
                'left-end'      |
                'left'          |
                'left-start'    ;
}

function TooltippedText(props: TooltippedTextProps) {
    return (
        <OverlayTrigger
            placement={props.placement || "top"}
            overlay={
                <Tooltip id={`tooltipped-text-${props.placement}`} style={ props.tooltipStyle }>
                    { props.text }
                </Tooltip>
            }
        >{ props.children }</OverlayTrigger>
    );
}

export default TooltippedText;