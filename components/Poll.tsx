import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "./Themed";
import { View } from "./Themed";
import { List, ProgressBar, TouchableRipple } from "react-native-paper";
import { brandColor } from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export type TPoll = { title: string; vote: number };

export default function Poll({ polls }: { polls: TPoll[] }) {
	return (
		<View style={{ marginVertical: 10 }}>
			<Text style={{ marginBottom: 5 }}>POLL</Text>
			{polls.map((poll, i) => (
				<View key={i}>
					<TouchableOpacity activeOpacity={0.7}>
						<ProgressBar
							style={{
								height: 35,
								marginTop: 5,
								borderRadius: 5,
								position: "relative",
								backgroundColor: "#222",
							}}
							progress={poll.vote / 100}
							color={brandColor.grey + "55"}
							theme={{ dark: true }}
						/>
						<Text
							style={{
								position: "absolute",
								fontSize: 16,
								top: 10,
								left: 5,
								fontWeight: "bold",
							}}
						>
							{poll.title}
						</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({});
