import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";

export default function Help() {
	return (
		<View>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => router.replace("/(drawer)/home/")} />
				<Appbar.Content title="Help" />
			</Appbar.Header>
			<Text>Help screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
