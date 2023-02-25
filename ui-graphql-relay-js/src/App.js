import logo from "./logo.svg";
import "./App.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { Suspense } from "react";
import RelayEnvironment from "./RelayEnvironment";

function App() {
  return <div className="App">Mi APP</div>;
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
