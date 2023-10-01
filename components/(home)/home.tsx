import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";
import {
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import {
	Appbar,
	Avatar,
	Button,
	Divider,
	IconButton,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import ThreadCard from "../../components/threadCard";

export default function Home() {
	const test = [
		{
			name: "Lucy",
			school: "Cape Verde",
			time: "25h",
			text: "fear gather current vegetable team machine identity possibly young among cutting any brush later social bag coast flame gain truck cow excellent plural fall",
			btn: [19.1, 9.45, 44],
		},
		{
			name: "Juan",
			// picture: "https://picsum.photos/750",
			school: "Algeria",
			time: "24h",
			text: "blood control boy struggle steam from point we mine hurt mostly hour wonderful vast crew anywhere couple lion develop congress cattle inside like lungs",
			btn: [22.1, 2.73, 7],
			tag: "confession",
			polls: [
				{ title: "Sure", vote: 34 },
				{ title: "fill", vote: 100 - 34 - 40 },
				{ title: "Very", vote: 40 },
			],
		},
		{
			name: "Lillian",
			school: "Oman",
			time: "13h",
			text: "aboard little stove open near very produce outside oil sport completely vegetable path according life creature about closer familiar advice queen brush sure leader",
			btn: [15.7, 1.1, 86],
		},
		{
			name: "Minnie",
			// picture: "https://picsum.photos/72",
			school: "Myanmar",
			time: "25h",
			text: "eaten moving garage afraid tool grow smell waste strike substance wide person out putting curious prevent remove rising hair daughter curve gently paragraph writer",
			btn: [15.4, 9.16, 74],
			tag: "crush",
		},
		{
			name: "Ryan",
			// picture: "https://picsum.photos/720",
			school: "Guam",
			time: "10h",
			text: "steady goose orange scientist desert dig ought fire fourth planning changing ran increase refer leaving brought individual battle thank day warn coffee wheel extra",
			btn: [5.2, 9.82, 82],
		},
	];
	return (
		<View style={styles.container}>
			<ScrollView showsHorizontalScrollIndicator={false}>
				{test.map((e, i) => (
					<View key={i}>
						<ThreadCard {...e} />
						<Divider style={{ marginVertical: 10 }} />
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
		marginTop: 15,
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
