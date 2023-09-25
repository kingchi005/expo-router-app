import React from "react";
// import { Card, Grid } from "react-native-paper";
// import { format } from "date-fns";
// import { getIncubationByDate, parseDate } from "../context/incubation";
// import { IDismisModal, IIncubation } from "../context/types";
import { useRef } from "react";
// import {
// 	getIncubationState,
// 	setCurrentIncubationData,
// } from "../store/IncubationStore";
// import { getSettingsState } from "../store/settingsStore";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { IIncubation } from "../constants/types";
import { defaultSettings } from "../constants/data";

type DataProp = { dismissModal?: () => void } & {
	item: IIncubation;
	fromHome?: boolean;
};

const ListCard: React.FC<DataProp> = ({
	item,
	dismissModal,
	fromHome,
}): JSX.Element => {
	const theme = defaultSettings;

	const selectData = () => {
		// Handle navigation logic for React Navigation here
		// router.push(`/details/${item.date}`, "root", "replace");
		// dismissModal!();
	};
	return (
		<TouchableOpacity onPress={selectData} style={styles.card}>
			<View style={styles.cardContent}>
				<View style={styles.titleContainer}>
					<Text style={[styles.title, { color: theme.fontColor }]}>
						{item.topic}
					</Text>
					<Text style={styles.date}>
						{/* {format(new Date(item.date), "eee MMM do")} */}
					</Text>
				</View>
				<Text style={[styles.meditation, { color: theme.fontColor }]}>
					Meditation: {item.meditation.text} -{" "}
					<Text style={{ color: `var(--ion-color-step-600)` }}>
						{item.meditation.reference}
					</Text>
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		margin: 10,
		backgroundColor: "#fff",
		borderRadius: 8,
		elevation: 4,
	},
	cardContent: {
		padding: 16,
	},
	titleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	title: {
		fontWeight: "bold",
		textAlign: "left",
		fontSize: 19,
		paddingLeft: 8,
	},
	date: {
		textAlign: "right",
		paddingRight: 8,
	},
	meditation: {
		fontSize: 16,
		textAlign: "left",
		padding: 10,
	},
});

export default ListCard;
