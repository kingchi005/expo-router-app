import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Button, Divider, TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";

const placeholholerTextColor = "#666";

export default function login() {
	const textInputProps = {
		placeholderTextColor: { placeholholerTextColor },
		style: { ...styles.TextInput },
		mode: "outlined",
		outlineColor: "#333",
	};
	return (
		<View style={styles.container}>
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

			<Button
				style={{ ...styles.button, marginBottom: 10 }}
				mode="contained"
				textColor="#ccc"
			>
				Login
			</Button>
			<Text style={{ textAlign: "right" }}>Forget Password?</Text>
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

			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "center",
					marginVertical: 20,
				}}
			>
				<Text>Don't have an Account? </Text>
				<Link href={"/(signup)/signup"}>
					<Text style={{ fontWeight: "bold", ...styles.linkText }}>
						Sign up
					</Text>
				</Link>
			</View>
			<View style={{ alignItems: "center", marginTop: 10 }}>
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
		backgroundColor: "#075591",
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
