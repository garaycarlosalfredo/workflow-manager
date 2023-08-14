import React from "react";
import { useConfig } from "@useContexts";
import { Button, Button2, ReactLogo } from "@atoms";

const Home = () => {
    const config = useConfig();
    console.log('config', config)
    return (
        <div className="App">
            <header className="App-header">
                <img src={ReactLogo} className="App-ReactLogo" alt="ReactLogo" />
                <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button>Hola</Button>
            <Button2></Button2>
        </div>
    );
};

export default Home;
