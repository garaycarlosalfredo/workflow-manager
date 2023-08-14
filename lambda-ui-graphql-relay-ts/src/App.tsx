import "./App.css";

import * as React from "react";

import { Home } from "@pages";
import { UserContext } from "@contexts2";

/**
 * Our Web Application
 */

export default function App() {
  const [isChecked, setIsChecked] = React.useState(false);

  const userContext = React.useContext(UserContext)
  const { setUser, user } = userContext

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setUser(isChecked ? { theme: 'light' } : { theme: 'dark' })
  };
  return (<>
    <Home></Home>
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Checkbox (Controlado por estado)</label>
    </div>
  </>
  );
}
