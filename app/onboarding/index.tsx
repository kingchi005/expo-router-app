import React, { Component, useEffect, useState } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { Text, View } from "../../components/Themed";
import { STORE_KEYS } from "../../store";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";
import { brandColor } from "../../constants/Colors";

export default function OnBoarding() {
	return (
		// <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
		// 	<Text>OnBoarding here</Text>
		// 	<Button
		// 		onPress={async () => {
		// 			try {
		// 				await AsyncStorage.setItem(STORE_KEYS.HAS_ONBOARDED, "true");
		// 				console.log("onboarded");
		// 			} catch (err: any) {
		// 				console.log("Error @setItem", err.message);
		// 			}
		// 		}}
		// 	>
		// 		On board
		// 	</Button>
		// </View>
		<SwiperComponent />
	);
}

function SwiperComponent() {
	return (
		<Swiper
			style={styles.wrapper}
			showsPagination={false}
			showsHorizontalScrollIndicator={false}
			loop={false}
		>
			<View style={styles.slide1}>
				<Text style={styles.text}>Hello Swiper</Text>
				<Button onPress={() => {}}>next</Button>
			</View>
			<View style={styles.slide2}>
				<Text style={styles.text}>Beautiful</Text>
				<Button onPress={() => {}}>next</Button>
			</View>
			<View style={styles.slide3}>
				<Text style={styles.text}>And simple</Text>
				<Button onPress={() => {}}>start</Button>
			</View>
		</Swiper>
	);
}

// AppRegistry.registerComponent('myproject', () => SwiperComponent)

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: brandColor.bg,
	},
	slide2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: brandColor.bg,
	},
	slide3: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: brandColor.bg,
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
});
