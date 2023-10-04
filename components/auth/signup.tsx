import { View, Text } from "react-native";
import React, { useState } from "react";
import {
	Button,
	Divider,
	Snackbar,
	TextInput,
	TouchableRipple,
} from "react-native-paper";
import Colors, { brandColor } from "../../constants/Colors";
import { authStyles } from "./../Themed";
import { router } from "expo-router";
// const placeholholerTextColor = "#666";

export default function Signup() {
	const [formData, setFormData] = useState<{
		full_name: String;
		email: string;
		password: string;
		ConfirmPassword: string;
		school: string;
	}>({
		full_name: "",
		email: "",
		password: "",
		ConfirmPassword: "",
		school: "",
	});

	const [securePasswordTextEntry, setSecurePasswordTextEntry] = useState(true);
	const [secureCpasswordTextEntry, setSecureCpasswordTextEntry] =
		useState(true);

	const handleSubmit = () => {
		// const safeInput =
		if (formData.ConfirmPassword !== formData.password)
			console.log("Password don't match");

		// console.log(formData);
		router.push("/(drawer)/home");
	};
	const textInputProps = {
		placeholderTextColor: "#666",
		style: { ...authStyles.TextInput },
		mode: "outlined",
		outlineColor: "#333",
	};
	const re = {
		email: "{user_email}",
		password: "{user_password}",
		school: "{user_school_Accr}",
	};

	return (
		<View style={authStyles.container}>
			{/* <TextInput
				label="Your Full Nmae"
				placeholder="your name"
				{...(textInputProps as any)}
				value={formData.full_name}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, full_name: v }))}
			/> */}
			<TextInput
				label="Email/Phone"
				placeholder="Type your email/phone"
				{...(textInputProps as any)}
				value={formData.email}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, email: v }))}
			/>
			<TextInput
				secureTextEntry={securePasswordTextEntry}
				label="Password"
				placeholder="Type your password"
				{...(textInputProps as any)}
				value={formData.password}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, password: v }))}
				right={
					<TextInput.Icon
						onPress={() => setSecurePasswordTextEntry(!securePasswordTextEntry)}
						icon={securePasswordTextEntry ? "eye" : "eye-off"}
					/>
				}
			/>
			<TextInput
				secureTextEntry={secureCpasswordTextEntry}
				label="Confirm Password"
				placeholder="Retype your password"
				{...(textInputProps as any)}
				value={formData.ConfirmPassword}
				onChangeText={(v) =>
					setFormData((prev) => ({ ...prev, ConfirmPassword: v }))
				}
				right={
					<TextInput.Icon
						onPress={() =>
							setSecureCpasswordTextEntry(!secureCpasswordTextEntry)
						}
						icon={secureCpasswordTextEntry ? "eye" : "eye-off"}
					/>
				}
			/>
			<TextInput
				label="Enter university"
				placeholder="Type university"
				{...(textInputProps as any)}
				value={formData.school}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, school: v }))}
			/>
			<TouchableRipple>
				<Button
					style={authStyles.button}
					mode="contained"
					onPress={handleSubmit}
					textColor="#ccc"
				>
					Join Now
				</Button>
			</TouchableRipple>
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
				<Text style={authStyles.linkText}>Terms of Service</Text>
			</View>
		</View>
	);
}
