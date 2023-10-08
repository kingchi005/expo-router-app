import { StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import {
	ActivityIndicator,
	Button,
	Divider,
	Menu,
	Snackbar,
	TextInput,
	TouchableRipple,
} from "react-native-paper";
import Colors, { brandColor } from "../../constants/Colors";
import { authStyles, View, Text } from "./../Themed";
import { router } from "expo-router";
import { regFormDataSchema } from "../../utils/validation";
import { getSchools, userRegister } from "../../apiServices/auth";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "@expo/vector-icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../../store";
// const placeholholerTextColor = "#666";

type TSchool = {
	name: string;
	school_acronym: string;
};

export default function Signup() {
	const [formData, setFormData] = useState<{
		// full_name: String;
		email: string;
		password: string;
		ConfirmPassword: string;
		school: string;
	}>({
		// full_name: "",
		email: "",
		password: "",
		ConfirmPassword: "",
		school: "",
	});

	const [securePasswordTextEntry, setSecurePasswordTextEntry] = useState(true);
	const [secureCpasswordTextEntry, setSecureCpasswordTextEntry] =
		useState(true);
	const [selcteVisisblr, setSelcteVisisblr] = useState(false);

	const { mutate, isLoading } = useMutation({
		mutationFn: userRegister,
		onSuccess: async (data) => {
			console.log(data);
			if (data.message == "User registered successfully") {
				router.push("/auth/");
			} else if (data.error) {
				console.log("Registeration Error: ", data.error);
			}
		},
		onError: (err: any) => {
			console.log("RQError", err);
		},
	});

	const openMenu = () => setSelcteVisisblr(true);

	const closeMenu = () => setSelcteVisisblr(false);

	const handleSubmit = () => {
		console.log(formData);

		regFormDataSchema
			.validate(formData, { abortEarly: false })
			.then(() => {
				if (formData.ConfirmPassword !== formData.password)
					console.log("passwords don't match");
				else {
					const { ConfirmPassword, ...regData } = formData;
					console.log("Data is valid:", regData);
					// register here
					mutate(regData);
				}
			})
			.catch((error) => {
				console.log(error.errors.join(", "));
			});
	};

	const textInputProps = {
		placeholderTextColor: "#666",
		style: { ...authStyles.TextInput },
		mode: "outlined",
		outlineColor: "#333",
	};
	const { data: schools, isLoading: schoolsLoading } = useQuery<TSchool[]>({
		queryKey: ["schools"],
		queryFn: getSchools,
		// refetchOnWindowFocus: false,
		// enabled: false,
	});

	console.log(schools);

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

			{schoolsLoading && (
				<View style={{ paddingVertical: 10 }}>
					<ActivityIndicator size={"small"} />
				</View>
			)}
			{schools && schools.length > 0 && (
				<Menu
					// style={{ width: "80%" }}
					visible={selcteVisisblr}
					onDismiss={closeMenu}
					anchor={
						<Pressable
							onPress={openMenu}
							style={{
								alignItems: "flex-start",
								width: "100%",
								marginTop: 15,
								borderRadius: 5,
								backgroundColor: brandColor.bg,
								borderColor: "#333",

								borderWidth: 1,
							}}
						>
							<Text
								style={{ color: "#ddd", paddingVertical: 12, paddingStart: 15 }}
							>
								{schools?.find(
									({ school_acronym }) => formData.school == school_acronym
								)?.name || "Select your University"}
							</Text>
						</Pressable>
					}
				>
					{schools?.map((item, i) => (
						<Menu.Item
							key={i}
							onPress={() => {
								setFormData((prev) => ({
									...prev,
									school: item.school_acronym,
								}));
								closeMenu();
							}}
							title={item.name}
						/>
					))}
				</Menu>
			)}
			<TouchableRipple>
				<Button
					style={authStyles.button}
					mode="contained"
					onPress={handleSubmit}
					textColor="#ccc"
					loading={isLoading}
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
					loading={false}
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
