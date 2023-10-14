import { Drawer } from "expo-router/drawer";
import {
	Avatar,
	Button,
	Divider,
	List,
	Drawer as RNPDrawer,
} from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { router } from "expo-router";
import { brandColor } from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../../store";
import { useContext } from "react";
import AppDataContext from "../../context";
import { getUserDetails } from "../../apiServices/userAccount";
import { useQuery } from "@tanstack/react-query";

import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Layout() {
	const { setApiKey, apiKey, setUserDetails, userDetails } =
		useContext(AppDataContext);
	const logoutUser = () => {
		AsyncStorage.removeItem(STORE_KEYS.API_AUTH_KEY).then(() => {
			setApiKey("");
			router.replace("/auth/");
		});
	};

	// const { data: userDetails } = useQuery<TUserDetails>({
	// 	queryKey: ["user_details", apiKey],
	// 	queryFn: getUserDetails,
	// });

	// if (userDetails) {
	// 	setUserDetails(userDetails);
	// }

	// console.log(userDetails, apiKey);

	return (
		<Drawer
			screenOptions={{ headerShown: false }}
			drawerContent={({ navigation }) => (
				<View
					style={{
						backgroundColor: brandColor.bg,
						flex: 1,
					}}
				>
					<View style={{ alignItems: "center", marginVertical: 10 }}>
						<Text style={{ fontSize: 30 }}>Jiggy</Text>
					</View>
					<View style={{ alignItems: "center", marginTop: 30 }}>
						<Avatar.Image
							size={90}
							source={{ uri: "https://picsum.photos/750" }}
						/>
						<Text style={{ fontSize: 20, marginVertical: 10 }}>
							{userDetails && userDetails?.user?.generated_username}
						</Text>
					</View>
					<View style={{ marginStart: 20, marginTop: 20, flex: 1 }}>
						{/* <List.Item
							title="Notification"
							onPress={() => router.push("/Notifications")}
						/> */}
						{/* <Drawer.Screen
							name="Notifications"
							options={{ drawerLabel: "Home", title: "Home" }}
						/> */}

						<Divider />
						<List.Item
							title="Feedback"
							onPress={() => navigation.navigate("FeedBack")}
						/>
						<Divider />
						<List.Item
							title="What's new"
							onPress={() => router.push("/WhatsNew")}
						/>
						<Divider />
						<List.Item
							title="Help"
							onPress={() => navigation.navigate("Help")}
						/>
						<Divider />
					</View>
					<View
						style={{
							justifyContent: "flex-end",
							alignItems: "center",
							marginBottom: 20,
						}}
					>
						<Button mode="text" onPress={logoutUser}>
							Logout
						</Button>
					</View>
				</View>
			)}
		>
			<View></View>
			{/* <Drawer.Screen
				name="home"
				options={{ drawerLabel: "Home", title: "Home" }}
			/>
			<RNPDrawer.Section>
				<RNPDrawer.Item label="Notifications" />
			</RNPDrawer.Section> */}
		</Drawer>
	);
}
