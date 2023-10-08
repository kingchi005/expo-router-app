import env from "../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../store";

export const getUserDetails = async (apiKey: string) => {
	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/annon/user/`,
			{
				method: "GET",
				headers: {
					Authorization: `${apiKey}`,
					// "Content-Type": "application/json",
				},
				// redirect: "follow",
			}
		);
		return await response.json();
	} catch (error) {
		return error;
	}
};

const getPosts = () => {};
