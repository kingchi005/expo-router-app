import AsyncStorage from "@react-native-async-storage/async-storage";
import env from "../env";
import { STORE_KEYS } from "../store";
import { TCreatePostSchema } from "../utils/validation";
// const apiKey = "615bda3fd670c2690206ae7f0a4bcd3a039b3ceb";

export const getPostLists = async ({ queryKey }: any) => {
	const [_, apiKey] = queryKey;

	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/annon/posts/`,
			{
				method: "GET",
				headers: {
					Authorization: `Token ${apiKey}`,
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

export const addLike = async ({ queryKey }: any) => {
	const [_, apiKey] = queryKey;
};
export const addComment = async ({ queryKey }: any) => {
	const [_, apiKey] = queryKey;
};
export const addViews = async ({ queryKey }: any) => {
	const [_, apiKey] = queryKey;
};
export const createPost = async ({
	data: formData,
	apiKey,
}: {
	data: TCreatePostSchema;
	apiKey: string;
}) => {
	try {
		const data = new URLSearchParams();
		data.append("content", formData.content);
		data.append("post_type", formData.post_type);
		data.append("images", formData.images!);

		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/annon/posts/create/`,
			{
				method: "POST",
				headers: {
					Authorization: `Token ${apiKey}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `content=${encodeURIComponent(
					formData.content
				)}&post_type=${encodeURIComponent(
					formData.post_type
				)}&images=${encodeURIComponent(formData.images + "")}`,
				credentials: "include",
			}
		);
		return await response.text();
	} catch (error) {
		return error;
	}
};
