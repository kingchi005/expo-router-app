import React from "react";
import Routes from "./app/Routes.js";

// theme nativebase
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components/index.js";
import material from "./native-base-theme/variables/material.js";

export default class App extends React.Component {
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Routes />
			</StyleProvider>
		);
	}
}
