import React, { useCallback, useState } from "react";
import { useConfig } from "@useContexts";
import { Button, Button2, ReactLogo } from "@atoms";
import { AuthForm } from "@organisms";

const Home = () => {
    const config = useConfig();
    const [valor, setValor] = useState('action')

    const setValorCallback = useCallback(() => {
        console.log('Hola')
        setValor('dark')
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={ReactLogo} className="App-ReactLogo" alt="ReactLogo" />
                <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button handleOnClick={setValorCallback}>Hola</Button>
            <AuthForm handleOnClick={setValorCallback}>Form home</AuthForm>
            <Button2></Button2>
        </div>
    );
};

export default Home;
