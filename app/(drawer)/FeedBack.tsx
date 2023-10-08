import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../../components/Themed";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function FeedBack() {
	return (
		<View>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => router.push("/(drawer)/home/")} />
			</Appbar.Header>
			<Text>FeedBack screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
