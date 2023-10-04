module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"expo-router/babel", 'react-native-reanimated/plugin',
		],
		// env: {
		// 	production: {
		// 		plugins: ["react-native-paper/babel", "react-native-reanimated/plugin"],
		// 	},
		// },
	};
};
