import { StyleSheet, View, Text } from "react-native";
import React from "react";
import {
	Button,
	Divider,
	TextInput,
	TouchableRipple,
} from "react-native-paper";
import Colors from "../../constants/Colors";
const placeholholerTextColor = "#666";

export default function signup() {
	const textInputProps = {
		placeholderTextColor: { placeholholerTextColor },
		style: { ...styles.TextInput },
		mode: "outlined",
		outlineColor: "#333",
	};
	return (
		<View style={styles.container}>
			<TextInput
				label="Your Full Nmae"
				placeholder="your name"
				{...(textInputProps as any)}
			/>
			<TextInput
				label="Email/Phone"
				placeholder="Type your email/phone"
				{...(textInputProps as any)}
			/>
			<TextInput
				label="Password"
				placeholder="Type your password"
				{...(textInputProps as any)}
			/>
			<TextInput
				label="Confirm Password"
				placeholder="Retype your password"
				{...(textInputProps as any)}
			/>
			<TextInput
				label="Enter university"
				placeholder="Type university"
				{...(textInputProps as any)}
			/>
			{/* <TouchableRipple> */}
			<Button style={styles.button} mode="contained" textColor="#ccc">
				Join Now
			</Button>
			{/* </TouchableRipple> */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Divider bold={true} style={{ marginTop: 20, marginBottom: 8 }} />
				<Text>Or signin with</Text>
				<Divider bold={true} style={{ marginTop: 20, marginBottom: 8 }} />
			</View>

			<View
				style={{
					paddingVertical: 10,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Button
					mode="outlined"
					icon="google"
					style={{
						backgroundColor: Colors.dark.background,
						borderRadius: 5,
						flex: 1,
					}}
					textColor="#ccc"
				>
					Google
				</Button>
				<Button
					mode="outlined"
					icon="microsoft"
					style={{
						backgroundColor: Colors.dark.background,
						borderRadius: 5,
						flex: 1,
					}}
					textColor="#ccc"
				>
					Microsoft
				</Button>
			</View>

			<View style={{ alignItems: "center" }}>
				<Text>By Using this app you agree with the </Text>
				<Text style={styles.linkText}>Terms of Service</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		// alignItems: "center",
		paddingHorizontal: 30,
		justifyContent: "center",
	},
	TextInput: {
		marginTop: 15,
		backgroundColor: Colors.dark.background,
	},

	button: {
		// marginBottom: ,
		backgroundColor: "#075591",
		borderRadius: 10,
		marginTop: 15,
	},

	linkText: {
		color: "#6234e1",
	},
});
