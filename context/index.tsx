import React, { createContext, FC, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_KEYS } from "../store";
import { router } from "expo-router";
import { getUserDetails } from "../apiServices/userAccount";

interface AppDataContextProps {
	appName: string;
	apiKey: string;
	userDetails: TUserDetails;
	snackBarVisible: boolean;
	errMsg: string;
	initialiseUserDetails: () => void;
	setSnackBarError: (msg: string) => void;
	setErrMsg: React.Dispatch<React.SetStateAction<string>>;
	setSnackBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
	setUserDetails: React.Dispatch<React.SetStateAction<TUserDetails>>;
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
	const [userDetails, setUserDetails] = useState({} as TUserDetails);
	const [snackBarVisible, setSnackBarVisible] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const setSnackBarError = (msg: string) => {
		setSnackBarVisible(true);
		setErrMsg(msg);
	};

	useEffect(() => {
		AsyncStorage.getItem(STORE_KEYS.API_AUTH_KEY).then((key) => {
			// console.log(key);

			if (!!key) setApiKey(key);
			else router.replace("/auth/");
		});

		return () => {};
	}, []);

	const initialiseUserDetails = () => {
		if (apiKey)
			getUserDetails({ queryKey: ["", apiKey] }).then((data) => {
				console.log("feted used:", data);

				if (data?.id > 0) {
					setUserDetails(data as TUserDetails);
					AsyncStorage.setItem(STORE_KEYS.USER_DETAILS, JSON.stringify(data));
				} else {
					// initialiseUserDetails();
				}
			});
	};
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		initialiseUserDetails();
	// 	}, 1000);
	// 	return () => {};
	// }, [apiKey]);

	return (
		<AppDataContext.Provider
			value={{
				appName,
				apiKey,
				userDetails,
				snackBarVisible,
				errMsg,
				initialiseUserDetails,
				setSnackBarError,
				setErrMsg,
				setSnackBarVisible,
				setUserDetails,
				setApiKey,
			}}
		>
			{children}
		</AppDataContext.Provider>
	);
};

export default AppDataContext;
