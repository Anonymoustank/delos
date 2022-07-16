import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ControllerScheme } from './ControllerScheme/ControllerScheme';
import { Dashboard } from './Dashboard/Dashboard';
import './index.css';
import { LiveRecord } from './LiveRecord/LiveRecord';
import reportWebVitals from './reportWebVitals';

type Page = "LiveRecord" | "Dashboard" | "ControllerScheme"

function App() {
  const [page, setPage] = useState<Page>("LiveRecord");

  let toRender;
  if (page === "LiveRecord") {
    toRender = <LiveRecord/>
  } else if (page === "ControllerScheme") {
    toRender = <ControllerScheme/>
  } else {
    toRender = <Dashboard/>
  }
  return (
    <React.StrictMode>
      <div className='flex header'>
        <button onClick={(event) => { setPage("LiveRecord") }} className={page === "LiveRecord" ? "headerButtonActivated" : "headerButton"}>LiveRecord</button>
        <button onClick={(event) => { setPage("Dashboard") }} className={page === "Dashboard" ? "headerButtonActivated" : "headerButton"}>Dashboard</button>
        <button onClick={(event) => { setPage("ControllerScheme") }} className={page === "ControllerScheme" ? "headerButtonActivated" : "headerButton"}>ControllerScheme</button>
      </div>

      <div className="content">
        {toRender}
      </div>
    </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
