import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

window.onload = () => {
	const elem = document.getElementById("app");
	ReactDOM.render(<App />, elem);
};
