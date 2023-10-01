import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";

export default function message() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Home</Text>
			</View>
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
