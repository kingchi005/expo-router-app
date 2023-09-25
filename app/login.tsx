import { Alert, StyleSheet } from "react-native";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { View, Text } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function login() {
	return (
		<View style={styles.container}>
			<Text>indsdmdex</Text>

			<TouchableOpacity
				onPress={() => Alert.alert("clicked")}
				style={styles.button}
			>
				<Text>Prese me</Text>
			</TouchableOpacity>
			<View></View>
			<View style={styles.WloginWith}>
				<TouchableOpacity style={styles.loginWith}>
					<Text>Google</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.loginWith}>
					<Text>Google</Text>
				</TouchableOpacity>
			</View>
			<Text>By Using this app you agree with the </Text>
			<Text style={styles.linkText}>Terms of Service</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
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
		paddingVertical: 8,
		paddingHorizontal: 100,
		width: "auto",
		marginVertical: 5,
		backgroundColor: "#1d9bfd",
		borderRadius: 5,
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
