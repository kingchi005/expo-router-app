import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { Text, customStyles } from "../../components/Themed";
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
import { brandColor } from "../../constants/Colors";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../apiServices/post";
import AppDataContext from "../../context";

type TFormData = {
	content: string;
	headLine: string;
	post_type: string;
	images: string;
};

export default function Notifications() {
	// const [post, setPost] = useState("");
	// const [headLine, setHeadLine] = useState("");
	const [lines, setLines] = useState(30);
	const [btnToggle, setBtnToggle] = useState("question");

	const calculateHeight = () => {
		const lineHeight = 20; // Adjust this value based on your font size and line height
		const lines = Math.ceil(formData.content.length / 40); // Adjust the character count per line as needed
		const minHeight = 40; // Adjust this value as the minimum height you want
		const height = Math.max(minHeight, lines * lineHeight);
		return height;
	};

	const [formData, setFormData] = useState<TFormData>({
		content: "",
		headLine: "",
		post_type: "question",
		images: "",
	});
	const { apiKey } = useContext(AppDataContext);
	const { mutate, isLoading } = useMutation({
		mutationFn: createPost,
		onSuccess: async (data) => {
			console.log(data);
		},
		onError: (err: any) => {
			console.log("rq", err);
		},
	});

	const handlePostCreate = () => {
		console.log(formData);
		const { headLine, ...data } = formData;
		mutate({ data, apiKey });
	};

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header
				style={[
					{
						borderBottomWidth: 1,
						borderBottomColor: "#eee",
						backgroundColor: brandColor.bg,
					},
				]}
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
				<Button textColor={`${brandColor.app}`} onPress={handlePostCreate}>
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
					value={formData.headLine}
					onChangeText={(headLine) =>
						setFormData((prev) => ({ ...prev, headLine }))
					}
				/>
				<KeyboardAvoidingView
					style={{
						flex: 1,
						justifyContent: "center",
						paddingHorizontal: 20,
						backgroundColor: brandColor.bg,
					}}
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
						value={formData.content}
						onChangeText={(content) =>
							setFormData((prev) => ({ ...prev, content }))
						}
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
							<TouchableRipple
								key={i}
								onPress={(content) =>
									setFormData((prev) => ({ ...prev, post_type: item }))
								}
							>
								<Text
									// mode="outlined"
									style={{
										backgroundColor:
											formData.post_type == item
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
											formData.post_type == item
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
