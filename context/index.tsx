import React, { createContext, FC, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../store";
import { router } from "expo-router";
import { getUserDetails } from "../apiServices/userAccount";

interface AppDataContextProps {
	appName: string;
	apiKey: string;
	userDetails: TUser;
	setUserDetails: React.Dispatch<React.SetStateAction<TUser>>;
	setApiKey: React.Dispatch<React.SetStateAction<string>>;
}

const AppDataContext = createContext<AppDataContextProps>(
	{} as AppDataContextProps
);

export const AppDataContextProvider: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [appName, setAppName] = useState("JIGGY");
	const [apiKey, setApiKey] = useState("");
	const [userDetails, setUserDetails] = useState({} as TUser);

	useEffect(() => {
		AsyncStorage.getItem(STORE_KEYS.API_AUTH_KEY).then((key) => {
			// console.log(key);

			if (!!key) setApiKey(key);
			else router.replace("/auth/");
		});

		return () => {};
	}, []);

	const checkkUserDetails = () => {
		if (apiKey)
			getUserDetails(apiKey).then((data) => {
				console.log(data);

				// if (data) {
				// 	setUserDetails(data);
				// 	AsyncStorage.setItem(STORE_KEYS.USER_DETAILS, data);
				// }
			});
	};
	useEffect(() => {
		checkkUserDetails();
		return () => {};
	}, [apiKey]);

	return (
		<AppDataContext.Provider
			value={{ appName, apiKey, userDetails, setUserDetails, setApiKey }}
		>
			{children}
		</AppDataContext.Provider>
	);
};

export default AppDataContext;
