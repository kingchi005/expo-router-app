import { Alert, View } from "react-native";
import React, { useContext, useState } from "react";
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
import { loginFormDataSchema } from "../../utils/validation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { userLogin } from "../../apiServices/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../../store";
import AppDataContext from "../../context";
const placeholholerTextColor = "#666";

// const schema = z.object({
// 	email: z.string().email(),
// 	password: z.string().min(6),
// });

// Usage example

// const formData:TformDate = {
// 	email: "test@example.com",
// 	password: "password123",
// };

export default function Login(props: any) {
	const [formData, setFormData] = useState<{
		email: string;
		password: string;
	}>({
		email: "",
		password: "",
	});

	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const {
		snackBarVisible,
		setSnackBarError,
		setApiKey,
		initialiseUserDetails,
	} = useContext(AppDataContext);
	const { mutate, isLoading } = useMutation({
		mutationFn: userLogin,
		onSuccess: async (data) => {
			console.log(data);
			if (data.key) {
				setApiKey(data.key);
				initialiseUserDetails();
				AsyncStorage.setItem(STORE_KEYS.API_AUTH_KEY, data.key).then(() => {
					router.push("/(drawer)/home/");
				});
			} else if (data?.non_field_errors) {
				setSnackBarError(data.non_field_errors);
			}
		},
		onError: (err: any) => {
			console.log("rq", err);
		},
	});

	// const navigation = useNavigation();

	const handleSubmit = () => {
		loginFormDataSchema
			.validate(formData, { abortEarly: false })
			.then((validatedData) => {
				console.log("Data is valid:", validatedData);
				mutate(formData);
			})
			.catch((error) => {
				console.log(error.errors.join(", "));
			});
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
					loading={isLoading}
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
				<Button
					textColor="white"
					onPress={() => {
						// setSnackBarVisible(true);
					}}
				>
					ujhgbv
				</Button>
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
