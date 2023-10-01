import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../components/auth/login";
import Signup from "../../components/auth/signup";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { brandColor } from "../../constants/Colors";
import { Button } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const TopBarNav = createMaterialTopTabNavigator();
export default function index() {
	return (
		<View style={{ flex: 1 }}>
			<TopBarNav.Navigator
				screenOptions={{
					swipeEnabled: false,
					tabBarActiveTintColor: brandColor.app,
					tabBarInactiveTintColor: brandColor.grey,
					tabBarIndicatorStyle: { backgroundColor: brandColor.app },
					tabBarAllowFontScaling: true,
					tabBarStyle: { backgroundColor: brandColor.bg },
					tabBarLabelStyle: { fontWeight: "bold" },
				}}
			>
				<TopBarNav.Screen name="Sign in" component={Login} />
				<TopBarNav.Screen name="SIgn up" component={Signup} />
			</TopBarNav.Navigator>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		paddingHorizontal: 30,
		justifyContent: "center",
		marginTop: 20,
	},
	TextInput: {
		marginTop: 15,
		backgroundColor: brandColor.bg,
	},
	// ---------------------------------------
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	button: {
		// marginBottom: ,
		backgroundColor: brandColor.app,
		borderRadius: 10,
		marginTop: 15,
	},
	WloginWith: { flexDirection: "row", gap: 10 },
	loginWith: {
		paddingVertical: 8,
		paddingHorizontal: 38,
		width: "auto",
		marginVertical: 5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#99a",
	},
	linkText: {
		color: "#6234e1",
	},
});
