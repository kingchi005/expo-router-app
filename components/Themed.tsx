/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
	Text as DefaultText,
	useColorScheme,
	View as DefaultView,
} from "react-native";

import Colors, { brandColor } from "../constants/Colors";
import { StyleSheet } from "react-native";

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	const theme = useColorScheme() ?? "light";
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return Colors[theme][colorName];
	}
}

export function Text(props: TextProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background"
	);

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const customStyles = StyleSheet.create({
	header: {
		position: "fixed",
		backgroundColor: brandColor.bg,
		top: 0,
		zIndex: 999,
		width: "100%",
	},
});

export const authStyles = StyleSheet.create({
	container: {
		// alignItems: "center",
		paddingHorizontal: 30,
		justifyContent: "center",
		marginTop: 20,
	},
	TextInput: {
		marginTop: 15,
		backgroundColor: brandColor.bg,
	},
	// ---------------------------------------
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	button: {
		// marginBottom: ,
		backgroundColor: brandColor.app,
		borderRadius: 10,
		marginTop: 15,
	},
	WloginWith: { flexDirection: "row", gap: 10 },
	loginWith: {
		paddingVertical: 8,
		paddingHorizontal: 38,
		width: "auto",
		marginVertical: 5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#99a",
	},
	linkText: {
		color: "#6234e1",
	},
	gradientText: {
		color: "transparent",
		backgroundColor: "linear-gradient(130deg,blue,red)",
		backgroundClip: "text",
	},
});
