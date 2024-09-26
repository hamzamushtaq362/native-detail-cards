import { StyleSheet, Text, View, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves {moves?.join(", ")}</Text>
      </View>

      <View>
        <Text>Weakness {weakness?.join(", ")}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  name: { fontSize: 30, fontWeight: "bold" },
  hp: {},
  image: {
    width: "100%",
    height: 200,
  },
});
