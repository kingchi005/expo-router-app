import { Pressable, TouchableNativeFeedback, View } from "react-native";
import React, { useState } from "react";
import {
	Avatar,
	IconButton,
	Text,
	Button,
	Divider,
	Card,
	Menu,
	Chip,
	TouchableRipple,
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { brandColor } from "../constants/Colors";
import Poll, { TPoll } from "./Poll";
import { router } from "expo-router";

type Tprops = {
	name: string;
	school: string;
	time: String;
	text: String;
	likes: number;
	picture?: string;
	tag?: string;
	polls?: TPoll[];
	onReplyClick: (to: string) => void;
};

export default function CommentCard({
	name,
	school,
	text,
	picture,
	time,
	likes,
	tag,
	polls,
	onReplyClick,
}: Tprops) {
	const [menuVisible, setMenuVisible] = useState(false);
	const openMenu = () => setMenuVisible(true);
	const closeMenu = () => setMenuVisible(false);

	return (
		<Pressable
			onPress={() => {
				setMenuVisible(false);
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 5,
				}}
			>
				<View style={{ flexDirection: "row", gap: 5 }}>
					<Avatar.Image
						size={20}
						source={require("../assets/images/avataaars.svg")}
					/>
					<Text>{name} </Text>
					<Text style={{ color: "#777" }}>{school}</Text>
					<Text style={{ color: "#777", marginStart: 8 }}>{time}</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						gap: 5,
					}}
				>
					<Menu
						visible={menuVisible}
						onDismiss={closeMenu}
						anchor={
							<IconButton
								onPress={openMenu}
								icon="dots-vertical"
								style={{ marginTop: -13 }}
								iconColor="#777"
							/>
						}
						contentStyle={{
							backgroundColor: brandColor.bg,
							borderColor: "#222",
							borderWidth: 1,
						}}
					>
						<View style={{ paddingHorizontal: 5 }}>
							<Menu.Item onPress={closeMenu} title="Dm" />
							<Divider style={{ borderWidth: 1 }} />
							<Menu.Item onPress={closeMenu} title="Report account" />
						</View>
					</Menu>
				</View>
			</View>
			<View style={{ flexDirection: "row" }}>
				{tag && (
					<Text
						style={{
							backgroundColor: brandColor[tag as keyof typeof brandColor],
							borderRadius: 30,
							paddingVertical: 1,
							paddingHorizontal: 10,
							marginBottom: 5,
							fontSize: 12,
							borderWidth: 1,
							borderColor: brandColor[tag as keyof typeof brandColor],
							color: "#eee",
						}}
					>
						{tag.toUpperCase()}
					</Text>
				)}
			</View>
			<Text style={{}}>{text}</Text>
			{picture && (
				<Card.Cover
					source={{ uri: `${picture}` }}
					style={{ borderRadius: 0, marginVertical: 10 }}
				></Card.Cover>
			)}
			{polls && (
				<>
					<Poll polls={polls} />
					<View style={{ flexDirection: "row" }}>
						<View style={{ flex: 1 }} />
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => console.log("skipped voting")}
						>
							<Button mode="outlined" style={{}}>
								Skip Voting
							</Button>
						</TouchableOpacity>
					</View>
				</>
			)}
			<View
				style={{
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "flex-end",
					padding: 0,
				}}
			>
				<Button
					textColor="#eee"
					icon={() => (
						<Ionicons name="md-flame-outline" color={"#eee"} size={17} />
					)}
					style={{}}
					onPress={() => console.log("like")}
				>
					<Text>{likes}K</Text>
				</Button>

				<Button
					// color={"#eee"}
					icon="share"
					style={{ alignSelf: "center" }}
					onPress={() => onReplyClick(name)}
				>
					Reply
				</Button>
			</View>
		</Pressable>
	);
}
