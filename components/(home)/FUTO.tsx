import { Text } from "react-native-paper";
import React, { useContext } from "react";
import { View } from "../Themed";
import { StyleSheet } from "react-native";
import ThreadCard from "../threadCard";
import { brandColor } from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { getPostLists } from "../../apiServices/post";
import AppDataContext from "../../context";
import { useQuery } from "@tanstack/react-query";

// const posts = [
// 	{
// 		name: "king",
// 		school: "UNN",
// 		text: "ksujghvc dnxhjgfcv",
// 		time: "4",
// 		btn: [2, 2.3, 2],
// 		tag: "crush",
// 	},
// 	{
// 		name: "Francis",
// 		school: "UNN",
// 		text: "season ready forgotten symbol wise thee owner teach success last post hill round birthday enter dust pilot temperature buffalo pound grain combine aware line",
// 		time: "3",
// 		btn: [2, 2, 9],
// 		tag: "question",
// 	},
// 	{
// 		name: "Johanna",
// 		school: "UNN",
// 		text: "coming ordinary husband get anything work large coach empty detail progress getting made root spell weather seed exist bowl truck topic town company industry",
// 		time: "10",
// 		btn: [7, 5, 3],
// 		tag: "confession",
// 	},
// 	{
// 		name: "Ivan",
// 		school: "UNN",
// 		text: "fence report prepare dish folks driven parent aid dry smooth arrive tag wooden for question our plant practice onto beauty bare few sat eager",
// 		time: "10",
// 		btn: [6, 6, 7],
// 		tag: "crush",
// 	},
// ];

export default function FUTO() {
	const { apiKey } = useContext(AppDataContext);

	const {
		data: posts,
		isLoading,
		error,
	} = useQuery<TPost[]>({
		queryKey: ["posts", apiKey],
		queryFn: getPostLists,
		select(data) {
			return data?.filter((d, i) => d?.user?.school?.school_acronym == "FUTO");
		},
	});

	console.log("posts", posts);
	// console.log(error);

	return (
		<View style={style.container}>
			<ScrollView showsHorizontalScrollIndicator={false}>
				{posts &&
					posts.length > 0 &&
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
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
});
