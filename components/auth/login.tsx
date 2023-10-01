import { Alert, StyleSheet, View } from "react-native";
import React from "react";
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
import { styles } from "../../app/auth";

const placeholholerTextColor = "#666";

export default function Login({ navigation }: any) {
	const textInputProps = {
		placeholderTextColor: placeholholerTextColor,
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

			<TouchableRipple>
				<Button
					style={{ ...styles.button, marginBottom: 10 }}
					onPress={() => router.replace("/(home)/")}
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
					<Text style={{ fontWeight: "bold", ...styles.linkText }}>
						Sign up
					</Text>
				</Link> */}
			</View>
			<View style={{ alignItems: "center", marginTop: 10 }}>
				<Text>By Using this app you agree with the </Text>
				<Text style={styles.linkText}>Terms of Service</Text>
			</View>
		</View>
	);
}
