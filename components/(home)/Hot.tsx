import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { View } from "../Themed";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native";
import { getPostLists } from "../../apiServices/post";
import { brandColor } from "../../constants/Colors";
import AppDataContext from "../../context";
import ThreadCard from "../threadCard";
import { Swipeable } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

export default function Hot() {
	const { apiKey } = useContext(AppDataContext);

	const { data: posts, isLoading } = useQuery<TPost[]>({
		queryKey: ["posts", apiKey],
		queryFn: getPostLists,
		select(data) {
			return data.filter((d, i) => d?.user?.school?.school_acronym == "FUTO");
		},
	});

	console.log("posts", posts);

	return (
		<View style={style.container}>
			<Swiper>
				{posts &&
					posts.map((post, i) => (
						<View
							key={i}
							style={[
								{
									backgroundColor:
										brandColor[
											((post?.post_type?.toLocaleLowerCase() || "others") +
												"Card") as keyof typeof brandColor
										] + "25",
									padding: 12,
									borderRadius: 15,
									marginBottom: 15,
								},
							]}
						>
							<ThreadCard {...post} />
						</View>
					))}
			</Swiper>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
});
