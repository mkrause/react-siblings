
import React from 'react';


export default props => {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    return children.map((child, index) => {
        if (!React.isValidElement(child)) {
            return child;
        }
        
        return React.cloneElement(child, {
            key: index,
            ...child.props,
        });
    });
};
