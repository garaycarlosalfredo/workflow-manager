import React from 'react';
import './App.css';
import './media-login-buttons.css';
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { Suspense } from "react";
import RelayEnvironment from "./RelayEnvironment";
import HOME from "./pages/Home.component";
import { GoogleLogin } from '@react-oauth/google';
function App() {
  return (
    <div className="App">
      <div className='media-login-buttons'>
        <HOME></HOME>
      </div>

    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
