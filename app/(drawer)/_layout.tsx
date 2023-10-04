import { Drawer } from "expo-router/drawer";
import { Drawer as RNPDrawer } from "react-native-paper";
import { View, Text } from "../../components/Themed";

export default function Layout() {
	return (
		<Drawer screenOptions={{ headerShown: false }}>
			<View></View>
			{/* <Drawer.Screen
				name="home"
				options={{ drawerLabel: "Home", title: "Home" }}
			/>
			<RNPDrawer.Section>
				<RNPDrawer.Item label="Notifications" />
			</RNPDrawer.Section> */}
		</Drawer>
	);
}
