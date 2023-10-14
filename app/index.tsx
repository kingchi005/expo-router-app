import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { ActivityIndicator, Button, Snackbar } from "react-native-paper";
import { Redirect, router } from "expo-router";
import { STORE_KEYS } from "../store";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppDataContext from "../context";

export default function Page() {
	const [viewedOnboarding, setViewedOnboarding] = useState(false);
	const [loading, setLoading] = useState(true);

	const Loading = () => (
		<View>
			<ActivityIndicator size={"large"} />
		</View>
	);
	const checkOnBoarding = async () => {
		try {
			// const value = localStorage.getItem(STORE_KEYS.HAS_ONBOARDED);
			const value = await AsyncStorage.getItem(STORE_KEYS.HAS_ONBOARDED);

			if (value && value == "true") setViewedOnboarding(true);
			console.log(value, "");
		} catch (err: any) {
			console.log("Error @checkingOnBoarding", err.message);
		} finally {
			setLoading(false);
		}
	};

	const { apiKey } = useContext(AppDataContext);

	useEffect(() => {
		checkOnBoarding();
		// console.log(loading, viewedOnboarding, "");
	}, []);

	return (
		<View style={styles.container}>
			{loading ? (
				<Loading />
			) : viewedOnboarding ? (
				apiKey ? (
					<Redirect href={"/(drawer)/home"} />
				) : (
					<Redirect href={"/auth/"} />
				)
			) : (
				<Redirect href={"/onboarding/"} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
