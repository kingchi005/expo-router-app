import env from "../env";
import { TLoginFormDataSchema, TRegFormDataSchema } from "../utils/validation";

export const userLogin = async ({ email, password }: TLoginFormDataSchema) => {
	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/account/rest-auth/login/`,
			{
				method: "POST",
				headers: {
					// Authorization: `${}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				credentials: "include",
				body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(
					password
				)}`,
				redirect: "follow",
			}
		);
		return await response.json();
	} catch (error) {
		return error;
	}
};

export const userRegister = async (data: TRegFormDataSchema) => {
	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/account/registration/annoyuser/`,
			{
				method: "POST",
				headers: {
					// Authorization: `${apiKey}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
				redirect: "follow",
			}
		);
		return await response.json();
	} catch (error) {
		return error;
	}
};

export const getSchools = async () => {
	try {
		const response = await fetch(
			`${env.EXPO_PUBLIC_API_SERVICE_URL}/account/registration/annoyuser/`,
			{
				method: "GET",
				headers: {
					// Authorization: `${apiKey}`,
					// "Content-Type": "application/json",
				},
				redirect: "follow",
			}
		);
		return await response.json();
	} catch (error) {
		return error;
	}
};
