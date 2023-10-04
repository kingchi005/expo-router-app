import { View } from "react-native";
import React from "react";
import { Appbar, Card, Divider } from "react-native-paper";
import { brandColor } from "../../../constants/Colors";
import Animated from "react-native-reanimated";
import { router, useLocalSearchParams } from "expo-router";

type Tprop = {
	url: String;
};

export default function Notifications() {
	const { url } = useLocalSearchParams();
	console.log(decodeURIComponent(url + ""));

	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<Appbar.Header
				style={[
					{
						borderBottomWidth: 1,
						borderBottomColor: "#eee",
						backgroundColor: brandColor.bg,
					},
				]}
			>
				<Appbar.BackAction onPress={() => router.back()} />
				<Appbar.Content style={{}} title="Image" />

				<Divider />
			</Appbar.Header>
			<View
				style={{
					backgroundColor: brandColor.bg,
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					// paddingHorizontal: 10,
					// paddingTop: 10,
				}}
			>
				<Animated.Image
					source={{ uri: decodeURIComponent(url + "") }}
					style={{ resizeMode: "contain", width: "100%", height: "100%" }}
					sharedTransitionTag="postPicture"
				/>
			</View>
			<View
				style={{ borderBlockColor: "white", borderWidth: 1, paddingTop: 5 }}
			></View>
		</View>
	);
}
