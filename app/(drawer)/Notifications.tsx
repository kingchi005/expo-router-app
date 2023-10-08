import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, customStyles } from "../../components/Themed";
import { Appbar, Avatar, Button, Divider } from "react-native-paper";
import { router } from "expo-router";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { Ionicons } from "@expo/vector-icons";
import { brandColor } from "../../constants/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { getPostLists } from "../../apiServices/post";

export default function Notifications() {
	const [selectedItems, setSelectedItems] = useState<any[]>([]);

	// getPostLists
	const notificationsQuery = useQuery({
		queryKey: ["notifications"],
		queryFn: getPostLists,
	});

	const handleItemLongPress = (itemIndex: any) => {
		const updatedSelectedItems = [...selectedItems];
		const itemIndexInSelected = updatedSelectedItems.indexOf(itemIndex);

		if (itemIndexInSelected > -1) {
			updatedSelectedItems.splice(itemIndexInSelected, 1);
		} else {
			updatedSelectedItems.push(itemIndex);
		}

		setSelectedItems(updatedSelectedItems);
	};

	const handleUnSelect = (itemIndex: any) => {
		const updatedSelectedItems = [...selectedItems];

		const itemIndexInSelected = updatedSelectedItems.indexOf(itemIndex);

		if (selectedItems.includes(itemIndex)) {
			updatedSelectedItems.splice(itemIndexInSelected, 1);
		}
		setSelectedItems(updatedSelectedItems);
	};
	const unreadColor = "#bf232319";
	return (
		<View>
			<Appbar.Header style={[{ backgroundColor: brandColor.bg }]}>
				<Button
					onPress={(e) => router.push("/(drawer)/home/")}
					textColor={`${brandColor.app}`}
				>
					Back
				</Button>
				<Appbar.Content color={`${brandColor.app}`} title="Notifications" />
				<Button
					textColor={`${brandColor.app}`}
					// onPress={() => router.push("")}
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
			<View
				style={{
					backgroundColor: brandColor.bg,
				}}
			>
				<ScrollView>
					{[...Array(50)].map((item, i) => (
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => {
								// handleUnSelect(i);
							}}
							onLongPress={() => {
								// handleItemLongPress(i);
							}}
							key={i}
						>
							<View
								style={{
									flexDirection: "row",
									gap: 10,
									paddingVertical: 10,
									backgroundColor:
										i <= 1
											? unreadColor
											: selectedItems.includes(i)
											? "#00576a8b"
											: "",
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
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
