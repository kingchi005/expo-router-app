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

import Colors from "../../constants/Colors";
import { SegmentedButtons, Text } from "react-native-paper";
import { useEffect, useMemo, useState } from "react";
import { View } from "../../components/Themed";
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
	const [value, setValue] = useState<"/(signup)/signup" | "/(signup)/">(
		"/(signup)/"
	);
	const navigation = useGlobalSearchParams();
	const route = useRoute();
	// setValue();

	return (
		<View style={{ flex: 1 }}>
			<View style={{ marginHorizontal: 30 }}>
				<View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
					<Text style={{ fontSize: 30, alignItems: "center" }}>JIGGY</Text>
				</View>
				<SegmentedButtons
					style={{}}
					density="small"
					value={value}
					onValueChange={(e) => {
						router.push(e as typeof value);
						setValue(e as typeof value);
					}}
					buttons={[
						{
							value: "/(signup)/",
							label: "Sign in",
						},
						{ value: "/(signup)/signup", label: "Sign up" },
					]}
				/>
			</View>

			<Stack screenOptions={{ headerShown: false }}></Stack>
		</View>
	);
}
