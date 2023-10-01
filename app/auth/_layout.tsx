import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	Link,
	Stack,
	Tabs,
	router,
	useGlobalSearchParams,
	useLocalSearchParams,
	useRouter,
} from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors, { brandColor } from "../../constants/Colors";
import { Appbar, Avatar, SegmentedButtons } from "react-native-paper";
import { useEffect, useMemo, useState } from "react";
import { View, Text } from "../../components/Themed";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const [value, setValue] = useState<"/auth/signup" | "/auth/">("/auth/");
	const navigation = useGlobalSearchParams();
	const route = useRoute();
	// setValue("");

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header
				style={{
					backgroundColor: brandColor.bg,
					paddingVertical: 10,
					marginVertical: 20,
					justifyContent: "center",
				}}
			>
				<View style={{ alignItems: "center" }}>
					<Text style={{ fontSize: 30, alignItems: "center" }}>JIGGY</Text>
				</View>
			</Appbar.Header>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
			</Stack>
		</View>
	);
}
