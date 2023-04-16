import React from 'react'

interface FormProps extends React.HTMLProps<HTMLDivElement> {
    text: string;
}

function Form({ children, text }: FormProps) {
    return (
        <div className='form-login'>
            <p>{text}</p>
            {children}
        </div>
    )
}

export default Form
