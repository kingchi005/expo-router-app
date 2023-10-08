import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import React from "react";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";

export default function WhatsNew() {
	return (
		<View>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => router.back()} />
			</Appbar.Header>
			<Text>WhatsNew screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
