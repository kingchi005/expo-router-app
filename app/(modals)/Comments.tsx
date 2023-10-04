import { View } from "react-native";
import React, { useState } from "react";
import { Text } from "../../components/Themed";
import { Appbar, Divider, IconButton, TextInput } from "react-native-paper";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { brandColor } from "../../constants/Colors";
import CommentCard from "../../components/CommentCard";
import { ScrollView } from "react-native-gesture-handler";
import ThreadCard from "../../components/threadCard";

export default function Notifications() {
	const [headLine, setHeadLine] = useState("");
	const [replyTo, setReplyTo] = useState("");

	const onReplyClick = (to: string) => {
		setReplyTo(to);
	};

	const post = {
		name: "Lillian",
		school: "Oman",
		time: "13h",
		text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
		btn: [15.7, 1.1, 86],
		comment: [
			{
				name: "Michael",
				school: "UNN",
				time: "just now",
				text: "dug off attached secret far extra grade pan anyone make except coach proper enjoy search chapter range worker wrote factor direct view teeth shade",
				likes: 47,
				reply: [
					{
						name: "Steven",
						school: "Oman",
						time: "13h",
						text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
						likes: 24,
					},
					{
						name: "Edith",
						school: "Oman",
						time: "13h",
						text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
						likes: 24,
					},
				],
			},
			{
				name: "Darrell",
				school: "Oman",
				time: "13h",
				text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
				likes: 24,
			},
			{
				name: "Mollie",
				school: "Oman",
				time: "13h",
				text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
				likes: 24,
			},
		],
	};

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
				<Appbar.Content style={{}} title="Comment" />

				<Divider />
			</Appbar.Header>
			<View
				style={{
					backgroundColor: brandColor.bg,
					flex: 1,
					paddingHorizontal: 10,
					paddingTop: 10,
				}}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View>
						<ThreadCard {...post} />
						{post.comment && (
							<View
								style={{
									paddingLeft: 10,
									marginLeft: 10,
									paddingTop: 15,
									marginBottom: 10,
									borderLeftColor: "#ccc",
									borderWidth: 1,
								}}
							>
								{post.comment.map((cm, key) => (
									<View key={key}>
										<CommentCard onReplyClick={onReplyClick} {...cm} />
										{cm.reply && (
											<View
												style={{
													paddingLeft: 10,
													marginLeft: 10,
													paddingVertical: 15,
													borderLeftColor: "#ccc",
													borderWidth: 1,
												}}
											>
												{cm.reply.map((reply, key) => (
													<CommentCard
														onReplyClick={onReplyClick}
														key={key}
														{...reply}
													/>
												))}
											</View>
										)}
									</View>
								))}
							</View>
						)}
					</View>
				</ScrollView>
			</View>
			<View
				style={{ borderBlockColor: "white", borderWidth: 1, paddingTop: 5 }}
			>
				{replyTo && (
					<Text style={{ paddingStart: 10 }}>Replying to @{replyTo + ""}</Text>
				)}
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<TextInput
						placeholder="Comment your thought"
						placeholderTextColor={brandColor.grey}
						mode="flat"
						style={{
							backgroundColor: brandColor.bg,
						}}
						value={headLine}
						onChangeText={setHeadLine}
					/>
					<IconButton
						style={{ backgroundColor: brandColor.app }}
						icon={() => <Ionicons name="send" color={"white"} />}
					/>
				</View>
			</View>
		</View>
	);
}
