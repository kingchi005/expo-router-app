import { Alert, View } from "react-native";
import React, { useState } from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import {
	Button,
	Divider,
	TextInput,
	TouchableRipple,
} from "react-native-paper";
import Colors, { brandColor } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { authStyles } from "./../Themed";
import z from "zod";

const placeholholerTextColor = "#666";

// const ZformData = z.object({
// 	email: z.string({
// 		invalid_type_error: "email must be a strng",
// 		required_error: "email/phone is required",
// 	}),
// 	password: z.string({
// 		required_error: "password is required",
// 	}),
// });

// type TformData = z.infer<typeof ZformData>;

export default function Login({ navigation }: any) {
	const [formData, setFormData] = useState<{
		email: string;
		password: string;
	}>({
		email: "",
		password: "",
	});

	const [secureTextEntry, setSecureTextEntry] = useState(true);

	const handleSubmit = () => {
		// const safeInput =
		console.log(formData);
	};
	const textInputProps = {
		placeholderTextColor: placeholholerTextColor,
		style: { ...authStyles.TextInput },
		mode: "outlined",
		outlineColor: "#333",
	};
	return (
		<View style={authStyles.container}>
			<TextInput
				label="Email/Phone"
				placeholder="Type your email/phone"
				value={formData.email}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, email: v }))}
				{...(textInputProps as any)}
			/>

			<TextInput
				label="Password"
				placeholder="Type your password"
				secureTextEntry={secureTextEntry}
				value={formData.password}
				onChangeText={(v) => setFormData((prev) => ({ ...prev, password: v }))}
				right={
					<TextInput.Icon
						onPress={() => setSecureTextEntry(!secureTextEntry)}
						icon={secureTextEntry ? "eye" : "eye-off"}
					/>
				}
				{...(textInputProps as any)}
			/>
			<TouchableRipple>
				<Button
					style={{ ...authStyles.button, marginBottom: 10 }}
					onPress={handleSubmit}
					mode="contained"
					textColor="#ccc"
				>
					Login
				</Button>
			</TouchableRipple>
			<Text style={{ textAlign: "right", marginBottom: 30 }}>
				Forget Password?
			</Text>
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
						backgroundColor: brandColor.bg,
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
						backgroundColor: brandColor.bg,
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
				{/* <Button
					textColor="white"
					onPress={() => navigation.navigate("Sign up")}
				>
					ujhgbv
				</Button> */}
				{/* <Link >
					<Text style={{ fontWeight: "bold", ...authStyles.linkText }}>
						Sign up
					</Text>
				</Link> */}
			</View>
			<View style={{ alignItems: "center", marginTop: 10 }}>
				<Text>By Using this app you agree with the </Text>
				<Text style={authStyles.linkText}>Terms of Service</Text>
			</View>
		</View>
	);
}
