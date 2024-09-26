import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import PokemonCard from "../../components/pokemon/PokemonCard";

export default function HomeScreen() {
  const data = {
    name: "Charm",
    image: require("../../assets/images/p1.jpg"),
    type: "Fire",
    hp: 39,
    moves: ["S", "E"],
    weakness: ["W", "R"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...data} />
        <PokemonCard {...data} />
        <PokemonCard {...data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
