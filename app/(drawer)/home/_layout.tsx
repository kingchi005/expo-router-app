import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs, router, useNavigation } from "expo-router";
import { Image, Pressable, useColorScheme } from "react-native";
import { View, Text, customStyles } from "../../../components/Themed";
import Home from "../../../components/(home)/home";

import Colors, { brandColor } from "../../../constants/Colors";
import { Appbar, Avatar, FAB } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
// import { Drawer } from "expo-router/drawer";
import SideBar from "../../../components/SideBar";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import {
	DrawerNavigationProp,
	DrawerToggleButton,
} from "@react-navigation/drawer";
import { DrawerActions, ParamListBase } from "@react-navigation/native";

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
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header
				theme={{ dark: true }}
				style={[{ backgroundColor: brandColor.bg }]}
			>
				{/* <DrawerToggleButton /> */}

				<Pressable
					onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
				>
					<Avatar.Image
						size={30}
						style={{ marginHorizontal: 15 }}
						source={require("../../../assets/images/avataaars.svg")}
					/>
				</Pressable>
				<Appbar.Content
					titleStyle={[{ fontWeight: "bold", color: brandColor.app }]}
					theme={{ dark: true }}
					title={"Home"}
				/>
				{/* <LinearTextGradient
					style={{ fontWeight: "bold", fontSize: 72 }}
					locations={[0, 1]}
					colors={["red", "blue"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					THIS IS TEXT GRADIENT
				</LinearTextGradient> */}
				<Appbar.Action
					icon={() => (
						<Ionicons name="notifications-outline" color={"#ccc"} size={25} />
					)}
					color="#ccc"
					onPress={() => {
						router.push("/(drawer)/Notifications");
					}}
				/>
			</Appbar.Header>

			<Stack
				screenOptions={{
					headerShown: false,
				}}
			></Stack>
			<FAB
				animated
				onPress={() => router.push("/(modals)/CreatePost")}
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
