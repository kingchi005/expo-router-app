import React, { Component, useEffect, useRef, useState } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { Text, View } from "../../components/Themed";
import { STORE_KEYS } from "../../store";
import { Appbar, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";
import { brandColor } from "../../constants/Colors";
import { Link, router } from "expo-router";

export default function OnBoarding() {
	const [index, setIndex] = useState(0);
	const swiperRef = useRef<Swiper>(null);

	const nextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.scrollBy(1, true);
		}
	};
	return (
		<>
			<Appbar.Header style={{ backgroundColor: brandColor.bg }}>
				<></>
			</Appbar.Header>

			<Swiper
				ref={swiperRef}
				snapToAlignment="center"
				style={styles.wrapper}
				showsPagination={false}
				showsHorizontalScrollIndicator={false}
				loop={false}
			>
				<SlideOne nextAction={nextSlide} />
				<SlideTwo />
			</Swiper>
		</>
	);
}

// AppRegistry.registerComponent('myproject', () => SwiperComponent)

const styles = StyleSheet.create({
	wrapper: {},
	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: brandColor.bg,
		paddingHorizontal: 20,
	},
	text: {
		color: "#fff",
		fontSize: 20,
		textAlign: "center",
		// paddingHorizontal: 25,
	},
});

function SlideOne({ nextAction }: any) {
	return (
		<View style={styles.slide}>
			<Animated.Image
				style={{
					resizeMode: "contain",
					width: "100%",
					height: 300,
					marginBottom: 50,
				}}
				source={require("../../assets/images/onboarding1.png")}
			/>
			<Text style={styles.text}>
				Join a community of users that value privacy and self - expression
			</Text>
			<View
				style={{
					marginBottom: 50,
					width: "100%",
					alignItems: "center",
					backgroundColor: brandColor.bg,
				}}
			>
				<Button
					mode="contained"
					style={{ width: "80%", borderRadius: 10, marginTop: 150 }}
					buttonColor={brandColor.grad1}
					textColor={"#eee"}
					onPress={nextAction}
				>
					NEXT
				</Button>
				<View
					style={{
						flexDirection: "row",
						marginTop: 20,
						gap: 10,
					}}
				>
					<Text>Already have an account?</Text>
					<Link href={"/auth/"} style={{ color: brandColor.grad2 }}>
						Sign in
					</Link>
				</View>
			</View>
		</View>
	);
}

function SlideTwo() {
	return (
		<View style={[styles.slide, { backgroundColor: "#000" }]}>
			<Animated.Image
				style={{
					resizeMode: "contain",
					width: "100%",
					height: 450,
					// marginBottom: 50,
				}}
				source={require("../../assets/images/onboarding2.png")}
			/>
			{/* <Text style={styles.text}>
				Join a community of users that value privacy and self - expression
			</Text> */}
			<View style={{ marginBottom: 50, width: "100%", alignItems: "center" }}>
				<Button
					mode="contained"
					style={{ width: "80%", borderRadius: 10, marginTop: 100 }}
					buttonColor={brandColor.grad1}
					textColor={"#eee"}
					onPress={async () => {
						await AsyncStorage.setItem(STORE_KEYS.HAS_ONBOARDED, "true");

						router.replace("/auth/");
					}}
				>
					GET STARTED
				</Button>
				<View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
					<Text>Already have an account?</Text>
					<Link href={"/auth/"} style={{ color: brandColor.grad2 }}>
						Sign in
					</Link>
				</View>
			</View>
		</View>
	);
}
