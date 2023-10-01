import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Appbar, Avatar } from "react-native-paper";
import Colors, { brandColor } from "../../constants/Colors";
import FUTO from "../../components/(home)/FUTO";
import Hot from "../../components/(home)/Hot";
import Home from "../../components/(home)/home";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const TopBarNav = createMaterialTopTabNavigator();

export default function index() {
	return (
		<View>
			<TopBarNav.Navigator
				screenOptions={{
					swipeEnabled: false,
					tabBarActiveTintColor: brandColor.app,
					tabBarInactiveTintColor: brandColor.grey,
					tabBarIndicatorStyle: { backgroundColor: brandColor.app },
					tabBarAllowFontScaling: true,
					tabBarStyle: { backgroundColor: Colors.dark.background },
					tabBarLabelStyle: { fontWeight: "bold" },
				}}
			>
				<TopBarNav.Screen name="All" component={Home} />
				<TopBarNav.Screen name="FUTO" component={FUTO} />
				<TopBarNav.Screen name="Hot" component={Hot} />
			</TopBarNav.Navigator>
		</View>
	);
}

const styles = StyleSheet.create({});
