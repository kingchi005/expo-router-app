import { API_BASE_URL } from "../constants/data";

export const useLogin = async () => {
	const apiKey = "615bda3fd670c2690206ae7f0a4bcd3a039b3ceb";

	try {
		const response = await fetch(
			`${API_BASE_URL}/account/rest-auth/login/?Authorization=${apiKey}`,
			{
				method: "POST",
				headers: {
					Authorization: `${apiKey}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `email=${encodeURIComponent(
					"kingchi@gmail.com"
				)}&password=${encodeURIComponent("password")}`,
				redirect: "follow",
			}
		);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.log("error", error);
	}
};
