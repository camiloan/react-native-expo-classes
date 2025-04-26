import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGames().then((games) => {
			setGames(games);
		});
	}, []);
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<Text>Hola asdadas adsad</Text>
			{games.map((game) => (
				<View key={game.slug} style={styles.card}>
					<Image
						source={{ uri: game.image }}
						style={{ with: 107, height: 147, borderRadius: 10 }}
					/>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
});
