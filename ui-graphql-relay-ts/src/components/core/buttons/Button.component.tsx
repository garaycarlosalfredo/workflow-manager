import React from 'react';
import './Button.component.css';

interface ButtonProps {
    children: React.ReactNode;
}

interface ButtonStyle extends React.CSSProperties {
    '--button-margin': string;
}

function Button(props: ButtonProps) {
    const buttonStyle: ButtonStyle = {
        '--button-margin': '1rem',
    };

    return (
        <button className="button-normal" style={buttonStyle}>
            {props.children}
        </button>
    );
}

export default Button
