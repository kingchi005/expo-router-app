import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../components/auth/login";
import Signup from "../../components/auth/signup";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { brandColor } from "../../constants/Colors";
import { Button } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const TopBarNav = createMaterialTopTabNavigator();
export default function index() {
	return (
		<View>
			{/* <NavigationContainer> */}
			<TopBarNav.Navigator
				screenOptions={({ navigation }) => ({
					swipeEnabled: false,
					tabBarActiveTintColor: brandColor.app,
					tabBarInactiveTintColor: brandColor.grey,
					tabBarIndicatorStyle: { backgroundColor: brandColor.app },
					tabBarStyle: { backgroundColor: brandColor.bg },
					tabBarOnPress: ({ route }: any) => {
						navigation.navigate(route.name);
					},
				})}
			>
				<TopBarNav.Screen name="Sign in" component={Login} />
				<TopBarNav.Screen name="SIgn up" component={Signup} />
			</TopBarNav.Navigator>
			{/* </NavigationContainer> */}
		</View>
	);
}

const styles = StyleSheet.create({});