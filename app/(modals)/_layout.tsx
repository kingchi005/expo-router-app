import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="CreatePost"
				options={{ presentation: "modal", animation: "slide_from_bottom" }}
			/>
			<Stack.Screen
				name="ViewPictureModal/[url]"
				options={{ presentation: "modal", animation: "fade" }}
			/>
			<Stack.Screen
				name="Comments"
				options={{ presentation: "modal", animation: "slide_from_bottom" }}
			/>
		</Stack>
	);
}
