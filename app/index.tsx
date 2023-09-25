import { StyleSheet } from "react-native";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { View, Text } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function index() {
	return (
		<View style={styles.container}>
			<Text>indsdmdex</Text>
			<TouchableOpacity onPress={() => router.push("/login")}>
				<Text>Prese me</Text>
			</TouchableOpacity>
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
});
