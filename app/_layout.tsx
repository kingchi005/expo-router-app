import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View, useColorScheme, Text, AppRegistry } from "react-native";
import { expo } from "../app.json";
import { PaperProvider } from "react-native-paper";
const appName = expo.name;

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<PaperProvider>
				<Stack>
					<Stack.Screen name="auth" options={{ headerShown: false }} />
					<Stack.Screen name="(home)" options={{ headerShown: false }} />
					<Stack.Screen name="Notifications" options={{ headerShown: false }} />

					{/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}

					<Stack.Screen
						name="modal"
						options={{
							presentation: "modal",
							animation: "simple_push",
							animationDuration: 200,
						}}
					/>
					<Stack.Screen
						name="CreatePost"
						options={{
							headerShown: false,
							presentation: "modal",
							animation: "slide_from_bottom",
							animationDuration: 200,
						}}
					/>
				</Stack>
			</PaperProvider>
		</ThemeProvider>
	);
}

AppRegistry.registerComponent(appName, () => RootLayoutNav);
