import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, customStyles } from "../components/Themed";
import { Appbar, Avatar, Button, Divider } from "react-native-paper";
import { router } from "expo-router";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { Ionicons } from "@expo/vector-icons";
import { brandColor } from "../constants/Colors";

export default function Notifications() {
	return (
		<View>
			<Appbar.Header style={[customStyles.header]}>
				<Button onPress={(e) => router.back()} textColor={`${brandColor.app}`}>
					Back
				</Button>
				<Appbar.Content color={`${brandColor.app}`} title="Notifications" />
				<Button
					textColor={`${brandColor.app}`}
					onPress={() => router.push("/auth")}
				>
					Mark as read
				</Button>
				{/* <Appbar.Action
					icon={"mouse"}
					onPress={() => {
						console.log("marked as read");
					}}
				/> */}
			</Appbar.Header>
			<View style={{ marginTop: 60 }}>
				{[...Array(50)].map((item, i) => (
					<View key={i}>
						<View
							style={{
								flexDirection: "row",
								gap: 10,
								paddingVertical: 10,
								backgroundColor: `${i <= 1 ? "#bf232319" : ""}`,
								paddingHorizontal: 10,
							}}
						>
							<Ionicons name="flame" color={"orange"} size={30} />
							<View style={{ flex: 1 }}>
								<Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
									Trending
								</Text>
								<Text style={{ color: "grey" }}>
									Your Post is trending in the Hot section
								</Text>
							</View>
							<View>
								<Text style={{}}>9:56 AM</Text>
							</View>
						</View>
						<Divider />
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
