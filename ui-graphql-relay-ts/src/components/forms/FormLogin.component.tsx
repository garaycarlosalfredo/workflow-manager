import React, { useState } from 'react'
import './FormLogin.component.css'
import Button from '../core/buttons/Button.component'
import Form from '../core/forms/Form.component'
import Input from '../core/inputs/Input.component'

function FormLogin() {

    const [form, setForm] = useState({})
    console.log(form)

    return (
        <Form text={"Prop de Form"} className={'form-login'}>
            <div>Child</div>
            <Input handleOnChange={setForm} />
            <Button>Login</Button>
        </Form>
    )
}

export default FormLogin
