import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
	return <Stack screenOptions={{ headerShown: false }} />;
}

const styles = StyleSheet.create({});
