import env from "../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../store";

export const getUserDetails = async ({ apiKey }: any) => {
	console.log("from func: ", apiKey);

	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/account/annonyuser/?Authorization=${apiKey}`,
			{
				method: "GET",
				headers: {
					Authorization: `${apiKey}`,
					// "Content-Type": "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
				redirect: "follow",
			}
		);
		return await response.json();
	} catch (error) {
		return error;
	}
};

const getPosts = () => {};
