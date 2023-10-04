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
import { Link, router } from "expo-router";
import Animated from "react-native-reanimated";

type Tprops = {
	name: string;
	school: string;
	time: String;
	text: String;
	btn: number[];
	picture?: string;
	tag?: string;
	polls?: TPoll[];
};

export default function ThreadCard({
	name,
	school,
	text,
	picture,
	time,
	btn,
	tag,
	polls,
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
				<>
					<Link
						style={{ marginVertical: 10 }}
						href={{
							pathname: "/ViewPictureModal/url",
							params: { url: picture },
						}}
						asChild
					>
						<TouchableRipple>
							<Animated.Image
								source={{ uri: `${picture}` }}
								style={{ resizeMode: "contain", width: "100%", height: 380 }}
								sharedTransitionTag="postPicture"
							/>
						</TouchableRipple>
					</Link>
				</>
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
					justifyContent: "space-around",
					padding: 0,
				}}
			>
				<Button
					textColor="#eee"
					icon="heart"
					style={{}}
					onPress={() => console.log("Pressed")}
				>
					<Text>{btn[0]}K</Text>
				</Button>
				<Button
					textColor="#eee"
					icon="chat"
					style={{}}
					onPress={() => router.push("/(modals)/Comments")}
				>
					<Text>{btn[1]}K</Text>
				</Button>
				<Button
					textColor="#eee"
					icon="eye"
					style={{}}
					onPress={() => console.log("Pressed")}
				>
					<Text>{btn[2]}K</Text>
				</Button>
				{/* <Button
					textColor="#eee"
					icon="share"
					style={{ alignSelf: "center" }}
					onPress={() => console.log("Pressed")}
				></Button> */}
				<IconButton
					// color={"#eee"}
					icon="share"
					size={16}
					style={{ alignSelf: "center" }}
					onPress={() => console.log("Pressed")}
				/>
			</View>
		</Pressable>
	);
}
