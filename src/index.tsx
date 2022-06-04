import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
