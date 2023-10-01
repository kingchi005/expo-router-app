import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs, router } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { View, Text, customStyles } from "../../components/Themed";
import Home from "../../components/(home)/home";

import Colors, { brandColor } from "../../constants/Colors";
import { Appbar, Avatar, FAB } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerActions } from "@react-navigation/native";

const TopBarNav = createMaterialTopTabNavigator();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout({}) {
	const [active, setActive] = useState("");
	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header
				theme={{ dark: true }}
				style={[{ backgroundColor: brandColor.bg }]}
			>
				<Appbar.Action icon="menu" onPress={() => DrawerActions.openDrawer()} />

				<TouchableOpacity
					onPress={() => {
						console.log("sidebar");
					}}
				>
					<Avatar.Image
						size={30}
						style={{ marginHorizontal: 15 }}
						source={require("../../assets/images/avataaars.svg")}
					/>
				</TouchableOpacity>
				<Appbar.Content
					titleStyle={[{ fontWeight: "bold", color: brandColor.app }]}
					theme={{ dark: true }}
					title={"Home"}
				/>
				<Appbar.Action
					icon={"bell"}
					color="#ccc"
					onPress={() => {
						router.push("/Notifications");
					}}
				/>
			</Appbar.Header>

			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="message" />
				<Stack.Screen name="index" />
			</Stack>
			<FAB
				animated
				onPress={() => router.push("/CreatePost")}
				icon="plus"
				size="small"
				style={[
					{ backgroundColor: `${brandColor.app}` },
					{
						margin: 16,
						bottom: 0,
						right: 0,
						position: "absolute",
						borderRadius: 50,
					},
				]}
			/>
		</View>
	);
}
