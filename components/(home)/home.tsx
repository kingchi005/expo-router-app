import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { View, Text } from "../../components/Themed";
import {
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import {
	ActivityIndicator,
	Appbar,
	Avatar,
	Button,
	Divider,
	IconButton,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import ThreadCard from "../../components/threadCard";
import { useQuery } from "@tanstack/react-query";
import { getPostLists } from "../../apiServices/post";
import AppDataContext from "../../context";
import { getUserDetails } from "../../apiServices/userAccount";

export default function Home() {
	const { apiKey, setUserDetails } = useContext(AppDataContext);

	const { data: posts, isLoading } = useQuery<TPost[]>({
		queryKey: ["posts", apiKey],
		queryFn: getPostLists,
		select(data) {
			return data?.filter((d, i) => i < 20);
		},
	});
	const { data: userDetails } = useQuery<TUserDetails>({
		queryKey: ["user_details", apiKey],
		queryFn: getUserDetails,
	});

	if (userDetails) {
		setUserDetails(userDetails);
	}
	return (
		<View style={styles.container}>
			{isLoading && <ActivityIndicator size={"large"} />}
			{!posts &&
				[...Array(4)].map((item) => (
					<View>
						<Text>No posts here</Text>
					</View>
				))}
			{posts && posts.length > 0 && (
				<ScrollView showsHorizontalScrollIndicator={false}>
					{posts.map((e, i) => (
						<View key={i}>
							<ThreadCard {...e} />
							<Divider style={{ marginVertical: 10 }} />
						</View>
					))}
				</ScrollView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingTop: 15,
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
