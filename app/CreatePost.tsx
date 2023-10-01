import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, customStyles } from "../components/Themed";
import {
	Appbar,
	Avatar,
	Button,
	Chip,
	Divider,
	IconButton,
	TextInput,
	ToggleButton,
	TouchableRipple,
} from "react-native-paper";
import { router } from "expo-router";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { Ionicons } from "@expo/vector-icons";
import { brandColor } from "../constants/Colors";

export default function Notifications() {
	const [post, setPost] = useState("");
	const [headLine, setHeadLine] = useState("");
	const [lines, setLines] = useState(30);
	const [btnToggle, setBtnToggle] = useState("question");

	const calculateHeight = () => {
		const lineHeight = 20; // Adjust this value based on your font size and line height
		const lines = Math.ceil(post.length / 40); // Adjust the character count per line as needed
		const minHeight = 40; // Adjust this value as the minimum height you want
		const height = Math.max(minHeight, lines * lineHeight);
		return height;
	};

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header
				style={[{ borderBottomWidth: 1, borderBottomColor: "#eee" }]}
			>
				<IconButton
					icon={"close"}
					containerColor={`${brandColor.app}`}
					iconColor="#222"
					size={15}
					style={{ marginEnd: 20 }}
					onPress={(e) => router.back()}
				/>
				<Appbar.Content style={{}} title="Create Post" />
				<Button
					textColor={`${brandColor.app}`}
					onPress={() => router.push("/auth")}
				>
					Post
				</Button>
				<Divider />
			</Appbar.Header>
			<View style={{ flex: 1 }}>
				<TextInput
					placeholder="Headline {Optional} "
					placeholderTextColor={brandColor.grey}
					mode="flat"
					style={{
						backgroundColor: brandColor.bg,
					}}
					value={headLine}
					onChangeText={setHeadLine}
				/>
				<KeyboardAvoidingView
					style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
				>
					<TextInput
						multiline
						placeholder=" Secret crush ? Confession ? Share what's on your mind "
						placeholderTextColor={brandColor.grey}
						mode="flat"
						style={{
							backgroundColor: brandColor.bg,
							flex: 1,
						}}
						value={post}
						onChangeText={setPost}
					/>
				</KeyboardAvoidingView>
				<View
					style={{
						flexDirection: "row",
						gap: 5,
						marginTop: 10,
						justifyContent: "space-around",
					}}
				>
					{["question", "confession", "crush", "dm me", "advise"].map(
						(item, i) => (
							<TouchableRipple key={i} onPress={() => setBtnToggle(item)}>
								<Text
									// mode="outlined"
									style={{
										backgroundColor:
											btnToggle == item
												? brandColor[item as keyof typeof brandColor] || "#fff"
												: brandColor.bg,
										borderRadius: 30,
										paddingVertical: 3,
										marginBottom: 10,
										paddingHorizontal: 10,
										fontSize: 12,
										borderWidth: 1,
										borderColor: brandColor[item as keyof typeof brandColor],
										color:
											btnToggle == item
												? "#eee"
												: brandColor[item as keyof typeof brandColor],
									}}
								>
									{item.toLocaleUpperCase()}
								</Text>
							</TouchableRipple>
						)
					)}
				</View>
				<ToggleButton.Row
					onValueChange={(btnToggle) => setBtnToggle(btnToggle)}
					value={btnToggle}
				>
					{
						// ["question", "confession", "crush", "dm me", "advise"].map(
						// 	(item) => (
						// 	)
						// )
					}
				</ToggleButton.Row>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
